import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { getArticleSearchIndex } from "@/lib/articles";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { pageMetadata } from "@/lib/seo";
import { ArticlesBrowser, type BrowserGroup } from "@/components/ArticlesBrowser";

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

  const HIDDEN_CATEGORIES = new Set([
    // Criminal Law — all locale variants
    "Criminal Law", "Strafrecht", "Ceza Hukuku", "Уголовное право",
    "قانون العقوبات", "Derecho Penal", "Droit pénal",
    // Labour Law — all locale variants
    "Labour Law", "Arbeitsrecht", "İş Hukuku", "Трудовое право",
    "قانون العمل", "Derecho Laboral", "Droit du travail",
  ]);

  const groups: BrowserGroup[] = [];
  const seen = new Set<string>();
  for (const area of PRACTICE_AREAS) {
    const title = pickPA(area.title, locale);
    if (byCategory.has(title)) {
      groups.push({
        category: title,
        iconKey: area.icon,
        practiceSlug: area.slug,
        items: byCategory.get(title)!,
      });
      seen.add(title);
    }
  }
  for (const cat of byCategory.keys()) {
    if (!seen.has(cat) && !HIDDEN_CATEGORIES.has(cat)) {
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
              relatedSuffix: t("relatedSuffix"),
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
