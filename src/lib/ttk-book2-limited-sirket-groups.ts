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
// kişilik) kapsayan ilk batch ile başlamıştır; ikinci batch ile m.589-615'i
// ("İkinci Bölüm - Şirket Sözleşmesinin Değiştirilmesi": genel ilke,
// sermaye artırımı/rüçhan hakkı, sermaye azaltımı; "Üçüncü Bölüm -
// Ortakların Hak ve Borçları": esas sermaye payının devri ve payın konu
// olduğu işlemler, pay defteri, miras/eşler arası mal rejimi/icra yoluyla
// geçiş, gerçek değerin belirlenmesi, tescil, paylı mülkiyet/intifa/rehin;
// geri verme yasağı, ortakların sorumluluğu, ek ödeme ve yan edim
// yükümlülükleri; kâr payı, kendi pay iktisabı, bağlılık yükümlülüğü ve
// rekabet yasağı, bilgi alma ve inceleme hakkı) kapsayacak şekilde
// genişletilmiştir; üçüncü batch ile m.616-635'i ("Dördüncü Bölüm -
// Şirketin Organları"nın tamamı: genel kurul - devredilemez yetkiler,
// toplantıya çağrı, oy hakkı ve hesaplanması, oydan yoksunluk, olağan ve
// önemli karar nisapları, kararların butlanı ve iptali; müdürler -
// atanma ve birden fazla müdürde karar alma, devredilemez görevler, özen
// ve bağlılık yükümü/rekabet yasağı, eşit işlem, temsil yetkisinin
// kapsamı ve sınırlandırılması, görevden alma, ticari mümessil/vekiller,
// haksız fiil sorumluluğu; sermaye kaybı ve borca batıklık, iflasın
// bildirilmesi/konkordato talebi, denetçi) kapsayacak şekilde
// genişletilmiştir.

export const TTK_BOOK2_LIMITED_GROUP_ORDER: string[] = [
  "Limited Şirketin Tanımı, Ortak Sayısı ve Şirket Sözleşmesi",
  "Limited Şirkette Sermaye: En Az Tutar, Esas Sermaye Payları ve İntifa Senetleri",
  "Limited Şirketin Kuruluşu: Kurulma Anı ve Tescil",
  "Limited Şirket Sözleşmesinin Değiştirilmesi: Genel İlke, Sermaye Artırımı ve Azaltılması",
  "Esas Sermaye Payının Devri ve Payın Konu Olduğu İşlemler",
  "Geri Verme Yasağı, Ortakların Sorumluluğu, Ek Ödeme ve Yan Edim Yükümlülükleri",
  "Kâr Payı, Şirketin Kendi Paylarını İktisabı, Bağlılık Yükümlülüğü ve Bilgi Alma Hakkı",
  "Limited Şirkette Genel Kurul: Yetkiler, Toplantılar, Oy Hakkı ve Kararlar",
  "Limited Şirkette Müdürler: Yönetim, Temsil ve Yükümlülükler",
  "Limited Şirkette Sermaye Kaybı, Borca Batıklık ve Denetçi",
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
  "limited-sirket-sozlesmesinin-degistirilmesi-sermaye-artirimi-ve-azaltilmasi-ttk-589":
    "Limited Şirket Sözleşmesinin Değiştirilmesi: Genel İlke, Sermaye Artırımı ve Azaltılması",
  "esas-sermaye-payinin-devri-ve-payin-konu-oldugu-islemler-ttk-593":
    "Esas Sermaye Payının Devri ve Payın Konu Olduğu İşlemler",
  "geri-verme-yasagi-ortaklarin-sorumlulugu-ek-odeme-ve-yan-edim-yukumlulukleri-ttk-601":
    "Geri Verme Yasağı, Ortakların Sorumluluğu, Ek Ödeme ve Yan Edim Yükümlülükleri",
  "kar-payi-sirketin-kendi-paylarini-iktisabi-baglilik-yukumlulugu-ve-bilgi-alma-hakki-ttk-608":
    "Kâr Payı, Şirketin Kendi Paylarını İktisabı, Bağlılık Yükümlülüğü ve Bilgi Alma Hakkı",
  "limited-sirkette-genel-kurul-yetkiler-toplantilar-oy-hakki-ve-kararlar-ttk-616":
    "Limited Şirkette Genel Kurul: Yetkiler, Toplantılar, Oy Hakkı ve Kararlar",
  "limited-sirkette-mudurler-yonetim-temsil-ve-yukumlulukler-ttk-623":
    "Limited Şirkette Müdürler: Yönetim, Temsil ve Yükümlülükler",
  "limited-sirkette-sermaye-kaybi-borca-batikligi-ve-denetci-ttk-633":
    "Limited Şirkette Sermaye Kaybı, Borca Batıklık ve Denetçi",
};

export function getTtkBook2LimitedGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2LimitedArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
