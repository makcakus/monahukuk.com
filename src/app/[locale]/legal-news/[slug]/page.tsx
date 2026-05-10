import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@/i18n/navigation";
import { getGazettePost, getAllGazettePosts } from "@/lib/hukuki-haberler";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const locales = ["tr", "en"] as const;
  const all = await Promise.all(
    locales.map(async (locale) => {
      const posts = await getAllGazettePosts(locale);
      return posts.map((p) => ({ locale, slug: p.slug }));
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
  if (locale !== "tr" && locale !== "en") return {};
  const post = await getGazettePost(locale, slug);
  if (!post) return {};

  // Aynı slug için TR ve EN'de versiyon var mı?
  const checks = await Promise.all(
    (["tr", "en"] as const).map(async (l) => {
      const p = await getGazettePost(l, slug);
      return p ? l : null;
    })
  );
  const availableLocales: string[] = checks.filter((l): l is NonNullable<typeof l> => l !== null);

  return pageMetadata({
    locale,
    path: `/legal-news/${slug}`,
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    availableLocales,
  });
}

export default async function GazettePostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "tr" && locale !== "en") notFound();
  setRequestLocale(locale);

  const post = await getGazettePost(locale, slug);
  if (!post) notFound();

  const t = await getTranslations("legalNews");
  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/legal-news"
        className="inline-flex items-center gap-1 text-sm text-ink-mute hover:text-navy-900 dark:hover:text-cream-50 mb-8"
      >
        <ArrowLeft size={14} className="rtl:rotate-180" />
        {t("backToList")}
      </Link>

      <p className="text-xs uppercase tracking-[0.2em] text-gold-700 dark:text-gold-400 mb-3">
        {t("eyebrow")}
      </p>

      <h1 className="font-display text-3xl md:text-5xl text-navy-950 dark:text-cream-50 leading-tight tracking-tight">
        {post.title}
      </h1>

      <p className="mt-5 text-sm text-ink-mute flex items-center gap-3">
        <span>
          {t("publishedOn")} {dateFmt.format(new Date(post.date))}
        </span>
        <span>·</span>
        <span>{post.readingMinutes} {t("minRead")}</span>
      </p>

      <span className="gold-divider mt-8 mb-8" />

      <div className="prose-legal">
        <MDXRemote source={post.body} />
      </div>
    </article>
  );
}
