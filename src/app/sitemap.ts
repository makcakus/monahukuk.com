import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllArticles } from "@/lib/articles";

const BASE = "https://monahukuk.com";

const STATIC_PATHS = [
  "",
  "/about",
  "/practice-areas",
  "/team",
  "/articles",
  "/contact",
  "/privacy-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const p of STATIC_PATHS) {
      entries.push({
        url: `${BASE}/${locale}${p}`,
        lastModified: now,
        changeFrequency: p === "" ? "weekly" : "monthly",
        priority: p === "" ? 1 : 0.7,
      });
    }
    const articles = await getAllArticles(locale);
    for (const a of articles) {
      entries.push({
        url: `${BASE}/${locale}/articles/${a.slug}`,
        lastModified: new Date(a.date),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
