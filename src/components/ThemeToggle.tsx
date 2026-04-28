"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const initial = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  if (theme === null) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-soft"
      >
        <Sun size={16} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Aydınlık mod" : "Koyu mod"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:text-navy-900 dark:text-cream-200 dark:hover:text-cream-50 transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
