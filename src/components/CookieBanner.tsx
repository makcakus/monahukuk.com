"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent-v1";

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  function persist(value: "accepted" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      localStorage.setItem(STORAGE_KEY + "-date", new Date().toISOString());
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:bottom-6 sm:start-auto sm:end-6 sm:max-w-md sm:px-0 sm:pb-0 animate-cookie-slide"
    >
      <div className="relative overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-2xl shadow-navy-900/15 dark:border-navy-700 dark:bg-navy-900 dark:shadow-black/40">
        {/* gold accent strip */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

        <button
          type="button"
          onClick={() => persist("essential")}
          aria-label={t("closeButton")}
          className="absolute end-3 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full text-ink-mute hover:bg-cream-100 hover:text-navy-900 dark:text-cream-200 dark:hover:bg-navy-800 dark:hover:text-cream-50 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="px-6 pt-5 pb-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 dark:bg-gold-500/20 dark:text-gold-300">
              <Cookie size={18} />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-base font-semibold text-navy-900 dark:text-cream-50">
                {t("title")}
              </h2>
              <p className="mt-1.5 pe-3 text-sm leading-relaxed text-ink-soft dark:text-cream-200">
                {t("body")}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="inline-flex flex-1 items-center justify-center rounded-md bg-navy-900 px-4 py-2.5 text-sm font-medium text-cream-50 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-600 transition-colors"
            >
              {t("acceptAll")}
            </button>
            <button
              type="button"
              onClick={() => persist("essential")}
              className="inline-flex flex-1 items-center justify-center rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-900 hover:bg-cream-100 dark:border-navy-700 dark:bg-transparent dark:text-cream-100 dark:hover:bg-navy-800 transition-colors"
            >
              {t("rejectAll")}
            </button>
          </div>

          <div className="mt-3 flex justify-end">
            <Link
              href="/privacy-policy"
              className="text-xs font-medium text-gold-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-800 dark:text-gold-300 dark:hover:text-gold-200"
              onClick={() => persist("essential")}
            >
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
