import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { CinematicHero } from "@/components/CinematicHero";
import { NewsletterInlineCTA } from "@/components/NewsletterInlineCTA";

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

  return (
    <>
      <div className="-mt-12">
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
            <Link
              href="/remote-representation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 hover:text-gold-800 underline decoration-gold-400 underline-offset-4"
            >
              {t("foreignClients.remoteLink")}
              <ArrowRight size={15} className="shrink-0 rtl:rotate-180" />
            </Link>
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

      {/* Newsletter */}
      <section className="border-t border-cream-200 bg-cream-100/40">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <NewsletterInlineCTA id="newsletter" />
        </div>
      </section>
    </>
  );
}
