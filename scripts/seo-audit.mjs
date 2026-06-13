import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.join(__dirname, "../content/articles");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"];

let stats = {
  total: 0,
  missingTitle: 0,
  missingDesc: 0,
  shortTitle: [], // <30
  longTitle: [],  // >70
  shortDesc: [],  // <50
  longDesc: [],   // >160
};

for (const loc of LOCALES) {
  const dir = path.join(ARTICLES_DIR, loc);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  for (const f of files) {
    stats.total++;
    const raw = fs.readFileSync(path.join(dir, f), "utf8");
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) continue;
    const block = fmMatch[1];

    // Extract title
    const titleM = block.match(/^title:\s*["']?(.*?)["']?\s*$/m);
    const title = titleM ? titleM[1].trim().replace(/^["']|["']$/g, "") : null;
    if (!title) { stats.missingTitle++; continue; }

    // Extract description
    const descM = block.match(/^description:\s*["']?(.*?)["']?\s*$/m);
    const desc = descM ? descM[1].trim().replace(/^["']|["']$/g, "") : null;
    if (!desc) { stats.missingDesc++; continue; }

    const tl = title.length;
    const dl = desc.length;
    const ref = `${loc}/${f}`;

    if (tl < 30) stats.shortTitle.push({ ref, len: tl, val: title });
    if (tl > 70) stats.longTitle.push({ ref, len: tl, val: title });
    if (dl < 50) stats.shortDesc.push({ ref, len: dl, val: desc });
    if (dl > 160) stats.longDesc.push({ ref, len: dl, val: desc });
  }
}

console.log("=== SEO Denetim Raporu ===");
console.log(`Toplam dosya     : ${stats.total}`);
console.log(`Eksik title      : ${stats.missingTitle}`);
console.log(`Eksik description: ${stats.missingDesc}`);
console.log(`Title < 30 char  : ${stats.shortTitle.length}`);
console.log(`Title > 70 char  : ${stats.longTitle.length}`);
console.log(`Desc  < 50 char  : ${stats.shortDesc.length}`);
console.log(`Desc  > 160 char : ${stats.longDesc.length}`);

if (stats.longDesc.length > 0) {
  console.log(`\n--- Description >160 karakter (${stats.longDesc.length} dosya) ---`);
  stats.longDesc.slice(0, 25).forEach((x) =>
    console.log(`  [${x.len}] ${x.ref}`)
  );
  if (stats.longDesc.length > 25)
    console.log(`  ... ve ${stats.longDesc.length - 25} tane daha`);
}

if (stats.longTitle.length > 0) {
  console.log(`\n--- Title >70 karakter (${stats.longTitle.length} dosya) ---`);
  stats.longTitle.slice(0, 15).forEach((x) =>
    console.log(`  [${x.len}] ${x.ref}: ${x.val.slice(0, 60)}...`)
  );
}

if (stats.shortTitle.length > 0) {
  console.log(`\n--- Title <30 karakter (${stats.shortTitle.length} dosya) ---`);
  stats.shortTitle.forEach((x) =>
    console.log(`  [${x.len}] ${x.ref}: "${x.val}"`)
  );
}

if (stats.shortDesc.length > 0) {
  console.log(`\n--- Description <50 karakter (${stats.shortDesc.length} dosya) ---`);
  stats.shortDesc.forEach((x) =>
    console.log(`  [${x.len}] ${x.ref}: "${x.val}"`)
  );
}
