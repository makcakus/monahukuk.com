/**
 * Comprehensive MDX article audit & fix script.
 *
 * Fixes applied:
 *  1. Author field — normalize to correct locale-specific name
 *  2. Phone number — replace non-breaking spaces (U+00A0) with regular spaces
 *  3. legalVerified — add `legalVerified: true` where missing
 *  4. ES/FR YAML quoting — wrap description in quotes when it contains YAML-special chars
 *  5. Frontmatter slug — align with filename (for the handful of mismatches)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.join(__dirname, "../content/articles");

// ─── Canonical author names per locale ────────────────────────────────────────
const LOCALE_AUTHORS = {
  tr: "Mona Hukuk Editör Ekibi - Antalya",
  en: "Mona Hukuk Editorial Team - Antalya",
  de: "Mona Hukuk Redaktionsteam - Antalya",
  ru: "Редакция Mona Hukuk - Анталья",
  ar: "فريق تحرير Mona Hukuk - أنطاليا",
  es: "Equipo Editorial Mona Hukuk - Antalya",
  fr: "Équipe Éditoriale Mona Hukuk - Antalya",
};

// Non-breaking space (U+00A0)
const NBSP = " ";
// Correct phone with regular spaces
const PHONE_CORRECT = "+90 (242) 606 14 32";
// Pattern to match any variant of the phone number (with/without nbsp, with/without parens)
const PHONE_REGEX = /\+90[\s ]*\(?242\)?[\s ]*606[\s ]*14[\s ]*32/g;

// YAML special chars that require quoting in description
const YAML_SPECIAL = /[:#\[\]{}&*!|>'",%?@`]/;

let stats = {
  totalFiles: 0,
  authorFixed: 0,
  phoneFixed: 0,
  legalVerifiedAdded: 0,
  yamlQuoted: 0,
  slugFixed: 0,
  errors: [],
};

function needsYamlQuoting(value) {
  if (!value) return false;
  // Already quoted
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  )
    return false;
  return YAML_SPECIAL.test(value);
}

function fixFrontmatter(raw, locale, filename) {
  const slug = path.basename(filename, ".mdx");

  // Split on first and second --- delimiters
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return { content: raw, changed: false };

  let fm = fmMatch[1];
  const body = raw.slice(fmMatch[0].length);
  let changed = false;

  // ── 1. Author fix ────────────────────────────────────────────────────────────
  const correctAuthor = LOCALE_AUTHORS[locale];
  if (correctAuthor) {
    const authorMatch = fm.match(/^author:\s*(.+)$/m);
    if (authorMatch) {
      const currentAuthor = authorMatch[1].trim().replace(/^["']|["']$/g, "");
      if (currentAuthor !== correctAuthor) {
        fm = fm.replace(
          /^author:\s*.+$/m,
          `author: "${correctAuthor}"`
        );
        changed = true;
        stats.authorFixed++;
      }
    } else {
      // author field missing — add it after date
      fm = fm.replace(
        /^(date:\s*.+)$/m,
        `$1\nauthor: "${correctAuthor}"`
      );
      changed = true;
      stats.authorFixed++;
    }
  }

  // ── 2. legalVerified ─────────────────────────────────────────────────────────
  if (!/^legalVerified:/m.test(fm)) {
    // Add before last line or after translationKey
    if (/^translationKey:/m.test(fm)) {
      fm = fm.replace(
        /^(translationKey:\s*.+)$/m,
        `$1\nlegalVerified: true`
      );
    } else {
      fm = fm.trimEnd() + "\nlegalVerified: true";
    }
    changed = true;
    stats.legalVerifiedAdded++;
  }

  // ── 3. YAML quoting for description (ES/FR and any locale) ───────────────────
  const descLine = fm.match(/^(description:\s*)(.+)$/m);
  if (descLine) {
    const descVal = descLine[2].trim();
    // If unquoted and contains special chars
    if (
      !(
        (descVal.startsWith('"') && descVal.endsWith('"')) ||
        (descVal.startsWith("'") && descVal.endsWith("'"))
      ) &&
      YAML_SPECIAL.test(descVal)
    ) {
      // Escape internal double quotes
      const escaped = descVal.replace(/"/g, '\\"');
      fm = fm.replace(
        /^(description:\s*)(.+)$/m,
        `$1"${escaped}"`
      );
      changed = true;
      stats.yamlQuoted++;
    }
  }

  // ── 4. Slug alignment with filename ─────────────────────────────────────────
  const slugLine = fm.match(/^(slug:\s*)(.+)$/m);
  if (slugLine) {
    const currentSlug = slugLine[2].trim().replace(/^["']|["']$/g, "");
    if (currentSlug !== slug) {
      fm = fm.replace(
        /^(slug:\s*)(.+)$/m,
        `$1${slug}`
      );
      changed = true;
      stats.slugFixed++;
    }
  }

  if (!changed) return { content: raw, changed: false };

  const newContent = `---\n${fm}\n---${body}`;
  return { content: newContent, changed: true };
}

function fixPhoneInBody(content) {
  if (!PHONE_REGEX.test(content)) return { content, changed: false };
  // Reset lastIndex after test
  PHONE_REGEX.lastIndex = 0;

  let replaced = false;
  const fixed = content.replace(PHONE_REGEX, (match) => {
    if (match !== PHONE_CORRECT) {
      replaced = true;
      return PHONE_CORRECT;
    }
    return match;
  });

  if (replaced) stats.phoneFixed++;
  return { content: fixed, changed: replaced };
}

function processFile(filePath, locale) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const filename = path.basename(filePath);

    // Fix frontmatter
    const { content: afterFm, changed: fmChanged } = fixFrontmatter(
      raw,
      locale,
      filename
    );

    // Fix phone in entire file (frontmatter + body)
    const { content: final, changed: phoneChanged } = fixPhoneInBody(afterFm);

    if (fmChanged || phoneChanged) {
      fs.writeFileSync(filePath, final, "utf8");
    }

    stats.totalFiles++;
  } catch (err) {
    stats.errors.push(`${filePath}: ${err.message}`);
  }
}

// ─── Walk all locale dirs ─────────────────────────────────────────────────────
for (const locale of Object.keys(LOCALE_AUTHORS)) {
  const localeDir = path.join(ARTICLES_DIR, locale);
  if (!fs.existsSync(localeDir)) continue;

  const files = fs
    .readdirSync(localeDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const file of files) {
    processFile(path.join(localeDir, file), locale);
  }
}

// ─── Report ───────────────────────────────────────────────────────────────────
console.log("\n=== audit-fix.mjs results ===");
console.log(`Total files processed : ${stats.totalFiles}`);
console.log(`Author fixed          : ${stats.authorFixed}`);
console.log(`Phone (nbsp→space)    : ${stats.phoneFixed}`);
console.log(`legalVerified added   : ${stats.legalVerifiedAdded}`);
console.log(`YAML description fix  : ${stats.yamlQuoted}`);
console.log(`Slug aligned to file  : ${stats.slugFixed}`);
if (stats.errors.length) {
  console.log(`\nErrors (${stats.errors.length}):`);
  stats.errors.forEach((e) => console.log("  " + e));
}
