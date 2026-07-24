import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { getArticleSearchIndex } from "@/lib/articles";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { pageMetadata } from "@/lib/seo";
import { ArticlesBrowser, type BrowserGroup, type BrowserSubgroup } from "@/components/ArticlesBrowser";
import { TCK_GROUP_ORDER, getTckGroup, isTckArticle } from "@/lib/tck-groups";

const TCK_HEADING = "Türk Ceza Kanunu - Tüm Suçlar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "articles" });
  return pageMetadata({
    locale,
    path: "/articles",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("articles");

  const index = await getArticleSearchIndex(locale);

  const byCategory = new Map<string, typeof index>();
  for (const a of index) {
    const cat = a.category ?? t("uncategorized");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(a);
  }

  const groups: BrowserGroup[] = [];
  const seen = new Set<string>();
  for (const area of PRACTICE_AREAS) {
    const title = pickPA(area.title, locale);
    const items = byCategory.get(title) ?? [];

    if (locale === "tr" && area.slug === "ceza-hukuku") {
      const nonTck = items.filter((a) => !isTckArticle(a.slug));
      const tckBySlug = new Map<string, typeof items>();
      for (const a of items) {
        if (!isTckArticle(a.slug)) continue;
        const group = getTckGroup(a.slug)!;
        if (!tckBySlug.has(group)) tckBySlug.set(group, []);
        tckBySlug.get(group)!.push(a);
      }
      const subgroups: BrowserSubgroup[] = TCK_GROUP_ORDER.filter((g) =>
        tckBySlug.has(g)
      ).map((g) => ({ title: g, items: tckBySlug.get(g)! }));

      groups.push({
        category: title,
        iconKey: area.icon,
        practiceSlug: area.slug,
        items: nonTck,
      });

      if (subgroups.length > 0) {
        groups.push({
          category: TCK_HEADING,
          iconKey: "BookOpen",
          practiceSlug: null,
          items: [],
          subgroups,
        });
      }
    } else {
      groups.push({
        category: title,
        iconKey: area.icon,
        practiceSlug: area.slug,
        items,
      });
    }
    seen.add(title);
  }
  for (const cat of byCategory.keys()) {
    if (!seen.has(cat)) {
      groups.push({
        category: cat,
        iconKey: "BookOpen",
        practiceSlug: null,
        items: byCategory.get(cat)!,
      });
    }
  }

  const localeBcp47: Record<string, string> = {
    tr: "tr-TR",
    en: "en-GB",
    de: "de-DE",
    ru: "ru-RU",
    ar: "ar-SA",
    es: "es-ES",
    fr: "fr-FR",
  };
  const dateLocale = localeBcp47[locale] ?? "en-GB";

  return (
    <>
      <PageHero title={t("title")} />
      <section className="mx-auto max-w-4xl px-6 pb-20">
        {index.length === 0 ? (
          <p className="text-ink-mute italic pt-6">{t("empty")}</p>
        ) : (
          <ArticlesBrowser
            groups={groups}
            dateLocale={dateLocale}
            ui={{
              searchPlaceholder: t("searchPlaceholder"),
              searchClear: t("searchClear"),
              searchEmpty: t("searchEmpty"),
              searchResultsLabel: t("searchResultsLabel"),
              articleOne: t("articleOne"),
              articleMany: t("articleMany"),
              readMore: t("readMore"),
              minRead: t("minRead"),
              viewPracticeArea: t("viewPracticeArea"),
            }}
          />
        )}
      </section>
    </>
  );
}
