// TTK (Türk Ticaret Kanunu) Kitap 2 "Ticaret Şirketleri", İkinci Kısım
// "Kollektif Şirket" (m.211-303) konu makalelerini kanunun resmi kısım
// sistematiğine göre gruplamak için kullanılır. Yalnızca "Türk Ticaret
// Kanunu - Ticaret Şirketleri (Kollektif Şirket)" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz. ttk-groups.ts,
// Kitap 2 "Genel Hükümler" (m.124-210) için bkz.
// ttk-book2-genel-hukumler-groups.ts.

export const TTK_BOOK2_KOLLEKTIF_GROUP_ORDER: string[] = [
  "Kollektif Şirketin Niteliği, Kuruluşu ve Tescili",
  "Kollektif Şirkette Ortaklar Arasındaki İlişkiler",
  "Kollektif Şirketin ve Ortakların Üçüncü Kişilerle İlişkileri",
  "Kollektif Şirketin Sona Ermesi ve Ortağın Ayrılması",
  "Kollektif Şirkette Tasfiye: Genel Hükümler ve Tasfiye Memurları",
  "Kollektif Şirkette Tasfiye İşlemleri ve Tasfiyenin Sonu",
];

// slug -> TTK_BOOK2_KOLLEKTIF_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Kitap 2 "Ticaret Şirketleri" İkinci Kısım "Kollektif
// Şirket"in resmi kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "kollektif-sirketin-niteligi-kurulusu-ve-tescili-ttk-211":
    "Kollektif Şirketin Niteliği, Kuruluşu ve Tescili",
  "kollektif-sirkette-ortaklar-arasindaki-iliskiler-ttk-217":
    "Kollektif Şirkette Ortaklar Arasındaki İlişkiler",
  "kollektif-sirketin-ve-ortaklarin-ucuncu-kisilerle-iliskileri-ttk-232":
    "Kollektif Şirketin ve Ortakların Üçüncü Kişilerle İlişkileri",
  "kollektif-sirketin-sona-ermesi-ve-ortagin-ayrilmasi-ttk-243":
    "Kollektif Şirketin Sona Ermesi ve Ortağın Ayrılması",
  "kollektif-sirkette-tasfiye-genel-hukumler-ve-tasfiye-memurlari-ttk-267":
    "Kollektif Şirkette Tasfiye: Genel Hükümler ve Tasfiye Memurları",
  "kollektif-sirkette-tasfiye-islemleri-ve-tasfiyenin-sonu-ttk-286":
    "Kollektif Şirkette Tasfiye İşlemleri ve Tasfiyenin Sonu",
};

export function getTtkBook2KollektifGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2KollektifArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
