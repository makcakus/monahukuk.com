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
}: PageMetaInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${SITE.url}/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${SITE.url}/${l}${cleanPath === "/" ? "" : cleanPath}`;
  }
  languages["x-default"] = `${SITE.url}/en${cleanPath === "/" ? "" : cleanPath}`;

  const baseKw = KEYWORDS[locale === "tr" ? "tr" : "en"];
  const keywords = [...extraKeywords, ...baseKw];

  const image = ogImage ?? `${SITE.url}${SITE.ogImage}`;

  return {
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
      locale: locale === "tr" ? "tr_TR" : "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
