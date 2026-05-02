import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { CinematicHero } from "@/components/CinematicHero";

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
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const compactHero = ["tr", "de", "ru"].includes(locale);

  return (
    <>
      <div className={compactHero ? "-mt-1" : ""}>
        <CinematicHero />
      </div>

      {/* Practice intro */}
      <section className="bg-cream-100/60">
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
          <div className="md:col-span-4 md:text-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-500 px-6 text-sm font-medium text-navy-950 hover:bg-gold-600 hover:text-cream-50 transition-colors whitespace-nowrap w-full sm:w-[220px] h-[48px] flex-shrink-0"
            >
              <span className="block min-w-0 flex-1 truncate text-center">{t("ctaBanner.button")}</span>
              <ArrowRight size={16} className="shrink-0 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
