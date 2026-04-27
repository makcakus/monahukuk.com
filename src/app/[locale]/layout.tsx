import "../globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalServiceSchema, WebsiteSchema } from "@/components/LegalServiceSchema";
import { routing } from "@/i18n/routing";
import { SITE, KEYWORDS } from "@/lib/site";

const sans = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
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
    keywords: [...(KEYWORDS[locale] ?? KEYWORDS["tr"])],
    applicationName: t("name"),
    authors: [{ name: t("name"), url: SITE.url }],
    creator: t("name"),
    publisher: t("name"),
    category: "Law Firm",
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en", de: "/de", ru: "/ru", ar: "/ar", "x-default": "/tr" },
    },
    openGraph: {
      type: "website",
      siteName: t("name"),
      title: `${t("name")} — ${t("tagline")}`,
      description: t("description"),
      locale: { tr: "tr_TR", de: "de_DE", ru: "ru_RU", ar: "ar_SA" }[locale] ?? "en_US",
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
    icons: { icon: "/favicon.ico" },
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
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-ink">
        <LegalServiceSchema locale={locale} />
        <WebsiteSchema />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
