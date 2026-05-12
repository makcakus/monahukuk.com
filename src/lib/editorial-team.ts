/**
 * Makale yazar etiketi: "MONA HUKUK Editör Ekibi" (5 dilde).
 *
 * Önceki tasarımda makaleler tek bir avukatı (Av. Mustafa Akçakuş) yazar
 * olarak gösteriyordu. Karar: 5 kişilik ekibimizi tek bir kurumsal etiket
 * altında toplamak — bireysel atama yerine "MONA HUKUK Editör Ekibi".
 *
 * Brand kısmı /[locale]/about sayfasına link olarak görünür (article page).
 */

export type EditorialLabelParts = {
  /** Brand'tan önce gelen serbest metin (örn. RU "Редакция ") */
  prefix: string;
  /** Sabit, link olarak render edilen brand */
  brand: string;
  /** Brand'tan sonra gelen serbest metin (örn. TR " Editör Ekibi") */
  suffix: string;
};

/**
 * Non-breaking space — brand link'i ile bitişik metin arasındaki
 * boşluğun JSX inline rendering sırasında collapse olmaması için.
 * Aksi halde tarayıcıda "MONA HUKUKEditör Ekibi" gibi yapışık çıkıyor.
 */
const NBSP = " ";

const EDITORIAL_TEAM: Record<string, EditorialLabelParts> = {
  tr: { prefix: "", brand: "MONA HUKUK", suffix: `${NBSP}Editör Ekibi` },
  en: { prefix: "", brand: "MONA HUKUK", suffix: `${NBSP}Editorial Team` },
  de: { prefix: "", brand: "MONA HUKUK", suffix: `${NBSP}Redaktion` },
  ru: { prefix: `Редакция${NBSP}`, brand: "MONA HUKUK", suffix: "" },
  ar: { prefix: `فريق تحرير${NBSP}`, brand: "MONA HUKUK", suffix: "" },
};

export function editorialTeamLabel(locale: string): EditorialLabelParts {
  return EDITORIAL_TEAM[locale] ?? EDITORIAL_TEAM.en;
}

/** Düz string sürümü — JSON-LD veya plain-text bağlamlar için. */
export function editorialTeamPlain(locale: string): string {
  const p = editorialTeamLabel(locale);
  return `${p.prefix}${p.brand}${p.suffix}`.trim();
}
