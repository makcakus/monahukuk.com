"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const t = useTranslations("theme");

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("switchToLight") : t("switchToDark")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:text-navy-900 dark:text-cream-200 dark:hover:text-cream-50 transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
