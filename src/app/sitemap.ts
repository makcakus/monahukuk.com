import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllArticles } from "@/lib/articles";
import { getAllGazettePosts, getLegalNewsLocaleSlugs } from "@/lib/hukuki-haberler";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { SITE } from "@/lib/site";

/** Tüm locale'lerde mevcut olan statik sayfalar. */
const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/practice-areas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

/** legal-news tüm 7 dilde yayınlanıyor (content/hukuki-haberler/{locale}/ mevcut). */
const LEGAL_NEWS_LOCALES = routing.locales;

/** Verilen locale listesi için alternate languages objesi üretir. */
function altLanguages(p: string, locales: readonly string[] = routing.locales): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) {
    out[l] = `${SITE.url}/${l}${p}`;
  }
  // x-default: TR (site'nin ana dili)
  out["x-default"] = `${SITE.url}/tr${p}`;
  return out;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // ── Statik sayfalar (tüm locale'ler) ──────────────────────────────────────
  for (const locale of routing.locales) {
    for (const { path, changeFrequency, priority } of STATIC_PATHS) {
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: altLanguages(path) },
      });
    }
    for (const area of PRACTICE_AREAS) {
      const p = `/practice-areas/${area.slug}`;
      entries.push({
        url: `${SITE.url}/${locale}${p}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: { languages: altLanguages(p) },
      });
    }
  }

  // ── Legal news (sadece TR + EN) ────────────────────────────────────────────
  for (const locale of LEGAL_NEWS_LOCALES) {
    // Liste sayfası
    entries.push({
      url: `${SITE.url}/${locale}/legal-news`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: altLanguages("/legal-news", LEGAL_NEWS_LOCALES) },
    });
    // Tekil haberler
    // Not: gazette slug konvansiyonu locale'e göre farklı (TR "-hukuki-haberler",
    // diğerleri "-legal-news"), bu yüzden alternate URL'leri post.slug'ı tüm
    // locale'lere kopyalayarak değil, her locale'in kendi gerçek slug'ını
    // bularak (getLegalNewsLocaleSlugs, date eşleştirmesi) oluşturuyoruz.
    const posts = await getAllGazettePosts(locale);
    for (const post of posts) {
      const localeSlugs = await getLegalNewsLocaleSlugs(locale, post.slug);
      const languages: Record<string, string> = {};
      for (const [loc, slug] of Object.entries(localeSlugs)) {
        languages[loc] = `${SITE.url}/${loc}/legal-news/${slug}`;
      }
      const xDefaultSlug = localeSlugs["en"] ?? localeSlugs["tr"];
      if (xDefaultSlug) {
        const xDefaultLocale = localeSlugs["en"] ? "en" : "tr";
        languages["x-default"] = `${SITE.url}/${xDefaultLocale}/legal-news/${xDefaultSlug}`;
      }

      entries.push({
        url: `${SITE.url}/${locale}/legal-news/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  // ── Makaleler: translationKey ile doğru çapraz-dil URL'leri ───────────────
  //
  // TR makaleleri Türkçe slug kullanır (örn. aile-ikamet-izni-turk-vatandasi-es).
  // EN/DE/RU/AR makaleleri İngilizce slug kullanır (family-residence-permit-...).
  // translationKey her dil versiyonunda aynıdır ve EN slug'a eşittir.
  // Bu nedenle her makale için alternate URL'leri locale'e özgü slug ile oluşturuyoruz.

  // 1. translationKey → { locale: slug } haritası kur
  const tkMap = new Map<string, Record<string, string>>();
  const tkDate = new Map<string, Date>();

  for (const locale of routing.locales) {
    const articles = await getAllArticles(locale);
    for (const a of articles) {
      const tk = a.translationKey ?? a.slug;
      if (!tkMap.has(tk)) tkMap.set(tk, {});
      tkMap.get(tk)![locale] = a.slug;
      // En erken tarihi sakla (lastModified için)
      const d = new Date(a.date);
      if (!tkDate.has(tk) || d > tkDate.get(tk)!) tkDate.set(tk, d);
    }
  }

  // 2. Her locale × translationKey için sitemap girdisi oluştur
  for (const locale of routing.locales) {
    const articles = await getAllArticles(locale);
    for (const a of articles) {
      const tk = a.translationKey ?? a.slug;
      const slugsByLocale = tkMap.get(tk) ?? {};

      // Sadece gerçekten var olan dilleri alternate olarak yaz
      const languages: Record<string, string> = {};
      for (const [loc, slug] of Object.entries(slugsByLocale)) {
        languages[loc] = `${SITE.url}/${loc}/articles/${slug}`;
      }
      // x-default → EN versiyonu (varsa), yoksa TR
      const xDefaultSlug = slugsByLocale["en"] ?? slugsByLocale["tr"];
      if (xDefaultSlug) {
        const xDefaultLocale = slugsByLocale["en"] ? "en" : "tr";
        languages["x-default"] = `${SITE.url}/${xDefaultLocale}/articles/${xDefaultSlug}`;
      }

      entries.push({
        url: `${SITE.url}/${locale}/articles/${a.slug}`,
        lastModified: tkDate.get(tk) ?? new Date(a.date),
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
