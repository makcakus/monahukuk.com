#!/usr/bin/env node
/**
 * Mevcut makaleler arasında iç link önerileri üretir.
 *
 * Algoritma:
 *   1. Her makaleyi oku, başlığını "anahtar terimler"e indirge (4+ harfli, stopword'süz).
 *   2. Her makaleyi gezerken, GÖVDEDE diğer makalelerin başlık-terimlerinin geçtiği
 *      yerleri ara.
 *   3. Skor:  + her ortak terim için 1 puan
 *             + hedefin tam başlığı / başlığa yakın bir cümle geçerse +5
 *             + aynı kategori ise +1
 *   4. Halihazırda markdown link içeren satırları "ZATEN LİNKLİ" olarak işaretle.
 *   5. Sonucu `internal-link-suggestions/{locale}.md` dosyasına yaz.
 *
 * OTOMATİK DEĞİŞTİRME YAPMAZ — yalnızca rapor üretir; kararı insan verir.
 *
 * Kullanım:
 *   node scripts/suggest-internal-links.mjs              # tüm diller
 *   node scripts/suggest-internal-links.mjs tr           # sadece TR
 *   node scripts/suggest-internal-links.mjs tr en        # birden fazla
 */

import {
  readFileSync,
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const ALL_LOCALES = ["tr", "en", "de", "ru", "ar"];
const args = process.argv.slice(2);
const LOCALES = args.length ? args.filter((l) => ALL_LOCALES.includes(l)) : ALL_LOCALES;
const CONTENT_DIR = join(process.cwd(), "content", "articles");
const OUT_DIR = join(process.cwd(), "internal-link-suggestions");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const STOP = new Set([
  // TR
  "için", "ile", "olan", "olarak", "nasıl", "nedir", "ancak", "fakat", "ama",
  "veya", "bir", "bu", "şu", "her", "bütün", "tüm", "kendi", "daha", "çok",
  "hem", "kim", "ne", "neden", "niçin", "ya", "ki", "de", "da", "mı", "mi",
  "mu", "mü", "var", "yok", "olur", "olduğu", "olan", "olduğunu", "olduğundan",
  "edilir", "edilen", "yapılır", "yapılan", "üzere", "kadar", "göre", "ilgili",
  "hakkında", "diğer", "başka", "aynı", "yeni", "eski", "büyük", "küçük",
  "hukuk", "hukuku", "kanun", "madde", "fıkra",
  // EN
  "the", "and", "for", "with", "from", "this", "that", "these", "those",
  "what", "which", "when", "where", "while", "would", "could", "should",
  "have", "has", "had", "been", "being", "into", "your", "their", "them",
  "they", "there", "than", "then", "such", "law", "legal", "article", "guide",
  "turkey", "turkish",
  // DE
  "und", "oder", "der", "die", "das", "den", "dem", "ein", "eine", "einer",
  "auf", "aus", "bei", "mit", "nach", "von", "zur", "zum", "wird", "werden",
  "ist", "sind", "wenn", "dass", "auch", "noch", "nicht", "recht", "gesetz",
  // RU
  "или", "что", "как", "при", "для", "это", "том", "тем", "так", "его", "ему",
  "был", "быть", "если", "право", "закон",
  // AR
  "في", "من", "إلى", "على", "عن", "هذا", "هذه", "ذلك", "تلك", "كان", "أن",
  "كل", "لا", "ما", "لم", "قانون",
]);

function tokens(s) {
  return s
    .toLowerCase()
    .replace(/[^a-zçğıöşüа-яёء-ي\s]/giu, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOP.has(w));
}

function loadArticles(locale) {
  const dir = join(CONTENT_DIR, locale);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
  return files.map((f) => {
    const raw = readFileSync(join(dir, f), "utf8");
    const { data, content } = matter(raw);
    const slug = (data.slug || f.replace(/\.mdx?$/, "")).toString();
    return {
      slug,
      title: data.title || slug,
      category: data.category || "",
      relatedSlugs: Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [],
      body: content,
      bodyLower: content.toLowerCase(),
      titleTokens: new Set(tokens(data.title || slug)),
    };
  });
}

function alreadyLinked(body, slug) {
  // Mevcut markdown link içinde geçiyor mu?  /articles/{slug}
  return new RegExp(`\\(/[a-z]{2}/articles/${slug.replace(/[-]/g, "\\-")}\\)`, "i").test(
    body
  ) || new RegExp(`\\]\\(/articles/${slug.replace(/[-]/g, "\\-")}\\)`, "i").test(body);
}

function score(source, target) {
  if (source.slug === target.slug) return null;

  // Hedefin başlık-token'ları kaynağın gövdesinde kaç kez geçiyor?
  let common = 0;
  const matched = [];
  for (const tok of target.titleTokens) {
    const re = new RegExp(`\\b${tok}\\b`, "iu");
    if (re.test(source.bodyLower)) {
      common++;
      matched.push(tok);
    }
  }
  if (common === 0) return null;

  let s = common;
  // Tam başlık ya da uzun bir parçası gövdede mi?
  const lowerTitle = target.title.toLowerCase().replace(/^"|"$/g, "");
  if (
    lowerTitle.length > 12 &&
    source.bodyLower.includes(lowerTitle.slice(0, Math.min(40, lowerTitle.length - 1)))
  ) {
    s += 5;
  }
  // Aynı kategori
  if (source.category && source.category === target.category) s += 1;

  // Halihazırda link verilmiş mi?
  const linked = alreadyLinked(source.body, target.slug);

  return { score: s, matchedTokens: matched, alreadyLinked: linked };
}

function suggestForLocale(locale) {
  const articles = loadArticles(locale);
  if (!articles.length) return null;

  const out = [];
  out.push(`# İç Link Önerileri — ${locale.toUpperCase()}`);
  out.push("");
  out.push(`_Toplam ${articles.length} makale tarandı. Otomatik değişiklik yapılmadı._`);
  out.push("");
  out.push("Skor formülü: `ortak terim sayısı + (tam başlık eşleşmesi: +5) + (aynı kategori: +1)`.");
  out.push("Halihazırda link verilmiş öneriler `[ZATEN LİNKLİ]` olarak işaretlenir.");
  out.push("");

  for (const src of articles) {
    const candidates = [];
    for (const tgt of articles) {
      const s = score(src, tgt);
      if (s) candidates.push({ tgt, ...s });
    }
    candidates.sort((a, b) => b.score - a.score);
    const top = candidates.slice(0, 8);
    if (top.length === 0) continue;

    out.push(`## ${src.title}`);
    out.push(`*slug:* \`${src.slug}\`${src.category ? ` · *kategori:* ${src.category}` : ""}`);
    if (src.relatedSlugs.length) {
      out.push(`*manuel relatedSlugs:* ${src.relatedSlugs.map((s) => `\`${s}\``).join(", ")}`);
    }
    out.push("");
    for (const c of top) {
      const flag = c.alreadyLinked ? " `[ZATEN LİNKLİ]`" : "";
      const tokensList = c.matchedTokens.slice(0, 5).join(", ");
      out.push(
        `- **[${c.score}]** → \`${c.tgt.slug}\` — ${c.tgt.title}${flag}  \n  _ortak:_ ${tokensList}`
      );
    }
    out.push("");
  }

  const path = join(OUT_DIR, `${locale}.md`);
  writeFileSync(path, out.join("\n"), "utf8");

  // Konsol özeti
  return {
    locale,
    articleCount: articles.length,
    path,
  };
}

const summary = LOCALES.map(suggestForLocale).filter(Boolean);

console.log(`\n──────────────────────────────────`);
for (const s of summary) {
  console.log(`${s.locale}: ${s.articleCount} makale → ${s.path.replace(process.cwd() + "\\", "").replace(process.cwd() + "/", "")}`);
}
console.log(`──────────────────────────────────\n`);
console.log("Raporlar oluşturuldu. Önerileri inceleyip uygun olanları:");
console.log("  - MDX gövdesine doğal cümle içinde [text](/articles/slug) olarak ekleyebilir,");
console.log("  - veya frontmatter'a `relatedSlugs: [...]` olarak yazabilirsin.\n");
