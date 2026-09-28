import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { HukukSozluguArama } from "@/components/HukukSozluguArama";
import { pageMetadata } from "@/lib/seo";

/** App Store'daki Remindionary. Ülke kodu yok — Apple ziyaretçiyi kendi mağazasına yönlendirir. */
const APP_STORE_URL = "https://apps.apple.com/app/id6806191903";

/**
 * Apple'ın resmî "App Store'dan indirin" rozetleri (public/appstore/*.svg),
 * marketingtools.apple.com'dan alındı. Her dilin siyah ve beyaz varyantı var:
 * siyah açık temada, beyaz koyu temada kullanılır (Apple'ın kontrast kuralı).
 * Genişlik dile göre değişir, yükseklik hepsinde 40; oran bozulmasın diye
 * tek tek yazılı. Apple Arapça rozet yayımlamadığı için "ar" İngilizcesine
 * düşer — Apple'ın kendi önerisi budur.
 */
const BADGE: Record<string, { file: string; width: number }> = {
  tr: { file: "tr", width: 151.29 },
  en: { file: "en", width: 119.66 },
  de: { file: "de", width: 119.66 },
  ru: { file: "ru", width: 119.66 },
  es: { file: "es", width: 119.66 },
  fr: { file: "fr", width: 126.51 },
  zh: { file: "zh", width: 108.85 },
  ar: { file: "en", width: 119.66 },
};

// Remindionary'nin (App Store'daki İngilizce-Türkçe sözlük ve kelime öğrenme
// uygulamamız) Hukuk İngilizcesi paketini web'de aranabilir hale getiren sayfa.
// Sayfa başlığı her dilde sadece "Hukuk Sözlüğü" olarak görünür; Remindionary
// adı yalnızca aşağıdaki tanıtım paragrafında geçer. Sözlük iki yönlü (EN-TR ve
// TR-EN); çevresindeki tüm anlatım metinleri hukukSozlugu namespace'inden
// 8 dile çevriliyor.

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
  const badge = BADGE[locale] ?? BADGE.en;

  return (
    <>
      <PageHero title={tNav("hukukSozlugu")} lead={t("lead")} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <HukukSozluguArama />

        <div className="prose-legal mt-14">
          <p>{t.rich("intro", { b: (chunks) => <strong>{chunks}</strong> })}</p>
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex flex-col items-start gap-5 rounded-sm border border-navy-900/10 bg-cream-100/70 p-6 transition-colors hover:border-gold-400/60 hover:bg-cream-100 dark:border-cream-50/10 dark:bg-navy-900/40 dark:hover:border-gold-400/50 dark:hover:bg-navy-900/60 sm:flex-row sm:items-center sm:gap-7"
        >
          <div className="min-w-0 flex-1">
            <p className="font-display text-xl text-navy-900 dark:text-cream-50">
              {t("app.heading")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-cream-200/80">
              {t("app.body")}
            </p>
          </div>
          {/* eslint-disable @next/next/no-img-element -- Apple rozeti değiştirilmeden, sabit boyutta kullanılmalı. */}
          <img
            src={`/appstore/${badge.file}.svg`}
            alt={t("app.badgeAlt")}
            width={badge.width}
            height={40}
            className="h-10 w-auto flex-shrink-0 dark:hidden"
          />
          <img
            src={`/appstore/${badge.file}-white.svg`}
            alt={t("app.badgeAlt")}
            width={badge.width}
            height={40}
            className="hidden h-10 w-auto flex-shrink-0 dark:block"
          />
          {/* eslint-enable @next/next/no-img-element */}
        </a>

        <p className="mt-8 text-sm text-ink-soft/80">{t("disclaimer")}</p>
      </section>
    </>
  );
}
