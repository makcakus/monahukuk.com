// TTK (Türk Ticaret Kanunu) Üçüncü Kitap "Kıymetli Evrak" (m.645-849)
// konu makalelerini kanunun resmi kısım sistematiğine göre gruplamak
// için kullanılır. Yalnızca "Türk Ticaret Kanunu - Kıymetli Evrak"
// makale grubunda (tr locale, articles sayfası) kullanılır; çalışma
// alanları sayfalarını etkilemez. Kitap 1 "Ticari İşletme" (m.1-123)
// için bkz. ttk-groups.ts; Kitap 2 "Ticaret Şirketleri" (m.124-644)
// için bkz. ttk-book2-*-groups.ts dosyaları.
//
// Kıymetli Evrak (m.645-849) birden fazla batch halinde yazılacaktır. Bu
// dosya, m.645-669'u ("Birinci Kısım - Genel Hükümler": kıymetli evrakın
// tanımı, senetten doğan borç, devir - genel şekil ve ciro, senedin
// türünün değiştirilmesi, iptal kararı - şartları ve hükümleri, özel
// hükümlerin saklılığı; "İkinci Kısım - Nama Yazılı Senetler": tanımı,
// alacaklının hakkını ispatı, eksik nama yazılı senetler, iptal kararı;
// "Üçüncü Kısım - Hamile Yazılı Senetler": tanımı, borçlunun def'ileri,
// hamile yazılı faiz kuponları, iptal kararı - yetki/ödeme yasağı/ilan/
// hükümleri, kuponlarda ve banknotlarda usul, ipotekli borç senedi ve
// irat senedine ilişkin saklılık) kapsayan ilk batch ile başlamıştır.
//
// İkinci batch, m.670'ten itibaren başlayan "Dördüncü Kısım - Kambiyo
// Senetleri"nin açılışını ve "Birinci Bölüm - Poliçe"nin ilk iki
// ayırımını kapsar: borçlanma ehliyeti, poliçenin şekil unsurları
// (Birinci Ayırım - Poliçenin Düzenlenmesi ve Şekli, m.670-680: zorunlu
// unsurlar, unsurların bulunmaması, münferit unsurlar, imza edenlerin
// sorumluluğu, açık poliçe) ve ciro (İkinci Ayırım, m.681-690). Poliçenin
// kalan ayırımları (Kabul ve Aval, Ödeme, Kabul Etmeme ve Ödememe
// Hâllerinde Başvurma Hakları) ile bono ve çeke ilişkin bölümler sonraki
// batch'lerde ele alınacaktır.
//
// Üçüncü batch, "Birinci Bölüm - Poliçe"nin "Üçüncü Ayırım - Kabul ve
// Aval" (m.691-702: kabule arz, kabule arz şartı ve yasağı, görüldükten
// belirli süre sonra ödenecek poliçelerde arz süresi, bir daha kabule
// arz, kabulün şekli ve sınırlandırılması, adresli/yerleşim yerli
// poliçede kabul, kabulün hükümleri, kabul şerhinin çizilmesi, aval
// verenler, aval şekli, aval hükümleri) ve "Dördüncü Ayırım - Ödeme"
// (m.703-712: vadenin belirlenmesi, görüldüğünde ve görüldükten belirli
// süre sonra ödenecek poliçe, sürelerin hesabı, takvimlerin çatışması,
// ödeme için ibraz, makbuz isteme hakkı, vadeden önce ve vadesinde
// ödeme, yabancı ülke parasıyla ödeme, tevdi) kapsar. Poliçenin son
// ayırımı (Kabul Etmeme ve Ödememe Hâllerinde Başvurma Hakları) ile bono
// ve çeke ilişkin bölümler sonraki batch'lerde ele alınacaktır.
//
// Dördüncü batch, "Birinci Bölüm - Poliçe"nin "Beşinci Ayırım - Kabul
// Etmeme ve Ödememe Hâllerinde Başvurma Hakları"nın tamamını (m.713-732)
// iki yazı hâlinde kapsar: ilk yazı başvurma hakkının doğumunu, kabul
// etmeme ve ödememe protestosunun süresini, şeklini (noterlikçe
// düzenlenme, içerik, protesto belgesi, kısmi kabul hâlinde protesto,
// birden fazla kişiye karşı protesto), saklama yükümünü, sakat
// protestoyu, protesto düzenlenmesi gerekmeyen hâlleri ve ihbar
// zorunluluğunu (m.713-723) ele alır; ikinci yazı ise teselsülü,
// başvurma hakkının kapsamını (hamilin ve ödeyenin istemleri), makbuz
// isteme hakkını, retreti, başvurma hakkının düşmesini, mücbir
// sebepleri ve sebepsiz zenginleşmeyi (m.724-732) kapsar. Bu batch ile
// Beşinci Ayırım ve dolayısıyla Birinci Bölüm "Poliçe" tamamen işlenmiş
// olur. Poliçe bölümü bir sonraki batch'te "Altıncı Ayırım - Poliçe
// Nüshaları ve Suretleri" (m.743 vd.) ile devam edecek, ardından bono ve
// çeke ilişkin bölümler ele alınacaktır.
//
// Beşinci batch, üç yazı hâlinde "Birinci Bölüm - Poliçe"nin kalan üç
// ayırımını, dolayısıyla Poliçe bölümünün tamamını (m.670-775) tamamlar.
// İlk yazı "Altıncı Ayırım - Poliçe Nüshaları ve Suretleri"ni (m.743-747:
// nüshaların isteme hakkı, nüshalar arasındaki ilişki, kabul için
// gönderilen nüshanın akıbeti, suretlerin şekli ve hükümleri, senet
// aslının suret hamiline teslimi) kapsar. İkinci yazı "Yedinci Ayırım -
// Çeşitli Hükümler"i (m.748-765: senet metnindeki değişiklikler,
// zamanaşımı süreleri ve kesilmesi, tatil günleri, sürelerin hesabı,
// atıfet süreleri yasağı, işlemlerin yapılacağı yer, imzalar, iptal -
// önleyici önlemler, poliçeyi eline geçirenin bilinip bilinmemesi, ihtar,
// ilan, iade davası, iptal kararı, teminat) kapsar. Üçüncü yazı ise
// "Sekizinci Ayırım - Kanunlar İhtilafı"nı (m.766-775: ehliyet, şekil ve
// süreler, borçlanmaların hükümleri, kısmi kabul ve ödeme, sebepsiz
// zenginleşmeden doğan haklar, karşılığın hamile geçmesi, iptal kararı)
// kapsar. Bu batch ile Birinci Bölüm "Poliçe" (m.670-775) tamamen
// işlenmiş olur. Bir sonraki batch, "İkinci Bölüm - Bono veya Emre
// Yazılı Senet" (m.776-779) ile devam edecek, ardından "Üçüncü Bölüm -
// Çek" (m.780-849) ele alınacaktır.
//
// Altıncı batch, iki yazı hâlinde "İkinci Bölüm - Bono veya Emre Yazılı
// Senet"i tamamen (m.776-779) ve "Üçüncü Bölüm - Çek"in ilk iki
// ayırımını (m.780-793) kapsar. İlk yazı bonoyu tek bir makalede ele
// alır: unsurlar, unsurların bulunmaması, poliçe hükümlerinin bonoya
// uygulanması (ciro, vade, ödeme, başvurma hakları, zamanaşımı, iptal,
// aval) ve düzenleyenin poliçeyi kabul eden gibi doğrudan sorumlu
// olması ilkesi (m.776-779). İkinci ve üçüncü yazılar Çek Bölümü'nün
// açılışını oluşturur: "Birinci Ayırım - Çeklerin Düzenlenmesi ve
// Şekli" (m.780-787: unsurlar, unsurların bulunmaması, muhatap olma
// ehliyeti, karşılık, kabul yasağı, kimin lehine çekilebileceği, faiz
// şartı, adresli ve yerleşim yerli çek) ve "İkinci Ayırım - Devir"
// (m.788-793: devredilebilirlik, ciro, hak sahipliğini ispat görevi,
// hamiline yazılı çek üzerine yapılan ciro, elden çıkan çek, protestodan
// ve ibraz süresinin geçmesinden sonraki ciro). Çek Bölümü'nün kalan
// ayırımları ("Ödeme ve Ödememe Hâlleri", m.794-811, ve "Çeşitli
// Hükümler", m.812 vd.) sonraki batch'lerde ele alınacaktır.
//
// Yedinci batch, üç yazı hâlinde "Üçüncü Ayırım - Ödeme ve Ödememe"yi
// (m.794-811) tamamen kapsar. İlk yazı "A) Ödeme" başlığının ilk
// yarısını (m.794-802: aval, muacceliyet, ödeme için ibraz - genel
// olarak/takvim farklılığı/takas odası, çekten cayma - genel olarak/
// özel hâller, ciroların incelenmesi, yabancı ülke parasıyla ödenecek
// çek) kapsar. İkinci yazı "A) Ödeme" başlığının ikinci yarısını
// (m.803-807: çizgili çek - şekil ve şartları/hükümleri, hesaba
// geçirilmek üzere düzenlenen çek - genel olarak, hamilin haklarının
// iflas hâlinde ve hesaba geçirilmeme hâlinde kullanılması) kapsar.
// Üçüncü yazı ise "B) Ödememe" başlığının tamamını (m.808-811: hamilin
// başvurma hakları, protesto, başvurma hakkının kapsamı, mücbir
// sebepler) kapsar. Bu batch ile Üçüncü Ayırım ve dolayısıyla Çek
// Bölümü'nün ödeme/ödememe rejimi tamamen işlenmiş olur. Kambiyo
// Senetleri Kısmı'nı tamamlamak için yalnızca "Dördüncü Ayırım -
// Çeşitli Hükümler" (sahte veya tahrif edilmiş çek, m.812'den başlar;
// kapsamın tam sınırı sonraki bir chunk fetch'i ile belirlenecektir)
// kalmıştır.
//
// Sekizinci batch, iki yazı hâlinde "Dördüncü Ayırım - Çeşitli
// Hükümler" (m.812-818) ve "Beşinci Ayırım - Kanunlar İhtilafı"
// (m.819-823) başlıklarını tamamen kapsar. İlk yazı Dördüncü Ayırım'ı
// tek bir makalede ele alır: sahte veya tahrif edilmiş çekte muhatap
// bankanın kusursuz sorumluluğu ve düzenleyenin kusuru istisnası
// (m.812), çekin istisnai denizaşırı hâllerde nüsha olarak
// düzenlenmesi (m.813), üç yıllık zamanaşımı (m.814), banka kavramının
// tanımı (m.815), tatil günleri ve sürelerin hesabı (m.816-817) ve
// poliçeye ait hangi hükümlerin çeke uygulanacağını gösteren seçici
// atıf listesi ile buna bağlı protesto ikamesi (m.818). İkinci yazı ise
// Beşinci ve son Ayırım'ı tek bir makalede ele alır: muhatap olma
// ehliyeti (m.819), şekil ve süreler (m.820), borçlanmaların hükümleri
// - düzenlenme yeri kanunu, ödeme yeri hukuku ve yerleşim yeri hukuku
// (m.821-823). Bu batch ile Üçüncü Bölüm "Çek" (m.780-823) ve
// dolayısıyla Dördüncü Kısım "Kambiyo Senetleri" (m.670-823) tamamen
// işlenmiş olur. Bir sonraki batch, Üçüncü Kitap "Kıymetli Evrak"ın
// "Beşinci Kısım - Kambiyo Senetlerine Benzeyen Senetler ve Diğer Emre
// Yazılı Senetler" (m.824-831) ile devam edecek, ardından "Altıncı
// Kısım - Makbuz Senedi ve Varant" (m.832-849) ele alınarak Üçüncü
// Kitap tamamen tamamlanacak ve seri Dördüncü Kitap "Taşıma İşleri"ne
// geçecektir.

