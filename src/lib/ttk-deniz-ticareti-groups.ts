// TTK (Türk Ticaret Kanunu) Beşinci Kitap "Deniz Ticareti" (m.931-1400)
// konu makalelerini kanunun resmi kısım sistematiğine göre gruplamak için
// kullanılır. Yalnızca "Türk Ticaret Kanunu - Deniz Ticareti" makale
// grubunda (tr locale, articles sayfası) kullanılır; çalışma alanları
// sayfalarını etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz.
// ttk-groups.ts; Kitap 2 "Ticaret Şirketleri" (m.124-644) için bkz.
// ttk-book2-*-groups.ts dosyaları; Kitap 3 "Kıymetli Evrak" (m.645-849)
// için bkz. ttk-kiymetli-evrak-groups.ts; Kitap 4 "Taşıma İşleri"
// (m.850-930) için bkz. ttk-tasima-isleri-groups.ts.
//
// Deniz Ticareti (m.931-1400), TTK'nın en hacimli kitabıdır — yaklaşık
// 470 madde ile gemi, kaptan, donatan, deniz ticareti sözleşmeleri
// (navlun, çarter, taşıma senedi), deniz kazaları (çatma, kurtarma,
// müşterek avarya), gemi alacakları, sorumluluğun sınırlanması ve
// cebri icraya ilişkin özel hükümleri kapsar. Bu nedenle bu kitap,
// önceki kitaplardan çok daha fazla sayıda batch gerektirecektir.
//
// Bu dosya, ilk batch'i kapsar: Birinci Kısım "Gemi"nin Birinci Bölümü
// "Genel Hükümler"in tamamı (gemi ve ticaret gemisi tanımları, m.931;
// denize/yola/yüke elverişli gemi kavramları, m.932; tamir kabul etmez
// gemi ve tamire değmez gemi ayrımı ile değerleme zamanlaması, m.933;
// gemi adamları tanımı - kaptan, gemi zabitleri, tayfalar ve diğer
// çalışanlar, m.934; Deniz Ticareti hükümlerinin ticaret gemilerine
// uygulanması ile yat/eğitim gemileri, Devlet/harp gemileri ve yapı
// hâlindeki yabancı gemiler bakımından istisnaları, m.935; gemilerin
// sicile kayıtlı olup olmadığına bakılmaksızın taşınır eşya sayılması,
// m.936; ve İİK'nın taşınmaza ilişkin hükümlerine tabi kılınan gemiler
// ile TMK'daki belirli taşınmaz hükümlerinin (aile konutu, miras,
// vasiyet) gemilere kıyasen uygulanması istisnası, m.937) ve İkinci
// Bölüm "Geminin Kimliği"nin tamamı (geminin adının seçilmesi ve
// iltibas yasağı, m.938; geminin adının ve bağlama limanının gövdeye
// yazılma zorunluluğu, m.939; Türk Bayrağını çekme hakkı ve yükümlülüğü
// - gerçek kişi, ortaklık, tüzel kişi, ticaret şirketi ve donatma
// iştiraki bakımından Türk vatandaşlığı/çoğunluk testleri, m.940;
// çıplak kira (bareboat charter) yoluyla geçici bayrak değişikliği
// istisnaları, m.941; Türk Bayrağı çekme hakkının kaybedilmesi ve altı
// aylık ek süre imkânı, m.942; hakkın ispatı - gemi tasdiknamesi, m.943;
// bayrak şahadetnamesi, m.944; küçük gemiler ve yat/eğitim gemileri için
// muafiyet, m.945; geminin bağlama limanı tanımı, m.946; ceza hükümleri
// - kanuna aykırı bayrak çekme, m.947; tasdikname/şahadetname almadan
// veya gemide bulundurmadan bayrak çekme, m.948; harp gemileri ile
// istihkâmlar önünde ve limanda bayrak çekmeme, m.949; geminin adı ve
// bağlama limanının yazılmaması, m.950; bu suçlarda kast şartı, m.951;
// yurt dışında veya açık denizde işlenen fiillerin cezalandırılması,
// m.952; ve tasdikname/şahadetname düzenlenmesi ile gemi işaretlemesine
// ilişkin yönetmelik çıkarma yetkisi, m.953) kapsanmıştır. Bu batch ile
// Birinci Kısım "Gemi"nin "Genel Hükümler" ve "Geminin Kimliği"
// bölümleri (m.931-953) eksiksiz tamamlanmış olur.
//
// İkinci batch, Birinci Kısım "Gemi"nin Üçüncü Bölümü "Gemi Sicili"nin
// açılışını kapsar (m.954-972): sicil müdürlüklerinin kuruluşu ve
// mahkeme gözetimi, yetkili sicil müdürlüğü, tescili caiz/zorunlu/yasak
// gemiler (Genel Hükümler, m.954-958); tescil isteminin şekli ve
// içeriği, gerekli belgeler, tescil edilecek hususlar, mülkiyet itirazı
// hâlinde şerh, yapı hâlindeki gemilere özgü sicilden geçiş ve tescildeki
// değişikliklerin bildirilmesi (Geminin Tescili, m.959-964); sicilden
// istem üzerine ve resen silinme ile Türk Bayrağını kaybeden gemilerde
// ipotek alacaklılarının onayına bağlı koruma mekanizması (Silinme,
// m.965-967); gemi tasdiknamesinin içeriği, yeniden düzenlenmesi,
// değişikliklerin işlenmesi ve ibraz zorunluluğu (Gemi Tasdiknamesi,
// m.968-971); ve sicil işlemlerini yaptırmaya davet usulü (m.972). Bu
// batch ile Üçüncü Bölüm "Gemi Sicili"nin açılışı tamamlanmış olur.
//
// Üçüncü batch, Üçüncü Bölüm "Gemi Sicili"nin geri kalanını kapsar ve bu
// bölümü m.954-995 aralığında eksiksiz tamamlar (m.973-995): sicilin
// açıklığı, m.973; sicil karineleri (malik ve hak sahibi karinesi,
// silinen hakkın yokluğu karinesi), m.974; sicilin gerçek hukuki duruma
// uygun hâle getirilmesi ve bu istemin zamanaşımına uğramaması, m.975;
// itirazlar, m.976; şerhler - verilebilecekleri hâller, verilmesi,
// sağladığı hak, hükümden düşmesi ve silinmesi, m.977-981; itiraz veya
// şerhin ihtiyati tedbirin kalkmasıyla kendiliğinden kalkması, m.982;
// sicile güven ilkesi - TMK'daki tapu siciline güven ilkesinin deniz
// ticareti hukukundaki karşılığı, m.983; zamanaşımı, m.984; ve kayıt
// giderleri, m.985 (Sicilin Hükümleri) ile İ) Yapı Hâlindeki Gemilere
// Özgü Sicil'in tamamı: genel esaslar, m.986; tescil isteminin şekli ve
// içeriği, m.987-988; tescil edilecek hususlar ve değişiklik bildirimi,
// m.989-990; sicilin hükümleri (ilgi ispatı şartlı açıklık, karine ve
// sicile güven ilkesinin kıyasen uygulanması), m.991; ve silinme,
// m.992 (m.986-992) ile son olarak J) Sicil müdürlüğünün kararlarına
// itiraz, m.993; K) Yönetmelik çıkarma yetkisi, m.994; ve L) Türk
// Uluslararası Gemi Sicili'ne ilişkin özel hükümlerin saklı tutulması,
// m.995 kapsanmıştır. Bu batch ile Üçüncü Bölüm "Gemi Sicili" (m.954-995)
// eksiksiz tamamlanmış olur.
//
// Bundan sonraki batch'ler Dördüncü Bölüm "Mülkiyet ve Diğer Ayni
// Haklar" (m.996 vd. - mülkiyetin iktisabı ve zıyaı, gemi rehni/ipoteği,
// intifa hakkı) ile devam edecektir. Beşinci Kitap "Deniz Ticareti"
// bundan sonra sırasıyla İkinci Kısım "Donatan ve Donatma İştiraki"
// (m.1061+), Üçüncü Kısım "Kaptan" (m.1088+), Dördüncü Kısım "Deniz
// Ticareti Sözleşmeleri" (m.1119+ - çarter sözleşmeleri, navlun
// sözleşmeleri, taşıma senedi) ve kitabın devamındaki Deniz Kazaları
// (Çatma, Kurtarma, Müşterek Avarya), Gemi Alacakları, Sorumluluğun
// Sınırlanması ve Cebrî İcraya İlişkin Özel Hükümler Kısımlarını da
// kapsayacak olup, kitabın m.1400'e kadar sürmesi nedeniyle onlarca ayrı
// batch gerektirecektir; bu dosya yalnızca yukarıda sayılan m.931-995
// aralığını kapsar ve ileriki batch'lerde yeni slug eşlemeleriyle
// genişletilecektir.

