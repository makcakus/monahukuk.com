import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface GazettePostFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  draft?: boolean;
}

export interface GazettePost extends GazettePostFrontmatter {
  body: string;
  readingMinutes: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "hukuki-haberler");

function fileSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export async function getGazetteSlugs(locale: string): Promise<string[]> {
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

export async function getGazettePost(
  locale: string,
  slug: string
): Promise<GazettePost | null> {
  const dir = path.join(CONTENT_DIR, locale);
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const filename of candidates) {
    const full = path.join(dir, filename);
    try {
      const raw = await fs.readFile(full, "utf8");
      const { data, content } = matter(raw);
      const fm = data as Partial<GazettePostFrontmatter>;
      const stats = readingTime(content);
      return {
        title: fm.title ?? slug,
        description: fm.description ?? "",
        date: fm.date ?? new Date().toISOString().slice(0, 10),
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

export async function getAllGazettePosts(locale: string): Promise<GazettePost[]> {
  const slugs = await getGazetteSlugs(locale);
  const posts = await Promise.all(slugs.map((s) => getGazettePost(locale, s)));
  return posts
    .filter((p): p is GazettePost => p !== null && !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"] as const;

/**
 * Bir hukuki haber postunun diğer locale'lerdeki gerçek slug'larını döndürür.
 *
 * Gazette postlarının translationKey'i yok; slug konvansiyonu locale'e göre
 * farklı (TR: "-hukuki-haberler", diğerleri: "-legal-news"), bu yüzden
 * eşleştirme frontmatter'daki `date` alanı üzerinden yapılır. Tarih-önekli
 * olmayan eski postlar (örn. "kira-hukukunda-guncel-gelismeler-2025") için
 * doğrudan slug eşleşmesine düşülür.
 *
 * LangSwitcher ve sitemap.ts'in var olmayan/yanlış slug'a link vermesini önler.
 */
export async function getLegalNewsLocaleSlugs(
  locale: string,
  slug: string
): Promise<Record<string, string>> {
  const post = await getGazettePost(locale, slug);
  if (!post) return {};

  const result: Record<string, string> = { [locale]: slug };
  const isDatedSlug = /^\d{4}-\d{2}-\d{2}-/.test(slug);

  for (const loc of LOCALES) {
    if (loc === locale) continue;
    const otherPosts = await getAllGazettePosts(loc);
    const match = isDatedSlug
      ? otherPosts.find((p) => p.date === post.date)
      : otherPosts.find((p) => p.slug === slug);
    if (match) result[loc] = match.slug;
  }

  return result;
}
