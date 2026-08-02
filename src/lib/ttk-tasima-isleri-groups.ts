// TTK (Türk Ticaret Kanunu) Dördüncü Kitap "Taşıma İşleri" (m.850-930)
// konu makalelerini kanunun resmi kısım sistematiğine göre gruplamak
// için kullanılır. Yalnızca "Türk Ticaret Kanunu - Taşıma İşleri" makale
// grubunda (tr locale, articles sayfası) kullanılır; çalışma alanları
// sayfalarını etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz.
// ttk-groups.ts; Kitap 2 "Ticaret Şirketleri" (m.124-644) için bkz.
// ttk-book2-*-groups.ts dosyaları; Kitap 3 "Kıymetli Evrak" (m.645-849)
// için bkz. ttk-kiymetli-evrak-groups.ts.
//
// Taşıma İşleri (m.850-930) birden fazla batch halinde yazılacaktır. Bu
// dosya, ilk batch'i kapsar: "Birinci Kısım - Genel Hükümler"in tamamını
// (taşıyıcı - tanım ve taşıma sözleşmesinin temel yükümlülükleri, m.850;
// hükümlerin uygulama alanı - arizi taşıyıcılara da uygulanması, m.851;
// saklı tutulan hükümler - kural: deniz/demir/hava/posta taşımasına ait
// özel hükümlerin saklılığı, m.852, ve özel hükümlerin taşıyıcının
// sorumluluğunu etkilememesi, m.853; sorumluluğun kaldırılmasına veya
// hafifletilmesine ait hükümlerin geçersizliği - genel işlem şartları,
// biletler ve tarifeler dahil emredici koruma, m.854; zamanaşımı - on
// yıl/bir yıl/üç yıl kademeli süreler, rücu hakları ve def'i imkanı,
// m.855) ve "İkinci Kısım - Eşya Taşıma"nın açılışı olan "A) Taşıma
// Sözleşmesinin Uygulanması" başlığını (taşıma senedi - ihtiyari
// düzenleme ve senetsiz sözleşme kurulması, m.856; taşıma senedinin
// içeriği, m.857; taşıma senedinin ispat gücü - iki tarafça imzalanan
// senedin karinesi ve taşıyıcının çekince mekanizması, m.858; yük
// senedi - senet düzenlenmemişse başvurulacak zayıf ispat aracı, m.859;
// refakat belgeleri - gönderenin resmi belge sağlama yükümü ve
// taşıyıcının sorumluluğu, m.860; tehlikeli eşya - bildirim yükümü ve
// taşıyıcının önlem alma hakkı, m.861) kapsar.
//
// İkinci batch, "A) Taşıma Sözleşmesinin Uygulanması" başlığının kalan
// hükümlerini kapsar: ambalaj ve işaret - gönderenin ambalajlama ve
// işaretleme yükümü, m.862; yükleme ve boşaltma - varsayılan külfet
// dağılımı ve bekleme ücreti, m.863; özel durumlarda gönderenin
// kusursuz sorumluluğu - yetersiz ambalajlama/işaretleme, taşıma
// senedindeki hatalar, tehlikeli mal bildirimsizliği ve belge
// eksiklikleri ile bunların SDR sınırı ve tüketici istisnası, m.864;
// gönderen tarafından fesih - her zaman fesih hakkı ve tazminat
// formülü, m.865; kısmi taşımayı istem hakkı, m.866; yükleme süresine
// uyulmaması hâlinde taşıyıcının ihtar ve fesih hakları, m.867; emir,
// talimat ve tasarruflar - gönderenin/gönderilenin tasarruf hakkı ve
// taşıma senedi ibrazı, m.868; taşıma ve teslim engelleri - taşıyıcının
// talimat alma yükümü ve kendi inisiyatifiyle önlem alma hakkı, m.869;
// taşıma ücretinin hesaplanması ve ödenmesi, m.870; gönderilenin
// hakları ve ödeme borcu, m.871; ödemeli teslim, m.872; taşıma süresi -
// makul süre standardı, m.873; zıya karinesi - yirmi/otuz günlük süre,
// bulunma hâlinde geri alma hakkı ve taşıyıcının serbest tasarrufu,
// m.874. Bu batch ile İkinci Kısım "Eşya Taşıma"nın "A) Taşıma
// Sözleşmesinin Uygulanması" başlığı (m.856-874) tamamen kapsanmış
// olur.
//
// Üçüncü batch, İkinci Kısmın kalan bölümü olan "B) Taşıyıcının
// Sorumluluğu" başlığının tamamını (m.875-893) kapsar: zıya, hasar
// veya gecikmeden doğan zarardan sorumluluğun temel kuralı ve
// gönderen/gönderilenin katkı kusurunun etkisi, m.875; sorumluluktan
// kurtulma - en yüksek özen standardına dayanan genel kurtulma sebebi,
// m.876, araç arızası ve kiralayanın kusurundan kurtulma yasağı,
// m.877, ispat yükünü tersine çeviren özel hâller (üstü açık araç,
// yetersiz ambalajlama, eşyanın doğal niteliği, canlı hayvan taşıması
// vb.) ve bunların istisnaları, m.878; yardımcıların (kendi adamları
// ve taşımanın icrasında yararlanılan kişiler) kusurundan sorumluluk,
// m.879; tazminatta esas alınacak değer - tam zıyada teslim yeri ve
// zamanındaki değer, hasarda değer farkı yöntemi, m.880; zarar saptama
// giderlerinin tazmini, m.881; sorumluluk sınırları - CMR'den mülhem
// kilogram başına 8,33 SDR sınırı ve gecikmede taşıma ücretinin üç
// katı sınırı, m.882; diğer giderlerin (navlun iadesi, vergi, resim)
// tazmini, m.883; eşya/kişi zararları dışında kalan diğer zararlarda
// tam zıya tazminatının üç katı üst sınırı, m.884; sorumluluktan
// kurtulma sebepleri ve sınırlamaların sözleşme dışı istemlere ve
// üçüncü kişi istemlerine uzanması, m.885; kasıt veya pervasızca
// davranışın tüm kurtulma sebeplerini ve sınırlamaları ortadan
// kaldırması, m.886; bu kuralın taşıyıcının yardımcılarına karşı
// açılan davalarda uygulanması, m.887; taşımayı fiilen yürüten üçüncü
// kişi olan fiilî taşıyıcının asıl taşıyıcı ile müteselsil
// sorumluluğu, m.888; açık ve gizli zarar ile gecikme bildirimlerinin
// süre ve şekil şartları, m.889; taşıma davalarında ek yetkili
// mahkeme, m.890; taşıyıcının TMK m.950-953 uyarınca eşya üzerindeki
// hapis hakkı, m.891; birden çok taşıyıcı arasında hapis hakkının
// zincirleme korunması, m.892; ve aynı eşya üzerindeki birden çok
// hapis hakkının öncelik sırası, m.893. Bu batch ile İkinci Kısım
// "Eşya Taşıma"nın "B) Taşıyıcının Sorumluluğu" başlığı (m.875-893)
// tamamlanmış, dolayısıyla İkinci Kısmın m.856-893 arasındaki tüm
// hükümleri (hem "A) Taşıma Sözleşmesinin Uygulanması" hem de "B)
// Taşıyıcının Sorumluluğu") eksiksiz kapsanmış olur.
//
// Dördüncü batch, "Üçüncü Kısım - Taşınma Eşyası Taşıması" (m.894-901)
// hükümlerinin tamamını kapsar: uygulanacak hükümler - taşınma eşyası
// tanımı ve Birinci/İkinci Kısım hükümlerinin aksi kararlaştırılmadıkça
// veya milletlerarası sözleşme öngörmedikçe uygulanması, m.894;
// taşıyıcının yükümlülükleri - mobilya sökme/kurma ve yükleme/boşaltmanın
// (m.863'teki genel varsayımın aksine) her zaman taşıyıcıya ait olması,
// gönderen tüketici ise ambalajlama ve işaretlemenin de taşıyıcıya
// geçmesi, m.895; taşıma senedi düzenleme zorunluluğunun kalkması,
// tehlikeli mal bildiriminin tüketici gönderen için sadeleştirilmesi ve
// taşıyıcının gümrük/idari kurallar konusunda bilgilendirme yükümü,
// m.896; gönderenin özel hâllerde sorumluluğunun (m.864/2'den farklı
// olarak) yükleme hacminin metreküpü başına 1.500 SDR ile sınırlanması,
// m.897; taşınma eşyasına özgü, genel rejimden (m.878) farklı
// sorumluluktan kurtulma sebepleri - kıymetli eşya, yetersiz ambalaj,
// gönderenin kendi işlemi, canlı hayvan/bitki, kırılgan eşya vb., m.898;
// taşıyıcının sorumluluk sınırının (m.882'den farklı olarak) metreküp
// başına 1.500 SDR olması, m.899; açık zarar için üç iş günü, gizli
// zarar için ondört günlük (m.889'dan kısaltılmış) bildirim süreleri,
// m.900; ve gönderen tüketici ise taşıyıcının, sözleşme kurulurken
// sorumluluk hükümleri ve sigorta imkânları hakkında, teslimde ise
// bildirim kuralları hakkında yazılı olarak bilgilendirme yapmadıkça
// tüm bu ayrıcalıklardan (m.898, m.899, m.900 ve İkinci Kısımdaki
// kurtulma hâlleri) yararlanamaması, m.901. Aynı batch, "Dördüncü Kısım
// - Değişik Tür Araçlar ile Taşıma" (m.902-905) hükümlerinin de
// tamamını kapsar: multimodal taşıma sözleşmelerine TTK'nın Birinci ve
// İkinci Kısım hükümlerinin uygulanması için aranan dört kümülatif şart,
// m.902; zarar yerinin belli olduğu hâllerde o taşıma kısmının kendi
// rejimine (ayrı bir sözleşme yapılmış olsaydı hangi hükümlere tabi
// olacak idiyse ona) tabi tutulması - "ağ sistemi" - ve ispat yükü,
// m.903; bildirimin zarar yerinin bilinip bilinmemesinden bağımsız
// olarak m.889'a tabi olması ve zamanaşımı başlangıcının teslim tarihi
// olması, m.904; ve konusu taşınma eşyası olan değişik tür araçlarla
// taşımalarda Üçüncü Kısım hükümlerinin uygulanması ile m.903'teki ağ
// sisteminin ancak bağlayıcı bir milletlerarası sözleşme varsa devreye
// girmesi, m.905. Bu batch ile Üçüncü Kısım "Taşınma Eşyası Taşıması"
// (m.894-901) ve Dördüncü Kısım "Değişik Tür Araçlar ile Taşıma"
// (m.902-905) eksiksiz tamamlanmış olur. Sonraki batch'ler, "Beşinci
// Kısım - Yolcu Taşıma" (m.906-916) ve "Altıncı Kısım - Taşıma İşleri
// Komisyoncusu" (m.917-930) başlıklarını ele alacak; ikincisiyle
// birlikte Dördüncü Kitap "Taşıma İşleri" tamamen kapsanmış olacaktır.
//
// Beşinci batch, "Beşinci Kısım - Yolcu Taşıma" (m.906-916) hükümlerinin
// tamamını iki yazıda kapsar. İlk yazı, sözleşmenin kurulmasından
// hareketin başlamasına kadar olan hükümleri işler: yolcunun taşıyıcının
// iç hizmet kurallarına uyma yükümü, m.906; seferin sözleşme kurulduktan
// sonra fakat hareketten önce yapılamaması hâllerinde mücbir sebep,
// kusursuzluk, taşıyıcı kusuru ve ikame sefer/üç misli tazminat
// senaryoları, m.907; hareketin gecikmesinde yolcunun cayma hakkı ve
// zarar ispatı aranmaksızın hükmedilen üç misli bilet tazminatı, m.908;
// sefer sırasında taşıyıcının kendi fiiliyle yol değiştirmesi veya tarife
// dışı durması, m.909; Hükümet emri, idari tasarruf, araç onarımı veya
// ansızın çıkan tehlike gibi zorunlu sebeplerle gecikmede yolcunun
// bekleme veya oranlı ücretle cayma seçimi, m.910; ve seferin hareketten
// sonra duraklaması hâlinde kusura göre değişen ücret ve tazminat
// sonuçları, m.911. İkinci yazı ise bagaj ve kişisel eşyadan taşıyıcının
// sorumluluğu (m.875-886'ya yollama) ile hapis hakkını, m.912-913;
// taşıyıcının yolcuları güvenle ulaştırma genel yükümü, kaza sonucu
// ölüm/yaralanmada en yüksek özen standardına dayanan tazminat
// sorumluluğu ve dört özel hâlde zarar ispatı aranmaksızın hükmedilen üç
// misli tazminat ile idari para cezası, m.914; yolcunun seyahat sırasında
// ölmesi hâlinde bagaj ve eşyanın korunması, m.915; ve bakanlığın
// yönetmelik çıkarma yetkisi ile bagaj sorumluluğunun SDR sınırı, m.916,
// hükümlerini kapsar. Bu batch ile Beşinci Kısım "Yolcu Taşıma"
// (m.906-916) eksiksiz tamamlanmış olur. Sonraki ve SON batch, "Altıncı
// Kısım - Taşıma İşleri Komisyoncusu" (m.917-930) hükümlerini kapsayacak
// ve bununla birlikte Dördüncü Kitap "Taşıma İşleri" tamamen
// kapsanmış olacak; seri bundan sonra Beşinci Kitap "Deniz Ticareti"
// (m.931-1400) ile devam edecektir.

