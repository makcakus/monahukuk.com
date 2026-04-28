import { Globe, Home, ShieldAlert, Users, Scale, Cpu, Briefcase, FileText, HardHat, Building2 } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";

const ICONS: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  Home: <Home size={22} />,
  ShieldAlert: <ShieldAlert size={22} />,
  Users: <Users size={22} />,
  Scale: <Scale size={22} />,
  Cpu: <Cpu size={22} />,
  Briefcase: <Briefcase size={22} />,
  FileText: <FileText size={22} />,
  HardHat: <HardHat size={22} />,
  Building2: <Building2 size={22} />,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "practiceAreas" });
  return pageMetadata({
    locale,
    path: "/practice-areas",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function PracticeAreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("practiceAreas");

  return (
    <>
      <PageHero title={t("title")} />
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.slug}
              className="flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex w-10 h-10 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                {ICONS[area.icon]}
              </div>
              <h2 className="mb-3 text-base font-semibold text-navy-900 leading-snug">
                {pickPA(area.title, locale)}
              </h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                {pickPA(area.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
