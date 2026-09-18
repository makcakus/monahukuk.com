import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Yanıt motorlarının (AI answer engines) kaynak göstermek için kullandığı
// tarayıcılar. GEO açısından kritik olan grup budur: bir soruya cevap
// üretilirken siteyi bunlar okur ve alıntılar. Tam erişim verilir.
// Google-Extended ve Applebot-Extended birer "fetcher" değil, opt-in
// anahtarıdır — Allow yazılmazsa AI Overviews / Apple Intelligence
// alıntılarından çıkarılırız.
const ANSWER_ENGINE_BOTS = [
  "OAI-SearchBot", // ChatGPT Search dizini
  "ChatGPT-User", // ChatGPT içinde bir bağlantı açıldığında
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended", // AI Overviews / Gemini grounding opt-in
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "YouBot",
];

// Yalnızca model eğitimi için toplu içerik çeken tarayıcılar. Bilinçli olarak
// ENGELLEMİYORUZ — eğitim verisinde yer almak da uzun vadede marka
// bilinirliği sağlar — ama hızlarını düşürüyoruz. Crawl-delay bağlayıcı
// değildir (GPTBot dokümante etmiyor); asıl sınır Cloudflare tarafındaki
// rate limiting kuralıdır, bkz. AI_CRAWLER_POLICY.md.
const TRAINING_ONLY_BOTS = [
  "GPTBot",
  "CCBot",
  "Bytespider",
  "Diffbot",
  "Omgilibot",
  "ImagesiftBot",
  "Timpibot",
  "Webzio-Extended",
  "PanguBot",
  "AI2Bot",
];

export default function robots(): MetadataRoute.Robots {
  // /api/ → JSON uçları, dizinde işi yok. /*?q=* → arama sonucu sayfaları,
  // sonsuz varyasyon üretip crawl budget'ı tüketir.
  const disallow = ["/api/", "/*?q=*"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: "Googlebot", allow: "/", disallow },
      { userAgent: ANSWER_ENGINE_BOTS, allow: "/", disallow },
      { userAgent: TRAINING_ONLY_BOTS, allow: "/", disallow, crawlDelay: 10 },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
