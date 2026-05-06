#!/usr/bin/env node
/**
 * Ofis telefon numarasındaki normal boşlukları NBSP ( ) ile değiştirir.
 * Amaç: numara satır başına bölünmeden tek parça halinde kalsın.
 *
 *   ÖNCE: "+90 (242) 606 14 32"     (boşluklar = ASCII 0x20, satır sonunda kırılır)
 *   SONRA: "+90 (242) 606 14 32"  (NBSP, browser kırmaz)
 *
 * Kapsam: tüm content/articles/**\/*.mdx + messages/*.json + src/lib/site.ts
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const NBSP = " ";
const FROM = "+90 (242) 606 14 32";
const TO = `+90${NBSP}(242)${NBSP}606${NBSP}14${NBSP}32`;

let touched = 0;
let scanned = 0;

function processFile(path) {
  scanned++;
  const raw = readFileSync(path, "utf8");
  if (!raw.includes(FROM)) return;
  // .replaceAll global string replace — regex değil, escape'siz güvenli.
  const updated = raw.split(FROM).join(TO);
  writeFileSync(path, updated, "utf8");
  touched++;
}

// 1. Articles MDX'leri
const LOCALES = ["tr", "en", "de", "ru", "ar"];
for (const l of LOCALES) {
  const dir = join("content", "articles", l);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    continue;
  }
  for (const f of files) processFile(join(dir, f));
}

// 2. messages/*.json
for (const l of LOCALES) {
  const path = join("messages", `${l}.json`);
  try {
    processFile(path);
  } catch {
    /* dosya yoksa atla */
  }
}

// 3. src/lib/site.ts (SITE.phone constant)
try {
  processFile(join("src", "lib", "site.ts"));
} catch {
  /* yoksa atla */
}

console.log(`──────────────────────────────────`);
console.log(`Taranan dosya : ${scanned}`);
console.log(`Güncellenen   : ${touched}`);
console.log(`──────────────────────────────────`);
