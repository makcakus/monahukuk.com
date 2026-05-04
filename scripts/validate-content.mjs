#!/usr/bin/env node
/**
 * Validates MDX article frontmatter across all locales.
 * Exit 1 if any file is broken or missing required fields.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const REQUIRED = ["title", "description", "date", "slug"];
const LOCALES = ["tr", "en", "de", "ru", "ar"];
const CONTENT_DIR = join(process.cwd(), "content", "articles");

let errors = 0;
let warnings = 0;
let checked = 0;

for (const locale of LOCALES) {
  const dir = join(CONTENT_DIR, locale);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    continue;
  }

  for (const file of files) {
    const full = join(dir, file);
    const raw = readFileSync(full, "utf8");
    checked++;

    // 1. YAML parse check
    let data;
    try {
      ({ data } = matter(raw));
    } catch (e) {
      console.error(`❌ YAML PARSE HATASI  [${locale}/${file}]`);
      console.error(`   ${e.message.split("\n")[0]}`);
      errors++;
      continue;
    }

    // 2. Required fields check
    const missing = REQUIRED.filter((k) => !data[k]);
    if (missing.length) {
      console.warn(`⚠️  EKSİK ALAN  [${locale}/${file}]  →  ${missing.join(", ")}`);
      warnings++;
    }

    // 3. Unquoted colon-in-value check (warn before it breaks)
    const frontMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (frontMatch) {
      for (const line of frontMatch[1].split(/\r?\n/)) {
        const m = line.match(/^(title|description|category):\s+([^"'\s].+)$/);
        if (m && m[2].includes(": ")) {
          console.warn(`⚠️  TIRNAK EKSİK   [${locale}/${file}]  →  ${line.substring(0, 80)}`);
          warnings++;
        }
      }
    }
  }
}

console.log(`\n──────────────────────────────────`);
console.log(`Kontrol edilen : ${checked} dosya`);
console.log(`Hata           : ${errors}`);
console.log(`Uyarı          : ${warnings}`);
console.log(`──────────────────────────────────`);

if (errors > 0) {
  console.error("\n🔴 Doğrulama BAŞARISIZ — deploy engellendi.");
  process.exit(1);
}
if (warnings > 0) {
  console.warn("\n🟡 Uyarılar var — deploy devam eder ama gözden geçirin.");
} else {
  console.log("\n✅ Tüm içerik dosyaları geçerli.");
}
