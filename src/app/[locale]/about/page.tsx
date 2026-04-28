import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Globe, Award, Eye, Lock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";

const ICONS: Record<string, React.ReactNode> = {
  international: <Globe size={22} />,
  experience: <Award size={22} />,
  transparency: <Eye size={22} />,
  discretion: <Lock size={22} />,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCta = await getTranslations("cta");
  const tNav = await getTranslations("nav");

  const whyKeys = ["international", "experience", "transparency", "discretion"] as const;

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />

      {/* Body / Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-legal">
          <p>{t("body")}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-cream-200 bg-cream-100/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-2xl text-navy-900 mb-4">
            {t("mission.title")}
          </h2>
          <span className="gold-divider mb-6" />
          <p className="text-ink-soft leading-relaxed">{t("mission.body")}</p>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-t border-cream-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-2">
            {t("whyUs.title")}
          </h2>
          <span className="gold-divider mt-4" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {whyKeys.map((key) => (
              <div
                key={key}
                className="flex gap-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
              >
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                  {ICONS[key]}
                </span>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">
                    {t(`whyUs.items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {t(`whyUs.items.${key}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice areas overview with internal links */}
      <section className="border-t border-cream-200 bg-cream-100/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl text-navy-900 mb-4">
            {tNav("practiceAreas")}
          </h2>
          <span className="gold-divider mt-4" />
          <p className="mt-6 text-ink-soft max-w-2xl">{t("areasIntro")}</p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href="/practice-areas"
                  className="block rounded-md border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-900 hover:border-gold-400 hover:text-navy-700 transition-colors"
                >
                  {pickPA(area.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cream-200">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              {t("ctaTitle")}
            </h2>
            <p className="mt-4 text-ink-soft text-lg max-w-2xl">
              {t("ctaBody")}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3 text-sm font-medium text-navy-950 hover:bg-gold-600 hover:text-cream-50 transition-colors"
            >
              {tCta("consult")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
