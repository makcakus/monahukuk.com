import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

type Member = {
  name: string;
  role: string;
  education: string;
  bar: string;
  areas: string[];
  bio: string;
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
  const tAbout = await getTranslations("about");
  const tTeam = await getTranslations("team");
  const members = tTeam.raw("members") as Member[];

  return (
    <>
      <PageHero title={tAbout("title")} lead={tAbout("lead")} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-legal">
          <p>{tAbout("body")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-2xl font-semibold text-navy-900">
          {tTeam("title")}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-navy-900">{member.name}</h3>
                <p className="text-sm font-medium text-gold-600">{member.role}</p>
              </div>
              <p className="mb-5 grow text-sm leading-relaxed text-ink-soft">{member.bio}</p>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                    {tTeam("labelEducation")}
                  </dt>
                  <dd className="mt-0.5 text-ink-soft">{member.education}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                    {tTeam("labelBar")}
                  </dt>
                  <dd className="mt-0.5 text-ink-soft">{member.bar}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                    {tTeam("labelAreas")}
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-1">
                    {member.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-navy-50 px-2 py-0.5 text-xs text-navy-700"
                      >
                        {area}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
