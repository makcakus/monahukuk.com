import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { getArticleSearchIndex } from "@/lib/articles";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { pageMetadata } from "@/lib/seo";
import { ArticlesBrowser, type BrowserGroup, type BrowserSubgroup } from "@/components/ArticlesBrowser";
import { TCK_GROUP_ORDER, getTckGroup, isTckArticle } from "@/lib/tck-groups";
import { CMK_GROUP_ORDER, getCmkGroup, isCmkArticle } from "@/lib/cmk-groups";
import {
  IS_HUKUKU_GROUP_ORDER,
  getIsHukukuGroup,
  isIsHukukuMevzuatArticle,
} from "@/lib/is-hukuku-groups";
import { TTK_GROUP_ORDER, getTtkGroup, isTtkArticle } from "@/lib/ttk-groups";

const TCK_HEADING = "Türk Ceza Kanunu - Tüm Suçlar";
const CMK_HEADING = "Ceza Muhakemesi Kanunu";
const IS_HUKUKU_HEADING = "İş Hukuku Mevzuatı";
const TTK_HEADING = "Türk Ticaret Kanunu - Ticari İşletme";

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
      const nonSeries = items.filter(
        (a) => !isTckArticle(a.slug) && !isCmkArticle(a.slug)
      );
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

      const cmkBySlug = new Map<string, typeof items>();
      for (const a of items) {
        if (!isCmkArticle(a.slug)) continue;
        const group = getCmkGroup(a.slug)!;
        if (!cmkBySlug.has(group)) cmkBySlug.set(group, []);
        cmkBySlug.get(group)!.push(a);
      }
      const cmkSubgroups: BrowserSubgroup[] = CMK_GROUP_ORDER.filter((g) =>
        cmkBySlug.has(g)
      ).map((g) => ({ title: g, items: cmkBySlug.get(g)! }));

      groups.push({
        category: title,
        iconKey: area.icon,
        practiceSlug: area.slug,
        items: nonSeries,
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

      if (cmkSubgroups.length > 0) {
        groups.push({
          category: CMK_HEADING,
          iconKey: "BookOpen",
          practiceSlug: null,
          items: [],
          subgroups: cmkSubgroups,
        });
      }
    } else if (locale === "tr" && area.slug === "is-hukuku") {
      const nonSeries = items.filter((a) => !isIsHukukuMevzuatArticle(a.slug));
      const isHukukuBySlug = new Map<string, typeof items>();
      for (const a of items) {
        if (!isIsHukukuMevzuatArticle(a.slug)) continue;
        const group = getIsHukukuGroup(a.slug)!;
        if (!isHukukuBySlug.has(group)) isHukukuBySlug.set(group, []);
        isHukukuBySlug.get(group)!.push(a);
      }
      const isHukukuSubgroups: BrowserSubgroup[] = IS_HUKUKU_GROUP_ORDER.filter(
        (g) => isHukukuBySlug.has(g)
      ).map((g) => ({ title: g, items: isHukukuBySlug.get(g)! }));

      groups.push({
        category: title,
        iconKey: area.icon,
        practiceSlug: area.slug,
        items: nonSeries,
      });

      if (isHukukuSubgroups.length > 0) {
        groups.push({
          category: IS_HUKUKU_HEADING,
          iconKey: "BookOpen",
          practiceSlug: null,
          items: [],
          subgroups: isHukukuSubgroups,
        });
      }
    } else if (locale === "tr" && area.slug === "ticaret-sirketler-hukuku") {
      const nonSeries = items.filter((a) => !isTtkArticle(a.slug));
      const ttkBySlug = new Map<string, typeof items>();
      for (const a of items) {
        if (!isTtkArticle(a.slug)) continue;
        const group = getTtkGroup(a.slug)!;
        if (!ttkBySlug.has(group)) ttkBySlug.set(group, []);
        ttkBySlug.get(group)!.push(a);
      }
      const ttkSubgroups: BrowserSubgroup[] = TTK_GROUP_ORDER.filter((g) =>
        ttkBySlug.has(g)
      ).map((g) => ({ title: g, items: ttkBySlug.get(g)! }));

      groups.push({
        category: title,
        iconKey: area.icon,
        practiceSlug: area.slug,
        items: nonSeries,
      });

      if (ttkSubgroups.length > 0) {
        groups.push({
          category: TTK_HEADING,
          iconKey: "BookOpen",
          practiceSlug: null,
          items: [],
          subgroups: ttkSubgroups,
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
