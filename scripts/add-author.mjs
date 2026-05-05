#!/usr/bin/env node
/**
 * Tüm makale frontmatter'larına `author: "Av. Mustafa Akcakuş"` ekler.
 * Mevcut author değerleri korunur. UTF-8 BOM-suz yazar.
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DEFAULT_AUTHOR = "Av. Mustafa Akcakuş";
const LOCALES = ["tr", "en", "de", "ru", "ar"];
const CONTENT_DIR = join(process.cwd(), "content", "articles");

let touched = 0;
let alreadyHad = 0;
let total = 0;

for (const locale of LOCALES) {
  const dir = join(CONTENT_DIR, locale);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    continue;
  }

  for (const file of files) {
    total++;
    const full = join(dir, file);
    const raw = readFileSync(full, "utf8");
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) {
      console.warn(`⚠️  Frontmatter yok: ${locale}/${file}`);
      continue;
    }

    const fm = fmMatch[1];
    if (/^author\s*:/m.test(fm)) {
      alreadyHad++;
      continue;
    }

    // slug satırının altına author ekle (yoksa frontmatter'ın sonuna)
    let newFm;
    if (/^slug\s*:.*$/m.test(fm)) {
      newFm = fm.replace(
        /^(slug\s*:.*)$/m,
        `$1\nauthor: "${DEFAULT_AUTHOR}"`
      );
    } else {
      newFm = `${fm}\nauthor: "${DEFAULT_AUTHOR}"`;
    }

    const updated = raw.replace(fmMatch[0], `---\n${newFm}\n---`);
    writeFileSync(full, updated, "utf8");
    touched++;
  }
}

console.log(`\n──────────────────────────────────`);
console.log(`Toplam dosya     : ${total}`);
console.log(`Güncellenen      : ${touched}`);
console.log(`Zaten author'lı  : ${alreadyHad}`);
console.log(`──────────────────────────────────\n`);
