// TTK (Türk Ticaret Kanunu) Kitap 2 "Ticaret Şirketleri", Birinci Kısım
// "Genel Hükümler" (m.124-210) konu makalelerini kanunun resmi kısım
// sistematiğine göre gruplamak için kullanılır. Yalnızca "Türk Ticaret
// Kanunu - Ticaret Şirketleri (Genel Hükümler)" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz. ttk-groups.ts.

export const TTK_BOOK2_GENEL_GROUP_ORDER: string[] = [
  "Ticaret Şirketlerinin Türleri, Tüzel Kişiliği ve Sermaye Koyma Borcu",
  "Ticaret Şirketlerinde Birleşme",
  "Ticaret Şirketlerinde Bölünme",
  "Tür Değiştirme ve Yapısal Değişikliklere İlişkin Ortak Hükümler",
  "Şirketler Topluluğu: Hâkim ve Bağlı Şirket İlişkileri",
];

// slug -> TTK_BOOK2_GENEL_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Kitap 2 "Ticaret Şirketleri" Birinci Kısım "Genel
// Hükümler"in resmi kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "ticaret-sirketlerinin-turleri-ve-sermaye-koyma-borcu-ttk-124":
    "Ticaret Şirketlerinin Türleri, Tüzel Kişiliği ve Sermaye Koyma Borcu",
  "ticaret-sirketlerinde-birlesme-ttk-134": "Ticaret Şirketlerinde Birleşme",
  "ticaret-sirketlerinde-bolunme-ttk-159": "Ticaret Şirketlerinde Bölünme",
  "tur-degistirme-ve-ortak-hukumler-ttk-180":
    "Tür Değiştirme ve Yapısal Değişikliklere İlişkin Ortak Hükümler",
  "sirketler-toplulugu-ttk-195":
    "Şirketler Topluluğu: Hâkim ve Bağlı Şirket İlişkileri",
};

export function getTtkBook2GenelGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2GenelArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