export const TTK_TASIMA_ISLERI_GROUP_ORDER: string[] = [
  "Taşıma İşlerinde Genel Hükümler",
  "Eşya Taşımada Taşıma Sözleşmesi: Taşıma Senedi ve Yük Senedi",
  "Eşya Taşımada Sözleşmenin Uygulanması: Ambalaj, Yükleme, Talimat, Ücret ve Teslim",
  "Eşya Taşımada Taşıyıcının Sorumluluğu",
  "Taşınma Eşyası ve Değişik Tür Araçlar ile Taşıma",
  "Yolcu Taşıma",
];

// slug -> TTK_TASIMA_ISLERI_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Dördüncü Kitap "Taşıma İşleri"nin resmi kısım
// sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "tasima-isleri-genel-hukumler-ttk-850": "Taşıma İşlerinde Genel Hükümler",
  "esya-tasimada-tasima-senedi-ve-yuk-senedi-ttk-856":
    "Eşya Taşımada Taşıma Sözleşmesi: Taşıma Senedi ve Yük Senedi",
  "esya-tasimada-ambalaj-yukleme-boslatma-ve-gonderenin-sorumlulugu-ttk-862":
    "Eşya Taşımada Sözleşmenin Uygulanması: Ambalaj, Yükleme, Talimat, Ücret ve Teslim",
  "esya-tasimada-yukleme-suresi-talimat-ve-tasima-engelleri-ttk-866":
    "Eşya Taşımada Sözleşmenin Uygulanması: Ambalaj, Yükleme, Talimat, Ücret ve Teslim",
  "esya-tasimada-ucret-teslim-ve-ziya-karinesi-ttk-870":
    "Eşya Taşımada Sözleşmenin Uygulanması: Ambalaj, Yükleme, Talimat, Ücret ve Teslim",
  "esya-tasimada-tasiyicinin-sorumlulugu-ve-kurtulma-sebepleri-ttk-875":
    "Eşya Taşımada Taşıyıcının Sorumluluğu",
  "esya-tasimada-tazminat-hesabi-ve-sorumluluk-sinirlari-ttk-880":
    "Eşya Taşımada Taşıyıcının Sorumluluğu",
  "esya-tasimada-fiili-tasiyici-bildirim-ve-hapis-hakki-ttk-888":
    "Eşya Taşımada Taşıyıcının Sorumluluğu",
  "tasinma-esyasi-tasimasi-ttk-894":
    "Taşınma Eşyası ve Değişik Tür Araçlar ile Taşıma",
  "degisik-tur-araclar-ile-tasima-ttk-902":
    "Taşınma Eşyası ve Değişik Tür Araçlar ile Taşıma",
  "yolcu-tasimada-seferin-yapilamamasi-ve-gecikmesi-ttk-906": "Yolcu Taşıma",
  "yolcu-tasimada-bagaj-tasiyicinin-sorumlulugu-ve-yolcunun-olumu-ttk-912":
    "Yolcu Taşıma",
};

export function getTtkTasimaIsleriGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkTasimaIsleriArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
