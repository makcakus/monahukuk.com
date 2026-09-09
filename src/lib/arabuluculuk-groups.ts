// Arabuluculuk mevzuat makalelerini kanuna ve konu bütünlüğüne göre gruplamak
// için kullanılır. Yalnızca "Arabuluculuk Mevzuatı" makale grubunda (tr locale,
// articles sayfası) kullanılır; çalışma alanları sayfalarını etkilemez.

export const ARABULUCULUK_GROUP_ORDER: string[] = [
  "Temel İlkeler (6325 Sayılı Kanun)",
  "Arabulucunun Hak ve Yükümlülükleri",
  "Arabuluculuk Faaliyeti",
  "Dava Şartı Olarak Arabuluculuk",
  "Sicil, Eğitim ve Teşkilat",
];

// slug -> ARABULUCULUK_GROUP_ORDER içindeki başlık. 6325 sayılı Kanunun kendi
// bölüm sistematiği esas alınmış, dava şartı arabuluculuğu düzenleyen diğer
// kanun hükümleri (TTK m. 5/A, TKHK m. 73/A, 7036 s.K. m. 3) aynı başlık
// altında toplanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "arabuluculugun-amaci-kapsami-ve-elverislilik-huak-1": "Temel İlkeler (6325 Sayılı Kanun)",
  "arabuluculuk-ve-arabulucu-tanimlari-huak-2": "Temel İlkeler (6325 Sayılı Kanun)",
  "iradi-olma-ve-esitlik-ilkesi-huak-3": "Temel İlkeler (6325 Sayılı Kanun)",
  "arabuluculukta-gizlilik-ilkesi-huak-4": "Temel İlkeler (6325 Sayılı Kanun)",
  "beyan-ve-belgelerin-delil-olarak-kullanilamamasi-huak-5": "Temel İlkeler (6325 Sayılı Kanun)",

  "arabulucu-unvani-ve-uzmanlik-alanlari-huak-6": "Arabulucunun Hak ve Yükümlülükleri",
  "arabuluculuk-ucreti-ve-masraflarin-istenmesi-huak-7": "Arabulucunun Hak ve Yükümlülükleri",
  "taraflarla-gorusme-ve-iletisim-kurulmasi-huak-8": "Arabulucunun Hak ve Yükümlülükleri",
  "arabulucunun-ozen-ve-tarafsizlik-yukumlulugu-huak-9": "Arabulucunun Hak ve Yükümlülükleri",
  "reklam-yasagi-aydinlatma-ve-aidat-huak-10-12": "Arabulucunun Hak ve Yükümlülükleri",

  "arabulucuya-basvuru-ve-adli-yardim-huak-13": "Arabuluculuk Faaliyeti",
  "arabulucunun-secilmesi-ve-faaliyetin-yurutulmesi-huak-14-15": "Arabuluculuk Faaliyeti",
  "arabuluculuk-surecinin-baslamasi-ve-surelere-etkisi-huak-16": "Arabuluculuk Faaliyeti",
  "arabuluculugun-sona-ermesi-ve-son-tutanak-huak-17": "Arabuluculuk Faaliyeti",
  "milletlerarasi-sulh-anlasma-belgelerinin-icrasi-huak-17a": "Arabuluculuk Faaliyeti",
  "tasinmazin-devrinde-arabuluculuk-ve-tapu-serhi-huak-17b": "Arabuluculuk Faaliyeti",
  "taraflarin-anlasmasi-ve-icra-edilebilirlik-serhi-huak-18": "Arabuluculuk Faaliyeti",

  "dava-sarti-olarak-arabuluculuk-huak-18a": "Dava Şartı Olarak Arabuluculuk",
  "kira-ortaklik-kat-mulkiyeti-ve-komsuluk-uyusmazliklarinda-dava-sarti-huak-18b":
    "Dava Şartı Olarak Arabuluculuk",
  "ticari-uyusmazliklarda-dava-sarti-arabuluculuk-ttk-5a": "Dava Şartı Olarak Arabuluculuk",
  "tuketici-uyusmazliklarinda-dava-sarti-arabuluculuk-tkhk-73a": "Dava Şartı Olarak Arabuluculuk",

  "arabulucular-sicili-kayit-sartlari-ve-sicilden-silinme-huak-19-21": "Sicil, Eğitim ve Teşkilat",
  "arabuluculuk-egitimi-ve-egitim-kuruluslari-huak-22-27": "Sicil, Eğitim ve Teşkilat",
  "arabuluculuk-daire-baskanligi-kurul-ve-burolar-huak-28-32": "Sicil, Eğitim ve Teşkilat",
  "arabuluculukta-gizliligin-ihlali-sucu-huak-33": "Sicil, Eğitim ve Teşkilat",
};

export function getArabuluculukGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isArabuluculukMevzuatArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
