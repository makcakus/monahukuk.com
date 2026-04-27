import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { TEAM } from "@/lib/team";

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
  const lang = locale as "en" | "tr";

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
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
                  {member.role[lang]}
                </p>

                <p className="mt-4 text-ink-soft leading-relaxed">
                  {member.bio[lang]}
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
                          {area[lang]}
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
    </>
  );
}
