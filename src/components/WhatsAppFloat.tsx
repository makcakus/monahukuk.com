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
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        {/* WhatsApp konuşma balonu halkası (telefon ahizesi çıkarıldı) */}
        <path className="fill-navy-950" d="M12.050 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        {/* İç kısımda klasik adalet terazisi (siluet) */}
        <g transform="translate(4 4.2) scale(.16)" className="fill-navy-950 stroke-navy-950">
          {/* ibre ucu, direk, kaide */}
          <path stroke="none" d="M50 1.5c3.5 4.5 3.5 7 0 10-3.5-3-3.5-5.500 0-10Z" />
          <path stroke="none" d="M47.500 11h5v70h-5Z" />
          <path stroke="none" d="M44.500 17h11v3.500h-11Z" />
          <path stroke="none" d="M43.500 81h13c1.500 7 5 11.500 14 12.500v3.500H29.500v-3.500c9-1 12.500-5.500 14-12.500Z" />
          {/* kol ve uçlardaki kıvrımlar */}
          <path fill="none" strokeWidth="4.200" strokeLinecap="round" d="M11 28C26 20 38 31 50 21c12 10 24-1 39 7" />
          <circle cx="9" cy="27.500" r="4.800" fill="none" strokeWidth="2.800" />
          <circle cx="91" cy="27.500" r="4.800" fill="none" strokeWidth="2.800" />
          {/* askı ipleri */}
          <path fill="none" strokeWidth="2.400" strokeLinecap="round" d="M10 33 3 68M10 33l22 35M90 33 68 68M90 33l7 35" />
          {/* kefeler */}
          <path stroke="none" d="M1.500 68h32c-1 8-8 12.500-16 12.500S2.500 76 1.500 68ZM66.500 68h32c-1 8-8 12.500-16 12.500S67.500 76 66.500 68Z" />
        </g>
      </svg>
    </a>
  );
}
