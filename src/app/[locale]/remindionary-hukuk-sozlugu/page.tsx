import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { HukukSozluguArama } from "@/components/HukukSozluguArama";
import { pageMetadata } from "@/lib/seo";

// Remindionary (App Store'daki İngilizce-Türkçe sözlük ve kelime öğrenme
// uygulamamız) icin niş olan Hukuk İngilizcesi paketini web'de aranabilir
// hale getiren sayfa. Sözlük verisi EN-TR karşılıklı; sayfanın çevresindeki
// tüm anlatım metinleri ise hukukSozlugu namespace'inden 8 dile çevriliyor.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const t = await getTranslations({ locale, namespace: "hukukSozlugu" });
  return pageMetadata({
    locale,
    path: "/remindionary-hukuk-sozlugu",
    title: tNav("hukukSozlugu"),
    description: t("lead"),
  });
}

export default async function HukukSozluguPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const t = await getTranslations({ locale, namespace: "hukukSozlugu" });

  return (
    <>
      <PageHero
        kicker="Remindionary"
        title={tNav("hukukSozlugu")}
        lead={t("lead")}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <HukukSozluguArama />

        <div className="prose-legal mt-14">
          <p>{t.rich("intro", { b: (chunks) => <strong>{chunks}</strong> })}</p>
          <p className="mt-4 text-sm text-ink-soft/80">{t("disclaimer")}</p>
        </div>
      </section>
    </>
  );
}
