"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LangSwitcher } from "./LangSwitcher";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/practice-areas", key: "practiceAreas" },
  { href: "/team", key: "team" },
  { href: "/articles", key: "articles" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const tCta = useTranslations("cta");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/90 backdrop-blur supports-[backdrop-filter]:bg-cream-50/75">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl text-navy-900 tracking-tight">
            {tSite("name")}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold-700">
            Antalya · Türkiye
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  active
                    ? "text-navy-900"
                    : "text-ink-soft hover:text-navy-800"
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LangSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-navy-900 px-4 py-2 text-sm font-medium text-cream-50 hover:bg-navy-800 transition-colors"
          >
            {tCta("consult")}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-navy-900"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream-200 bg-cream-50">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-base text-ink-soft hover:text-navy-900"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-3 border-t border-cream-200 flex items-center justify-between">
              <LangSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
