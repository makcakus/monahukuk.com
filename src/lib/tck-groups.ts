// TCK (Türk Ceza Kanunu) Özel Hükümler'deki suç makalelerini kanunun resmi
// kısım/bölüm sistematiğine göre gruplamak için kullanılır. Yalnızca
// "Türk Ceza Kanunu - Tüm Suçlar" makale grubunda (tr locale, articles
// sayfası) kullanılır; çalışma alanları sayfalarını etkilemez.

export const TCK_GROUP_ORDER: string[] = [
  "Soykırım ve İnsanlığa Karşı Suçlar",
  "Göçmen Kaçakçılığı ve İnsan Ticareti Suçları",
  "Hayata Karşı Suçlar",
  "Vücut Dokunulmazlığına Karşı Suçlar",
  "İşkence ve Eziyet",
  "Koruma, Gözetim, Yardım veya Bildirim Yükümlülüğüne İlişkin Suçlar",
  "Cinsel Dokunulmazlığa Karşı Suçlar",
  "Hürriyete Karşı Suçlar",
  "Şerefe Karşı Suçlar",
  "Özel Hayata ve Hayatın Gizli Alanına Karşı Suçlar",
  "Malvarlığına Karşı Suçlar",
  "Genel Tehlike Yaratan Suçlar",
  "Çevreye Karşı Suçlar",
  "Kamunun Sağlığına Karşı Suçlar",
  "Kamu Güvenine Karşı Suçlar",
  "Kamu Barışına Karşı Suçlar",
  "Ulaşım Araçlarına veya Sabit Platformlara Karşı Suçlar",
  "Genel Ahlaka Karşı Suçlar",
  "Aile Düzenine Karşı Suçlar",
  "Ekonomi, Sanayi ve Ticarete İlişkin Suçlar",
  "Bilişim Alanında Suçlar",
  "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "Adliyeye Karşı Suçlar",
  "Devletin Egemenlik Alametlerine ve Organlarının Saygınlığına Karşı Suçlar",
  "Devletin Güvenliğine Karşı Suçlar",
  "Anayasal Düzene ve Bu Düzenin İşleyişine Karşı Suçlar",
  "Milli Savunmaya Karşı Suçlar",
  "Devlet Sırlarına Karşı Suçlar ve Casusluk",
  "Yabancı Devletlerle Olan İlişkilere Karşı Suçlar",
];

