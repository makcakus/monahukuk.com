/**
 * Siteden tamamen kaldırılan içerik. Bu adresler 404 yerine 410 (Gone)
 * döner; Google kaldırılmış sayfaları dizinden 404'e göre çok daha hızlı düşürür.
 *
 * Fikri Mülkiyet Hukuku çalışma alanı ve ona bağlı 20 makale (7 dil) kaldırıldı.
 */
const GONE_PRACTICE_AREAS = new Set(["fikri-mulkiyet-hukuku"]);

const GONE_ARTICLES = new Set([
  "copyright-infringement-lawsuit-turkey",
  "ecommerce-platform-ip-infringement-turkey",
  "fashion-textile-design-protection-turkey",
  "franchise-trademark-licensing-turkey",
  "geographical-indications-protection-turkey",
  "industrial-design-registration-turkey",
  "ip-due-diligence-mergers-acquisitions-turkey",
  "ip-rights-inheritance-succession-turkey",
  "parallel-imports-trademark-exhaustion-turkey",
  "patent-registration-inventorship-turkey",
  "social-media-influencer-ip-rights-turkey",
  "software-licensing-ip-risks-turkey",
  "software-patentability-turkey",
  "trade-secret-protection-turkey",
  "trademark-assignment-pledge-turkey",
  "trademark-infringement-lawsuit-turkey",
  "trademark-invalidation-lawsuit-turkey",
  "trademark-opposition-yidk-turkey",
  "trademark-registration-turkey-guide",
  "well-known-trademark-status-protection-turkey",
]);

const LOCALES = new Set(["tr", "en", "de", "ru", "ar", "es", "fr"]);

/** /{locale}/articles/{slug}[/...], /articles/{slug}[/...] ve çalışma alanı sayfası. */
export function isGonePath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && LOCALES.has(parts[0])) parts.shift();
  if (parts.length < 2) return false;
  const [section, slug] = parts;
  let key: string;
  try {
    key = decodeURIComponent(slug);
  } catch {
    return false;
  }
  if (section === "articles") return GONE_ARTICLES.has(key);
  if (section === "practice-areas") return GONE_PRACTICE_AREAS.has(key);
  return false;
}
