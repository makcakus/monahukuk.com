/**
 * Outputs a JSON list of MDX files with SEO issues:
 * - description > 160 chars
 * - title > 70 chars
 * - title < 30 chars
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.join(__dirname, "../content/articles");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"];

const issues = [];

for (const loc of LOCALES) {
  const dir = path.join(ARTICLES_DIR, loc);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  for (const f of files) {
    const raw = fs.readFileSync(path.join(dir, f), "utf8");
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) continue;
    const block = fmMatch[1];

    const titleM = block.match(/^title:\s*["']?(.*?)["']?\s*$/m);
    const descM = block.match(/^description:\s*["']?(.*?)["']?\s*$/m);
    const tkM = block.match(/^translationKey:\s*(.+)\s*$/m);

    const title = titleM ? titleM[1].trim().replace(/^["']|["']$/g, "") : null;
    const desc = descM ? descM[1].trim().replace(/^["']|["']$/g, "") : null;
    const translationKey = tkM ? tkM[1].trim() : path.basename(f, ".mdx");

    if (!title || !desc) continue;

    const hasLongTitle = title.length > 70;
    const hasShortTitle = title.length < 30;
    const hasLongDesc = desc.length > 160;

    if (hasLongTitle || hasShortTitle || hasLongDesc) {
      issues.push({
        file: path.join(ARTICLES_DIR, loc, f),
        relPath: `${loc}/${f}`,
        locale: loc,
        translationKey,
        currentTitle: title,
        titleLen: title.length,
        currentDesc: desc,
        descLen: desc.length,
        fixTitle: hasLongTitle || hasShortTitle,
        fixDesc: hasLongDesc,
      });
    }
  }
}

// Group by translationKey
const byKey = {};
for (const item of issues) {
  if (!byKey[item.translationKey]) byKey[item.translationKey] = [];
  byKey[item.translationKey].push(item);
}

const output = {
  totalFiles: issues.length,
  uniqueArticles: Object.keys(byKey).length,
  byTranslationKey: byKey,
};

fs.writeFileSync(
  path.join(__dirname, "../scripts/seo-issues.json"),
  JSON.stringify(output, null, 2),
  "utf8"
);

console.log(`Found ${issues.length} files with SEO issues across ${Object.keys(byKey).length} unique articles.`);
console.log("Written to scripts/seo-issues.json");
