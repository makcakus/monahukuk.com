import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return pageMetadata({
    locale,
    path: "/",
    title: `${t("name")} — ${t("tagline")}`,
    description: t("description"),
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-700 mb-6">
              {t("hero.kicker")}
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-navy-950 leading-[1.05] tracking-tight">
              {t("hero.title")}
            </h1>
            <span className="gold-divider mt-8" />
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
              {t("hero.lead")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-6 py-3 text-sm font-medium text-cream-50 hover:bg-navy-800 transition-colors"
              >
                {tCta("consult")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice intro */}
      <section className="border-t border-cream-200 bg-cream-100/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-ink-soft leading-relaxed text-lg">
            {t("practiceIntro")}
          </p>
        </div>
      </section>

      {/* Foreign clients */}
      <section className="border-t border-cream-200">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              {t("foreignClients.title")}
            </h2>
            <span className="gold-divider mt-6" />
            <p className="mt-6 text-ink-soft leading-relaxed">
              {t("foreignClients.lead")}
            </p>
          </div>
          <ul className="space-y-4 pt-2">
            {[
              t("foreignClients.item1"),
              t("foreignClients.item2"),
              t("foreignClients.item3"),
              t("foreignClients.item4"),
              t("foreignClients.item5"),
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                <span className="text-ink-soft leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-cream-200 bg-cream-100/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-2xl text-navy-900 mb-6">
            {t("approach.title")}
          </h2>
          <p className="text-ink-soft leading-relaxed">{t("approach.body")}</p>
          <p className="mt-4 text-ink-soft leading-relaxed font-medium">
            {t("approach.closing")}
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-t border-cream-200">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              {t("ctaBanner.title")}
            </h2>
            <p className="mt-4 text-ink-soft text-lg max-w-2xl">
              {t("ctaBanner.body")}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3 text-sm font-medium text-navy-950 hover:bg-gold-600 hover:text-cream-50 transition-colors"
            >
              {t("ctaBanner.button")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
