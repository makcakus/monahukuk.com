import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllArticles } from "@/lib/articles";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { SITE } from "@/lib/site";

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/practice-areas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

function altLanguages(p: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of routing.locales) {
    out[l] = `${SITE.url}/${l}${p}`;
  }
  return out;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

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
    const articles = await getAllArticles(locale);
    for (const a of articles) {
      const p = `/articles/${a.slug}`;
      entries.push({
        url: `${SITE.url}/${locale}${p}`,
        lastModified: new Date(a.date),
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: { languages: altLanguages(p) },
      });
    }
  }

  return entries;
}
