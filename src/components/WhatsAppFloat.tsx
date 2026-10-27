"use client";

/**
 * Görev 8: Floating WhatsApp irtibat butonu.
 * Tüm sayfalarda sağ alt köşede sabit; tıklayınca wa.me linki ile WhatsApp Web/uygulaması açılır.
 * Mesaj dillere göre gömülü; locale prop'una göre seçilir.
 *
 * Numara: SITE.phoneE164 = "+902426061432" (lib/site.ts).
 * Client component — tıklama GA4 event'i olarak izlenir (lib/analytics.ts).
 */

import { Scale } from "lucide-react";
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
      <Scale aria-hidden="true" strokeWidth={1.6} className="h-8 w-8 text-black" />
    </a>
  );
}
