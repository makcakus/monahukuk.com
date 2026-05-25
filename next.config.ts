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
      // Locale prefix'siz makale slug'ları → TR locale (catch-all)
      { source: "/articles/:slug+", destination: "/tr/articles/:slug+", permanent: true },

      // ── Yanlış locale'de TR slug'larına erişim (cross-locale slug düzeltmeleri) ─
      // Google bazen sitemap/hreflang'dan hareketle TR slug'larını DE/AR locale'inde deniyor.
      { source: "/de/articles/miras-reddi-sartlar-sure", destination: "/tr/articles/miras-reddi-sartlar-sure", permanent: true },
      // AR makaleleri: TR slug'ı yerine AR'daki doğru slug'a yönlendir
      { source: "/ar/articles/uzaktan-calisan-yabanci-isci-haklari", destination: "/ar/articles/remote-foreign-workers-rights-turkey", permanent: true },
      { source: "/ar/articles/trafik-kazasinda-ceza-sorumlulugu-yabanci-surucu", destination: "/ar/articles/traffic-accident-criminal-liability-foreign-drivers", permanent: true },
      // Bozuk/truncated slug varyantı (Google'ın hatalı taradığı URL)
      { source: "/ar/articles/trafik-kazasinda-ceza-sorumlu-ugu-yabanci-surucu", destination: "/ar/articles/traffic-accident-criminal-liability-foreign-drivers", permanent: true },

      // ── hukuki-haberler → legal-news (3 Mayıs'ta route rename edildi) ────────
      { source: "/tr/hukuki-haberler", destination: "/tr/legal-news", permanent: true },
      { source: "/en/hukuki-haberler", destination: "/en/legal-news", permanent: true },
      { source: "/tr/hukuki-haberler/:slug+", destination: "/tr/legal-news/:slug+", permanent: true },
      { source: "/en/hukuki-haberler/:slug+", destination: "/en/legal-news/:slug+", permanent: true },

      // ── Silinen welcome sayfaları (28 Nisan'da kaldırıldı) ───────────────────
      { source: "/tr/articles/welcome", destination: "/tr/articles", permanent: false },
      { source: "/en/articles/welcome", destination: "/en/articles", permanent: false },

      // ── legal-news sadece TR ve EN'de mevcut ────────────────────────────────
      // DE, RU, AR locale'lerinde legal-news sayfası yok; articles'a yönlendir.
      { source: "/ar/legal-news", destination: "/ar/articles", permanent: true },
      { source: "/de/legal-news", destination: "/de/articles", permanent: true },
      { source: "/ru/legal-news", destination: "/ru/articles", permanent: true },

      // ── ES: legal-news yok → articles'a yönlendir ───────────────────────────
      { source: "/es/legal-news", destination: "/es/articles", permanent: true },
      { source: "/es/hukuki-haberler", destination: "/es/articles", permanent: true },

      // ── Trailing slash → canonical (Next.js 308 yerine 301) ─────────────────
      // GSC bu URL'leri "Yönlendirmeli sayfa" olarak görüyor.
      { source: "/tr/", destination: "/tr", permanent: true },
      { source: "/en/", destination: "/en", permanent: true },
      { source: "/de/", destination: "/de", permanent: true },
      { source: "/ru/", destination: "/ru", permanent: true },
      { source: "/ar/", destination: "/ar", permanent: true },
      { source: "/es/", destination: "/es", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
