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
// başlamış; ikinci batch ile m.359-396'yı ("İkinci Bölüm - Yönetim
// Kurulu") kapsayacak şekilde genişletilmiş; üçüncü batch ile
// m.397-406'yı ("Üçüncü Bölüm - Denetleme") kapsayacak şekilde
// genişletilmiş; dördüncü batch ile m.407-424'ü ("Dördüncü Bölüm - Genel
// Kurul"un ilk yarısı: genel olarak, görev ve yetkileri, toplantılar,
// çağrı, toplantının yapılması ve esas sözleşme değişikliklerinde
// nisaplar) kapsayacak şekilde genişletilmiştir. Beşinci batch ile
// m.425-451'i ("Dördüncü Bölüm - Genel Kurul"un ikinci yarısı: pay
// sahibinin genel kurula katılma ve temsil hakkı, oy hakkı ile bilgi
// alma ve inceleme hakkı, özel denetim isteme hakkı, genel kurul
// kararlarının iptali, butlanı ve sonuçları) kapsayacak şekilde
// genişletilmiştir. Bu batch ile "Dördüncü Bölüm - Genel Kurul"
// (m.407-451) tamamlanmış olup, m.452'de başlayan "Beşinci Bölüm -
// Esas Sözleşmenin Değiştirilmesi" ayrı bir batch'te ele alınacaktır.

export const TTK_BOOK2_ANONIM_GROUP_ORDER: string[] = [
  "Anonim Şirketin Tanımı, Amacı ve Devletin Gözetimi",
  "Anonim Şirketin Kuruluşu",
  "Kuruluşta Kanuna Karşı Hile, Fesih Davası, Tescil ve Anonim Şirketin Temel İlkeleri",
  "Yönetim Kurulunun Oluşumu, Görevden Alınması, Yönetim ve Temsil Esasları",
  "Yönetim Kurulunun Devredilemez Görevleri, Sermaye Kaybı ve Borca Batıklık",
  "Şirketin Kendi Paylarını İktisap veya Rehin Olarak Kabul Etmesi",
  "Yönetim Kurulu Toplantıları, Mali Haklar ve Yasaklar",
  "Anonim Şirkette Denetleme: Kapsam, Denetçi Seçimi ve Nitelikleri",
  "Denetim Raporu, Görüş Yazıları, Denetçinin Sorumluluğu ve Topluluk Özel Denetimi",
  "Genel Kurulun Görev ve Yetkileri, Toplantı Türleri ve Çağrı",
  "Genel Kurul Toplantısının Yapılması: Hazır Bulunanlar Listesi, Nisap, Başkanlık ve Erteleme",
  "Esas Sözleşme Değişikliklerinde Nisaplar, Tutanak ve Kararların Etkisi",
  "Pay Sahibinin Genel Kurula Katılma ve Temsil Hakkı",
  "Genel Kurulda Oy Hakkı ile Bilgi Alma ve İnceleme Hakkı",
  "Özel Denetim İsteme Hakkı",
  "Genel Kurul Kararlarının İptali, Butlanı ve Sonuçları",
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
  "yonetim-kurulunun-olusumu-gorevden-alinmasi-yonetim-ve-temsil-esaslari-ttk-359":
    "Yönetim Kurulunun Oluşumu, Görevden Alınması, Yönetim ve Temsil Esasları",
  "yonetim-kurulunun-devredilemez-gorevleri-sermaye-kaybi-ve-borca-batiklik-ttk-374":
    "Yönetim Kurulunun Devredilemez Görevleri, Sermaye Kaybı ve Borca Batıklık",
  "sirketin-kendi-paylarini-iktisap-veya-rehin-olarak-kabul-etmesi-ttk-379":
    "Şirketin Kendi Paylarını İktisap veya Rehin Olarak Kabul Etmesi",
  "yonetim-kurulu-toplantilari-mali-haklar-ve-yasaklar-ttk-390":
    "Yönetim Kurulu Toplantıları, Mali Haklar ve Yasaklar",
  "anonim-sirkette-denetleme-kapsam-denetci-secimi-ve-nitelikleri-ttk-397":
    "Anonim Şirkette Denetleme: Kapsam, Denetçi Seçimi ve Nitelikleri",
  "denetim-raporu-gorus-yazilari-denetcinin-sorumlulugu-ve-topluluk-ozel-denetimi-ttk-402":
    "Denetim Raporu, Görüş Yazıları, Denetçinin Sorumluluğu ve Topluluk Özel Denetimi",
  "genel-kurulun-gorev-ve-yetkileri-toplanti-turleri-ve-cagri-ttk-407":
    "Genel Kurulun Görev ve Yetkileri, Toplantı Türleri ve Çağrı",
  "genel-kurul-toplantisinin-yapilmasi-hazir-bulunanlar-listesi-nisap-baskanlik-ve-erteleme-ttk-417":
    "Genel Kurul Toplantısının Yapılması: Hazır Bulunanlar Listesi, Nisap, Başkanlık ve Erteleme",
  "esas-sozlesme-degisikliklerinde-nisaplar-tutanak-ve-kararlarin-etkisi-ttk-421":
    "Esas Sözleşme Değişikliklerinde Nisaplar, Tutanak ve Kararların Etkisi",
  "pay-sahibinin-genel-kurula-katilma-ve-temsil-hakki-ttk-425":
    "Pay Sahibinin Genel Kurula Katılma ve Temsil Hakkı",
  "genel-kurulda-oy-hakki-ile-bilgi-alma-ve-inceleme-hakki-ttk-434":
    "Genel Kurulda Oy Hakkı ile Bilgi Alma ve İnceleme Hakkı",
  "ozel-denetim-isteme-hakki-ttk-438": "Özel Denetim İsteme Hakkı",
  "genel-kurul-kararlarinin-iptali-butlani-ve-sonuclari-ttk-445":
    "Genel Kurul Kararlarının İptali, Butlanı ve Sonuçları",
};

export function getTtkBook2AnonimGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2AnonimArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
