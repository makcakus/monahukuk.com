import type { Metadata } from "next";
import { SITE, KEYWORDS } from "./site";
import { routing } from "@/i18n/routing";

interface PageMetaInput {
  locale: string;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  extraKeywords?: string[];
  noindex?: boolean;
  /**
   * Bu içeriğin gerçekten var olduğu diller.
   * Verilmezse routing.locales (tüm diller) kabul edilir.
   * Verildiğinde, hreflang yalnızca listedeki diller için üretilir → 404'e işaret eden
   * alternate önlenir. Article gibi her dilde versiyonu olmayan içerikler için kullan.
   */
  availableLocales?: readonly string[];
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
  type = "website",
  publishedTime,
  extraKeywords = [],
  noindex = false,
  availableLocales,
}: PageMetaInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${SITE.url}/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  const allowed: readonly string[] =
    availableLocales && availableLocales.length
      ? availableLocales
      : routing.locales;

  const languages: Record<string, string> = {};
  for (const l of allowed) {
    languages[l] = `${SITE.url}/${l}${cleanPath === "/" ? "" : cleanPath}`;
  }

  // x-default sırası: en > tr > listedeki ilk dil
  const xDefaultLocale = allowed.includes("en")
    ? "en"
    : allowed.includes("tr")
      ? "tr"
      : allowed[0];
  if (xDefaultLocale) {
    languages["x-default"] = `${SITE.url}/${xDefaultLocale}${cleanPath === "/" ? "" : cleanPath}`;
  }

  const baseKw = KEYWORDS[locale] ?? KEYWORDS["tr"];
  const keywords = [...extraKeywords, ...baseKw];

  const image = ogImage ?? `${SITE.url}${SITE.ogImage}`;

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    keywords,
    alternates: { canonical, languages },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE.name,
      locale: { tr: "tr_TR", de: "de_DE", ru: "ru_RU", ar: "ar_SA" }[locale] ?? "en_US",
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
