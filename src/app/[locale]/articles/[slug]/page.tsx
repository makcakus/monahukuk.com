import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@/i18n/navigation";
import { getArticle, getAllArticles } from "@/lib/articles";
import { routing } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

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
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
    },
  };
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

  const t = await getTranslations("articles");
  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/articles"
        className="inline-flex items-center gap-1 text-sm text-ink-mute hover:text-navy-900 mb-8"
      >
        <ArrowLeft size={14} />
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
      <span className="gold-divider mt-8 mb-8" />

      <div className="prose-legal">
        <MDXRemote source={article.body} />
      </div>
    </article>
  );
}
