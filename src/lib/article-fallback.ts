import fallbacks from "@/generated/article-fallbacks.json";
import { routing } from "@/i18n/routing";

type FallbackManifest = {
  keys: Record<string, { l: string; tr: string }>;
  trSlugs: Record<string, string>;
};

const MANIFEST = fallbacks as FallbackManifest;

/**
 * İstenen makale o locale'de yoksa, 404 vermeden önce gidilebilecek gerçek bir
 * URL bulur.
 *
 * İki vaka çözülür:
 *   1. Slug yanlış dilde yazılmış  → /tr/articles/<ingilizce-slug>
 *   2. Makale o dile çevrilmemiş   → /zh/articles/<var-olmayan-makale>
 *
 * Sıralama: istenen locale → en → tr → kalan diller. Hiçbir dilde yoksa null
 * döner ve çağıran taraf temiz bir 404 üretir.
 */
export function resolveArticleFallback(locale: string, slug: string): string | null {
  // Slug ya doğrudan bir translationKey'dir (TR dışı diller) ya da bir Türkçe
  // slug'tır; ikisi de değilse bilinmeyen bir URL'dir.
  const tk = MANIFEST.keys[slug] ? slug : MANIFEST.trSlugs[slug];
  if (!tk) return null;

  const entry = MANIFEST.keys[tk];
  if (!entry) return null;

  const available = entry.l.split(",");
  const preferred = [locale, "en", "tr", ...routing.locales];
  const target = preferred.find((l) => available.includes(l));
  if (!target) return null;

  const targetSlug = target === "tr" ? entry.tr || tk : tk;
  // Zaten istenen URL'e yönlendirecek olsaydık döngü olurdu.
  if (target === locale && targetSlug === slug) return null;

  return `/${target}/articles/${targetSlug}`;
}
