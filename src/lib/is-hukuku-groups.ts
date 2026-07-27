// İş Hukuku mevzuat makalelerini kanuna göre gruplamak için kullanılır.
// Yalnızca "İş Hukuku Mevzuatı" makale grubunda (tr locale, articles
// sayfası) kullanılır; çalışma alanları sayfalarını etkilemez.

export const IS_HUKUKU_GROUP_ORDER: string[] = [
  "4857 Sayılı İş Kanunu",
  "Diğer Bireysel İş Hukuku Kurumları",
  "Toplu İş Hukuku (6356 Sayılı Kanun)",
  "Diğer Kanunlara Tabi İşçiler",
  "İş Yargısı",
];

// slug -> IS_HUKUKU_GROUP_ORDER içindeki başlık. Madde numarası sırasıyla,
// ilgili kanunun resmi kitap/kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "is-hukukuna-giris-ik-1": "4857 Sayılı İş Kanunu",
  "isci-isveren-ve-isyeri-kavramlari-ik-2": "4857 Sayılı İş Kanunu",
  "esit-davranma-ilkesi-ik-5": "4857 Sayılı İş Kanunu",
  "isyerinin-devri-ik-6": "4857 Sayılı İş Kanunu",
  "gecici-is-iliskisi-ik-7": "4857 Sayılı İş Kanunu",
  "is-sozlesmesinin-tanimi-ve-turleri-ik-8": "4857 Sayılı İş Kanunu",
  "deneme-sureli-is-sozlesmesi-ve-takim-sozlesmesi-ik-15": "4857 Sayılı İş Kanunu",
  "sureli-fesih-ve-ihbar-oneli-ik-17": "4857 Sayılı İş Kanunu",
  "is-guvencesi-ise-iade-davasi-ik-18": "4857 Sayılı İş Kanunu",
  "calisma-kosullarinda-degisiklik-ik-22": "4857 Sayılı İş Kanunu",
  "iscinin-hakli-nedenle-fesih-hakki-ik-24": "4857 Sayılı İş Kanunu",
  "isverenin-hakli-nedenle-fesih-hakki-ik-25": "4857 Sayılı İş Kanunu",
  "toplu-isci-cikarma-ik-29": "4857 Sayılı İş Kanunu",
  "ucret-ve-odenmesi-ik-32": "4857 Sayılı İş Kanunu",
  "fazla-calisma-ucreti-ik-41": "4857 Sayılı İş Kanunu",
  "hafta-tatili-ve-genel-tatil-ucreti-ik-46": "4857 Sayılı İş Kanunu",
  "yillik-ucretli-izin-ik-53": "4857 Sayılı İş Kanunu",
  "calisma-suresi-ve-ara-dinlenmesi-ik-63": "4857 Sayılı İş Kanunu",
  "gece-calismasi-ve-ozel-calistirma-yasaklari-ik-69": "4857 Sayılı İş Kanunu",
  "is-sagligi-ve-guvenligi-ik-77": "4857 Sayılı İş Kanunu",

  "kidem-tazminati-1475-m14": "Diğer Bireysel İş Hukuku Kurumları",
  "is-kazasi-ve-meslek-hastaligi-sorumlulugu": "Diğer Bireysel İş Hukuku Kurumları",
  "rekabet-yasagi-sozlesmesi-tbk-444": "Diğer Bireysel İş Hukuku Kurumları",

  "sendika-ozgurlugu-ve-uyelik-stisk-17": "Toplu İş Hukuku (6356 Sayılı Kanun)",
  "toplu-is-sozlesmesi-ve-yetki-stisk-33": "Toplu İş Hukuku (6356 Sayılı Kanun)",
  "toplu-is-uyusmazliklarinin-cozumu-stisk-49": "Toplu İş Hukuku (6356 Sayılı Kanun)",
  "grev-ve-lokavt-stisk-58": "Toplu İş Hukuku (6356 Sayılı Kanun)",

  "tbk-ye-tabi-hizmet-sozlesmesi-ve-is-kanunu-istisnalari": "Diğer Kanunlara Tabi İşçiler",
  "deniz-is-kanununa-tabi-gemi-adamlari": "Diğer Kanunlara Tabi İşçiler",
  "basin-is-kanununa-tabi-gazeteciler": "Diğer Kanunlara Tabi İşçiler",

  "dava-sarti-arabuluculuk-ve-is-mahkemeleri-7036": "İş Yargısı",
};

export function getIsHukukuGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isIsHukukuMevzuatArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
