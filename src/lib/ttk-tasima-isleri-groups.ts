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
// İkinci Kısmın kalan bölümü "B) Taşıyıcının Sorumluluğu" (m.875-893),
// "Üçüncü Kısım - Taşınma Eşyası" (m.894-901), "Dördüncü Kısım -
// Değişik Tür Araçlarla Taşıma" (m.902-905), "Beşinci Kısım - Yolcu
// Taşıma" (m.906-916) ve "Altıncı Kısım - Taşıma İşleri Komisyoncusu"
// (m.917-930) sonraki batch'lerde ele alınacaktır.

export const TTK_TASIMA_ISLERI_GROUP_ORDER: string[] = [
  "Taşıma İşlerinde Genel Hükümler",
  "Eşya Taşımada Taşıma Sözleşmesi: Taşıma Senedi ve Yük Senedi",
  "Eşya Taşımada Sözleşmenin Uygulanması: Ambalaj, Yükleme, Talimat, Ücret ve Teslim",
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
};

export function getTtkTasimaIsleriGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkTasimaIsleriArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
