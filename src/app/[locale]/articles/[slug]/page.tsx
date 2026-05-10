import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@/i18n/navigation";
import { getArticle, getAllArticles, extractFaqPairs } from "@/lib/articles";
import { routing } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from "@/components/ArticleSchema";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateStaticParams() {
  const all = await Promise.all(
    routing.locales.map(async (locale) => {
      const articles = await getAllArticles(locale);
      return articles.map((a) => ({ locale, slug: a.slug }));
    })
  );
  return all.flat();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = await getArticle(locale, slug);
  if (!article) return {};

  // Build per-locale hreflang URLs using translationKey
  let articleLanguages: Record<string, string> | undefined;
  const tk = article.translationKey;
  if (tk) {
    const langs: Record<string, string> = {};

    // EN, DE, RU: translationKey === their slug
    for (const loc of ["en", "de", "ru"] as const) {
      if (loc === locale) {
        langs[loc] = `/articles/${slug}`;
      } else {
        const exists = await getArticle(loc, tk);
        if (exists) langs[loc] = `/articles/${tk}`;
      }
    }

    // TR: find the TR article whose translationKey matches tk
    if (locale === "tr") {
      langs["tr"] = `/articles/${slug}`;
    } else {
      const allTr = await getAllArticles("tr");
      const trArticle = allTr.find((a) => a.translationKey === tk);
      if (trArticle) langs["tr"] = `/articles/${trArticle.slug}`;
    }

    articleLanguages = langs;
  }

  return pageMetadata({
    locale,
    path: `/articles/${slug}`,
    title: article.title,
    description: article.description,
    type: "article",
    publishedTime: article.date,
    extraKeywords: article.category ? [article.category] : [],
    articleLanguages,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = await getArticle(locale, slug);
  if (!article) notFound();

  const faqPairs = extractFaqPairs(article.body);
  const t = await getTranslations("articles");
  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const TITLE_PREFIX: Record<string, string> = {
    tr: "Av.",
    en: "Att.",
    de: "RA",
    ru: "Адв.",
  };
  const BAR_LABEL: Record<string, string> = {
    tr: "Antalya Barosu",
    en: "Antalya Bar Association",
    de: "Antalya Rechtsanwaltskammer",
    ru: "Коллегия адвокатов Анталии",
  };
  const titlePrefix = TITLE_PREFIX[locale] ?? "Av.";
  const barLabel = BAR_LABEL[locale] ?? "Antalya Barosu";

  // article.author genellikle "Av. Mustafa Akcakuş" şeklindedir;
  // unvanı çıkarıp locale'e göre yeniden ekleyelim.
  const rawAuthor = article.author ?? "";
  const authorName = rawAuthor
    .replace(/^(Av\.|Att\.|RA|Адв\.)\s*/i, "")
    .trim();
  const authorLabel = authorName ? `${titlePrefix} ${authorName}` : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <ArticleSchema
        locale={locale}
        slug={slug}
        title={article.title}
        description={article.description}
        date={article.date}
        category={article.category}
        author={article.author}
        wordCount={article.wordCount}
      />
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: t("title"), path: "/articles" },
          { name: article.title, path: `/articles/${slug}` },
        ]}
      />
      <FAQPageSchema pairs={faqPairs} />

      <Link
        href="/articles"
        className="inline-flex items-center gap-1 text-sm text-ink-mute hover:text-navy-900 mb-8"
      >
        <ArrowLeft size={14} className="rtl:rotate-180" />
        {t("title")}
      </Link>

      {article.category && (
        <p className="text-xs uppercase tracking-[0.2em] text-gold-700 mb-3">
          {article.category}
        </p>
      )}
      <h1 className="font-display text-3xl md:text-5xl text-navy-950 leading-tight tracking-tight">
        {article.title}
      </h1>
      <p className="mt-5 text-sm text-ink-mute flex items-center gap-3">
        <span>
          {t("publishedOn")} {dateFmt.format(new Date(article.date))}
        </span>
        <span>·</span>
        <span>{article.readingMinutes} {t("minRead")}</span>
      </p>
      {authorLabel && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          <Link href={`/${locale}/team`} className="hover:underline font-medium">
            {authorLabel}
          </Link>
          {" · "}
          {barLabel}
        </p>
      )}
      <span className="gold-divider mt-8 mb-8" />

      <div className="prose-legal">
        <MDXRemote source={article.body} />
      </div>

      <RelatedArticles
        locale={locale}
        currentSlug={slug}
        category={article.category}
        manualRelated={article.relatedSlugs}
      />
    </article>
  );
}
