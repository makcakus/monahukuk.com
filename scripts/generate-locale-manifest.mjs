// Cloudflare Workers deployment has no runtime access to content/*.mdx files
// (they're only readable on the build machine), so /api/article-locales and
// /api/legal-news-locales always returned empty lists in production, which
// made the LangSwitcher render zero options on article/legal-news pages.
// This script precomputes the same lookups at build time into JSON manifests
// that get statically imported (and therefore bundled into the worker).
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(import.meta.dirname, "..");
const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"];

async function readFrontmatter(dir, filename) {
  try {
    const raw = await fs.readFile(path.join(dir, filename), "utf8");
    return matter(raw).data ?? {};
  } catch {
    return null;
  }
}

async function listSlugs(dir) {
  try {
    const entries = await fs.readdir(dir);
    return entries
      .filter((e) => e.endsWith(".mdx") || e.endsWith(".md"))
      .map((e) => e.replace(/\.mdx?$/, ""));
  } catch {
    return [];
  }
}

async function generateArticleManifest() {
  const contentDir = path.join(ROOT, "content", "articles");

  // Preload every locale's frontmatter once (slug -> frontmatter), so the
  // per-article lookups below are pure in-memory map access instead of fs calls.
  const bySlugByLocale = {};
  for (const locale of LOCALES) {
    const dir = path.join(contentDir, locale);
    const slugs = await listSlugs(dir);
    const bySlug = new Map();
    for (const slug of slugs) {
      const fm = await readFrontmatter(dir, `${slug}.mdx`);
      if (fm) bySlug.set(slug, fm);
    }
    bySlugByLocale[locale] = bySlug;
  }

  // translationKey -> set of locales that have a non-draft tr article with that key
  // (mirrors getAvailableLocalesForArticle's tr-lookup via getAllArticles, which filters drafts).
  const trKeysNonDraft = new Set();
  for (const [, fm] of bySlugByLocale.tr) {
    if (fm.translationKey && !fm.draft) trKeysNonDraft.add(fm.translationKey);
  }

  const manifest = {};
  for (const locale of LOCALES) {
    for (const [slug, fm] of bySlugByLocale[locale]) {
      const tk = fm.translationKey;
      if (!tk) {
        manifest[`${locale}/${slug}`] = [locale];
        continue;
      }

      const locales = new Set([locale]);
      for (const other of LOCALES) {
        if (other === locale) continue;
        if (bySlugByLocale[other].has(tk)) locales.add(other);
      }

      if (locale !== "tr" && trKeysNonDraft.has(tk)) {
        locales.add("tr");
      }

      manifest[`${locale}/${slug}`] = [...locales];
    }
  }

  return manifest;
}

async function generateLegalNewsManifest() {
  const contentDir = path.join(ROOT, "content", "hukuki-haberler");
  const manifest = {};
  const postsByLocale = {};

  for (const locale of LOCALES) {
    const dir = path.join(contentDir, locale);
    const slugs = await listSlugs(dir);
    const posts = [];
    for (const slug of slugs) {
      const fm = await readFrontmatter(dir, `${slug}.mdx`);
      if (fm) posts.push({ slug, date: fm.date });
    }
    postsByLocale[locale] = posts;
  }

  for (const locale of LOCALES) {
    for (const post of postsByLocale[locale]) {
      const isDatedSlug = /^\d{4}-\d{2}-\d{2}-/.test(post.slug);
      const result = { [locale]: post.slug };
      for (const other of LOCALES) {
        if (other === locale) continue;
        const match = isDatedSlug
          ? postsByLocale[other].find((p) => p.date === post.date)
          : postsByLocale[other].find((p) => p.slug === post.slug);
        if (match) result[other] = match.slug;
      }
      manifest[`${locale}/${post.slug}`] = result;
    }
  }

  return manifest;
}

async function main() {
  const outDir = path.join(ROOT, "src", "generated");
  await fs.mkdir(outDir, { recursive: true });

  const articleManifest = await generateArticleManifest();
  await fs.writeFile(
    path.join(outDir, "article-locales.json"),
    JSON.stringify(articleManifest)
  );
  console.log(`[generate-locale-manifest] article-locales.json: ${Object.keys(articleManifest).length} entries`);

  const legalNewsManifest = await generateLegalNewsManifest();
  await fs.writeFile(
    path.join(outDir, "legal-news-locales.json"),
    JSON.stringify(legalNewsManifest)
  );
  console.log(`[generate-locale-manifest] legal-news-locales.json: ${Object.keys(legalNewsManifest).length} entries`);
}

main();
