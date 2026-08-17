/**
 * Hızlı, içerik-only deploy yolu: yalnızca değişen/yeni makale MDX
 * dosyalarını ARTICLES_BUCKET'a yükler ve her biri için /api/revalidate-article
 * çağırır. Next.js build'i yok, worker redeploy'u yok — kod değişmediği
 * sürece tam `npm run deploy:full`'a (~20-40 dk) gerek kalmaz.
 *
 * Kapsam: yalnızca content/articles/{locale}/{slug}.mdx render fallback'i.
 * Makale listesi/arama sayfası, sitemap.xml ve legal-news bundan etkilenmez —
 * bunlar hâlâ build-time'da üretiliyor ve bir sonraki tam deploy'a kadar yeni
 * makaleyi göstermez (bkz. C:\Users\avmus\.claude\plans\humble-waddling-graham.md).
 *
 * Kullanım:
 *   node scripts/sync-articles-to-r2.mjs                              # git'te değişmiş/yeni content/articles/*.mdx dosyalarını senkronize eder
 *   node scripts/sync-articles-to-r2.mjs content/articles/tr/x.mdx ... # açıkça verilen dosyaları senkronize eder
 *
 * Ortam değişkenleri (.env.local'den okunur):
 *   REVALIDATE_SECRET   — zorunlu, /api/revalidate-article'ı korur
 *   SYNC_TARGET_URL      — opsiyonel, varsayılan https://monahukuk.com
 *                          (yerel doğrulama için http://localhost:PORT verilir)
 */
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";

const execFileP = promisify(execFile);
const NPX = process.platform === "win32" ? "npx.cmd" : "npx";

function loadEnv() {
  try {
    const raw = readFileSync(".env.local", "utf8");
    const env = {};
    for (const line of raw.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i === -1) continue;
      env[t.slice(0, i).trim()] = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    }
    return env;
  } catch {
    return {};
  }
}

const env = loadEnv();
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || env.REVALIDATE_SECRET;
const SITE_URL =
  process.env.SYNC_TARGET_URL || env.SYNC_TARGET_URL || "https://monahukuk.com";
const BUCKET = "mona-site-articles";
const CONCURRENCY = 6;

if (!REVALIDATE_SECRET) {
  console.error("Eksik env: REVALIDATE_SECRET (.env.local dosyasına ekleyin)");
  process.exit(1);
}

function getChangedArticleFiles() {
  const args = process.argv.slice(2);
  if (args.length > 0) return args;

  const out = execFileSync(
    "git",
    ["status", "--porcelain", "--", "content/articles"],
    { encoding: "utf8" }
  );
  return out
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    // "M path", "A path", "?? path" gibi satırlardan yolu ayıkla; silinenleri atla
    .filter((l) => !l.startsWith("D "))
    .map((l) => l.replace(/^[?!MAR ]{1,2}\s*/, "").trim())
    .filter((p) => p.endsWith(".mdx") || p.endsWith(".md"));
}

// Yalnızca güvenli karakterler — komuta geçmeden önce doğrulanmazsa
// shell:true (Windows'ta npx.cmd spawn'ı için zorunlu, bkz. uploadOne)
// enjeksiyona açık olurdu.
const SAFE_SEGMENT = /^[a-zA-Z0-9._-]+$/;

function parseLocaleSlug(filePath) {
  // content/articles/{locale}/{slug}.mdx
  const rel = path.relative("content/articles", filePath).split(path.sep);
  if (rel.length !== 2) return null;
  const [locale, filename] = rel;
  const slug = filename.replace(/\.mdx?$/, "");
  if (!SAFE_SEGMENT.test(locale) || !SAFE_SEGMENT.test(slug)) return null;
  return { locale, slug, ext: filename.endsWith(".mdx") ? "mdx" : "md" };
}

async function uploadOne(filePath, parsed) {
  if (!SAFE_SEGMENT.test(path.basename(filePath))) {
    throw new Error(`Güvenli olmayan dosya adı: ${filePath}`);
  }
  const key = `${parsed.locale}/${parsed.slug}.${parsed.ext}`;
  const maxAttempts = 5;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await execFileP(
        NPX,
        ["wrangler", "r2", "object", "put", `${BUCKET}/${key}`, "--remote", "--file", filePath],
        { shell: true, maxBuffer: 1024 * 1024 * 20 }
      );
      return;
    } catch (e) {
      if (attempt === maxAttempts) throw e;
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
}

async function revalidateOne(parsed) {
  const res = await fetch(`${SITE_URL}/api/revalidate-article`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${REVALIDATE_SECRET}`,
    },
    body: JSON.stringify({ locale: parsed.locale, slug: parsed.slug }),
  });
  if (!res.ok) {
    throw new Error(`revalidate ${parsed.locale}/${parsed.slug} -> HTTP ${res.status}`);
  }
}

async function main() {
  const files = getChangedArticleFiles().filter((f) => existsSync(f));
  if (files.length === 0) {
    console.log("Senkronize edilecek değişen makale bulunamadı.");
    return;
  }
  console.log(`${files.length} makale ${BUCKET}'a senkronize ediliyor (${SITE_URL})...`);

  const items = files
    .map((f) => ({ filePath: f, parsed: parseLocaleSlug(f) }))
    .filter((x) => {
      if (!x.parsed) {
        console.warn(`Atlanıyor (locale/slug çözümlenemedi): ${x.filePath}`);
        return false;
      }
      return true;
    });

  let idx = 0;
  let failed = 0;
  const queue = items.slice();
  async function worker() {
    while (queue.length) {
      const { filePath, parsed } = queue.shift();
      idx++;
      try {
        await uploadOne(filePath, parsed);
        await revalidateOne(parsed);
        console.log(`[${idx}/${items.length}] OK ${parsed.locale}/${parsed.slug}`);
      } catch (e) {
        failed++;
        console.error(`[${idx}/${items.length}] FAILED ${filePath}:`, e.stderr || e.message || e);
      }
    }
  }

  const t0 = Date.now();
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  const seconds = ((Date.now() - t0) / 1000).toFixed(1);

  console.log(`Bitti. ${items.length - failed}/${items.length} başarılı, ${failed} başarısız. (${seconds}s)`);
  if (failed > 0) process.exit(1);
}

main();
