import "../globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { LegalServiceSchema, WebsiteSchema } from "@/components/LegalServiceSchema";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";

// Alegreya Sans'ta 600 ağırlığı yok (100/300/400/500/700/800/900).
// Gövdede kullanılan ağırlıklar 400 ve 500; vurgu için 700 yükleniyor.
const sans = Alegreya_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Alegreya ve Alegreya Sans aynı üst ailenin iki üyesi; başlık ile gövde
// aynı iskeleti paylaşır. Alegreya'da 300 ağırlığı yok (400-900).
// cyrillic alt kümesi olmadan Rusça başlıklar Georgia'ya düşüyordu.
const display = Alegreya({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${t("name")} — ${t("tagline")}`,
      template: `%s · ${t("name")}`,
    },
    description: t("description"),
    applicationName: t("name"),
    authors: [{ name: t("name"), url: SITE.url }],
    creator: t("name"),
    publisher: t("name"),
    category: "Law Firm",
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en", de: "/de", ru: "/ru", ar: "/ar", es: "/es", fr: "/fr", zh: "/zh", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: t("name"),
      title: `${t("name")} — ${t("tagline")}`,
      description: t("description"),
      locale: { tr: "tr_TR", de: "de_DE", ru: "ru_RU", ar: "ar_SA", es: "es_ES", fr: "fr_FR" }[locale] ?? "en_US",
      url: `${SITE.url}/${locale}`,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: t("name") }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("name")} — ${t("tagline")}`,
      description: t("description"),
      images: [SITE.ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    verification: {
      google: ["sgC9DBmL4QVLvFoaekqIvrBcAPdG31xdgQWeFHO9sc0", "yRHGM8c8VxxOSGPFwnsKdICg4d_dre0XpLjLufMnAIc"],
      yandex: "5ff8a22e4fbffbb2",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${sans.variable} ${display.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  var s=localStorage.getItem('theme');
  if(s==='dark'){document.documentElement.classList.add('dark');return;}
  if(s==='light')return;
  function day(lat,lon){
    var n=new Date();
    var h=n.getUTCHours()+n.getUTCMinutes()/60;
    var doy=Math.floor((n-new Date(Date.UTC(n.getUTCFullYear(),0,0)))/86400000);
    var B=2*Math.PI/365*(doy-81);
    var d=0.4094*Math.sin(B);
    var l=lat*Math.PI/180;
    var c=-Math.tan(l)*Math.tan(d);
    if(c<=-1)return true;
    if(c>=1)return false;
    var ha=Math.acos(c)*12/Math.PI;
    var noon=12-lon/15;
    return h>=noon-ha&&h<noon+ha;
  }
  var d0=day(36.9,30.7);
  if(!d0)document.documentElement.classList.add('dark');
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(p){
      var d1=day(p.coords.latitude,p.coords.longitude);
      if(d1!==d0){
        if(d1)document.documentElement.classList.remove('dark');
        else document.documentElement.classList.add('dark');
      }
    },null,{timeout:5000,maximumAge:3600000});
  }
}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 text-ink dark:bg-navy-950 dark:text-cream-100">
        <LegalServiceSchema locale={locale} />
        <WebsiteSchema />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <WhatsAppFloat locale={locale} />
        </NextIntlClientProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
