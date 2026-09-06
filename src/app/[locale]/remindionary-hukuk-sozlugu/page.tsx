import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { HukukSozluguArama } from "@/components/HukukSozluguArama";
import { pageMetadata } from "@/lib/seo";

// Remindionary (App Store'daki İngilizce-Türkçe sözlük ve kelime öğrenme
// uygulamamız) icin niş olan Hukuk İngilizcesi paketini web'de aranabilir
// hale getiren sayfa. Başlık (nav.hukukSozlugu) her locale'de kendi diline
// çevrilir; sözlük verisi TR-EN karşılıklı olduğu icin sayfanın geri kalan
// metinleri kasıtlı olarak Türkçe sabit tutuluyor.
const LEAD =
  "13.000'den fazla İngilizce hukuk teriminin Türkçe karşılığını ve kısa tanımını arayın. Sözleşme, dava usulü, ceza, şirketler ve mülkiyet hukukunda en çok geçen terimler.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return pageMetadata({
    locale,
    path: "/remindionary-hukuk-sozlugu",
    title: t("hukukSozlugu"),
    description: LEAD,
  });
}

export default async function HukukSozluguPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <PageHero kicker="Remindionary" title={t("hukukSozlugu")} lead={LEAD} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <HukukSozluguArama />

        <div className="prose-legal mt-14">
          <p>
            Bu sözlük, MONA HUKUK ekibinin geliştirdiği{" "}
            <strong>Remindionary</strong> İngilizce-Türkçe sözlük ve kelime
            öğrenme uygulamasının Hukuk İngilizcesi paketinden alınmıştır.
            Uygulama; genel sözlük, CEFR seviyelerine göre öğrenme yolları,
            aralıklı tekrar sistemiyle çalışan quizler ve bu hukuk terimleri
            paketini bir arada sunar.
          </p>
          <p className="mt-4 text-sm text-ink-soft/80">
            Buradaki terimler genel bilgi ve dil öğrenimi amaçlıdır; hukuki
            tavsiye niteliği taşımaz. Somut bir hukuki meselede yetkili bir
            avukata danışınız.
          </p>
        </div>
      </section>
    </>
  );
}
