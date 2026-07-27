#!/usr/bin/env node
// SEO audit for İş Hukuku mevzuat series in content/articles/tr/*.mdx
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const DIR = "C:/Users/avmus/mona-site/content/articles/tr";
const allFiles = readdirSync(DIR).filter((f) => f.endsWith(".mdx"));

const rows = [];
for (const f of allFiles) {
  const raw = readFileSync(join(DIR, f), "utf8");
  const { data, content } = matter(raw);
  if (!(data.translationKey || "").endsWith("-turkish-labour-law")) continue;
  const title = data.title || "";
  const desc = data.description || "";
  const h2s = [...content.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  const wc = (content.match(/\S+/g) || []).length;
  const internalLinks = [...content.matchAll(/\]\(\/articles\/([a-z0-9-]+)\)|\]\(https?:\/\/[^)]*\/articles\/([a-z0-9-]+)\)/g)];
  rows.push({
    file: f,
    slug: data.slug || "",
    title,
    titleLen: title.length,
    desc,
    descLen: desc.length,
    category: data.category || "",
    translationKey: data.translationKey || "",
    h2s,
    wc,
    internalLinkCount: internalLinks.length,
    hasRelatedSlugs: Array.isArray(data.relatedSlugs) && data.relatedSlugs.length > 0,
    yargitayCount: (content.match(/^\*\*\d+\.\s/gm) || []).length,
    hasHukukiDestek: /^## Hukuki Destek/m.test(content),
    hasContactEmail: content.includes("contact@monahukuk.com"),
    hasInfoEmail: content.includes("info@monahukuk.com"),
  });
}

console.log(`Toplam İş Hukuku mevzuat makale: ${rows.length}\n`);

console.log("=== TITLE UZUNLUK (SERP'te ~60 karakterden sonra kesilir) ===");
const longTitles = rows.filter((r) => r.titleLen > 60);
console.log(`${longTitles.length} makalede title > 60 karakter:`);
longTitles.forEach((r) => console.log(`  ${r.titleLen} | ${r.title}`));
console.log();

console.log("=== DESCRIPTION UZUNLUK (kural: 140-160 karakter) ===");
const badDesc = rows.filter((r) => r.descLen < 140 || r.descLen > 160);
console.log(`${badDesc.length} makalede description kural dışı:`);
badDesc.forEach((r) => console.log(`  ${r.descLen} | ${r.file} | ${r.desc}`));
console.log();

console.log("=== KELİME SAYISI DAĞILIMI (hedef 900-1200 gövde) ===");
const wcOut = rows.filter((r) => r.wc < 700 || r.wc > 2500);
console.log(`Sınır dışı (toplam metin <700 veya >2500 kelime): ${wcOut.length}`);
wcOut.forEach((r) => console.log(`  ${r.wc} | ${r.file}`));
console.log();

console.log("=== YARGITAY KARARI SAYISI (kural: tam 5) ===");
const badYargitay = rows.filter((r) => r.yargitayCount !== 5);
console.log(`${badYargitay.length} makalede != 5 karar:`);
badYargitay.forEach((r) => console.log(`  ${r.yargitayCount} | ${r.file}`));
console.log();

console.log("=== HUKUKİ DESTEK / E-POSTA KONTROLÜ ===");
rows.filter((r) => !r.hasHukukiDestek).forEach((r) => console.log(`  ❌ Hukuki Destek eksik: ${r.file}`));
rows.filter((r) => !r.hasContactEmail).forEach((r) => console.log(`  ❌ contact@monahukuk.com eksik: ${r.file}`));
rows.filter((r) => r.hasInfoEmail).forEach((r) => console.log(`  ❌ info@monahukuk.com kullanılmış (yanlış): ${r.file}`));
console.log();

console.log("=== İÇ BAĞLANTI (internal linking, gövde içi) ===");
const noInternalLinks = rows.filter((r) => r.internalLinkCount === 0);
console.log(`İç bağlantısı olmayan makale: ${noInternalLinks.length}/${rows.length}`);
rows.filter((r) => r.internalLinkCount < 2).forEach((r) => console.log(`  ${r.internalLinkCount} bağlantı | ${r.file}`));
console.log(`relatedSlugs kullanan makale: ${rows.filter((r) => r.hasRelatedSlugs).length}/${rows.length}`);
console.log();

console.log("=== SLUG / TRANSLATIONKEY TUTARLILIĞI ===");
const slugMismatch = rows.filter((r) => r.slug !== r.file.replace(".mdx", ""));
console.log(`slug ≠ dosya adı olan makale: ${slugMismatch.length}`);
slugMismatch.forEach((r) => console.log(`  ${r.file} → slug: ${r.slug}`));

console.log("\n=== relatedSlugs GEÇERLİLİK (mevcut slug'lara işaret ediyor mu) ===");
const allSlugs = new Set(rows.map((r) => r.slug));
for (const f of allFiles) {
  const raw = readFileSync(join(DIR, f), "utf8");
  const { data } = matter(raw);
  if (!(data.translationKey || "").endsWith("-turkish-labour-law")) continue;
  const rel = Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [];
  const missing = rel.filter((s) => !allSlugs.has(s) && !require("fs").existsSync(join(DIR, s + ".mdx")));
  if (missing.length) console.log(`  ${f} → geçersiz relatedSlugs: ${missing.join(", ")}`);
}

writeFileSync(join(process.cwd(), "seo-rows-is-hukuku.json"), JSON.stringify(rows, null, 2));
