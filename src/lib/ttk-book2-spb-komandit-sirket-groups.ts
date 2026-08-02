// TTK (Türk Ticaret Kanunu) Kitap 2 "Ticaret Şirketleri", Beşinci Kısım
// "Sermayesi Paylara Bölünmüş Komandit Şirket" (m.564-572) konu
// makalelerini kanunun resmi kısım sistematiğine göre gruplamak için
// kullanılır. Yalnızca "Türk Ticaret Kanunu - Ticaret Şirketleri
// (Sermayesi Paylara Bölünmüş Komandit Şirket)" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz. ttk-groups.ts,
// Kitap 2 "Genel Hükümler" (m.124-210) için bkz.
// ttk-book2-genel-hukumler-groups.ts, Kitap 2 "Kollektif Şirket"
// (m.211-303) için bkz. ttk-book2-kollektif-sirket-groups.ts, Kitap 2
// "Komandit Şirket" (m.304-328) için bkz.
// ttk-book2-komandit-sirket-groups.ts, Kitap 2 "Anonim Şirket"
// (m.329-563) için bkz. ttk-book2-anonim-sirket-groups.ts.
//
// Sermayesi Paylara Bölünmüş Komandit Şirket (m.564-572), Beşinci
// Kısım'ın tamamını oluşturan kısa ve kendi içinde bütünlüklü bir bölüm
// olduğundan tek bir batch ve tek bir makale ile kapsanmıştır: tanımı,
// komandit ve anonim şirket hükümlerinin karşılıklı uygulama alanı,
// kuruluş (esas sözleşme şekli ve içeriği, kurucular, uygulanacak
// hükümler) ve yönetim (uygulanacak hükümler, görevden alınma, rekabet
// yasağı) m.564-572.

export const TTK_BOOK2_SPB_KOMANDIT_GROUP_ORDER: string[] = [
  "Sermayesi Paylara Bölünmüş Komandit Şirket",
];

// slug -> TTK_BOOK2_SPB_KOMANDIT_GROUP_ORDER içindeki başlık. Madde
// numarası sırasıyla, TTK Kitap 2 "Ticaret Şirketleri" Beşinci Kısım
// "Sermayesi Paylara Bölünmüş Komandit Şirket"in resmi kısım
// sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "sermayesi-paylara-bolunmus-komandit-sirket-ttk-564":
    "Sermayesi Paylara Bölünmüş Komandit Şirket",
};

export function getTtkBook2SpbKomanditGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2SpbKomanditArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
