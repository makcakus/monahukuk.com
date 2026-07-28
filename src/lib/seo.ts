import type { Metadata } from "next";
import { SITE } from "./site";
import { routing } from "@/i18n/routing";

interface PageMetaInput {
  locale: string;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Per-locale relative paths for article hreflang. Keys: locale codes + "x-default". Values: path relative to /{locale}. */
  articleLanguages?: Record<string, string>;
  /** noindex sayfaları (newsletter onay sayfaları vb.) için. */
  noindex?: boolean;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
  type = "website",
  publishedTime,
  articleLanguages,
  noindex = false,
}: PageMetaInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${SITE.url}/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  // For article pages, use the per-locale paths derived from translationKey.
  // articleLanguages keys: locale codes + "x-default"; values: relative path, e.g. "/articles/some-slug".
  // For other pages, mirror the same path across all locales.
  const languages: Record<string, string> = {};
  if (articleLanguages) {
    for (const [lang, relPath] of Object.entries(articleLanguages)) {
      languages[lang] = `${SITE.url}/${lang}${relPath}`;
    }
    // x-default points to the EN version when available, otherwise the
    // current locale's own canonical URL (not hardcoded /en — that produced
    // a broken URL for TR-only content that has no EN translation).
    if (articleLanguages["en"]) {
      languages["x-default"] = `${SITE.url}/en${articleLanguages["en"]}`;
    } else {
      languages["x-default"] = `${SITE.url}/${locale}${cleanPath}`;
    }
  } else {
    for (const l of routing.locales) {
      languages[l] = `${SITE.url}/${l}${cleanPath === "/" ? "" : cleanPath}`;
    }
    languages["x-default"] = `${SITE.url}/tr${cleanPath === "/" ? "" : cleanPath}`;
  }

  const image = ogImage ?? `${SITE.url}${SITE.ogImage}`;

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE.name,
      locale: { tr: "tr_TR", en: "en_US", de: "de_DE", ru: "ru_RU", ar: "ar_SA", es: "es_ES", fr: "fr_FR", zh: "zh_CN" }[locale] ?? "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
