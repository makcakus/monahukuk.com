#!/usr/bin/env node
// SEO audit for CMK articles in content/articles/tr/*.mdx
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const matter = require("gray-matter");

const DIR = "C:/Users/avmus/mona-site/content/articles/tr";
const files = readdirSync(DIR).filter((f) => f.endsWith(".mdx") && /cmk-\d/.test(f));

const rows = [];
for (const f of files) {
  const raw = readFileSync(join(DIR, f), "utf8");
  const { data, content } = matter(raw);
  const title = data.title || "";
  const desc = data.description || "";
  const h2s = [...content.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  const h3s = [...content.matchAll(/^### (.+)$/gm)].map((m) => m[1].trim());
  const wc = (content.match(/\S+/g) || []).length;
  const internalLinks = [...content.matchAll(/\]\(\/articles\/([a-z0-9-]+)\)|\]\(https?:\/\/[^)]*\/articles\/([a-z0-9-]+)\)/g)];
  // merged-fıkra check: any line ending in "**" right after an italic madde block (double-asterisk artifact)
  const doubleAsteriskArtifact = /[^\*]\*\*(\s|$)/m.test(content) && !/\*\*\d+\./.test(content.split("Yargıtay Kararları")[0] || "");
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
    h3Count: h3s.length,
    wc,
    internalLinkCount: internalLinks.length,
    hasRelatedSlugs: Array.isArray(data.relatedSlugs) && data.relatedSlugs.length > 0,
    yargitayCount: (content.match(/^\*\*\d+\.\s/gm) || []).length,
    hasHukukiDestek: /^## Hukuki Destek/m.test(content),
    hasContactEmail: content.includes("contact@monahukuk.com"),
    hasInfoEmail: content.includes("info@monahukuk.com"),
  });
}

console.log(`Toplam CMK makale: ${rows.length}\n`);

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

console.log("=== KELİME SAYISI DAĞILIMI (hedef 900-1200 gövde, +Yargıtay+CTA ile toplam daha yüksek olabilir) ===");
const wcOut = rows.filter((r) => r.wc < 700 || r.wc > 2500);
console.log(`Sınır dışı (toplam metin <700 veya >2500 kelime): ${wcOut.length}`);
wcOut.forEach((r) => console.log(`  ${r.wc} | ${r.file}`));
console.log();

console.log("=== H2 BAŞLIK ÇEŞİTLİLİĞİ (özgünlük kontrolü) ===");
const h2Counts = {};
rows.forEach((r) => r.h2s.forEach((h) => { h2Counts[h] = (h2Counts[h] || 0) + 1; }));
const commonH2 = Object.entries(h2Counts).sort((a, b) => b[1] - a[1]).filter(([h, c]) => c > 3 && h !== "Yargıtay Kararları" && h !== "Hukuki Destek");
console.log("3'ten fazla makalede tekrar eden (sabit dışı) H2 başlıklar:");
commonH2.forEach(([h, c]) => console.log(`  ${c}x | "${h}"`));
console.log();

console.log("=== YARGITAY KARARI SAYISI (kural: tam 7) ===");
const badYargitay = rows.filter((r) => r.yargitayCount !== 7);
console.log(`${badYargitay.length} makalede != 7 karar:`);
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

console.log("=== ÇİFT YILDIZ ARTEFAKT (fıkra ayırma hatası şüphesi) ===");
rows.filter((r) => r.doubleAsteriskArtifact).forEach((r) => console.log(`  ⚠️  ${r.file}`));
console.log();

console.log("=== SLUG / TRANSLATIONKEY TUTARLILIĞI ===");
const slugMismatch = rows.filter((r) => r.slug !== r.file.replace(".mdx", ""));
console.log(`slug ≠ dosya adı olan makale: ${slugMismatch.length}`);
slugMismatch.forEach((r) => console.log(`  ${r.file} → slug: ${r.slug}`));
const badKey = rows.filter((r) => !r.translationKey.endsWith("-turkish-criminal-procedure-code"));
console.log(`translationKey soneki yanlış olan makale: ${badKey.length}`);
badKey.forEach((r) => console.log(`  ${r.file} → ${r.translationKey}`));

writeFileSync(join(process.cwd(), "seo-rows-cmk.json"), JSON.stringify(rows, null, 2));
