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
  draft?: boolean;
}

export interface Article extends ArticleFrontmatter {
  body: string;
  readingMinutes: number;
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
        draft: fm.draft ?? false,
        body: content,
        readingMinutes: Math.max(1, Math.round(stats.minutes)),
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
    searchText: `${a.title} ${a.description} ${a.category ?? ""} ${stripMarkdown(a.body)}`.toLowerCase(),
  }));
}
