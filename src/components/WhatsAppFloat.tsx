"use client";

/**
 * Görev 8: Floating WhatsApp irtibat butonu.
 * Tüm sayfalarda sağ alt köşede sabit; tıklayınca wa.me linki ile WhatsApp Web/uygulaması açılır.
 * Mesaj dillere göre gömülü; locale prop'una göre seçilir.
 *
 * Numara: SITE.phoneE164 = "+902426061432" (lib/site.ts).
 * Client component — tıklama GA4 event'i olarak izlenir (lib/analytics.ts).
 */

import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

const ARIA: Record<string, string> = {
  tr: "WhatsApp ile iletişim",
  en: "Contact us on WhatsApp",
  de: "Kontakt per WhatsApp",
  ru: "Связаться через WhatsApp",
  ar: "تواصل عبر واتساب",
  es: "Contáctenos por WhatsApp",
  fr: "Contactez-nous sur WhatsApp",
};

export function WhatsAppFloat({ locale }: { locale: string }) {
  const label = ARIA[locale] ?? ARIA.en;
  const url = whatsappUrl(locale);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={() => track("whatsapp_click", { locale })}
      style={{ bottom: "calc(1.5rem + var(--cookie-banner-h, 0px))" }}
      className="fixed end-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-300 shadow-lg shadow-navy-950/30 hover:scale-105 hover:bg-gold-400 transition-[transform,bottom] duration-300 print:hidden"
    >
      {/* Themis: yalnızca siyah çizgilerle. Gözleri bağlı, bir elinde terazi,
          diğerinde aşağı bakan kılıç. */}
      <svg
        viewBox="-0.5 -1 34 59"
        aria-hidden="true"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-auto"
      >
        {/* baş, saç, göz bağı */}
        <circle cx="20" cy="9" r="3.4" />
        <path d="M16.6 8.6c-1.4 5-.6 9 .4 12M23.4 8.6c1.4 5 .6 9-.4 12" />
        <path d="M16.8 8.2h6.4" strokeWidth="2.2" />
        {/* terazi: sap, kol, iki kefe */}
        <path d="M8 6v13M2.5 8.5h11" />
        <path d="M2.5 8.5 1 15.5M2.5 8.5 4 15.5M0.6 15.5h4.8M13.5 8.5 12 15.5M13.5 8.5 15 15.5M11.6 15.5h4.8" />
        {/* terazi tutan kol */}
        <path d="M17 21 8 19" />
        {/* elbise, kuşak, kıvrım, etek */}
        <path d="M17 21 13.5 52M23 21 27 52M13.5 52q6.5 2 13.5 0" />
        <path d="M15 33.5h10" strokeWidth="2" />
        <path d="M20 35l-1 17" />
        {/* kılıç tutan kol, kılıç */}
        <path d="M23 21l6.5 10" />
        <path d="M27 30.5h5M29.5 30.5l-.2 22.5 1.4 2.5 1.4-2.5-.2-22.5" />
      </svg>
    </a>
  );
}
