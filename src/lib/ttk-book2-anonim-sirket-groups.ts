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
// genişletilmiştir. Beşinci batch ile "Dördüncü Bölüm - Genel Kurul"
// (m.407-451) tamamlanmıştır. Altıncı batch ile m.452-472'yi ("Beşinci
// Bölüm - Esas Sözleşmenin Değiştirilmesi"nin genel usul kısmı: genel
// ilke ve usul, m.452-455; ile "İkinci Ayırım - Özel Değişiklikler"in
// "A) Sermayenin artırılması" alt başlığının tamamı: ortak hükümler,
// sermaye taahhüdü yoluyla artırım, rüçhan hakkı, m.456-461; iç
// kaynaklardan ve şarta bağlı sermaye artırımı, m.462-472) kapsayacak
// şekilde genişletilmiştir. Yedinci batch ile m.473-483'ü ("Beşinci
// Bölüm - Esas Sözleşmenin Değiştirilmesi"nin son kısmı: "B) Esas
// sermayenin azaltılması", m.473-475; ile "Altıncı Bölüm - Pay ve
// Sermaye Koyma Borcu"nun tamamı: payın asgari itibarî değeri,
// bölünmezliği, imtiyazlı paylar, oyda imtiyaz, pay bedelini ifa
// borcu, ödemeye çağrı, temerrüt ve ıskat usulü, m.476-483) kapsayacak
// şekilde genişletilmiştir. Sekizinci batch ile m.484-506'yı ("Yedinci
// Bölüm - Menkul Kıymetler"in tamamı: pay senetlerinin türleri,
// dönüştürülmesi, bastırılması, şekli, yıpranmış pay senetleri ve
// hamiline yazılı payların devri, m.484-489; nama yazılı payların
// devrinde ilke ve devrin kanuni/iradi sınırlandırılması ile pay
// defteri, m.490-501; intifa senetleri ile borçlanma senetleriyle alma
// ve değiştirme hakkını içeren menkul kıymetler, m.502-506) kapsayacak
// şekilde genişletilmiştir. "Sekizinci Bölüm - Kâr, Kazanç ve Tasfiye
// Payı" (m.507 vd.) ayrı bir batch'te ele alınacaktır.

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
  "Esas Sözleşmenin Değiştirilmesi: Genel İlke ve Usul",
  "Sermaye Artırımının Ortak Hükümleri, Sermaye Taahhüdü Yoluyla Artırım ve Rüçhan Hakkı",
  "İç Kaynaklardan ve Şarta Bağlı Sermaye Artırımı",
  "Esas Sermayenin Azaltılması",
  "Pay: Asgari İtibarî Değer, İmtiyazlı Paylar ve Pay Bedelini İfa Borcu",
  "Pay Senetleri: Türler, Bastırılması ve Hamiline Yazılı Payların Devri",
  "Nama Yazılı Payların Devri ve Devrin Sınırlandırılması",
  "İntifa Senetleri ve Borçlanma Senetleriyle Alma/Değiştirme Hakkını İçeren Menkul Kıymetler",
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
  "esas-sozlesmenin-degistirilmesi-genel-ilke-ve-usul-ttk-452":
    "Esas Sözleşmenin Değiştirilmesi: Genel İlke ve Usul",
  "sermaye-artiriminin-ortak-hukumleri-sermaye-taahhudu-yoluyla-artirim-ve-ruchan-hakki-ttk-456":
    "Sermaye Artırımının Ortak Hükümleri, Sermaye Taahhüdü Yoluyla Artırım ve Rüçhan Hakkı",
  "ic-kaynaklardan-ve-sarta-bagli-sermaye-artirimi-ttk-462":
    "İç Kaynaklardan ve Şarta Bağlı Sermaye Artırımı",
  "esas-sermayenin-azaltilmasi-ttk-473": "Esas Sermayenin Azaltılması",
  "pay-asgari-itibari-deger-imtiyazli-paylar-ve-pay-bedelini-ifa-borcu-ttk-476":
    "Pay: Asgari İtibarî Değer, İmtiyazlı Paylar ve Pay Bedelini İfa Borcu",
  "pay-senetleri-turler-bastirilmasi-ve-hamiline-yazili-paylarin-devri-ttk-484":
    "Pay Senetleri: Türler, Bastırılması ve Hamiline Yazılı Payların Devri",
  "nama-yazili-paylarin-devri-ve-devrin-sinirlandirilmasi-ttk-491":
    "Nama Yazılı Payların Devri ve Devrin Sınırlandırılması",
  "intifa-senetleri-ve-borclanma-senetleriyle-alma-degistirme-hakkini-iceren-menkul-kiymetler-ttk-502":
    "İntifa Senetleri ve Borçlanma Senetleriyle Alma/Değiştirme Hakkını İçeren Menkul Kıymetler",
};

export function getTtkBook2AnonimGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkBook2AnonimArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
