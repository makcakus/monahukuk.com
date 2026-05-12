import { Globe, Home, ShieldAlert, Users, Scale, Cpu, Briefcase, FileText, HardHat, Building2, Key, ArrowRight } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
  Key: <Key size={22} />,
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
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gold-400 transition-all h-[280px]"
            >
              <div className="mb-4 inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                {ICONS[area.icon]}
              </div>
              <h2 className="mb-3 text-base font-semibold text-navy-900 leading-snug group-hover:text-navy-700 line-clamp-2 h-[2.75rem] overflow-hidden">
                {pickPA(area.title, locale)}
              </h2>
              <p className="text-sm leading-relaxed text-ink-soft line-clamp-4 overflow-hidden">
                {pickPA(area.description, locale)}
              </p>
              <span className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-medium text-gold-700 group-hover:gap-2 transition-all shrink-0">
                <ArrowRight size={14} className="rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
