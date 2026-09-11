"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Search, Loader2 } from "lucide-react";

type Yon = "en" | "tr";

type Terim = {
  i: number;
  k: string; // İngilizce kelime
  t: string; // Türkçe karşılık (kısa)
  u: string; // söz türü
  d: string; // kısa tanım (İngilizce)
  s: string; // CEFR seviyesi
};

// Veri dosyasindaki soz turu etiketleri Turkce yazilmis durumda; sayfa 8 dilde
// yayinlandigi icin bunlari mesaj dosyalarindaki hukukSozlugu.pos anahtarlarina
// eslestiriyoruz. Listede olmayan bir deger gelirse ham hali gosterilir.
const SOZ_TURU_ANAHTARI: Record<string, string> = {
  isim: "isim",
  fiil: "fiil",
  "sıfat": "sifat",
  zarf: "zarf",
  "kalıp": "kalip",
  edat: "edat",
};

// Sozluk iki yonlu: EN->TR ve TR->EN ayri veri dosyalarindan okunur. Kullanici
// yon degistirene kadar ikinci dosya indirilmez.
const VERI_URL: Record<Yon, string> = {
  en: "/data/hukuk-sozlugu.json",
  tr: "/data/hukuk-sozlugu-tr-en.json",
};
const MIN_HARF = 2;
const MAKS_SONUC = 40;

export function HukukSozluguArama() {
  const t = useTranslations("hukukSozlugu");
  const [yon, setYon] = useState<Yon>("en");
  const [veriler, setVeriler] = useState<Partial<Record<Yon, Terim[]>>>({});
  const [sorgu, setSorgu] = useState("");
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState(false);

  const terimler = veriler[yon] ?? null;

  useEffect(() => {
    if (veriler[yon]) return;
    let iptal = false;
    setYukleniyor(true);
    setHata(false);
    fetch(VERI_URL[yon])
      .then((r) => {
        if (!r.ok) throw new Error("veri alınamadı");
        return r.json() as Promise<Terim[]>;
      })
      .then((veri) => {
        if (!iptal) setVeriler((o) => ({ ...o, [yon]: veri }));
      })
      .catch(() => {
        if (!iptal) setHata(true);
      })
      .finally(() => {
        if (!iptal) setYukleniyor(false);
      });
    return () => {
      iptal = true;
    };
  }, [yon, veriler]);

  const sonuclar = useMemo(() => {
    if (!terimler) return [];
    const q = sorgu.trim().toLocaleLowerCase("tr");
    if (q.length < MIN_HARF) return [];

    const baslayan: Terim[] = [];
    const iceren: Terim[] = [];
    for (const terim of terimler) {
      const kelime = terim.k.toLocaleLowerCase("tr");
      const turkce = terim.t.toLocaleLowerCase("tr");
      if (kelime.startsWith(q)) {
        baslayan.push(terim);
      } else if (kelime.includes(q) || turkce.includes(q)) {
        iceren.push(terim);
      }
      if (baslayan.length >= MAKS_SONUC) break;
    }
    return [...baslayan, ...iceren].slice(0, MAKS_SONUC);
  }, [terimler, sorgu]);

  const q = sorgu.trim();

  return (
    <div>
      <div
        role="group"
        aria-label={t("dir.label")}
        className="mb-4 inline-flex rounded-sm border border-cream-300 p-0.5 dark:border-navy-700"
      >
        {(["en", "tr"] as const).map((y) => (
          <button
            key={y}
            type="button"
            onClick={() => setYon(y)}
            aria-pressed={yon === y}
            className={
              "rounded-sm px-4 py-2 text-sm transition-colors " +
              (yon === y
                ? "bg-navy-950 text-cream-50 dark:bg-cream-50 dark:text-navy-950"
                : "text-ink-soft hover:text-navy-950 dark:hover:text-cream-50")
            }
          >
            {t(y === "en" ? "dir.enTr" : "dir.trEn")}
          </button>
        ))}
      </div>

      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-ink-soft"
        />
        <input
          type="text"
          value={sorgu}
          onChange={(e) => setSorgu(e.target.value)}
          placeholder={t(
            yon === "en" ? "searchPlaceholder" : "searchPlaceholderTr",
          )}
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-sm border border-cream-300 bg-white/80 py-4 ps-11 pe-4 text-base text-navy-950 placeholder:text-ink-soft/70 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/50 dark:border-navy-700 dark:bg-navy-900/60 dark:text-cream-50"
        />
        {yukleniyor && (
          <Loader2
            size={18}
            className="absolute end-4 top-1/2 -translate-y-1/2 animate-spin text-ink-soft"
          />
        )}
      </div>

      {hata && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">
          {t("loadError")}
        </p>
      )}

      {!hata && q.length > 0 && q.length < MIN_HARF && (
        <p className="mt-4 text-sm text-ink-soft">
          {t("minChars", { min: MIN_HARF })}
        </p>
      )}

      {!hata && q.length >= MIN_HARF && !yukleniyor && (
        <p className="mt-4 text-sm text-ink-soft">
          {sonuclar.length > 0
            ? t("results", {
                count: `${sonuclar.length}${sonuclar.length === MAKS_SONUC ? "+" : ""}`,
              })
            : t("noResults")}
        </p>
      )}

      {sonuclar.length > 0 && (
        <ul className="mt-4 divide-y divide-cream-200 border border-cream-200 rounded-sm bg-white/60 dark:divide-navy-800 dark:border-navy-800 dark:bg-navy-900/40">
          {sonuclar.map((terim) => (
            <li key={terim.i} className="px-5 py-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-lg text-navy-950 dark:text-cream-50">
                  {terim.k}
                </span>
                {terim.u && terim.u !== "hukuk" && (
                  <span className="text-xs uppercase tracking-[0.14em] text-gold-700 dark:text-gold-400">
                    {SOZ_TURU_ANAHTARI[terim.u]
                      ? t(`pos.${SOZ_TURU_ANAHTARI[terim.u]}`)
                      : terim.u}
                  </span>
                )}
                {terim.s && (
                  <span className="text-xs text-ink-soft/70">{terim.s}</span>
                )}
              </div>
              {terim.t && (
                <p className="mt-1 text-sm text-ink-soft">{terim.t}</p>
              )}
              {terim.d && (
                <p className="mt-1 text-sm text-ink-soft/90 italic">
                  {terim.d}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
