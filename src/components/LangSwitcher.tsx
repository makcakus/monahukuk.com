"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const LANG_LABELS: Record<string, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  ru: "Русский",
  ar: "العربية",
  es: "Español",
  fr: "Français",
};

const LOCALES = ["tr", "en", "de", "ru", "ar", "es", "fr"] as const;

export function LangSwitcher({ align = "end" }: { align?: "start" | "end" } = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [articleLocalesRes, setArticleLocalesRes] = useState<{ key: string; value: string[] | null } | null>(null);
  const [legalNewsRes, setLegalNewsRes] = useState<{ key: string; value: Record<string, string> | null } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const articleSlug = pathname.match(/^\/articles\/([^/]+)$/)?.[1];
  const legalNewsSlug = pathname.match(/^\/legal-news\/([^/]+)$/)?.[1];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Fetch sonucu, hangi (locale, slug) için geldiğiyle birlikte tutulur; slug
  // değişince eski sonuç türetme sırasında otomatik olarak geçersiz sayılır
  // (effect içinde senkron setState gerekmez).
  const articleKey = articleSlug ? `${locale}/${articleSlug}` : null;
  const legalNewsKey = legalNewsSlug ? `${locale}/${legalNewsSlug}` : null;
  const availableLocales = articleLocalesRes && articleLocalesRes.key === articleKey ? articleLocalesRes.value : null;
  const legalNewsSlugs = legalNewsRes && legalNewsRes.key === legalNewsKey ? legalNewsRes.value : null;

  useEffect(() => {
    if (!articleSlug || !articleKey) return;
    let cancelled = false;
    fetch(`/api/article-locales?locale=${locale}&slug=${articleSlug}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setArticleLocalesRes({ key: articleKey, value: (data as { locales?: string[] }).locales ?? null });
      })
      .catch(() => {
        if (!cancelled) setArticleLocalesRes({ key: articleKey, value: null });
      });
    return () => {
      cancelled = true;
    };
  }, [articleSlug, articleKey, locale]);

  useEffect(() => {
    if (!legalNewsSlug || !legalNewsKey) return;
    let cancelled = false;
    fetch(`/api/legal-news-locales?locale=${locale}&slug=${legalNewsSlug}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setLegalNewsRes({ key: legalNewsKey, value: (data as { slugs?: Record<string, string> }).slugs ?? null });
      })
      .catch(() => {
        if (!cancelled) setLegalNewsRes({ key: legalNewsKey, value: null });
      });
    return () => {
      cancelled = true;
    };
  }, [legalNewsSlug, legalNewsKey, locale]);

  // Makale/haber sayfasında değilsek veya liste henüz/başarısız yüklendiyse tüm dilleri göster.
  const visibleLocales = articleSlug && availableLocales
    ? LOCALES.filter((l) => availableLocales.includes(l))
    : legalNewsSlug && legalNewsSlugs
      ? LOCALES.filter((l) => l in legalNewsSlugs)
      : LOCALES;

  function switchTo(l: string) {
    setOpen(false);
    startTransition(() => {
      // Hukuki haber slug konvansiyonu locale'e göre farklı (TR: "-hukuki-haberler",
      // diğerleri: "-legal-news"), bu yüzden aynı pathname'i değil hedef locale'in
      // gerçek slug'ını kullanmak gerekiyor.
      if (legalNewsSlug && legalNewsSlugs?.[l]) {
        router.replace(`/legal-news/${legalNewsSlugs[l]}`, { locale: l });
      } else {
        router.replace(pathname, { locale: l });
      }
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={pending}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center gap-1 w-[52px] h-[28px] text-xs font-medium uppercase tracking-wider text-ink-soft hover:text-navy-900 dark:text-cream-200 dark:hover:text-cream-50 transition-colors flex-shrink-0"
      >
        {locale}
        <ChevronDown size={12} className={clsx("shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className={clsx(
          "absolute top-full mt-2 w-[160px] rounded-sm border border-cream-200 bg-cream-50 shadow-md py-1 z-50 dark:border-navy-800 dark:bg-navy-900",
          align === "end" ? "end-0" : "start-0"
        )}>
          {visibleLocales.map((l) => (
            <button
              key={l}
              type="button"
              disabled={pending || l === locale}
              onClick={() => switchTo(l)}
              className={clsx(
                "block w-full truncate text-start px-4 py-2 text-sm transition-colors",
                l === locale
                  ? "text-navy-900 font-medium bg-cream-100 dark:text-cream-50 dark:bg-navy-800"
                  : "text-ink-soft hover:text-navy-900 hover:bg-cream-100 dark:text-cream-200 dark:hover:text-cream-50 dark:hover:bg-navy-800"
              )}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
