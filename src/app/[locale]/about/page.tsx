import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Scale, Award, Eye, Lock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { TEAM, pick } from "@/lib/team";
import { authorSlug } from "@/lib/author";
import { JsonLd } from "@/components/JsonLd";
import { personSchema } from "@/lib/schema";

const ICONS: Record<string, React.ReactNode> = {
  scope: <Scale size={22} />,
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
  const tTeam = await getTranslations("team");

  const whyKeys = ["scope", "experience", "transparency", "discretion"] as const;
  const founder = TEAM[0]; // Av. Mustafa AKÇAKUŞ
  const founderSlug = authorSlug(founder.name);

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />

      {/* Body / Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-legal">
          {t("body").split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
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
                className="flex gap-4 overflow-hidden rounded-xl border border-navy-100 bg-white p-6 shadow-sm h-[220px]"
              >
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                  {ICONS[key]}
                </span>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <h3 className="font-semibold text-navy-900 mb-2 leading-snug line-clamp-2 overflow-hidden">
                    {t(`whyUs.items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft line-clamp-5 overflow-hidden">
                    {t(`whyUs.items.${key}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Author profile — E-E-A-T */}
      <section
        id={founderSlug}
        className="border-t border-cream-200 scroll-mt-24"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 grid gap-10 md:grid-cols-3 items-start">
          <div className="md:col-span-1">
            <div className="relative aspect-square overflow-hidden rounded-sm bg-cream-100">
              <Image
                src="/team/mustafa.jpeg"
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-700 mb-3">
              {t("founderTitle")}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 leading-tight">
              {founder.name}
            </h2>
            <span className="gold-divider mt-5" />
            <p className="mt-5 text-sm text-ink-mute italic max-w-xl">
              {t("founderLead")}
            </p>
            <p className="mt-5 text-ink-soft leading-relaxed">
              {pick(founder.bio, locale)}
            </p>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                  {tTeam("labelEducation")}
                </dt>
                <dd className="mt-0.5 text-ink-soft">{founder.education}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                  {tTeam("labelBar")}
                </dt>
                <dd className="mt-0.5 text-ink-soft">{founder.bar}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                  {tTeam("labelAreas")}
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {founder.areas.map((area) => (
                    <span
                      key={area.en}
                      className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs text-navy-700"
                    >
                      {pick(area, locale)}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <Link
              href="/team"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy-900 hover:text-gold-700 transition-colors"
            >
              {t("founderViewProfile")}
              <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Person JSON-LD for E-E-A-T */}
        <JsonLd data={personSchema(founder, locale)} />
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
                  href={`/practice-areas/${area.slug}`}
                  className="flex h-[3.5rem] items-center overflow-hidden rounded-md border border-navy-100 bg-white px-4 text-sm font-medium text-navy-900 hover:border-gold-400 hover:text-navy-700 transition-colors"
                >
                  <span className="block w-full line-clamp-2 overflow-hidden">
                    {pickPA(area.title, locale)}
                  </span>
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
          <div className="md:col-span-4 md:text-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-medium text-navy-950 hover:bg-gold-600 hover:text-cream-50 transition-colors whitespace-nowrap w-full sm:w-auto h-[48px] flex-shrink-0"
            >
              <span className="block text-center">{tCta("consult")}</span>
              <ArrowRight size={16} className="shrink-0 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
