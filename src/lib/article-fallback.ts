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
 *   2. Makale o dile çevrilmemiş   → /es/articles/<var-olmayan-makale>
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

/**
 * Makale/haber gövdesindeki (MDX) iç bağlantıları sayfanın diline çevirir.
 *
 * İçerik dosyalarındaki "İlgili makaleler" listeleri dil öneksiz yazılmış
 * (`](/articles/<slug>)`). Öneksiz URL next.config'teki yönlendirmelerle
 * çözülüyor, ama (a) her tık fazladan bir 308 hop'u ve Search Console'da
 * "Sayfa yönlendirmesi var" kaydı üretiyor, (b) genel yakalayıcı Türkçe olmayan
 * slug'ları koşulsuz /en/'e (ya da /tr/'ye) gönderdiği için DE/RU/ES/FR/AR
 * okuyucusu kendi dilindeki makale yerine başka dile düşüyor.
 *
 * Yalnızca `/articles/<slug>` biçimine dokunur ve slug manifestte biliniyorsa
 * çevirir; o dilde çeviri yoksa `resolveArticleFallback` ile aynı EN → TR
 * sırasına düşer (yeni 404 üretmez). Bilinmeyen slug, dış bağlantı, zaten
 * dil önekli yol ve `#`/`?` yalnız başına gelen href'ler olduğu gibi kalır.
 */
export function localizeInternalHref(locale: string, href: string): string {
  const m = href.match(/^\/articles\/([^/?#]+)([?#].*)?$/);
  if (!m) return href;
  const slug = m[1];
  const suffix = m[2] ?? "";

  const tk = MANIFEST.keys[slug] ? slug : MANIFEST.trSlugs[slug];
  if (!tk) return href;

  const target = resolveArticleFallback(locale, slug) ?? `/${locale}/articles/${slug}`;
  return `${target}${suffix}`;
}
