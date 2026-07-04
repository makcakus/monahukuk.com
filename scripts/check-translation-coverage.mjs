#!/usr/bin/env node
/**
 * Çoklu-dil makale çeviri tutarlılığı kontrolü.
 *
 * Mantık:
 *   - Her dilin makale slug listesi okunur.
 *   - "Kanonik" eşleştirme: her dilde aynı slug → aynı içeriğin çevirisi sayılır.
 *     (Slug'lar dilden dile değişebilir; bu yüzden frontmatter'a opsiyonel
 *     `translationKey: "..."` eklendiğinde script onu da kullanır — eşleştirmeyi
 *     slug yerine bu key üzerinden yapar.)
 *   - Eksik dilleri rapor eder.
 *
 * Çıktı:
 *   - Konsol özeti
 *   - `translation-coverage.md` markdown raporu
 *
 * Kullanım:
 *   node scripts/check-translation-coverage.mjs
 *
 * Exit code:
 *   0 — her makale her dilde mevcut
 *   1 — eksiklik var (CI'da fail edilebilir; default davranış: WARN)
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"];
const CONTENT_DIR = join(process.cwd(), "content", "articles");
const STRICT = process.argv.includes("--strict");

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
    const { data } = matter(raw);
    const slug = (data.slug || f.replace(/\.mdx?$/, "")).toString();
    return {
      file: f,
      slug,
      title: data.title || slug,
      // Kanonik eşleştirme key'i; verilmezse slug fallback olur.
      key: (data.translationKey || slug).toString(),
      category: data.category || "",
    };
  });
}

const byLocale = Object.fromEntries(LOCALES.map((l) => [l, loadArticles(l)]));

// key → Map<locale, article>
const byKey = new Map();
for (const locale of LOCALES) {
  for (const a of byLocale[locale]) {
    if (!byKey.has(a.key)) byKey.set(a.key, new Map());
    byKey.get(a.key).set(locale, a);
  }
}

// Rapor
const lines = [];
lines.push("# Çeviri Kapsam Raporu");
lines.push("");
const totals = LOCALES.map((l) => `${l.toUpperCase()}: ${byLocale[l].length}`).join(" · ");
lines.push(`Makale sayıları → ${totals}`);
lines.push(`Benzersiz çeviri key'i: **${byKey.size}**`);
lines.push("");
lines.push("Eşleştirme yöntemi: frontmatter.translationKey > frontmatter.slug.");
lines.push("");

// Her locale için eksikleri grupla
const missing = Object.fromEntries(LOCALES.map((l) => [l, []]));
let fullCoverage = 0;
let partial = 0;

for (const [key, map] of byKey.entries()) {
  if (map.size === LOCALES.length) {
    fullCoverage++;
    continue;
  }
  partial++;
  const present = LOCALES.filter((l) => map.has(l));
  const absent = LOCALES.filter((l) => !map.has(l));
  // Referans olarak ilk var olan dil
  const ref = map.get(present[0]);
  for (const a of absent) {
    missing[a].push({ key, refTitle: ref.title, refLocale: present[0], present });
  }
}

lines.push(`✅ Tüm dillerde mevcut: **${fullCoverage}** içerik`);
lines.push(`⚠️  Eksik çeviri: **${partial}** içerik`);
lines.push("");

for (const locale of LOCALES) {
  const list = missing[locale];
  if (list.length === 0) {
    lines.push(`## ${locale.toUpperCase()} — eksik yok ✅`);
    lines.push("");
    continue;
  }
  lines.push(`## ${locale.toUpperCase()} — ${list.length} eksik içerik`);
  lines.push("");
  for (const item of list) {
    lines.push(
      `- \`${item.key}\` — ${item.refTitle}  \n  _kaynak:_ ${item.refLocale} · _mevcut diller:_ ${item.present.join(", ")}`
    );
  }
  lines.push("");
}

const outPath = join(process.cwd(), "translation-coverage.md");
writeFileSync(outPath, lines.join("\n"), "utf8");

// Konsol özeti
console.log("\n──────────────────────────────────");
for (const l of LOCALES) {
  const have = byLocale[l].length;
  const missCount = missing[l].length;
  const flag = missCount === 0 ? "✅" : "⚠️ ";
  console.log(`${flag}  ${l.toUpperCase()}: ${have} mevcut, ${missCount} eksik`);
}
console.log("──────────────────────────────────");
console.log(`Rapor: ${outPath.replace(process.cwd(), ".")}\n`);

if (STRICT && partial > 0) {
  console.error("🔴 --strict modu açık ve eksiklik var. Exit 1.");
  process.exit(1);
}
