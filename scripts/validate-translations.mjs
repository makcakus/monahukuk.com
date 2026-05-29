#!/usr/bin/env node
/**
 * Çeviri tutarlılık scripti — TR merkezli kontrol.
 *
 * Mantık:
 *   - TR makalelerini tarar, her birinin `translationKey` alanını okur.
 *   - Her translationKey için EN/DE/RU klasörlerinde aynı key.mdx var mı kontrol eder.
 *   - Eksik olanları raporlar.
 *
 * Çıktı:
 *   ✗ [EN EKSİK] translationKey: ...
 *   ✓ Tamam: ... (tr/en/de/ru hepsi var)
 *   ...
 *   ÖZET:
 *   Toplam: N makale
 *   Eksiksiz: M
 *   EN eksik: X
 *   DE eksik: Y
 *   RU eksik: Z
 *
 * Exit code:
 *   0 — tüm çeviriler tamamsa
 *   1 — en az bir eksik varsa (CI build fail için)
 *
 * Kullanım:
 *   node scripts/validate-translations.mjs
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

/**
 * Minimalist YAML frontmatter ayrıştırıcı — gray-matter bağımlılığı olmadan.
 * Sadece `key: value` biçimindeki düz alanları okur.
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const yaml = match[1];
  const data = {};
  for (const line of yaml.split(/\r?\n/)) {
    const m = line.match(/^(\w[\w-]*):\s*"?([^"]*)"?\s*$/);
    if (m) data[m[1].trim()] = m[2].trim();
  }
  return data;
}

const CONTENT_DIR = join(process.cwd(), "content", "articles");
const TARGET_LOCALES = ["en", "de", "ru", "ar", "es", "fr"];

// TR makalelerini oku
const trDir = join(CONTENT_DIR, "tr");
const trFiles = readdirSync(trDir).filter(
  (f) => f.endsWith(".mdx") || f.endsWith(".md")
);

// Her locale için mevcut dosyaları Set olarak tut (slug → true)
const localeSlugs = {};
for (const locale of TARGET_LOCALES) {
  const dir = join(CONTENT_DIR, locale);
  if (!existsSync(dir)) {
    localeSlugs[locale] = new Set();
    continue;
  }
  const files = readdirSync(dir).filter(
    (f) => f.endsWith(".mdx") || f.endsWith(".md")
  );
  localeSlugs[locale] = new Set(
    files.map((f) => f.replace(/\.mdx?$/, ""))
  );
}

// Sayaçlar
let total = 0;
let fullyCovered = 0;
const missingCount = Object.fromEntries(TARGET_LOCALES.map((l) => [l, 0]));
const results = [];

for (const file of trFiles) {
  const raw = readFileSync(join(trDir, file), "utf8");
  const data = parseFrontmatter(raw);
  const slug = basename(file).replace(/\.mdx?$/, "");
  const translationKey = (data.translationKey || slug).toString();

  total++;

  const missing = TARGET_LOCALES.filter(
    (locale) => !localeSlugs[locale].has(translationKey)
  );

  if (missing.length === 0) {
    fullyCovered++;
    results.push({ ok: true, key: translationKey });
  } else {
    for (const locale of missing) {
      missingCount[locale]++;
    }
    results.push({ ok: false, key: translationKey, missing });
  }
}

// Çıktı
for (const r of results) {
  if (r.ok) {
    console.log(
      `✓ Tamam: ${r.key} (tr/${TARGET_LOCALES.join("/")} hepsi var)`
    );
  } else {
    for (const locale of r.missing) {
      console.log(
        `✗ [${locale.toUpperCase()} EKSİK] translationKey: ${r.key}`
      );
    }
  }
}

// Özet
const anyMissing = Object.values(missingCount).some((n) => n > 0);

console.log("");
console.log("ÖZET:");
console.log(`Toplam: ${total} makale`);
console.log(`Eksiksiz: ${fullyCovered}`);
for (const locale of TARGET_LOCALES) {
  const count = missingCount[locale];
  console.log(
    `${locale.toUpperCase()} eksik: ${count}${count > 0 ? " ⚠️" : ""}`
  );
}

if (anyMissing) {
  process.exit(1);
} else {
  process.exit(0);
}