// slug -> TCK_GROUP_ORDER içindeki başlık. Madde numarası sırasıyla,
// TCK'nın resmi kısım/bölüm başlıklarına göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "soykirim-sucu-tck-76": "Soykırım ve İnsanlığa Karşı Suçlar",
  "insanliga-karsi-suclar-tck-77": "Soykırım ve İnsanlığa Karşı Suçlar",
  "uluslararasi-suc-orgutu-tck-78": "Soykırım ve İnsanlığa Karşı Suçlar",
  "gocmen-kacakciligi-sucu-tck-79": "Göçmen Kaçakçılığı ve İnsan Ticareti Suçları",
  "insan-ticareti-sucu-tck-80": "Göçmen Kaçakçılığı ve İnsan Ticareti Suçları",

  "kasten-oldurme-sucu-tck-81": "Hayata Karşı Suçlar",
  "intihara-yonlendirme-sucu-tck-84": "Hayata Karşı Suçlar",
  "taksirle-oldurme-sucu-tck-85": "Hayata Karşı Suçlar",

  "kasten-yaralama-sucu-tck-86": "Vücut Dokunulmazlığına Karşı Suçlar",
  "neticesi-sebebiyle-agirlasmis-yaralama-tck-87": "Vücut Dokunulmazlığına Karşı Suçlar",
  "taksirle-yaralama-sucu-tck-89": "Vücut Dokunulmazlığına Karşı Suçlar",
  "insan-uzerinde-deney-sucu-tck-90": "Vücut Dokunulmazlığına Karşı Suçlar",
  "organ-veya-doku-ticareti-sucu-tck-91": "Vücut Dokunulmazlığına Karşı Suçlar",

  "iskence-sucu-tck-94": "İşkence ve Eziyet",
  "eziyet-sucu-tck-96": "İşkence ve Eziyet",

  "terk-ve-yardim-bildirim-yukumlulugu-tck-97": "Koruma, Gözetim, Yardım veya Bildirim Yükümlülüğüne İlişkin Suçlar",
  "cocuk-dusurtme-dusurme-kisirlastirma-tck-99": "Koruma, Gözetim, Yardım veya Bildirim Yükümlülüğüne İlişkin Suçlar",

  "cinsel-saldiri-sucu-tck-102": "Cinsel Dokunulmazlığa Karşı Suçlar",
  "cocuklarin-cinsel-istismari-tck-103": "Cinsel Dokunulmazlığa Karşı Suçlar",
  "cinsel-taciz-sucu-tck-105": "Cinsel Dokunulmazlığa Karşı Suçlar",

  "tehdit-sucu-tck-106": "Hürriyete Karşı Suçlar",
  "santaj-sucu-tck-107": "Hürriyete Karşı Suçlar",
  "cebir-sucu-tck-108": "Hürriyete Karşı Suçlar",
  "kisiyi-hurriyetinden-yoksun-kilma-tck-109": "Hürriyete Karşı Suçlar",
  "hurriyete-karsi-engelleme-suclari-tck-112": "Hürriyete Karşı Suçlar",
  "konut-dokunulmazliginin-ihlali-tck-116": "Hürriyete Karşı Suçlar",
  "is-ve-calisma-hurriyetinin-ihlali-tck-117": "Hürriyete Karşı Suçlar",
  "haksiz-arama-ve-dilekce-hakki-tck-120": "Hürriyete Karşı Suçlar",
  "nefret-ve-ayirimcilik-sucu-tck-122": "Hürriyete Karşı Suçlar",
  "kisilerin-huzur-ve-sukununu-bozma-tck-123": "Hürriyete Karşı Suçlar",
  "israrli-takip-sucu-tck-123a": "Hürriyete Karşı Suçlar",
  "haberlesmenin-engellenmesi-tck-124": "Hürriyete Karşı Suçlar",

  "hakaret-sucu-tck-125": "Şerefe Karşı Suçlar",

  "haberlesmenin-gizliligini-ihlal-tck-132": "Özel Hayata ve Hayatın Gizli Alanına Karşı Suçlar",
  "ozel-hayatin-gizliligini-ihlal-tck-134": "Özel Hayata ve Hayatın Gizli Alanına Karşı Suçlar",
  "kisisel-verilere-karsi-suclar-tck-135": "Özel Hayata ve Hayatın Gizli Alanına Karşı Suçlar",

  "hirsizlik-sucu-tck-141": "Malvarlığına Karşı Suçlar",
  "yagma-sucu-tck-148": "Malvarlığına Karşı Suçlar",
  "mala-zarar-verme-sucu-tck-151": "Malvarlığına Karşı Suçlar",
  "guveni-kotuye-kullanma-sucu-tck-155": "Malvarlığına Karşı Suçlar",
  "dolandiricilik-sucu-tck-157": "Malvarlığına Karşı Suçlar",
  "kaybolmus-esya-ve-karsiliksiz-yararlanma-tck-160": "Malvarlığına Karşı Suçlar",
  "iflas-suclari-tck-161": "Malvarlığına Karşı Suçlar",
  "suc-esyasi-ve-ortak-hukumler-tck-165": "Malvarlığına Karşı Suçlar",

  "genel-guvenligin-tehlikeye-sokulmasi-tck-170": "Genel Tehlike Yaratan Suçlar",
  "genel-tehlike-suclarinin-ozel-gorunumleri-tck-172": "Genel Tehlike Yaratan Suçlar",
  "trafik-guvenligini-tehlikeye-sokma-tck-179": "Genel Tehlike Yaratan Suçlar",

  "cevreye-karsi-suclar-tck-181": "Çevreye Karşı Suçlar",

  "tehlikeli-gida-ilac-ve-zehirli-madde-suclari-tck-185": "Kamunun Sağlığına Karşı Suçlar",
  "uyusturucu-madde-sucu-tck-188": "Kamunun Sağlığına Karşı Suçlar",
  "bulasici-hastalik-ve-usulsuz-olu-gomulmesi-tck-195": "Kamunun Sağlığına Karşı Suçlar",

  "parada-ve-kiymetli-damgada-sahtecilik-tck-197": "Kamu Güvenine Karşı Suçlar",
  "muhurde-sahtecilik-ve-muhur-bozma-tck-202": "Kamu Güvenine Karşı Suçlar",
  "resmi-belgede-sahtecilik-tck-204": "Kamu Güvenine Karşı Suçlar",
  "ozel-belgede-sahtecilik-tck-207": "Kamu Güvenine Karşı Suçlar",

  "kamu-baris-suclari-tahrik-ve-tehdit-tck-213": "Kamu Barışına Karşı Suçlar",
  "nefret-tahriki-ve-kanunlara-karsi-gelme-tck-216": "Kamu Barışına Karşı Suçlar",
  "suc-islemek-amaciyla-orgut-kurma-tck-220": "Kamu Barışına Karşı Suçlar",

  "ulasim-araclarina-karsi-suclar-tck-223": "Ulaşım Araçlarına veya Sabit Platformlara Karşı Suçlar",

  "hayasizca-hareketler-ve-mustehcenlik-tck-225": "Genel Ahlaka Karşı Suçlar",
  "fuhus-kumar-icin-yer-saglama-ve-dilencilik-tck-227": "Genel Ahlaka Karşı Suçlar",

  "aile-duzenine-karsi-suclar-i-tck-230": "Aile Düzenine Karşı Suçlar",
  "kotu-muamele-ve-cocugun-kacirilmasi-tck-232": "Aile Düzenine Karşı Suçlar",

  "ihaleye-ve-edimin-ifasina-fesat-karistirma-tck-235": "Ekonomi, Sanayi ve Ticarete İlişkin Suçlar",
  "ekonomiye-ve-ticarete-iliskin-suclar-tck-238": "Ekonomi, Sanayi ve Ticarete İlişkin Suçlar",

  "bilisim-sistemine-girme-ve-sistemi-bozma-tck-243": "Bilişim Alanında Suçlar",
  "banka-veya-kredi-kartlarinin-kotuye-kullanilmasi-tck-245": "Bilişim Alanında Suçlar",

  "zimmet-sucu-tck-247": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "irtikap-ve-denetim-ihmali-tck-250": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "rusvet-sucu-tck-252": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "nufuz-ticareti-ve-zor-kullanma-siniri-tck-255": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "gorevi-kotuye-kullanma-sucu-tck-257": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "sirrin-aciklanmasi-ticaret-ve-gorev-terki-tck-258": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "usulsuz-tasarruf-usurpasyon-ve-egitim-kurumu-tck-261": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",
  "usulsuz-kiyafet-direnme-ve-arac-kullanma-tck-264": "Kamu İdaresinin Güvenilirliğine ve İşleyişine Karşı Suçlar",

  "iftira-ve-kimlik-bilgilerinin-kullanilmasi-tck-267": "Adliyeye Karşı Suçlar",
  "suc-ustlenme-ve-suc-uydurma-tck-270": "Adliyeye Karşı Suçlar",
  "yalan-taniklik-ve-yalan-yere-yemin-tck-272": "Adliyeye Karşı Suçlar",
  "gercege-aykiri-bilirkisilik-ve-tercumanlik-tck-276": "Adliyeye Karşı Suçlar",
  "sucu-bildirmeme-tck-278": "Adliyeye Karşı Suçlar",
  "delil-karartma-ve-suchluyu-kayirma-tck-281": "Adliyeye Karşı Suçlar",
  "adli-gizlilik-kayit-ve-muayene-tck-285": "Adliyeye Karşı Suçlar",
  "muhafaza-gorevi-ve-infaz-kurumu-suclari-tck-289": "Adliyeye Karşı Suçlar",

  "cumhurbaskanina-hakaret-ve-egemenlik-alametleri-tck-299": "Devletin Egemenlik Alametlerine ve Organlarının Saygınlığına Karşı Suçlar",
  "devletin-guvenligine-karsi-suclar-tck-302": "Devletin Güvenliğine Karşı Suçlar",
  "anayasal-duzene-karsi-suclar-tck-309": "Anayasal Düzene ve Bu Düzenin İşleyişine Karşı Suçlar",
  "silahli-orgut-ve-suc-icin-anlasma-tck-314": "Anayasal Düzene ve Bu Düzenin İşleyişine Karşı Suçlar",
  "milli-savunmaya-karsi-suclar-tck-317": "Milli Savunmaya Karşı Suçlar",
  "devlet-sirlari-ve-casusluk-i-tck-326": "Devlet Sırlarına Karşı Suçlar ve Casusluk",
  "devlet-sirlari-ve-casusluk-ii-tck-333": "Devlet Sırlarına Karşı Suçlar ve Casusluk",
  "yabanci-devletlerle-iliskilere-karsi-suclar-tck-340": "Yabancı Devletlerle Olan İlişkilere Karşı Suçlar",
};

export function getTckGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTckArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
