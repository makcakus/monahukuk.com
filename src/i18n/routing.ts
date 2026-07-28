import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"],
  defaultLocale: "tr",
  localePrefix: "always",
  // next-intl varsayılan olarak her sayfa için TÜM locale'lere Link:
  // rel=alternate header'ı üretir (hedefte içerik var mı bakmadan). TR-only
  // içerik (TCK/CMK/mevzuat makaleleri) için bu var olmayan sayfalara
  // hreflang üretiyordu (bkz. src/middleware.ts). Makale/haber sayfaları
  // kendi content-aware hreflang'ını generateMetadata üzerinden zaten üretiyor.
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];
