"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LangSwitcher } from "./LangSwitcher";
import { acronymize } from "./Wordmark";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

type NavLeaf = { type: "link"; href: string; key: string; locales?: readonly string[] };
type NavGroup = {
  type: "group";
  key: string;
  matchPrefixes: readonly string[];
  items: readonly { href: string; key: string }[];
  locales?: readonly string[];
};
type NavItem = NavLeaf | NavGroup;

const NAV_ITEMS: readonly NavItem[] = [
  // "Ana Sayfa" bilinçli olarak yok: logoya basınca anasayfaya gidiliyor.
  // Görev 9: "Hakkımızda" ve "Ekibimiz" iki ayrı top-level link;
  // dropdown yok → "Ekibimiz" başlık olarak her zaman görünür.
  { type: "link", href: "/about", key: "about" },
  { type: "link", href: "/team", key: "team" },
  { type: "link", href: "/practice-areas", key: "practiceAreas" },
  { type: "link", href: "/articles", key: "articles" },
  { type: "link", href: "/legal-news", key: "legalNews" },
  { type: "link", href: "/remindionary-hukuk-sozlugu", key: "hukukSozlugu" },
  { type: "link", href: "/contact", key: "contact" },
  // Gizlilik Politikası üst menüden kaldırıldı; footer'da tutuluyor.
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const tCta = useTranslations("cta");
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [overStage, setOverStage] = useState(false);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Anasayfada sabitlenmiş koyu sahne ekrandayken başlık da koyu kalır.
      const stage = document.querySelector(".wt");
      setOverStage(!!stage && stage.getBoundingClientRect().bottom > 96);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Anasayfada hero'nun üstünde saydam başlar, kaydırınca kreme döner.
  const onHome = pathname === "/";
  const transparent = onHome && !scrolled && !open;
  // Sahne üstündeyken (kaydırılmış olsa da) koyu zemin, yazı açık renk.
  const darkBar = onHome && scrolled && overStage && !open;
  const lightInk = transparent || darkBar;
  const items = NAV_ITEMS.filter((item) => !item.locales || item.locales.includes(locale));

  const linkTone = lightInk
    ? "text-cream-100/90 hover:text-cream-50"
    : "text-ink-soft hover:text-navy-800 dark:text-cream-200 dark:hover:text-cream-50";
  const linkActiveTone = lightInk ? "text-cream-50" : "text-navy-900 dark:text-cream-50";
  // LangSwitcher kendi renklerini taşır; saydamken yalnız tetikleyici
  // düğmesini açık renge çeviriyoruz (açılır liste krem zeminde kalır).
  const controlTone = lightInk
    ? "[&>button]:text-cream-100 [&>button:hover]:text-cream-50 [&>div>button:first-child]:text-cream-100 [&>div>button:first-child:hover]:text-cream-50"
    : "";

  const navLinks: ReactNode = items.map((item) => {
    if (item.type === "link") {
      const active = isActive(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          data-active={active}
          className={clsx(
            "nav-underline whitespace-nowrap text-[15px] font-medium transition-colors",
            active ? linkActiveTone : linkTone
          )}
        >
          {t(item.key)}
        </Link>
      );
    }
    const groupActive = item.matchPrefixes.some((p) => isActive(p));
    const isOpen = openGroup === item.key;
    return (
      <div key={item.key} ref={isOpen ? groupRef : null} className="relative">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setOpenGroup(isOpen ? null : item.key)}
          className={clsx(
            "inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium transition-colors",
            groupActive ? linkActiveTone : linkTone
          )}
        >
          {t(item.key)}
          <ChevronDown size={14} className={clsx("transition-transform", isOpen && "rotate-180")} />
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
  });

  const name = tSite("name").split(" ");
  const nameInk = lightInk ? "text-cream-50" : "text-navy-900 dark:text-cream-50";
  const placeInk = lightInk ? "text-gold-200" : "text-gold-700";
  const place = (
    <span className={clsx("uppercase leading-none", placeInk)}>Antalya · Türkiye</span>
  );
  const oneLineName = (size: string) => (
    <span
      aria-hidden="true"
      dir="ltr"
      className={clsx("font-display tracking-tight leading-none whitespace-nowrap", size, nameInk)}
    >
      {acronymize(name[0])} {name.slice(1).join(" ")}
    </span>
  );

  const logo = (
    <Link href="/" aria-label={tSite("name")} className="flex flex-col gap-1.5" onClick={() => setOpen(false)}>
      {oneLineName("text-[28px]")}
      <span className="text-[10px] tracking-[0.26em]">{place}</span>
    </Link>
  );

  const controls = (
    <>
      <div className={clsx("flex items-center", controlTone)}>
        <LangSwitcher />
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-sm bg-gold-300 px-4 text-sm font-medium text-navy-950 hover:bg-gold-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 whitespace-nowrap w-auto h-[40px] flex-shrink-0"
      >
        <span className="block text-center">{tCta("consult")}</span>
      </Link>
    </>
  );

  const burgerTone = lightInk ? "text-cream-50" : "text-navy-900 dark:text-cream-100";
  const burger = (cls: string) => (
    <button
      type="button"
      aria-label="Menu"
      aria-expanded={open}
      className={clsx("inline-flex items-center justify-center w-10 h-10", burgerTone, cls)}
      onClick={() => setOpen((v) => !v)}
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );

  return (
    // Yükseklik scroll'la DEĞİŞMEZ. Sticky bir başlığın yüksekliğini
    // değiştirmek altındaki tüm içeriği kaydırır; bu da scroll sırasında
    // titreme olarak görünür. Scroll tepkisi yalnızca gölgedir (globals.css)
    // ve zemin katmanının opaklığıdır.
    <header className="site-header sticky top-0 z-40">
      {/* Zemin katmanı: saydam durumda opaklık 0, aksi halde krem/lacivert. */}
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute inset-0 border-b border-cream-200 bg-cream-50/97 backdrop-blur supports-[backdrop-filter]:bg-cream-50/95 dark:border-navy-800 dark:bg-navy-950/90 dark:supports-[backdrop-filter]:bg-navy-950/75 transition-opacity duration-300",
          lightInk ? "opacity-0" : "opacity-100"
        )}
      />
      {/* Koyu sahnenin üstünde: lacivert zemin. */}
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute inset-0 border-b border-navy-800 bg-navy-950/95 backdrop-blur transition-opacity duration-300",
          darkBar ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Saydam başlıkta krem yazı açık gökyüzünde okunsun diye yalnız üst bantta bir perde. */}
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute inset-x-0 top-0 h-[150%] bg-gradient-to-b from-navy-950/65 to-transparent transition-opacity duration-300",
          transparent ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative w-full px-6 lg:px-10 flex items-center gap-6 h-20">
        {logo}
        <nav className="ms-auto hidden xl:flex items-center gap-6 2xl:gap-8">{navLinks}</nav>
        <div className="hidden xl:flex items-center gap-3">{controls}</div>
        {burger("ms-auto xl:hidden")}
      </div>

      {open && (
        <div
          className="relative border-t border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-950 xl:hidden"
        >
          <nav className="w-full px-6 lg:px-10 py-4 flex flex-col gap-3">
            {items.map((item) => {
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
              <LangSwitcher align="start" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
