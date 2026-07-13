"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

/**
 * GA4 — yalnızca ölçüm amaçlı, çerez onayına bağlı.
 *
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID tanımlı değilse hiçbir şey yüklenmez.
 * - Çerez banner'ında "Tümünü Kabul Et" seçilmeden gtag yüklenmez (KVKK).
 * - Reklam sinyalleri kapalı: TBB Reklam Yasağı Yönetmeliği m.7/e uyarınca
 *   çevrimiçi reklam verilemeyeceğinden Google Signals / reklam kişiselleştirme
 *   devre dışıdır; yalnızca site içi ölçüm yapılır.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CONSENT_KEY = "cookie-consent-v1";

function subscribeConsent(callback: () => void) {
  window.addEventListener("cookie-consent", callback);
  return () => window.removeEventListener("cookie-consent", callback);
}

function readConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function GoogleAnalytics() {
  const enabled = useSyncExternalStore(subscribeConsent, readConsent, () => false);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', {
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});`}
      </Script>
    </>
  );
}
