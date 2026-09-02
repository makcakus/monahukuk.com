import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { CinematicHero } from "@/components/CinematicHero";
import { NewsletterInlineCTA } from "@/components/NewsletterInlineCTA";
import { Reveal } from "@/components/Reveal";

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

      {/* Practice intro — perde: sayfa gövdesi hero'nun üstüne kayar.
          Blok içinde ayrıca hareket yok; perdenin kendisi bu bölümün hareketi. */}
      <section className="sd-curtain sd-curtain-panel -mt-14">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16">
          <p className="text-ink-soft leading-relaxed text-lg">
            {t("practiceIntro")}
          </p>
        </div>
      </section>

      {/* Foreign clients — başlık yükselir, ayraç kendini çizer, liste sırayla düşer */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-20 grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              {t("foreignClients.title")}
            </h2>
            <span className="gold-divider sd-draw mt-6" />
            <p className="mt-6 text-ink-soft leading-relaxed">
              {t("foreignClients.lead")}
            </p>
            <Link
              href="/remote-representation"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 hover:text-gold-800 underline decoration-gold-400 underline-offset-4"
            >
              {t("foreignClients.remoteLink")}
              <ArrowRight size={15} className="shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
          <ul className="space-y-4 pt-2">
            {[
              t("foreignClients.item1"),
              t("foreignClients.item2"),
              t("foreignClients.item3"),
              t("foreignClients.item4"),
              t("foreignClients.item5"),
            ].map((item, i) => (
              <Reveal key={item} as="li" variant="soft" step={i} className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                <span className="text-ink-soft leading-relaxed">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach — koyu editoryal bant. Krem -> lacivert ton devri; metin
          her iki temada da açık renk kalır, scroll sırasında kontrast değişmez. */}
      <section className="sd-band">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
          <Reveal variant="settle">
            <h2 className="font-display text-3xl md:text-4xl text-cream-50">
              {t("approach.title")}
            </h2>
            <span className="gold-divider sd-draw mt-6" />
            <p className="mt-8 text-cream-100/85 leading-relaxed text-lg">
              {t("approach.body")}
            </p>
            <p className="mt-5 text-cream-50 leading-relaxed font-medium text-lg">
              {t("approach.closing")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Newsletter — kapanış: durağan, net, hareket burada biter */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <NewsletterInlineCTA id="newsletter" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
