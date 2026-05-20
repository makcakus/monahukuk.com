#!/usr/bin/env node
/**
 * Frontmatter'daki tırnaksız `:` içeren title/description/category değerlerini
 * otomatik olarak çift tırnakla sarar.
 *
 * Kullanım: node scripts/fix-yaml.mjs
 * Vercel build öncesi `prebuild` hook'u olarak çalışır.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const LOCALES   = ["tr", "en", "de", "ru", "ar"];
const FIELDS    = ["title", "description", "category"];
const CONTENT_DIR = join(process.cwd(), "content", "articles");

let fixed = 0;
let scanned = 0;

for (const locale of LOCALES) {
  const dir = join(CONTENT_DIR, locale);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    continue;
  }

  for (const file of files) {
    const full  = join(dir, file);
    const raw   = readFileSync(full, "utf8");
    scanned++;

    // Frontmatter bloğunu bul
    const fmMatch = raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);
    if (!fmMatch) continue;

    const [, open, body, close] = fmMatch;
    const lines   = body.split(/\r?\n/);
    let changed   = false;

    const fixed_lines = lines.map((line) => {
      // Alan: tırnaksız bir değer var mı?
      const m = line.match(/^([a-zA-Z_]+):\s+(.+)$/);
      if (!m) return line;

      const [, key, value] = m;
      if (!FIELDS.includes(key)) return line;

      // Zaten tırnaklı mı?
      if (/^["']/.test(value)) return line;

      // İçinde `: ` veya özel YAML karakteri var mı?
      const needsQuoting = /: |[#\[\]{}|>&*!,]/.test(value) || /^[>|]/.test(value);
      if (!needsQuoting) return line;

      // Değeri tırnakla — içinde çift tırnak varsa escape et
      const escaped = value.replace(/"/g, '\\"');
      changed = true;
      console.log(`  ✏️  [${locale}/${file}]  ${key}: ${value.substring(0, 60)}…`);
      return `${key}: "${escaped}"`;
    });

    if (changed) {
      const newRaw = raw.replace(
        /^(---\r?\n)([\s\S]*?)(\r?\n---)/,
        `${open}${fixed_lines.join("\n")}${close}`
      );
      writeFileSync(full, newRaw, "utf8");
      fixed++;
    }
  }
}

console.log(`\n✅ fix-yaml: ${scanned} dosya tarandı, ${fixed} dosya düzeltildi.`);
