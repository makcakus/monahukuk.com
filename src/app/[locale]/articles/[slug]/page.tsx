import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound, permanentRedirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ReactMarkdown from "react-markdown";
import { Link } from "@/i18n/navigation";
import { getArticle, getAllArticles, extractFaqPairs, getAdjacentArticles } from "@/lib/articles";
import { routing } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { resolveArticleFallback } from "@/lib/article-fallback";
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from "@/components/ArticleSchema";
import { RelatedArticles } from "@/components/RelatedArticles";
import { NewsletterInlineCTA } from "@/components/NewsletterInlineCTA";
import { ArticleNavButtons } from "@/components/ArticleNavButtons";
import { ReadingProgress } from "@/components/ReadingProgress";

// Build anında var olan tüm makaleler generateStaticParams ile tam statik
// üretilir (davranış değişmedi). dynamicParams=true (varsayılan) olduğu için,
// build sonrası eklenip yalnızca R2'ye senkronize edilmiş (scripts/sync-
// articles-to-r2.mjs) yeni bir makalenin URL'i istendiğinde, getArticle()
// içindeki R2 fallback'iyle on-demand render edilir — tam site rebuild'i
// gerekmeden. Var olmayan bir slug için notFound() hâlâ temiz 404 üretir.
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

    // EN, DE, RU, AR: translationKey === their slug
    for (const loc of ["en", "de", "ru", "ar", "es", "fr", "zh"] as const) {
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

  const { SITE } = await import("@/lib/site");
  const ogImage = article.image
    ? `${SITE.url}${article.image}`
    : undefined;

  return pageMetadata({
    locale,
    path: `/articles/${slug}`,
    title: article.title,
    description: article.description,
    type: "article",
    publishedTime: article.date,
    articleLanguages,
    ogImage,
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
  if (!article) {
    // Makale bu locale'de yok: slug başka bir dilin slug'ı olabilir ya da makale
    // bu dile hiç çevrilmemiş olabilir. Her iki durumda da 404 yerine var olan
    // sürüme 308 veriyoruz (GSC "Bulunamadı (404)" raporunun ana kaynağıydı).
    const fallback = resolveArticleFallback(locale, slug);
    if (fallback) permanentRedirect(fallback);
    notFound();
  }

  const faqPairs = extractFaqPairs(article.body);
  const { prev: prevArticle, next: nextArticle } = await getAdjacentArticles(locale, {
    slug,
    category: article.category,
  });
  const t = await getTranslations("articles");
  const localeBcp47: Record<string, string> = {
    tr: "tr-TR",
    en: "en-GB",
    de: "de-DE",
    ru: "ru-RU",
    ar: "ar-SA",
    es: "es-ES",
    fr: "fr-FR",
    zh: "zh-CN",
  };
  const dateFmt = new Intl.DateTimeFormat(localeBcp47[locale] ?? "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const TITLE_PREFIX: Record<string, string> = {
    tr: "Av.",
    en: "Att.",
    de: "RA",
    ru: "Адв.",
    ar: "المحامي",
    es: "Abog.",
    fr: "Me.",
    zh: "律师",
  };
  const BAR_LABEL: Record<string, string> = {
    tr: "Antalya Barosu",
    en: "Antalya Bar Association",
    de: "Antalya Rechtsanwaltskammer",
    ru: "Коллегия адвокатов Анталии",
    ar: "نقابة محامي أنطاليا",
    es: "Colegio de Abogados de Antalya",
    fr: "Barreau d'Antalya",
    zh: "安塔利亚律师协会",
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
    <>
      <ReadingProgress />
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
      <div className="flex items-center justify-between gap-4 mt-1 flex-wrap">
        {authorLabel && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <Link href="/team" className="hover:underline font-medium">
              {authorLabel}
            </Link>
            {" · "}
            {barLabel}
          </p>
        )}
        <ArticleNavButtons prevArticle={prevArticle} nextArticle={nextArticle} />
      </div>
      <span className="gold-divider mt-8 mb-8" />

      <div className="prose-legal">
        {article.source === "r2" ? (
          // R2'den (build sonrası senkronize edilmiş, henüz statik üretilmemiş
          // içerik) gelen sayfalar gerçek request-time'da Worker içinde render
          // ediliyor. MDXRemote'un çalışma zamanı derlemesi `new Function`
          // kullanıyor; Cloudflare Workers bunu izin vermiyor. react-markdown
          // AST tabanlı olduğu için eval gerektirmiyor — build anında üretilen
          // (MDXRemote ile, fs'ten okunan) sayfalarda davranış değişmiyor.
          <ReactMarkdown>{article.body}</ReactMarkdown>
        ) : (
          <MDXRemote source={article.body} />
        )}
      </div>

      <div className="mt-12">
        <NewsletterInlineCTA />
      </div>

      <RelatedArticles
        locale={locale}
        currentSlug={slug}
        category={article.category}
        manualRelated={article.relatedSlugs}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
      </article>
    </>
  );
}
