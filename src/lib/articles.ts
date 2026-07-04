import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  category?: string;
  slug: string;
  author?: string;
  /** Manuel iç link override'ı; doluysa kategori-tabanlı öneri yerine kullanılır. */
  relatedSlugs?: string[];
  draft?: boolean;
  translationKey?: string;
  /** Makale kapak görseli — /images/articles/... yolu */
  image?: string;
}

export const DEFAULT_AUTHOR = "Av. Mustafa Akçakuş";

export interface Article extends ArticleFrontmatter {
  body: string;
  readingMinutes: number;
  wordCount: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

function fileSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export async function getArticleSlugs(locale: string): Promise<string[]> {
  const dir = path.join(CONTENT_DIR, locale);
  try {
    const entries = await fs.readdir(dir);
    return entries
      .filter((e) => e.endsWith(".mdx") || e.endsWith(".md"))
      .map(fileSlug);
  } catch {
    return [];
  }
}

export async function getArticle(
  locale: string,
  slug: string
): Promise<Article | null> {
  const dir = path.join(CONTENT_DIR, locale);
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const filename of candidates) {
    const full = path.join(dir, filename);
    try {
      const raw = await fs.readFile(full, "utf8");
      const { data, content } = matter(raw);
      const fm = data as Partial<ArticleFrontmatter>;
      const stats = readingTime(content);
      return {
        title: fm.title ?? slug,
        description: fm.description ?? "",
        date: fm.date ?? new Date().toISOString().slice(0, 10),
        category: fm.category,
        slug,
        author: fm.author ?? DEFAULT_AUTHOR,
        relatedSlugs: Array.isArray(fm.relatedSlugs) ? fm.relatedSlugs : undefined,
        draft: fm.draft ?? false,
        translationKey: fm.translationKey,
        image: fm.image,
        body: content,
        readingMinutes: Math.max(1, Math.round(stats.minutes)),
        wordCount: stats.words,
      };
    } catch {
      continue;
    }
  }
  return null;
}

export async function getAllArticles(locale: string): Promise<Article[]> {
  const slugs = await getArticleSlugs(locale);
  const articles = await Promise.all(slugs.map((s) => getArticle(locale, s)));
  return articles
    .filter((a): a is Article => a !== null && !a.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * İlgili makale önerisi.
 *
 * Öncelik sırası:
 *   1. Frontmatter'daki manuel `relatedSlugs` (geçerli olan slug'lar)
 *   2. Aynı kategorideki diğer makaleler (en son tarihten geriye)
 *   3. Genel havuzdan en son makaleler (kategori boş veya yetersiz tek)
 *
 * Mevcut makale her zaman elenir.
 */
/**
 * Aynı kategorideki önceki ve sonraki makaleyi döndürür.
 * Makaleler tarih-desc sıralamasındadır; "next" daha eski, "prev" daha yenidir.
 * Kategori yoksa tüm makaleler içinde arama yapar.
 */
/**
 * Bir makalenin gerçekten çevirisi bulunan locale'lerini döndürür
 * (translationKey üzerinden, dosya varlığı kontrol edilerek).
 * LangSwitcher gibi UI'ların var olmayan çeviriye link vermesini önler.
 */
export async function getAvailableLocalesForArticle(
  locale: string,
  slug: string
): Promise<string[]> {
  const article = await getArticle(locale, slug);
  if (!article) return [];

  const tk = article.translationKey;
  if (!tk) return [locale];

  const locales = new Set<string>([locale]);

  for (const loc of ["en", "de", "ru", "ar", "es", "fr", "zh"]) {
    if (loc === locale) continue;
    const exists = await getArticle(loc, tk);
    if (exists) locales.add(loc);
  }

  if (locale !== "tr") {
    const allTr = await getAllArticles("tr");
    if (allTr.some((a) => a.translationKey === tk)) locales.add("tr");
  }

  return [...locales];
}

export async function getAdjacentArticles(
  locale: string,
  current: { slug: string; category?: string }
): Promise<{ prev: Article | null; next: Article | null }> {
  const all = await getAllArticles(locale);
  const pool = current.category
    ? all.filter((a) => a.category === current.category)
    : all;

  const idx = pool.findIndex((a) => a.slug === current.slug);
  if (idx === -1) return { prev: null, next: null };

  return {
    prev: idx > 0 ? pool[idx - 1] : null,           // daha yeni
    next: idx < pool.length - 1 ? pool[idx + 1] : null, // daha eski
  };
}

export async function getRelatedArticles(
  locale: string,
  current: { slug: string; category?: string; relatedSlugs?: string[] },
  limit = 3
): Promise<Article[]> {
  const all = await getAllArticles(locale);
  const bySlug = new Map(all.map((a) => [a.slug, a]));

  // 1) Manuel override
  if (current.relatedSlugs && current.relatedSlugs.length) {
    const picked = current.relatedSlugs
      .filter((s) => s !== current.slug)
      .map((s) => bySlug.get(s))
      .filter((a): a is Article => Boolean(a));
    if (picked.length >= 1) return picked.slice(0, limit);
  }

  // 2) Aynı kategori
  const sameCategory = current.category
    ? all.filter(
        (a) => a.slug !== current.slug && a.category === current.category
      )
    : [];

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  // 3) Kategori yetersizse en yenilerle tamamla
  const fillers = all.filter(
    (a) => a.slug !== current.slug && !sameCategory.some((s) => s.slug === a.slug)
  );
  return [...sameCategory, ...fillers].slice(0, limit);
}

const FAQ_SKIP = /mona hukuk|как .* может помочь|how .* can help|kontaktieren|お問い合わせ|iletişim|تواصل|связаться/i;

export function extractFaqPairs(body: string): { question: string; answer: string }[] {
  const pairs: { question: string; answer: string }[] = [];
  let heading: string | null = null;
  let bodyLines: string[] = [];

  function flush() {
    if (!heading || FAQ_SKIP.test(heading)) return;
    const text = bodyLines
      .join(" ")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/^[-*+]\s+/gm, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 280);
    if (text.length > 30) pairs.push({ question: heading!, answer: text });
  }

  for (const line of body.split("\n")) {
    const m = line.match(/^## (.+)/);
    if (m) {
      flush();
      heading = m[1].trim().replace(/\*\*/g, "");
      bodyLines = [];
    } else if (heading && line.trim() && !line.startsWith("#")) {
      bodyLines.push(line.trim());
    }
  }
  flush();
  return pairs;
}

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/^>\s*/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export interface ArticleSearchEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  readingMinutes: number;
  searchText: string;
}

export async function getArticleSearchIndex(
  locale: string
): Promise<ArticleSearchEntry[]> {
  const articles = await getAllArticles(locale);
  return articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    date: a.date,
    category: a.category,
    readingMinutes: a.readingMinutes,
    searchText: `${a.title} ${a.description} ${a.category ?? ""} ${stripMarkdown(a.body)}`.toLowerCase().replace(/̇/g, ""),
  }));
}
