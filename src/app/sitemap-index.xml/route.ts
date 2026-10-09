import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";

// sitemap.ts dile göre bölündüğü için (generateSitemaps) Next.js artık
// /sitemap.xml üretmiyor. Dile göre sitemap'lerin dizinini burada basıyoruz;
// next.config.ts'teki rewrite /sitemap.xml'i buraya bağlar (route'u doğrudan
// /sitemap.xml'e koymak sitemap.ts metadata route'uyla çakışıyor).
export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString();
  const items = routing.locales
    .map(
      (locale) =>
        `  <sitemap>\n    <loc>${SITE.url}/sitemap/${locale}.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
