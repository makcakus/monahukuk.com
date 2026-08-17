import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import articleLocaleManifest from "@/generated/article-locales.json";

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
  /**
   * "r2" ise içerik build-time fs yerine ARTICLES_BUCKET'tan okunmuştur —
   * bu, sayfanın Worker request-time'da (prebuilt değil) render edildiği
   * anlamına gelir. next-mdx-remote'un çalışma zamanı derlemesi `new
   * Function` kullanır ve Cloudflare Workers bunu izin vermez (EvalError:
   * Code generation from strings disallowed); bu yüzden sayfa bileşeni bu
   * durumda MDXRemote yerine eval kullanmayan react-markdown'a düşer.
   */
  source: "fs" | "r2";
}

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

function fileSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

// Yüksek paralellikte build sırasında (experimental.cpus) fs.readdir/readFile
// ara sıra geçici EMFILE/EBUSY hatası verebiliyor; sessizce boş dönmek yerine
// birkaç kez tekrar deneyip gerçek hatayı ilk denemede yutmuyoruz.
async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (i < attempts - 1) {
        await new Promise((r) => setTimeout(r, 50 * (i + 1)));
      }
    }
  }
  throw lastError;
}

/**
 * Cloudflare Worker context'ini güvenli şekilde almaya çalışır.
 *
 * ÖNEMLİ — sync modda çağırıyoruz, async değil: async mod düz `next build`
 * altında (gerçek Worker yokken) wrangler'ın getPlatformProxy'siyle yerel/sahte
 * bir R2 simülasyonu kurup SESSİZCE boş veri döndürebilir — bu, sync modun
 * temiz throw'undan çok daha kötü bir sessiz-veri-kaybı riski. Sync
 * getCloudflareContext(), gerçek Worker context'i yoksa (build sırasında,
 * ya da normal `next dev`'de) throw eder; bunu burada yutup null dönüyoruz ki
 * çağıran taraf (fs zaten başarısız olduğunda devreye giren R2 fallback'i)
 * build'i çökertmesin — sadece "R2 yok, boş dön" davransın.
 */
function tryCloudflareEnv(): CloudflareEnv | null {
  try {
    return getCloudflareContext().env;
  } catch {
    return null;
  }
}

async function getArticleSlugsFromR2(locale: string): Promise<string[]> {
  const env = tryCloudflareEnv();
  if (!env) return [];
  try {
    const slugs: string[] = [];
    let cursor: string | undefined;
    do {
      const listed = await env.ARTICLES_BUCKET.list({ prefix: `${locale}/`, cursor });
      for (const obj of listed.objects) {
        const filename = obj.key.slice(locale.length + 1);
        if (filename.endsWith(".mdx") || filename.endsWith(".md")) {
          slugs.push(fileSlug(filename));
        }
      }
      cursor = listed.truncated ? listed.cursor : undefined;
    } while (cursor);
    return slugs;
  } catch (e) {
    console.error(`[getArticleSlugsFromR2] FAILED for locale="${locale}":`, e);
    return [];
  }
}

async function getArticleRawFromR2(locale: string, slug: string): Promise<string | null> {
  const env = tryCloudflareEnv();
  if (!env) return null;
  for (const ext of ["mdx", "md"]) {
    try {
      const obj = await env.ARTICLES_BUCKET.get(`${locale}/${slug}.${ext}`);
      if (obj) return await obj.text();
    } catch (e) {
      console.error(`[getArticleRawFromR2] FAILED for "${locale}/${slug}.${ext}":`, e);
    }
  }
  return null;
}

export async function getArticleSlugs(locale: string): Promise<string[]> {
  const dir = path.join(CONTENT_DIR, locale);
  try {
    const entries = await withRetry(() => fs.readdir(dir));
    return entries
      .filter((e) => e.endsWith(".mdx") || e.endsWith(".md"))
      .map(fileSlug);
  } catch (e) {
    // fs.readdir yalnızca build/dev makinesinde çalışır — Worker runtime'ında
    // content/ dizini yok. Bu genellikle "biz zaten Worker'dayız" demektir;
    // build sonrası eklenip yalnızca R2'ye senkronize edilmiş olabilecek
    // makaleler için R2'deki listeye düş.
    console.error(`[getArticleSlugs] fs FAILED for locale="${locale}" dir="${dir}" cwd="${process.cwd()}", R2'ye düşülüyor:`, e);
    return getArticleSlugsFromR2(locale);
  }
}

export async function getArticle(
  locale: string,
  slug: string
): Promise<Article | null> {
  const dir = path.join(CONTENT_DIR, locale);
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  let raw: string | null = null;
  for (const filename of candidates) {
    const full = path.join(dir, filename);
    try {
      raw = await withRetry(() => fs.readFile(full, "utf8"));
      break;
    } catch {
      continue;
    }
  }
  let source: Article["source"] = "fs";
  if (raw === null) {
    // fs'te yok (Worker runtime'ında hiç olmayabilir, ya da build'den sonra
    // eklenmiş yeni bir makale olabilir) — R2 fallback'i dene.
    raw = await getArticleRawFromR2(locale, slug);
    source = "r2";
  }
  if (raw === null) return null;

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
    source,
  };
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
  // Cloudflare Workers runtime has no fs access to content/articles, so the
  // fs-based lookup below only works in dev/build. Prefer the manifest
  // precomputed at build time (scripts/generate-locale-manifest.mjs) and only
  // fall back to fs when an entry is missing (e.g. content added since the
  // last manifest regeneration, during local dev).
  const manifestEntry = (articleLocaleManifest as Record<string, string[]>)[`${locale}/${slug}`];
  if (manifestEntry) return manifestEntry;

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

export interface ArticleSearchEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  readingMinutes: number;
  searchText: string;
}

/**
 * Makale listesi sayfasının arama indeksi.
 *
 * DİKKAT: searchText'e makale gövdesi EKLENMEMELİDİR. TR'de 631 makalenin
 * gövdesi ~7 MB ham metin; RSC payload'ında kaçış karakterleriyle birlikte
 * sayfa 33 MB'a çıkıyordu. Cloudflare Workers bu boyutta bir prerender
 * kaydını cache'ten sunamıyor, canlı render'a düşüyor ve worker içinde
 * content/ klasörü okunamadığı için (cwd=/bundle) sayfa "Henüz makale yok"
 * olarak render ediliyordu. Diğer sayfalar (~250-330 KB) sorunsuzdu.
 */
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
    searchText: `${a.title} ${a.description} ${a.category ?? ""}`.toLowerCase().replace(/̇/g, ""),
  }));
}
