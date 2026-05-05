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

/** Türkçe karakter farkından bağımsız üye anchor slug'ı (örn. "Mustafa Akcakuş" → "mustafa-akcakus"). */
export function authorSlug(author: string): string {
  return plainAuthorName(author)
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
