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
// m.670'ten itibaren başlayan "Dördüncü Kısım - Kambiyo Senetleri"
// (poliçe/bono/çek) sonraki batch'lerde ele alınacaktır.

export const TTK_KIYMETLI_EVRAK_GROUP_ORDER: string[] = [
  "Kıymetli Evrakın Genel Hükümleri: Tanım, Senetten Doğan Borç ve Devir",
  "Nama Yazılı Senetler",
  "Hamile Yazılı Senetler",
];

// slug -> TTK_KIYMETLI_EVRAK_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Üçüncü Kitap "Kıymetli Evrak"ın resmi kısım
// sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "kiymetli-evrakin-tanimi-senetten-dogan-borc-ve-devir-ttk-645":
    "Kıymetli Evrakın Genel Hükümleri: Tanım, Senetten Doğan Borç ve Devir",
  "nama-yazili-senetler-ttk-654": "Nama Yazılı Senetler",
  "hamile-yazili-senetler-ttk-658": "Hamile Yazılı Senetler",
};

export function getTtkKiymetliEvrakGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkKiymetliEvrakArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
