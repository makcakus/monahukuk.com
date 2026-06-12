#!/usr/bin/env node
/**
 * fix-categories.mjs
 *
 * Tüm makalelerin category alanını practice-areas.ts'deki kanonik
 * isimlerle eşleşecek şekilde düzeltir.
 *
 * Yöntem:
 *   1. Her makale için TR locale'indeki category'den doğru pratik alanı tespit eder.
 *   2. Diğer locale'lerin category'sini kanonik isimle karşılaştırır.
 *   3. Eşleşmiyorsa düzeltir.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const CONTENT_DIR = join(process.cwd(), "content", "articles");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"];

// practice-areas.ts'den alınan kanonik kategori isimleri
// slug → { tr, en, de, ru, ar, es, fr }
const CANONICAL = {
  "yabancilar-gocmenlik": {
    tr: "Yabancılar & Göçmenlik Hukuku",
    en: "Foreigners & Immigration Law",
    de: "Ausländer- & Einwanderungsrecht",
    ru: "Право иностранцев и иммиграционное право",
    ar: "قانون الأجانب والهجرة",
    es: "Derecho de Extranjería e Inmigración",
    fr: "Droit des Étrangers et de l'Immigration",
  },
  "gayrimenkul": {
    tr: "Gayrimenkul Hukuku",
    en: "Real Estate Law",
    de: "Immobilienrecht",
    ru: "Право в сфере недвижимости",
    ar: "قانون العقارات",
    es: "Derecho Inmobiliario",
    fr: "Droit Immobilier",
  },
  "turk-vatandasligi": {
    tr: "Türk Vatandaşlığı",
    en: "Turkish Citizenship",
    de: "Türkische Staatsbürgerschaft",
    ru: "Гражданство Турции",
    ar: "الجنسية التركية",
    es: "Ciudadanía Turca",
    fr: "Nationalité Turque",
  },
  "aile-hukuku": {
    tr: "Aile Hukuku",
    en: "Family Law",
    de: "Familienrecht",
    ru: "Семейное право",
    ar: "قانون الأسرة",
    es: "Derecho de Familia",
    fr: "Droit de la Famille",
  },
  "bilisim-yapay-zeka-hukuku": {
    tr: "Bilişim & Yapay Zekâ Hukuku",
    en: "IT & Artificial Intelligence Law",
    de: "IT- & KI-Recht",
    ru: "IT-право и право в сфере ИИ",
    ar: "قانون تقنية المعلومات والذكاء الاصطناعي",
    es: "Derecho TI e Inteligencia Artificial",
    fr: "Droit Informatique et Intelligence Artificielle",
  },
  "ticaret-sirketler-hukuku": {
    tr: "Ticaret & Şirketler Hukuku",
    en: "Commercial & Corporate Law",
    de: "Handels- & Gesellschaftsrecht",
    ru: "Коммерческое и корпоративное право",
    ar: "القانون التجاري وقانون الشركات",
    es: "Derecho Mercantil y Societario",
    fr: "Droit Commercial et des Sociétés",
  },
  "miras-hukuku": {
    tr: "Miras Hukuku",
    en: "Inheritance Law",
    de: "Erbrecht",
    ru: "Наследственное право",
    ar: "قانون الميراث",
    es: "Derecho de Sucesiones",
    fr: "Droit des Successions",
  },
  "kira-hukuku": {
    tr: "Kira Hukuku",
    en: "Rental Law",
    de: "Mietrecht",
    ru: "Арендное право",
    ar: "قانون الإيجار",
    es: "Derecho Arrendaticio",
    fr: "Droit de la Location",
  },
  "idare-hukuku": {
    tr: "İdare Hukuku",
    en: "Administrative Law",
    de: "Verwaltungsrecht",
    ru: "Административное право",
    ar: "القانون الإداري",
    es: "Derecho Administrativo",
    fr: "Droit Administratif",
  },
};

// TR kategorisinden pratik alan slug'ını bul
function slugFromTrCategory(trCat) {
  for (const [slug, names] of Object.entries(CANONICAL)) {
    if (names.tr === trCat) return slug;
  }
  return null;
}

// translationKey → practice area slug haritası (TR dosyalarından)
const tkToSlug = new Map();
const trDir = join(CONTENT_DIR, "tr");
let trFiles;
try {
  trFiles = readdirSync(trDir).filter(f => f.endsWith(".mdx") || f.endsWith(".md"));
} catch { trFiles = []; }

for (const file of trFiles) {
  const raw = readFileSync(join(trDir, file), "utf8");
  let data;
  try { ({ data } = matter(raw)); } catch { continue; }
  if (!data.translationKey || !data.category) continue;
  const slug = slugFromTrCategory(data.category);
  if (slug) tkToSlug.set(data.translationKey, slug);
}

console.log(`TR kayıt sayısı: ${tkToSlug.size}`);

// Her locale için tüm dosyaları tara ve düzelt
let totalFixed = 0;
let totalScanned = 0;

for (const locale of LOCALES) {
  if (locale === "tr") continue; // TR zaten doğru, kaynak olarak kullanıldı
  const dir = join(CONTENT_DIR, locale);
  let files;
  try { files = readdirSync(dir).filter(f => f.endsWith(".mdx") || f.endsWith(".md")); }
  catch { continue; }

  for (const file of files) {
    const fullPath = join(dir, file);
    const raw = readFileSync(fullPath, "utf8");
    totalScanned++;

    let data;
    try { ({ data } = matter(raw)); } catch { continue; }

    const tk = data.translationKey;
    if (!tk) continue;

    const practiceSlug = tkToSlug.get(tk);
    if (!practiceSlug) continue;

    const correctCategory = CANONICAL[practiceSlug][locale];
    const currentCategory = data.category;

    if (!currentCategory || currentCategory === correctCategory) continue;

    // Düzeltme gerekiyor
    // Frontmatter bloğunu bul ve category satırını değiştir
    const fmMatch = raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);
    if (!fmMatch) continue;

    const [, open, body, close] = fmMatch;
    const lines = body.split(/\r?\n/);
    let changed = false;

    const newLines = lines.map(line => {
      const m = line.match(/^(category:\s*)(.+)$/);
      if (!m) return line;

      // Mevcut değeri temizle (tırnakları kaldır)
      let currentVal = m[2].trim();
      if ((currentVal.startsWith('"') && currentVal.endsWith('"')) ||
          (currentVal.startsWith("'") && currentVal.endsWith("'"))) {
        currentVal = currentVal.slice(1, -1);
      }

      if (currentVal === correctCategory) return line;

      changed = true;
      // Tırnak gerekiyor mu?
      const needsQuotes = /[:#&']/.test(correctCategory);
      const newVal = needsQuotes ? `"${correctCategory}"` : correctCategory;
      return `category: ${newVal}`;
    });

    if (changed) {
      const newRaw = raw.replace(
        /^(---\r?\n)([\s\S]*?)(\r?\n---)/,
        `${open}${newLines.join("\n")}${close}`
      );
      writeFileSync(fullPath, newRaw, "utf8");
      totalFixed++;
      console.log(`  ✏️  [${locale}/${file}]  "${currentCategory}" → "${correctCategory}"`);
    }
  }
}

console.log(`\n──────────────────────────────────`);
console.log(`Taranan : ${totalScanned} dosya (TR hariç)`);
console.log(`Düzeltilen : ${totalFixed} dosya`);
console.log(`──────────────────────────────────`);
