import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const SLUGS = ["confirmed", "unsubscribed", "expired", "invalid"] as const;
type Slug = (typeof SLUGS)[number];

const ICON: Record<Slug, typeof CheckCircle> = {
  confirmed: CheckCircle,
  unsubscribed: XCircle,
  expired: Clock,
  invalid: AlertTriangle,
};

const ICON_TONE: Record<Slug, string> = {
  confirmed: "text-emerald-600 dark:text-emerald-400",
  unsubscribed: "text-ink-soft dark:text-cream-300",
  expired: "text-amber-600 dark:text-amber-400",
  invalid: "text-rose-600 dark:text-rose-400",
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!SLUGS.includes(slug as Slug)) return {};
  const t = await getTranslations({ locale, namespace: "newsletterPages" });
  return pageMetadata({
    locale,
    path: `/newsletter/${slug}`,
    title: t(`${slug}Title` as `${Slug}Title`),
    description: t(`${slug}Body` as `${Slug}Body`),
    noindex: true,
  });
}

export default async function NewsletterResultPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!SLUGS.includes(slug as Slug)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("newsletterPages");
  const s = slug as Slug;
  const Icon = ICON[s];

  return (
    <>
      <PageHero title={t(`${s}Title` as `${Slug}Title`)} />
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <Icon className={`mx-auto mb-6 ${ICON_TONE[s]}`} size={48} strokeWidth={1.5} />
        <p className="text-ink-soft dark:text-cream-200 leading-relaxed">
          {t(`${s}Body` as `${Slug}Body`)}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/legal-news"
            className="inline-flex items-center justify-center rounded-sm bg-navy-900 px-5 text-sm font-medium text-cream-50 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-600 transition-colors h-[44px]"
          >
            {t("backToNews")}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-navy-200 px-5 text-sm font-medium text-navy-900 hover:bg-cream-100 dark:border-navy-700 dark:text-cream-100 dark:hover:bg-navy-800 transition-colors h-[44px]"
          >
            {t("backToHome")}
          </Link>
        </div>
      </section>
    </>
  );
}