export const TTK_KIYMETLI_EVRAK_GROUP_ORDER: string[] = [
  "Kıymetli Evrakın Genel Hükümleri: Tanım, Senetten Doğan Borç ve Devir",
  "Nama Yazılı Senetler",
  "Hamile Yazılı Senetler",
  "Kambiyo Senetleri: Poliçenin Şekli ve İmza Sorumluluğu",
  "Kambiyo Senetleri: Poliçede Ciro",
  "Kambiyo Senetleri: Poliçede Kabul ve Aval",
  "Kambiyo Senetleri: Poliçede Vade ve Ödeme",
  "Kambiyo Senetleri: Poliçede Başvurma Hakkı ve Protesto",
  "Kambiyo Senetleri: Poliçe Nüshaları, Zamanaşımı ve Kanunlar İhtilafı",
  "Kambiyo Senetleri: Bono",
  "Kambiyo Senetleri: Çek — Düzenlenmesi ve Devri",
  "Kambiyo Senetleri: Çekte Ödeme ve Ödememe",
  "Kambiyo Senetleri: Çekte Çeşitli Hükümler ve Kanunlar İhtilafı",
];

// slug -> TTK_KIYMETLI_EVRAK_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Üçüncü Kitap "Kıymetli Evrak"ın resmi kısım
// sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "kiymetli-evrakin-tanimi-senetten-dogan-borc-ve-devir-ttk-645":
    "Kıymetli Evrakın Genel Hükümleri: Tanım, Senetten Doğan Borç ve Devir",
  "nama-yazili-senetler-ttk-654": "Nama Yazılı Senetler",
  "hamile-yazili-senetler-ttk-658": "Hamile Yazılı Senetler",
  "kambiyo-senetlerine-borclanma-ehliyeti-ve-policenin-sekil-unsurlari-ttk-670":
    "Kambiyo Senetleri: Poliçenin Şekli ve İmza Sorumluluğu",
  "policede-imza-edenlerin-sorumlulugu-ttk-677":
    "Kambiyo Senetleri: Poliçenin Şekli ve İmza Sorumluluğu",
  "policede-ciro-ttk-681": "Kambiyo Senetleri: Poliçede Ciro",
  "policenin-kabule-arzi-ve-kabulu-ttk-691":
    "Kambiyo Senetleri: Poliçede Kabul ve Aval",
  "policede-aval-ttk-700": "Kambiyo Senetleri: Poliçede Kabul ve Aval",
  "policede-vade-ve-odeme-ttk-703": "Kambiyo Senetleri: Poliçede Vade ve Ödeme",
  "policede-odememe-protestosu-ve-basvurma-hakkinin-dogumu-ttk-713":
    "Kambiyo Senetleri: Poliçede Başvurma Hakkı ve Protesto",
  "policede-basvurma-hakkinin-kapsami-retret-ve-dusmesi-ttk-724":
    "Kambiyo Senetleri: Poliçede Başvurma Hakkı ve Protesto",
  "police-nushalari-ve-suretleri-ttk-743":
    "Kambiyo Senetleri: Poliçe Nüshaları, Zamanaşımı ve Kanunlar İhtilafı",
  "police-zamanasimi-ve-cesitli-hukumler-ttk-748":
    "Kambiyo Senetleri: Poliçe Nüshaları, Zamanaşımı ve Kanunlar İhtilafı",
  "police-kanunlar-ihtilafi-ttk-766":
    "Kambiyo Senetleri: Poliçe Nüshaları, Zamanaşımı ve Kanunlar İhtilafı",
  "bono-veya-emre-yazili-senet-ttk-776": "Kambiyo Senetleri: Bono",
  "cekin-duzenlenmesi-ve-sekil-sartlari-ttk-780":
    "Kambiyo Senetleri: Çek — Düzenlenmesi ve Devri",
  "cekin-devri-ciro-yoluyla-ttk-788":
    "Kambiyo Senetleri: Çek — Düzenlenmesi ve Devri",
  "cekte-odeme-ibraz-ve-cayma-ttk-794":
    "Kambiyo Senetleri: Çekte Ödeme ve Ödememe",
  "cizgili-cek-ve-hesaba-gecirilecek-cek-ttk-803":
    "Kambiyo Senetleri: Çekte Ödeme ve Ödememe",
  "cekte-odememe-ve-basvurma-haklari-ttk-808":
    "Kambiyo Senetleri: Çekte Ödeme ve Ödememe",
  "cekte-sahtecilik-nusha-zamanasimi-ve-uygulanacak-hukumler-ttk-812":
    "Kambiyo Senetleri: Çekte Çeşitli Hükümler ve Kanunlar İhtilafı",
  "cekte-kanunlar-ihtilafi-ttk-819":
    "Kambiyo Senetleri: Çekte Çeşitli Hükümler ve Kanunlar İhtilafı",
};

export function getTtkKiymetliEvrakGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkKiymetliEvrakArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
