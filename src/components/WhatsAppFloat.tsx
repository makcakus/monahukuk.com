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
      {/* WhatsApp konuşma balonu; içindeki ahize yerine büronun terazisi. */}
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 text-navy-800">
        <path fill="currentColor" d="M 12.049999999999997,21.785 L 12.045999999999998,21.785 A 9.87,9.87 0.0 0,1 7.014999999999998,20.407 L 6.653999999999998,20.193 L 2.912999999999998,21.175 L 3.910999999999998,17.527 L 3.675999999999998,17.153000000000002 A 9.86,9.86 0.0 0,1 2.1659999999999977,11.893000000000002 C 2.1669999999999976,6.443000000000002 6.601999999999998,2.009000000000002 12.053999999999998,2.009000000000002 C 14.693999999999999,2.009000000000002 17.176,3.0390000000000024 19.041999999999998,4.907000000000002 A 9.825,9.825 0.0 0,1 21.935,11.901000000000002 C 21.932,17.351000000000003 17.497999999999998,21.785000000000004 12.049999999999999,21.785000000000004 M 20.463,3.488000000000003 A 11.815,11.815 0.0 0,0 12.05,0.0 C 5.495,0.0 0.16,5.335 0.157,11.892 C 0.157,13.988 0.7040000000000001,16.034 1.745,17.837 L 0.057,24.0 L 6.362,22.346 A 11.882,11.882 0.0 0,0 12.045,23.794 L 12.05,23.794 C 18.604,23.794 23.94,18.459 23.943,11.901 A 11.821,11.821 0.0 0,0 20.463,3.4879999999999995 L 20.463,3.488000000000003" />
        <g fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.3 8.6C9 10 10.7 9.9 12 7.9C13.3 9.9 15 10 16.7 8.6" />
          <path d="M12 8V16.4" />
          <path d="M7.3 8.6L5.7 14.1M7.3 8.6L8.9 14.1" />
          <path d="M16.7 8.6L15.1 14.1M16.7 8.6L18.3 14.1" />
          <path d="M10.5 18H13.5" />
        </g>
        <g fill="currentColor">
          <circle cx="12" cy="6.3" r="1" />
          <circle cx="7.3" cy="8.6" r=".85" />
          <circle cx="16.7" cy="8.6" r=".85" />
          <path d="M4.7 14.4H9.9C9.9 16.4 4.7 16.4 4.7 14.4Z" />
          <path d="M14.1 14.4H19.3C19.3 16.4 14.1 16.4 14.1 14.4Z" />
          <rect x="11" y="15.8" width="2" height="1.4" rx=".3" />
          <rect x="9.6" y="17.2" width="4.8" height="1.2" rx=".5" />
        </g>
      </svg>
    </a>
  );
}
