// TTK (Türk Ticaret Kanunu) Kitap 2 "Ticaret Şirketleri", Üçüncü Kısım
// "Komandit Şirket" (m.304-328) konu makalelerini kanunun resmi kısım
// sistematiğine göre gruplamak için kullanılır. Yalnızca "Türk Ticaret
// Kanunu - Ticaret Şirketleri (Komandit Şirket)" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz. ttk-groups.ts,
// Kitap 2 "Genel Hükümler" (m.124-210) için bkz.
// ttk-book2-genel-hukumler-groups.ts, Kitap 2 "Kollektif Şirket"
// (m.211-303) için bkz. ttk-book2-kollektif-sirket-groups.ts.

export const TTK_BOOK2_KOMANDIT_GROUP_ORDER: string[] = [
  "Komandit Şirketin Niteliği, Kuruluşu ve Ortaklar Arasındaki İlişkiler",
  "Komandit Şirketin Üçüncü Kişilerle İlişkileri ve Sona Ermesi",
];

// slug -> TTK_BOOK2_KOMANDIT_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Kitap 2 "Ticaret Şirketleri" Üçüncü Kısım "Komandit
// Şirket"in resmi kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "komandit-sirketin-niteligi-kurulusu-ve-ortaklar-arasindaki-iliskiler-ttk-304":
    "Komandit Şirketin Niteliği, Kuruluşu ve Ortaklar Arasındaki İlişkiler",
  "komandit-sirketin-ucuncu-kisilerle-iliskileri-ve-sona-ermesi-ttk-317":
    "Komandit Şirketin Üçüncü Kişilerle İlişkileri ve Sona Ermesi",
};

export function getTtkBook2KomanditGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2KomanditArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
