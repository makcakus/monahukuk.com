/**
 * Locale-aware avukat unvanı dönüşümü.
 * Frontmatter'da yazar genellikle "Av. {Ad} {Soyad}" şeklinde tutulur (TR konvansiyonu).
 * Görüntüde locale'in mesleki unvan karşılığını kullanırız:
 *
 *   tr: Av.       en: Att.       de: RA       ru: Адв.       ar: المحامي
 *
 * Frontmatter "Stj. Av." ile başlıyorsa stajyer için locale karşılığı kullanılır.
 */

const ATTORNEY_TITLE: Record<string, string> = {
  tr: "Av.",
  en: "Att.",
  de: "RA",
  ru: "Адв.",
  ar: "المحامي",
};

const TRAINEE_TITLE: Record<string, string> = {
  tr: "Stj. Av.",
  en: "Trainee Att.",
  de: "Ref.",
  ru: "Стажёр-адв.",
  ar: "متدرب",
};

const KNOWN_PREFIX_RE =
  /^(stj\.\s*av\.|av\.|att\.|trainee\s+att\.|ra|адв\.|стажёр-адв\.|المحامي|متدرب|ref\.)\s+/i;

/**
 * "Av. Mustafa Akcakuş" + locale=en → "Att. Mustafa Akcakuş"
 */
export function formatAuthorName(author: string, locale: string): string {
  if (!author) return "";
  const isTrainee = /^stj\.\s*av\./i.test(author);
  const plain = author.replace(KNOWN_PREFIX_RE, "").trim();
  const dict = isTrainee ? TRAINEE_TITLE : ATTORNEY_TITLE;
  const title = dict[locale] ?? dict.en;
  return `${title} ${plain}`.trim();
}

/** Schema.org & ham (unvansız) ad */
export function plainAuthorName(author: string): string {
  return author.replace(KNOWN_PREFIX_RE, "").trim();
}

/**
 * Türkçe karakter farkından bağımsız üye anchor slug'ı.
 * Örnekler:
 *   "Av. Mustafa AKÇAKUŞ" → "mustafa-akcakus"
 *   "Av. Mehmet SİMAV"    → "mehmet-simav"   ("İ" .toLowerCase() yan-etkisi de temizlenir)
 *
 * Not: JavaScript `"İ".toLowerCase()` → "i̇" (combining dot, U+0307) üretir;
 * o yüzden lowercase'den ÖNCE büyük Türkçe karakterleri ASCII'ye eşliyoruz.
 */
export function authorSlug(author: string): string {
  return plainAuthorName(author)
    .replace(/Ç/g, "C")
    .replace(/Ğ/g, "G")
    .replace(/I/g, "I")
    .replace(/İ/g, "I")
    .replace(/Ö/g, "O")
    .replace(/Ş/g, "S")
    .replace(/Ü/g, "U")
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/̇/g, "") // safety net — orphan combining dot above
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
