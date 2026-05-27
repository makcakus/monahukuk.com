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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function switchTo(l: string) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: l });
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
          {LOCALES.map((l) => (
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
