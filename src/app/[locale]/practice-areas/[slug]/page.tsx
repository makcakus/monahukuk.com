import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { BreadcrumbSchema } from "@/components/ArticleSchema";
import {
  getPracticeAreaContent,
  pickList,
  pickFaqs,
} from "@/lib/practice-areas-content";
import { getAllArticles } from "@/lib/articles";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PRACTICE_AREAS.map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};

  const content = getPracticeAreaContent(slug);
  const title =
    content?.metaTitle && pickPA(content.metaTitle, locale)
      ? pickPA(content.metaTitle, locale)
      : pickPA(area.title, locale);
  const description =
    content?.metaDescription && pickPA(content.metaDescription, locale)
      ? pickPA(content.metaDescription, locale)
      : pickPA(area.description, locale);

  return pageMetadata({
    locale,
    path: `/practice-areas/${slug}`,
    title,
    description,
  });
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const t = await getTranslations("practiceAreas");
  const content = getPracticeAreaContent(slug);

  const title = pickPA(area.title, locale);
  const description = pickPA(area.description, locale);
  const intro = content ? pickPA(content.intro, locale) : description;
  const services = content ? pickList(content.services, locale) : [];
  const process = content ? pickPA(content.process, locale) : "";
  const faqs = content ? pickFaqs(content.faqs, locale) : [];

  // Related articles by category match
  const allArticles = await getAllArticles(locale);
  const related = allArticles
    .filter((art) => art.category === title)
    .slice(0, 6);

  // FAQ schema for SEO
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: t("title"), path: "/practice-areas" },
          { name: title, path: `/practice-areas/${slug}` },
        ]}
      />

      <PageHero kicker={t("title")} title={title} />

      <article className="mx-auto max-w-3xl px-6 pb-20">
        <div className="-mt-4 mb-10">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-navy-900 dark:text-cream-200 dark:hover:text-cream-50 transition-colors"
          >
            <ArrowLeft size={14} className="rtl:rotate-180" />
            {t("backToList")}
          </Link>
        </div>

        {/* Intro */}
        <div className="prose-legal">
          {intro.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Services */}
        {services.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-navy-900 dark:text-cream-50 mb-6">
              {t("servicesTitle")}
            </h2>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400"
                    strokeWidth={1.75}
                  />
                  <span className="text-ink-soft dark:text-cream-200 leading-relaxed">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Process */}
        {process && (
          <section className="mt-14 rounded-xl border border-cream-200 dark:border-navy-800 bg-cream-100/60 dark:bg-navy-900/40 p-7">
            <h2 className="font-display text-2xl text-navy-900 dark:text-cream-50 mb-4">
              {t("processTitle")}
            </h2>
            <p className="text-ink-soft dark:text-cream-200 leading-relaxed">
              {process}
            </p>
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-navy-900 dark:text-cream-50 mb-6">
              {t("faqTitle")}
            </h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-md border border-cream-200 dark:border-navy-800 bg-white dark:bg-navy-900/40 overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4 text-navy-900 dark:text-cream-50 font-medium">
                    <span>{f.q}</span>
                    <span className="mt-1 text-gold-600 dark:text-gold-400 transition-transform group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-ink-soft dark:text-cream-200 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl text-navy-900 dark:text-cream-50 mb-6">
              {t("relatedArticlesTitle")}
            </h2>
            <ul className="space-y-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/articles/${a.slug}`}
                    className="group flex items-start justify-between gap-4 overflow-hidden rounded-md border border-cream-200 dark:border-navy-800 bg-white dark:bg-navy-900/40 px-5 py-4 hover:border-gold-400 dark:hover:border-gold-500 transition-colors h-[72px]"
                  >
                    <span className="min-w-0 flex-1 text-navy-900 dark:text-cream-50 font-medium leading-snug line-clamp-2 overflow-hidden">
                      {a.title}
                    </span>
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 text-ink-mute group-hover:text-gold-600 dark:text-cream-200 transition-colors rtl:rotate-180"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 rounded-xl bg-navy-900 dark:bg-gold-500 p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-cream-50 dark:text-navy-950 mb-3">
            {t("ctaTitle")}
          </h2>
          <p className="text-cream-200/90 dark:text-navy-900 mb-6 max-w-xl mx-auto leading-relaxed">
            {t("ctaBody")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold-400 px-6 text-sm font-medium text-navy-950 hover:bg-gold-500 transition-colors whitespace-nowrap w-full sm:w-auto h-[48px] flex-shrink-0"
          >
            <span className="block text-center">{t("ctaButton")}</span>
            <ArrowRight size={16} className="shrink-0 rtl:rotate-180" />
          </Link>
        </section>
      </article>
    </>
  );
}

