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
      // Locale prefix'siz makale slug'ları → TR locale
      { source: "/articles/:slug+", destination: "/tr/articles/:slug+", permanent: true },

      // ── legal-news sadece TR ve EN'de mevcut ────────────────────────────────
      // DE, RU, AR locale'lerinde legal-news sayfası yok; articles'a yönlendir.
      { source: "/ar/legal-news", destination: "/ar/articles", permanent: true },
      { source: "/de/legal-news", destination: "/de/articles", permanent: true },
      { source: "/ru/legal-news", destination: "/ru/articles", permanent: true },

      // ── Trailing slash → canonical (Next.js 308 yerine 301) ─────────────────
      // GSC bu URL'leri "Yönlendirmeli sayfa" olarak görüyor.
      { source: "/tr/", destination: "/tr", permanent: true },
      { source: "/en/", destination: "/en", permanent: true },
      { source: "/de/", destination: "/de", permanent: true },
      { source: "/ru/", destination: "/ru", permanent: true },
      { source: "/ar/", destination: "/ar", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
