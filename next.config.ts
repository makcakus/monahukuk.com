import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // ── Locale prefix'siz statik sayfalar → TR (defaultLocale) ──────────────
      // Google eski dış linklerden veya eski sitemap'tan bu URL'leri taradı.
      // next-intl localePrefix:"always" kullandığından bunlar 404 döndürüyor.
      { source: "/contact", destination: "/tr/contact", permanent: true },
      { source: "/team", destination: "/tr/team", permanent: true },
      { source: "/about", destination: "/tr/about", permanent: true },
      { source: "/practice-areas", destination: "/tr/practice-areas", permanent: true },
      { source: "/articles", destination: "/tr/articles", permanent: true },
      // EN-slug makaleler prefix'siz erişimlerde → EN locale
      // (catch-all aşağıdaki kural öncesinde bu spesifik slug'ları yakalamalı)
      { source: "/articles/eviction-landlord-need-turkey", destination: "/en/articles/eviction-landlord-need-turkey", permanent: true },
      // Locale prefix'siz makale slug'ları — spesifik kurallar önce, catch-all sonda
      { source: "/articles/severance-notice-pay-foreigners-calculation", destination: "/en/articles/severance-notice-pay-foreigners-calculation", permanent: true },
      { source: "/articles/short-term-residence-permit-turkey-guide", destination: "/en/articles/short-term-residence-permit-turkey-guide", permanent: true },
      { source: "/articles/investment-property-turkey-tax-legal-obligations", destination: "/en/articles/investment-property-turkey-tax-legal-obligations", permanent: true },
      { source: "/articles/common-mistakes-commercial-contracts-turkey", destination: "/en/articles/common-mistakes-commercial-contracts-turkey", permanent: true },
      { source: "/articles/family-residence-permit-spouse-turkish-citizen", destination: "/en/articles/family-residence-permit-spouse-turkish-citizen", permanent: true },
      { source: "/articles/cybercrime-charges-foreigners-turkey", destination: "/en/articles/cybercrime-charges-foreigners-turkey", permanent: true },
      { source: "/articles/ogrenci-ikamet-izninden-calisma-izni-gecis", destination: "/tr/articles/ogrenci-ikamet-izninden-calisma-izni-gecis", permanent: true },
      // Catch-all: locale'siz İngilizce slug → EN
      { source: "/articles/:slug+", destination: "/en/articles/:slug+", permanent: true },

      // ── TR locale'de İngilizce slug → doğru Türkçe slug ───────────────────────
      { source: "/tr/articles/family-residence-permit-spouse-turkish-citizen", destination: "/tr/articles/aile-ikamet-izni-turk-vatandasi-es", permanent: true },
      { source: "/tr/articles/work-permit-denial-appeal-turkey", destination: "/tr/articles/calisma-izni-reddi-itiraz-yollari", permanent: true },
      { source: "/tr/articles/short-term-residence-permit-turkey-guide", destination: "/tr/articles/turkiye-kisa-donem-ikamet-izni-basvurusu-rehberi", permanent: true },
      { source: "/tr/articles/narcotics-offences-defence-strategies-turkey", destination: "/tr/articles/uyusturucu-suclarinda-savunma-stratejileri", permanent: true },
      { source: "/tr/articles/restriction-code-check-removal-foreigners", destination: "/tr/articles/tahdit-kodu-sorgulama-kaldirma", permanent: true },
      { source: "/tr/articles/foreign-employee-termination-turkey", destination: "/tr/articles/turkiyede-yabanci-calisanin-isten-cikarilmasi", permanent: true },

      // ── Yanlış locale'de TR slug'larına erişim → doğru locale + İngilizce slug ─
      { source: "/ar/articles/miras-reddi-sartlar-sure", destination: "/ar/articles/inheritance-rejection-conditions-period", permanent: true },
      { source: "/ar/articles/anonim-sirket-vs-limited-sirket-secim", destination: "/ar/articles/jsc-vs-llc-which-to-choose-turkey", permanent: true },
      { source: "/ar/articles/ogrenci-ikamet-izninden-calisma-izni-gecis", destination: "/ar/articles/student-to-work-permit-transition-turkey", permanent: true },
      { source: "/ar/articles/vasiyetname-duzenleme-yabancilar-icin", destination: "/ar/articles/will-drafting-foreigners-turkey", permanent: true },
      { source: "/ar/articles/yapay-zeka-turk-hukuku-duzenleme-cercevesi", destination: "/ar/articles/artificial-intelligence-turkish-law-framework", permanent: true },
      { source: "/ar/articles/yabanci-es-cocuk-icin-turk-vatandasligi", destination: "/ar/articles/turkish-citizenship-for-spouse-and-children", permanent: true },
      { source: "/ar/articles/kvkk-uyumu-turkiye-veri-koruma-yukumlulukleri", destination: "/ar/articles/kvkk-compliance-turkey-data-protection", permanent: true },
      { source: "/ar/articles/eticaret-kvkk-cerez-politikasi", destination: "/ar/articles/ecommerce-kvkk-cookie-policy-compliance", permanent: true },
      { source: "/ar/articles/uzaktan-calisan-yabanci-isci-haklari", destination: "/ar/articles/remote-foreign-workers-rights-turkey", permanent: true },
      { source: "/ar/articles/trafik-kazasinda-ceza-sorumlulugu-yabanci-surucu", destination: "/ar/articles/traffic-accident-criminal-liability-foreign-drivers", permanent: true },
      { source: "/ar/articles/trafik-kazasinda-ceza-sorumlu-ugu-yabanci-surucu", destination: "/ar/articles/traffic-accident-criminal-liability-foreign-drivers", permanent: true },
      { source: "/de/articles/miras-reddi-sartlar-sure", destination: "/de/articles/inheritance-rejection-conditions-period", permanent: true },
      { source: "/de/articles/vize-reddi-iptal-davasi", destination: "/de/articles/visa-denial-cancellation-lawsuit-turkey", permanent: true },
      { source: "/de/articles/ogrenci-ikamet-izninden-calisma-izni-gecis", destination: "/de/articles/student-to-work-permit-transition-turkey", permanent: true },
      { source: "/de/articles/eticaret-kvkk-cerez-politikasi", destination: "/de/articles/ecommerce-kvkk-cookie-policy-compliance", permanent: true },
      { source: "/de/articles/antalya-kira-sozlesmesi-haklar-yukumlulukler", destination: "/de/articles/antalya-rental-agreement-rights-obligations", permanent: true },
      { source: "/de/articles/sahte-tapu-dolandiriciligina-karsi-korunma", destination: "/de/articles/protecting-against-fraud-property-purchase-turkey", permanent: true },
      { source: "/de/articles/kvkk-uyumu-turkiye-veri-koruma-yukumlulukleri", destination: "/de/articles/kvkk-compliance-turkey-data-protection", permanent: true },
      { source: "/en/articles/tahdit-kodu-sorgulama-kaldirma", destination: "/en/articles/restriction-code-check-removal-foreigners", permanent: true },
      { source: "/en/articles/yazilim-lisans-sozlesmelerinde-hukuki-riskler", destination: "/en/articles/software-license-agreements-legal-risks", permanent: true },
      { source: "/en/articles/sirket-devir-birlesme-hukuki-surec", destination: "/en/articles/company-merger-acquisition-legal-process", permanent: true },
      { source: "/en/articles/belediye-cezalarina-itiraz-yabancilar", destination: "/en/articles/municipality-fines-objection-foreigners", permanent: true },
      { source: "/en/articles/sinir-disi-karari-itiraz-hak-yollari", destination: "/en/articles/deportation-order-appeal-turkey", permanent: true },
      { source: "/en/articles/yabanci-sermaye-turkiyede-ortaklik-kurma", destination: "/en/articles/foreign-capital-partnership-turkey", permanent: true },
      { source: "/ru/articles/anonim-sirket-vs-limited-sirket-secim", destination: "/ru/articles/jsc-vs-llc-which-to-choose-turkey", permanent: true },
      { source: "/ru/articles/velayet-davalarinda-yabancilarin-haklari", destination: "/ru/articles/custody-rights-foreign-clients-turkey", permanent: true },
      { source: "/ru/articles/dolandiricilik-magdurlari-icin-hukuki-yollar", destination: "/ru/articles/fraud-victims-foreigners-legal-remedies", permanent: true },
      { source: "/ru/articles/yabancilar-icin-idare-mahkemesi-surecleri", destination: "/ru/articles/administrative-court-procedure-foreigners", permanent: true },

      // ── hukuki-haberler → legal-news (3 Mayıs'ta route rename edildi) ────────
      { source: "/tr/hukuki-haberler", destination: "/tr/legal-news", permanent: true },
      { source: "/en/hukuki-haberler", destination: "/en/legal-news", permanent: true },
      { source: "/de/hukuki-haberler", destination: "/de/legal-news", permanent: true },
      { source: "/ru/hukuki-haberler", destination: "/ru/legal-news", permanent: true },
      { source: "/ar/hukuki-haberler", destination: "/ar/legal-news", permanent: true },
      { source: "/es/hukuki-haberler", destination: "/es/legal-news", permanent: true },
      { source: "/fr/hukuki-haberler", destination: "/fr/legal-news", permanent: true },
      { source: "/tr/hukuki-haberler/:slug+", destination: "/tr/legal-news/:slug+", permanent: true },
      { source: "/en/hukuki-haberler/:slug+", destination: "/en/legal-news/:slug+", permanent: true },
      { source: "/de/hukuki-haberler/:slug+", destination: "/de/legal-news/:slug+", permanent: true },
      { source: "/ru/hukuki-haberler/:slug+", destination: "/ru/legal-news/:slug+", permanent: true },
      { source: "/ar/hukuki-haberler/:slug+", destination: "/ar/legal-news/:slug+", permanent: true },
      { source: "/es/hukuki-haberler/:slug+", destination: "/es/legal-news/:slug+", permanent: true },
      { source: "/fr/hukuki-haberler/:slug+", destination: "/fr/legal-news/:slug+", permanent: true },

      // ── Silinen welcome sayfaları (28 Nisan'da kaldırıldı) ───────────────────
      { source: "/tr/articles/welcome", destination: "/tr/articles", permanent: false },
      { source: "/en/articles/welcome", destination: "/en/articles", permanent: false },

      // ── Trailing slash → canonical (Next.js 308 yerine 301) ─────────────────
      // GSC bu URL'leri "Yönlendirmeli sayfa" olarak görüyor.
      { source: "/tr/", destination: "/tr", permanent: true },
      { source: "/en/", destination: "/en", permanent: true },
      { source: "/de/", destination: "/de", permanent: true },
      { source: "/ru/", destination: "/ru", permanent: true },
      { source: "/ar/", destination: "/ar", permanent: true },
      { source: "/es/", destination: "/es", permanent: true },
      { source: "/fr/", destination: "/fr", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
