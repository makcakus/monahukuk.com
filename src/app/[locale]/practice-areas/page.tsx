import { ArrowRight } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";

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
          {PRACTICE_AREAS.map((area, i) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gold-400 transition-all h-[280px]"
            >
              {/* Editoryal indeks numarası — ikonun yerini alır. Yalnızca görsel
                  bir işaret olduğu için ekran okuyucudan gizlenir; kartın anlamı
                  başlıkta. Altındaki altın kural çizgisi hover'da uzar (width
                  değil scaleX ile — layout hesaplaması tetiklenmesin). */}
              <div className="mb-3.5 shrink-0" aria-hidden="true">
                <div className="font-display text-[44px] font-light leading-[0.9] tracking-[0.02em] tabular-nums text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* origin RTL'de sağa alınır — Arapça'da çizgi sağ kenardan
                    başladığı için sola doğru uzaması gerekir. */}
                <span className="mt-3 block h-px w-[30px] origin-left rtl:origin-right bg-gold-400 transition-transform duration-200 group-hover:scale-x-[1.8] motion-reduce:transition-none" />
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
