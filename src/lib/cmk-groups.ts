// CMK (Ceza Muhakemesi Kanunu) konu makalelerini kanunun resmi kitap
// sistematiğine göre gruplamak için kullanılır. Yalnızca "Ceza Muhakemesi
// Kanunu" makale grubunda (tr locale, articles sayfası) kullanılır;
// çalışma alanları sayfalarını etkilemez.

export const CMK_GROUP_ORDER: string[] = [
  "Genel Hükümler",
  "Soruşturma Evresi",
  "Kovuşturma Evresi",
  "Mağdur, Şikâyetçi ve Katılan",
  "Özel Yargılama Usulleri",
  "Kanun Yolları",
];

// slug -> CMK_GROUP_ORDER içindeki başlık. Madde numarası sırasıyla,
// CMK'nın resmi kitap/kısım sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "ceza-muhakemesi-hukukuna-giris-cmk-1": "Genel Hükümler",
  "gorev-ve-yetki-cmk-3": "Genel Hükümler",
  "supheli-sanik-ve-mudafi-cmk-149": "Genel Hükümler",
  "ispat-araclari-taniklik-bilirkisi-kesif-cmk-43": "Genel Hükümler",
  "yakalama-ve-gozalti-cmk-90": "Genel Hükümler",
  "tutuklama-cmk-100": "Genel Hükümler",
  "adli-kontrol-cmk-109": "Genel Hükümler",
  "arama-ve-elkoyma-cmk-116": "Genel Hükümler",
  "iletisimin-denetlenmesi-ve-gizli-sorusturmaci-cmk-135": "Genel Hükümler",
  "koruma-tedbirleri-nedeniyle-tazminat-cmk-141": "Genel Hükümler",

  "sorusturma-evresi-cmk-160": "Soruşturma Evresi",
  "kamu-davasinin-acilmasi-ve-iddianame-cmk-170": "Soruşturma Evresi",

  "durusma-hazirligi-ve-durusma-cmk-190": "Kovuşturma Evresi",
  "delillerin-degerlendirilmesi-ve-hukuka-aykiri-deliller-cmk-206": "Kovuşturma Evresi",
  "hukum-ve-cesitleri-cmk-223": "Kovuşturma Evresi",

  "magdur-katilan-ve-vekili-cmk-233": "Mağdur, Şikâyetçi ve Katılan",

  "uzlastirma-cmk-253": "Özel Yargılama Usulleri",
  "basit-yargilama-ve-seri-muhakeme-usulu-cmk-250": "Özel Yargılama Usulleri",

  "itiraz-kanun-yolu-cmk-267": "Kanun Yolları",
  "istinaf-kanun-yolu-cmk-272": "Kanun Yolları",
  "temyiz-kanun-yolu-cmk-286": "Kanun Yolları",
  "yargilamanin-yenilenmesi-cmk-311": "Kanun Yolları",
};

export function getCmkGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isCmkArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
