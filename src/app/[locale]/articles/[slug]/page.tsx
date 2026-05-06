import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@/i18n/navigation";
import { getArticle, getAllArticles, extractFaqPairs } from "@/lib/articles";
import { editorialTeamLabel, editorialTeamPlain } from "@/lib/editorial-team";
import { routing } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from "@/components/ArticleSchema";
import { NewsletterInlineCTA } from "@/components/NewsletterInlineCTA";
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

  // Aynı slug için her dilde versiyon var mı? Hreflang yalnızca var olan dillere yazılsın.
  const checks = await Promise.all(
    routing.locales.map(async (l) => {
      const a = await getArticle(l, slug);
      return a ? l : null;
    })
  );
  const availableLocales: string[] = checks.filter((l): l is NonNullable<typeof l> => l !== null);

  return pageMetadata({
    locale,
    path: `/articles/${slug}`,
    title: article.title,
    description: article.description,
    type: "article",
    publishedTime: article.date,
    extraKeywords: article.category ? [article.category] : [],
    availableLocales,
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

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <ArticleSchema
        locale={locale}
        slug={slug}
        title={article.title}
        description={article.description}
        date={article.date}
        category={article.category}
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

      {/* Yazar satırı: brand /[locale]/about'a link, "Yazar:" prefiksi yok,
          baro bilgisi yok — kurumsal "MONA HUKUK Editör Ekibi" etiketi. */}
      {(() => {
        const team = editorialTeamLabel(locale);
        return (
          <p className="mt-6 text-sm text-ink-soft flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="flex flex-wrap items-baseline">
              {team.prefix && <span>{team.prefix}</span>}
              <Link
                href="/about"
                className="font-medium text-navy-900 hover:underline transition-colors"
              >
                {team.brand}
              </Link>
              {team.suffix && <span>{team.suffix}</span>}
            </span>
            <span className="text-ink-mute">·</span>
            <span>
              {t("publishedOn")} {dateFmt.format(new Date(article.date))}
            </span>
            <span className="text-ink-mute">·</span>
            <span>
              {article.readingMinutes} {t("minRead")}
            </span>
          </p>
        );
      })()}
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

      <div className="mt-12">
        <NewsletterInlineCTA />
      </div>
    </article>
  );
}
