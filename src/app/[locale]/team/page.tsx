import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { TEAM, pick } from "@/lib/team";

const PHOTO_BY_NAME: Record<string, string> = {
  "Av. Mustafa AKÇAKUŞ": "/team/mustafa.jpeg",
  "Av. Aykut ACAR": "/team/aykut.jpeg",
  "Av. Murat BOSTAN": "/team/murat.jpeg",
  "Av. Mehmet SİMAV": "/team/mehmet.jpeg",
  "Stj. Av. Tuğba Yazar": "/team/tugba.jpeg",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return pageMetadata({
    locale,
    path: "/team",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");
  const tCta = await getTranslations("cta");
  const lang = locale;

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />

      {/* Intro / SEO content */}
      <section className="mx-auto max-w-3xl px-6 pt-8 pb-4">
        <p className="text-ink-soft leading-relaxed">{t("intro")}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        {TEAM.map((member) => {
          const photo = PHOTO_BY_NAME[member.name];
          return (
            <article
              key={member.name}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-b border-cream-200 pb-16 last:border-b-0 last:pb-0"
            >
              <div className="md:col-span-1">
                <div className="relative aspect-square overflow-hidden rounded-sm bg-cream-100">
                  {photo && (
                    <Image
                      src={photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl text-navy-900">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-gold-700">
                  {pick(member.role, lang)}
                </p>

                <p className="mt-4 text-ink-soft leading-relaxed">
                  {pick(member.bio, lang)}
                </p>

                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                      {t("labelEducation")}
                    </dt>
                    <dd className="mt-0.5 text-ink-soft">{member.education}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                      {t("labelBar")}
                    </dt>
                    <dd className="mt-0.5 text-ink-soft">{member.bar}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                      {t("labelAreas")}
                    </dt>
                    <dd className="mt-1 flex flex-wrap gap-1.5">
                      {member.areas.map((area) => (
                        <span
                          key={area.en}
                          className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs text-navy-700"
                        >
                          {pick(area, lang)}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}
      <section className="border-t border-cream-200 bg-cream-100/60">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900">
              {t("ctaTitle")}
            </h2>
            <p className="mt-4 text-ink-soft max-w-2xl">{t("ctaBody")}</p>
          </div>
          <div className="md:col-span-4 md:text-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-500 px-6 text-sm font-medium text-navy-950 hover:bg-gold-600 hover:text-cream-50 transition-colors whitespace-nowrap w-full sm:w-[220px] h-[48px] flex-shrink-0"
            >
              <span className="block min-w-0 flex-1 truncate text-center">{tCta("consult")}</span>
              <ArrowRight size={16} className="shrink-0 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
