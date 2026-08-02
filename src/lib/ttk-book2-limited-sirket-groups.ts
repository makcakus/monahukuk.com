// TTK (Türk Ticaret Kanunu) Kitap 2 "Ticaret Şirketleri", Altıncı Kısım
// "Limited Şirket" (m.573 vd.) konu makalelerini kanunun resmi kısım
// sistematiğine göre gruplamak için kullanılır. Yalnızca "Türk Ticaret
// Kanunu - Ticaret Şirketleri (Limited Şirket)" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz. ttk-groups.ts,
// Kitap 2 "Genel Hükümler" (m.124-210) için bkz.
// ttk-book2-genel-hukumler-groups.ts, Kitap 2 "Kollektif Şirket"
// (m.211-303) için bkz. ttk-book2-kollektif-sirket-groups.ts, Kitap 2
// "Komandit Şirket" (m.304-328) için bkz. ttk-book2-komandit-sirket-groups.ts,
// Kitap 2 "Anonim Şirket" (m.329-563) için bkz.
// ttk-book2-anonim-sirket-groups.ts, Kitap 2 "Sermayesi Paylara Bölünmüş
// Komandit Şirket" (m.564-572) için bkz.
// ttk-book2-spb-komandit-sirket-groups.ts.
//
// Limited Şirket (m.573 vd.) birden fazla batch halinde yazılacaktır. Bu
// dosya, m.573-588'i ("Birinci Bölüm - Tanım ve Kuruluş"un tamamı: kavram,
// ortakların sayısı, şirket sözleşmesi - şekli, zorunlu kayıtları,
// bağlayıcı hükümleri, ayni sermaye/ayni devralmalar/özel menfaatler
// atfı, emredici hükümler ilkesi; sermaye - en az tutar, ayni sermaye,
// mal bedelleri ve kurucu menfaatleri, esas sermaye payları, intifa
// senetleri; kuruluş - kurulma anı, tescil istemi, tescil ve ilan, tüzel
// kişilik) kapsayan ilk batch ile başlamıştır; ikinci batch ile m.589
// vd. ("İkinci Bölüm - Şirket Sözleşmesinin Değiştirilmesi") kapsayacak
// şekilde genişletilecektir.

export const TTK_BOOK2_LIMITED_GROUP_ORDER: string[] = [
  "Limited Şirketin Tanımı, Ortak Sayısı ve Şirket Sözleşmesi",
  "Limited Şirkette Sermaye: En Az Tutar, Esas Sermaye Payları ve İntifa Senetleri",
  "Limited Şirketin Kuruluşu: Kurulma Anı ve Tescil",
];

// slug -> TTK_BOOK2_LIMITED_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Kitap 2 "Ticaret Şirketleri" Altıncı Kısım "Limited
// Şirket"in resmi kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "limited-sirketin-tanimi-ortak-sayisi-ve-sirket-sozlesmesi-ttk-573":
    "Limited Şirketin Tanımı, Ortak Sayısı ve Şirket Sözleşmesi",
  "limited-sirkette-sermaye-en-az-tutar-esas-sermaye-paylari-ve-intifa-senetleri-ttk-580":
    "Limited Şirkette Sermaye: En Az Tutar, Esas Sermaye Payları ve İntifa Senetleri",
  "limited-sirketin-kurulusu-kurulma-ani-ve-tescil-ttk-585":
    "Limited Şirketin Kuruluşu: Kurulma Anı ve Tescil",
};

export function getTtkBook2LimitedGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2LimitedArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
