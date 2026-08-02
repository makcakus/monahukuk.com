// TTK (Türk Ticaret Kanunu) Kitap 2 "Ticaret Şirketleri", Dördüncü Kısım
// "Anonim Şirket" (m.329-563) konu makalelerini kanunun resmi kısım
// sistematiğine göre gruplamak için kullanılır. Yalnızca "Türk Ticaret
// Kanunu - Ticaret Şirketleri (Anonim Şirket)" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz. ttk-groups.ts,
// Kitap 2 "Genel Hükümler" (m.124-210) için bkz.
// ttk-book2-genel-hukumler-groups.ts, Kitap 2 "Kollektif Şirket"
// (m.211-303) için bkz. ttk-book2-kollektif-sirket-groups.ts, Kitap 2
// "Komandit Şirket" (m.304-328) için bkz. ttk-book2-komandit-sirket-groups.ts.
//
// Anonim Şirket (m.329-563) TTK'nın en hacimli bölümü olup birden fazla
// batch halinde yazılacaktır. Bu dosya, m.329-358'i ("Birinci Bölüm -
// Genel Hükümler, Kuruluş ve Temel İlkeler") kapsayan ilk batch ile
// başlar; sonraki batch'ler (m.359 - Yönetim Kurulu ve devamı) bu diziye
// yeni başlıklar eklenerek genişletilecektir.

export const TTK_BOOK2_ANONIM_GROUP_ORDER: string[] = [
  "Anonim Şirketin Tanımı, Amacı ve Devletin Gözetimi",
  "Anonim Şirketin Kuruluşu",
  "Kuruluşta Kanuna Karşı Hile, Fesih Davası, Tescil ve Anonim Şirketin Temel İlkeleri",
];

// slug -> TTK_BOOK2_ANONIM_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Kitap 2 "Ticaret Şirketleri" Dördüncü Kısım "Anonim
// Şirket"in resmi kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "anonim-sirketin-tanimi-amaci-ve-devletin-gozetimi-ttk-329":
    "Anonim Şirketin Tanımı, Amacı ve Devletin Gözetimi",
  "anonim-sirketin-kurulusu-ttk-335": "Anonim Şirketin Kuruluşu",
  "kurulusta-kanuna-karsi-hile-fesih-davasi-tescil-ve-anonim-sirketin-temel-ilkeleri-ttk-353":
    "Kuruluşta Kanuna Karşı Hile, Fesih Davası, Tescil ve Anonim Şirketin Temel İlkeleri",
};

export function getTtkBook2AnonimGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2AnonimArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
