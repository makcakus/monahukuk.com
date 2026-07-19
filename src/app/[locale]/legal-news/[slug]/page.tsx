import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@/i18n/navigation";
import { getGazettePost, getAllGazettePosts, getLegalNewsLocaleSlugs } from "@/lib/hukuki-haberler";
import { routing } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/ArticleSchema";

// Tüm gazette postları git ile deploy edilir, runtime'da değişmez; hepsi statik.
// dynamicParams=false: ön-derlenmeyen (var olmayan) slug'lar temiz 404 döner
// (OpenNext-Cloudflare'de on-demand fallback güvenilir çalışmıyor).
export const dynamicParams = false;

export async function generateStaticParams() {
  // routing.locales (zh dahil 8 dil) — önceki hardcoded 7'lik liste zh haberlerini
  // ön-derlemeyi atlıyordu, bu da Çince haber sayfalarının 404 dönmesine yol açıyordu.
  const all = await Promise.all(
    routing.locales.map(async (locale) => {
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
  const post = await getGazettePost(locale, slug);
  if (!post) return {};

  // Slug konvansiyonu locale'e göre farklı (TR: "-hukuki-haberler", diğerleri:
  // "-legal-news"), bu yüzden hreflang'ı date eşleştirmesiyle her locale'in
  // kendi gerçek slug'ından oluşturuyoruz.
  const localeSlugs = await getLegalNewsLocaleSlugs(locale, slug);
  const articleLanguages: Record<string, string> = {};
  for (const [l, s] of Object.entries(localeSlugs)) {
    articleLanguages[l] = `/legal-news/${s}`;
  }

  return pageMetadata({
    locale,
    path: `/legal-news/${slug}`,
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    articleLanguages: Object.keys(articleLanguages).length > 0 ? articleLanguages : undefined,
  });
}

export default async function GazettePostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getGazettePost(locale, slug);
  if (!post) notFound();

  const t = await getTranslations("legalNews");
  const IETF: Record<string, string> = { tr: "tr-TR", en: "en-GB", de: "de-DE", ru: "ru-RU", ar: "ar-SA", es: "es-ES", fr: "fr-FR" };
  const dateFmt = new Intl.DateTimeFormat(IETF[locale] ?? "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: t("backToList"), path: "/legal-news" },
          { name: post.title, path: `/legal-news/${slug}` },
        ]}
      />

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
