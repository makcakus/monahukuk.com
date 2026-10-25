"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { X } from "lucide-react";

const STORAGE_KEY = "cookie-consent-v1";

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // WhatsApp düğmesi bandın üstüne çıksın diye bandın yüksekliğini CSS
  // değişkeni olarak yayınlarız (bkz. WhatsAppFloat). Bant kapanınca sıfırlanır.
  useEffect(() => {
    const root = document.documentElement;
    const el = boxRef.current;
    if (!visible || !el) {
      root.style.removeProperty("--cookie-banner-h");
      return;
    }
    const publish = () =>
      root.style.setProperty("--cookie-banner-h", `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty("--cookie-banner-h");
    };
  }, [visible]);

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
    // GoogleAnalytics bileşeni bu olayı dinler; onay gelirse sayfa yenilenmeden yüklenir
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={boxRef}
      role="dialog"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-4 animate-cookie-slide"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-cream-200 bg-white shadow-2xl shadow-navy-900/15 dark:border-navy-700 dark:bg-navy-900 dark:shadow-black/40">
        {/* gold accent strip */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

        <button
          type="button"
          onClick={() => persist("essential")}
          aria-label={t("closeButton")}
          className="absolute end-2 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-ink-mute hover:bg-cream-100 hover:text-navy-900 dark:text-cream-200 dark:hover:bg-navy-800 dark:hover:text-cream-50 transition-colors sm:hidden"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-4">
          <div className="flex min-w-0 flex-1 items-start">
            <div className="min-w-0 pe-8 sm:pe-0">
              <h2 className="font-display text-base font-semibold text-navy-900 dark:text-cream-50">
                {t("title")}
              </h2>
              <p className="mt-1 text-sm leading-snug text-ink-soft dark:text-cream-200">
                {t("body")}{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-gold-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-800 dark:text-gold-300 dark:hover:text-gold-200"
                  onClick={() => persist("essential")}
                >
                  {t("learnMore")}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 gap-2 sm:items-center">
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md bg-navy-900 px-3 py-2.5 sm:px-4 text-sm font-medium text-cream-50 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-600 transition-colors"
            >
              {t("acceptAll")}
            </button>
            <button
              type="button"
              onClick={() => persist("essential")}
              className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md border border-navy-200 bg-white px-3 py-2.5 sm:px-4 text-sm font-medium text-navy-900 hover:bg-cream-100 dark:border-navy-700 dark:bg-transparent dark:text-cream-100 dark:hover:bg-navy-800 transition-colors"
            >
              {t("rejectAll")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
