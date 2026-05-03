"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

type NavLeaf = { type: "link"; href: string; key: string };
type NavGroup = {
  type: "group";
  key: string;
  matchPrefixes: readonly string[];
  items: readonly { href: string; key: string }[];
};
type NavItem = NavLeaf | NavGroup;

const NAV_ITEMS: readonly NavItem[] = [
  { type: "link", href: "/", key: "home" },
  {
    type: "group",
    key: "about",
    matchPrefixes: ["/about", "/team"],
    items: [
      { href: "/about", key: "about" },
      { href: "/team", key: "team" },
    ],
  },
  { type: "link", href: "/practice-areas", key: "practiceAreas" },
  { type: "link", href: "/articles", key: "articles" },
  { type: "link", href: "/contact", key: "contact" },
  { type: "link", href: "/privacy-policy", key: "privacy" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const tCta = useTranslations("cta");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        openGroup &&
        groupRef.current &&
        !groupRef.current.contains(e.target as Node)
      ) {
        setOpenGroup(null);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenGroup(null);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/90 backdrop-blur supports-[backdrop-filter]:bg-cream-50/75 dark:border-navy-800 dark:bg-navy-950/90 dark:supports-[backdrop-filter]:bg-navy-950/75">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          {tSite("name").split(" ").map((word, i) => (
            <span
              key={i}
              className="font-display text-4xl text-navy-900 dark:text-cream-50 tracking-tight leading-[1.05]"
            >
              {word}
            </span>
          ))}
          <span className="mt-2 flex flex-col text-xs uppercase tracking-[0.18em] text-gold-700 leading-snug">
            <span>Antalya</span>
            <span>{tSite("country")}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {NAV_ITEMS.map((item) => {
            if (item.type === "link") {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "whitespace-nowrap text-sm font-medium transition-colors",
                    active
                      ? "text-navy-900 dark:text-cream-50"
                      : "text-ink-soft hover:text-navy-800 dark:text-cream-200 dark:hover:text-cream-50"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            }
            const groupActive = item.matchPrefixes.some((p) => isActive(p));
            const isOpen = openGroup === item.key;
            return (
              <div
                key={item.key}
                ref={isOpen ? groupRef : null}
                className="relative"
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : item.key)}
                  className={clsx(
                    "inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors",
                    groupActive
                      ? "text-navy-900 dark:text-cream-50"
                      : "text-ink-soft hover:text-navy-800 dark:text-cream-200 dark:hover:text-cream-50"
                  )}
                >
                  {t(item.key)}
                  <ChevronDown
                    size={14}
                    className={clsx(
                      "transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute start-0 top-full mt-2 min-w-[180px] rounded-sm border border-cream-200 bg-cream-50 shadow-md py-1 dark:border-navy-800 dark:bg-navy-900"
                  >
                    {item.items.map((sub) => {
                      const subActive = isActive(sub.href);
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          role="menuitem"
                          onClick={() => setOpenGroup(null)}
                          className={clsx(
                            "block px-4 py-2 text-sm transition-colors",
                            subActive
                              ? "text-navy-900 bg-cream-100 dark:text-cream-50 dark:bg-navy-800"
                              : "text-ink-soft hover:text-navy-900 hover:bg-cream-100 dark:text-cream-200 dark:hover:text-cream-50 dark:hover:bg-navy-800"
                          )}
                        >
                          {t(sub.key)}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <LangSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center overflow-hidden rounded-sm bg-navy-900 px-4 text-sm font-medium text-cream-50 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-600 transition-colors whitespace-nowrap w-[180px] h-[40px] flex-shrink-0"
          >
            <span className="block w-full truncate text-center">{tCta("consult")}</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-navy-900 dark:text-cream-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-950">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-1 text-base text-ink-soft hover:text-navy-900 dark:text-cream-200 dark:hover:text-cream-50"
                  >
                    {t(item.key)}
                  </Link>
                );
              }
              return (
                <div key={item.key} className="flex flex-col">
                  <span className="py-1 text-xs uppercase tracking-[0.16em] text-gold-700 dark:text-gold-400">
                    {t(item.key)}
                  </span>
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="py-1 ps-3 text-base text-ink-soft hover:text-navy-900 dark:text-cream-200 dark:hover:text-cream-50"
                    >
                      {t(sub.key)}
                    </Link>
                  ))}
                </div>
              );
            })}
            <div className="pt-3 border-t border-cream-200 dark:border-navy-800 flex items-center justify-between">
              <LangSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
