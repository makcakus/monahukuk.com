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

export const TTK_KIYMETLI_EVRAK_GROUP_ORDER: string[] = [
  "Kıymetli Evrakın Genel Hükümleri: Tanım, Senetten Doğan Borç ve Devir",
  "Nama Yazılı Senetler",
  "Hamile Yazılı Senetler",
  "Kambiyo Senetleri: Poliçenin Şekli ve İmza Sorumluluğu",
  "Kambiyo Senetleri: Poliçede Ciro",
  "Kambiyo Senetleri: Poliçede Kabul ve Aval",
  "Kambiyo Senetleri: Poliçede Vade ve Ödeme",
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
};

export function getTtkKiymetliEvrakGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkKiymetliEvrakArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
