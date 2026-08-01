// TTK (Türk Ticaret Kanunu) Kitap 1 "Ticari İşletme" konu makalelerini
// kanunun resmi kısım sistematiğine göre gruplamak için kullanılır.
// Yalnızca "Türk Ticaret Kanunu - Ticari İşletme" makale grubunda (tr
// locale, articles sayfası) kullanılır; çalışma alanları sayfalarını
// etkilemez.

export const TTK_GROUP_ORDER: string[] = [
  "Ticari Hükümler, Ticari Örf ve Âdet, Ticari İşler",
  "Ticari Zamanaşımı, Teselsül Karinesi ve Ticari İşlerde Faiz",
  "Tacir Sıfatı ve Tacir Olmanın Hükümleri",
  "Ticaret Sicili",
  "Ticaret Unvanı ve İşletme Adı",
  "Haksız Rekabet",
  "Ticari Defterler",
  "Cari Hesap",
  "Acentelik",
];

// slug -> TTK_GROUP_ORDER içindeki başlık. Madde numarası sırasıyla,
// TTK Kitap 1 "Ticari İşletme"nin resmi kısım sistematiğine göre
// atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "ticari-hukumler-ve-ticari-isler-ttk-1":
    "Ticari Hükümler, Ticari Örf ve Âdet, Ticari İşler",
  "ticari-zamanasimi-ve-faiz-ttk-6":
    "Ticari Zamanaşımı, Teselsül Karinesi ve Ticari İşlerde Faiz",
  "tacir-sifati-ve-hukumleri-ttk-11": "Tacir Sıfatı ve Tacir Olmanın Hükümleri",
  "ticaret-sicili-ttk-24": "Ticaret Sicili",
  "ticaret-unvani-ve-isletme-adi-ttk-39": "Ticaret Unvanı ve İşletme Adı",
  "haksiz-rekabet-ttk-54": "Haksız Rekabet",
  "ticari-defterler-ttk-64": "Ticari Defterler",
  "cari-hesap-ttk-89": "Cari Hesap",
  "acentelik-ttk-102": "Acentelik",
};

export function getTtkGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
