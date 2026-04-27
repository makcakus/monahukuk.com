import { SITE } from "@/lib/site";

export function ArticleSchema({
  locale,
  slug,
  title,
  description,
  date,
  category,
}: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
}) {
  const url = `${SITE.url}/${locale}/articles/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    articleSection: category,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [`${SITE.url}/${locale}/articles/${slug}/opengraph-image`],
    author: { "@type": "Organization", "@id": `${SITE.url}#organization`, name: SITE.name },
    publisher: { "@id": `${SITE.url}#organization` },
    isAccessibleForFree: true,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  locale,
  items,
}: {
  locale: string;
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: `${SITE.url}/${locale}${it.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
