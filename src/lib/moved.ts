/**
 * Kalıcı olarak taşınan adresler. Burada 404 ya da 410 değil 301 döneriz:
 * içerik yaşamaya devam ettiği için Google birikmiş sinyali yeni adrese
 * aktarsın istiyoruz (kaldırılan içerik için bkz. src/lib/gone.ts).
 *
 * "Türk Vatandaşlığı" çalışma alanı "Yabancılar & Göçmenlik Hukuku" ile
 * birleştirilip "Yabancılar, Göçmenlik ve Vatandaşlık Hukuku" oldu; eski
 * çalışma alanı adresi yenisine yönlendirilir.
 */
const MOVED_PRACTICE_AREAS: Record<string, string> = {
  "turk-vatandasligi": "yabancilar-gocmenlik",
};

const LOCALES = new Set(["tr", "en", "de", "ru", "ar", "es", "fr"]);

/**
 * Eşleşirse yönlendirilecek yolu, eşleşmezse null döner. Yoldaki locale
 * segmenti (varsa) korunur, böylece /de/... adresi yine /de/... kalır.
 */
export function movedTarget(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts.length && LOCALES.has(parts[0]) ? parts.shift() : null;
  if (parts.length < 2) return null;

  const [section, slug] = parts;
  if (section !== "practice-areas") return null;

  let key: string;
  try {
    key = decodeURIComponent(slug);
  } catch {
    return null;
  }

  const target = MOVED_PRACTICE_AREAS[key];
  if (!target) return null;

  const rest = parts.slice(2);
  return "/" + [locale, "practice-areas", target, ...rest].filter(Boolean).join("/");
}