export const TTK_DENIZ_TICARETI_GROUP_ORDER: string[] = [
  "Gemi: Genel Hükümler",
  "Gemi: Geminin Kimliği",
  "Gemi: Gemi Sicili",
];

// slug -> TTK_DENIZ_TICARETI_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Beşinci Kitap "Deniz Ticareti"nin resmi kısım/bölüm
// sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "gemi-tanimlari-ve-genel-hukumler-ttk-931": "Gemi: Genel Hükümler",
  "geminin-adi-bayragi-ve-baglama-limani-ttk-938": "Gemi: Geminin Kimliği",
  "gemilerde-ceza-hukumleri-ve-yonetmelik-ttk-947": "Gemi: Geminin Kimliği",
  "gemi-sicili-kurulusu-ve-tescili-caiz-zorunlu-gemiler-ttk-954":
    "Gemi: Gemi Sicili",
  "geminin-tescili-usulu-ttk-959": "Gemi: Gemi Sicili",
  "gemi-sicilinden-silinme-ve-gemi-tasdiknamesi-ttk-965": "Gemi: Gemi Sicili",
  "gemi-sicilinin-hukumleri-ve-sicile-guven-ilkesi-ttk-973": "Gemi: Gemi Sicili",
  "yapi-halindeki-gemilere-ozgu-sicil-ttk-986": "Gemi: Gemi Sicili",
  "sicil-mudurlugu-kararlarina-itiraz-ve-turk-uluslararasi-gemi-sicili-ttk-993":
    "Gemi: Gemi Sicili",
};

export function getTtkDenizTicaretiGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkDenizTicaretiArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
