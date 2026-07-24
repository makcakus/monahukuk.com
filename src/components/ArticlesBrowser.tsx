"use client";

import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ChevronDown,
  Search,
  X,
  Globe,
  Home,
  ShieldAlert,
  Users,
  Cpu,
  Briefcase,
  FileText,
  Building2,
  Key,
  BookOpen,
  Scale,
  HardHat,
  Copyright,
} from "lucide-react";
import type { ReactNode } from "react";
import type { ArticleSearchEntry } from "@/lib/articles";
import type { PracticeIconKey } from "@/lib/practice-areas";

type IconKey = PracticeIconKey | "BookOpen";

const ICONS: Record<IconKey, ReactNode> = {
  Globe: <Globe size={20} />,
  Home: <Home size={20} />,
  ShieldAlert: <ShieldAlert size={20} />,
  Users: <Users size={20} />,
  Cpu: <Cpu size={20} />,
  Briefcase: <Briefcase size={20} />,
  FileText: <FileText size={20} />,
  Building2: <Building2 size={20} />,
  Key: <Key size={20} />,
  BookOpen: <BookOpen size={20} />,
  Scale: <Scale size={20} />,
  HardHat: <HardHat size={20} />,
  Copyright: <Copyright size={20} />,
};

export interface BrowserSubgroup {
  title: string;
  items: ArticleSearchEntry[];
}

export interface BrowserGroup {
  category: string;
  iconKey: IconKey;
  practiceSlug: string | null;
  items: ArticleSearchEntry[];
  // Opsiyonel iç içe blok: örn. "Ceza Hukuku" grubunun altında
  // "Türk Ceza Kanunu - Tüm Suçlar" başlığı ve suç grupları alt başlıkları.
  nestedHeading?: string;
  subgroups?: BrowserSubgroup[];
}

export interface BrowserUiStrings {
  searchPlaceholder: string;
  searchClear: string;
  searchEmpty: string;
  searchResultsLabel: string;
  articleOne: string;
  articleMany: string;
  readMore: string;
  minRead: string;
  viewPracticeArea: string;
}

export function ArticlesBrowser({
  groups,
  ui,
  dateLocale,
}: {
  groups: BrowserGroup[];
  ui: BrowserUiStrings;
  dateLocale: string;
}) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase().replace(/̇/g, "");
  const isSearching = trimmed.length >= 2;

  const dateFmt = useMemo(
    () =>
      new Intl.DateTimeFormat(dateLocale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [dateLocale]
  );

  const matches = useMemo<ArticleSearchEntry[]>(() => {
    if (!isSearching) return [];
    const all = groups.flatMap((g) => [
      ...g.items,
      ...(g.subgroups?.flatMap((sg) => sg.items) ?? []),
    ]);
    return all.filter((a) => a.searchText.includes(trimmed));
  }, [isSearching, trimmed, groups]);

  return (
    <div>
      <div className="sticky top-[68px] z-20 -mx-6 mb-8 bg-cream-50/95 dark:bg-navy-950/90 backdrop-blur supports-[backdrop-filter]:bg-cream-50/80 dark:supports-[backdrop-filter]:bg-navy-950/75 px-6 py-4 border-b border-cream-200 dark:border-navy-800">
        <label className="relative block">
          <span className="sr-only">{ui.searchPlaceholder}</span>
          <Search
            size={18}
            className="absolute start-4 top-1/2 -translate-y-1/2 text-ink-mute dark:text-cream-200/60 pointer-events-none"
            strokeWidth={1.75}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui.searchPlaceholder}
            autoComplete="off"
            spellCheck={false}
            className="w-full h-[48px] rounded-full border border-cream-200 dark:border-navy-800 bg-white dark:bg-navy-900/60 ps-12 pe-12 text-base text-navy-900 dark:text-cream-50 placeholder:text-ink-mute dark:placeholder:text-cream-200/50 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={ui.searchClear}
              className="absolute end-3 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full text-ink-mute dark:text-cream-200/70 hover:text-navy-900 dark:hover:text-cream-50 hover:bg-cream-100 dark:hover:bg-navy-800 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </label>
      </div>

      {isSearching ? (
        <SearchResults
          matches={matches}
          ui={ui}
          dateFmt={dateFmt}
          query={trimmed}
        />
      ) : (
        <GroupedView groups={groups} ui={ui} dateFmt={dateFmt} />
      )}
    </div>
  );
}

function SearchResults({
  matches,
  ui,
  dateFmt,
  query,
}: {
  matches: ArticleSearchEntry[];
  ui: BrowserUiStrings;
  dateFmt: Intl.DateTimeFormat;
  query: string;
}) {
  if (matches.length === 0) {
    return (
      <p className="px-1 py-10 text-center text-ink-mute dark:text-cream-200/70 italic">
        {ui.searchEmpty}
      </p>
    );
  }

  return (
    <div>
      <p className="mb-5 text-sm text-ink-mute dark:text-cream-200/70 px-1">
        {matches.length} {ui.searchResultsLabel}
      </p>
      <ul className="divide-y divide-cream-200 dark:divide-navy-800">
        {matches.map((a) => (
          <li key={a.slug} className="py-6">
            <Link href={`/articles/${a.slug}`} className="block group">
              {a.category && (
                <p className="text-xs uppercase tracking-[0.18em] text-gold-700 dark:text-gold-400 mb-2">
                  {a.category}
                </p>
              )}
              <h3 className="font-display text-xl md:text-2xl text-navy-900 dark:text-cream-50 group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 overflow-hidden">
                <Highlight text={a.title} query={query} />
              </h3>
              {a.description && (
                <p className="mt-2 text-sm text-ink-soft dark:text-cream-200 leading-relaxed line-clamp-3 overflow-hidden">
                  <Highlight text={a.description} query={query} />
                </p>
              )}
              <p className="mt-3 text-xs text-ink-mute dark:text-cream-200/60 flex items-center gap-3">
                <span>{dateFmt.format(new Date(a.date))}</span>
                <span>·</span>
                <span>
                  {a.readingMinutes} {ui.minRead}
                </span>
                <span className="ms-auto inline-flex items-center gap-1 text-navy-900 dark:text-cream-200 group-hover:text-gold-700 dark:group-hover:text-gold-300">
                  {ui.readMore} <ArrowRight size={14} className="rtl:rotate-180" />
                </span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleListItem({
  a,
  ui,
  dateFmt,
}: {
  a: ArticleSearchEntry;
  ui: BrowserUiStrings;
  dateFmt: Intl.DateTimeFormat;
}) {
  return (
    <li className="py-5">
      <Link href={`/articles/${a.slug}`} className="block group/article">
        <h3 className="font-display text-lg md:text-xl text-navy-900 dark:text-cream-50 group-hover/article:text-gold-700 dark:group-hover/article:text-gold-300 transition-colors leading-snug line-clamp-2 overflow-hidden">
          {a.title}
        </h3>
        {a.description && (
          <p className="mt-2 text-sm text-ink-soft dark:text-cream-200 leading-relaxed line-clamp-3 overflow-hidden">
            {a.description}
          </p>
        )}
        <p className="mt-3 text-xs text-ink-mute dark:text-cream-200/60 flex items-center gap-3">
          <span>{dateFmt.format(new Date(a.date))}</span>
          <span>·</span>
          <span>
            {a.readingMinutes} {ui.minRead}
          </span>
          <span className="ms-auto inline-flex items-center gap-1 text-navy-900 dark:text-cream-200 group-hover/article:text-gold-700 dark:group-hover/article:text-gold-300">
            {ui.readMore} <ArrowRight size={14} className="rtl:rotate-180" />
          </span>
        </p>
      </Link>
    </li>
  );
}

function GroupedView({
  groups,
  ui,
  dateFmt,
}: {
  groups: BrowserGroup[];
  ui: BrowserUiStrings;
  dateFmt: Intl.DateTimeFormat;
}) {
  return (
    <div className="space-y-4">
      {groups.map((g) => {
        const subgroupCount =
          g.subgroups?.reduce((sum, sg) => sum + sg.items.length, 0) ?? 0;
        const totalCount = g.items.length + subgroupCount;
        return (
          <details
            key={g.category}
            className="group rounded-xl border border-cream-200 dark:border-navy-800 bg-white dark:bg-navy-900/40 overflow-hidden hover:border-gold-400 transition-colors"
          >
            <summary className="cursor-pointer list-none flex items-center gap-4 px-6 select-none h-[96px] overflow-hidden">
              <span className="inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-navy-900 dark:bg-gold-500 text-cream-50 dark:text-navy-950 group-open:bg-gold-500 group-open:text-navy-950 transition-colors">
                {ICONS[g.iconKey]}
              </span>
              <span className="flex-1 min-w-0 overflow-hidden">
                <span className="block font-display text-lg md:text-xl text-navy-900 dark:text-cream-50 leading-snug line-clamp-2 overflow-hidden">
                  {g.category}
                </span>
                <span className="block text-xs uppercase tracking-[0.18em] text-ink-mute dark:text-cream-200/60 mt-1 truncate">
                  {totalCount} {totalCount === 1 ? ui.articleOne : ui.articleMany}
                </span>
              </span>
              <ChevronDown
                size={20}
                className="shrink-0 text-ink-mute dark:text-cream-200/70 group-open:rotate-180 transition-transform"
              />
            </summary>

            <div className="border-t border-cream-200 dark:border-navy-800 px-6 py-2 bg-cream-50/50 dark:bg-navy-950/30">
              {g.items.length > 0 && (
                <ul className="divide-y divide-cream-200 dark:divide-navy-800">
                  {g.items.map((a) => (
                    <ArticleListItem key={a.slug} a={a} ui={ui} dateFmt={dateFmt} />
                  ))}
                </ul>
              )}

              {g.subgroups && g.subgroups.length > 0 && (
                <div className={g.items.length > 0 ? "border-t border-cream-200 dark:border-navy-800 pt-5 pb-2" : "py-2"}>
                  {g.nestedHeading && (
                    <h3 className="font-display text-base md:text-lg text-navy-900 dark:text-cream-50 mb-3">
                      {g.nestedHeading}
                    </h3>
                  )}
                  <div className="space-y-3">
                    {g.subgroups.map((sg) => (
                      <details
                        key={sg.title}
                        className="group/sub rounded-lg border border-cream-200 dark:border-navy-800 bg-white/60 dark:bg-navy-950/30 overflow-hidden"
                      >
                        <summary className="cursor-pointer list-none flex items-center gap-3 px-4 h-[56px] select-none">
                          <span className="flex-1 min-w-0 text-sm md:text-base font-medium text-navy-900 dark:text-cream-50 truncate">
                            {sg.title}
                          </span>
                          <span className="text-xs text-ink-mute dark:text-cream-200/60 shrink-0">
                            {sg.items.length}{" "}
                            {sg.items.length === 1 ? ui.articleOne : ui.articleMany}
                          </span>
                          <ChevronDown
                            size={16}
                            className="shrink-0 text-ink-mute dark:text-cream-200/70 group-open/sub:rotate-180 transition-transform"
                          />
                        </summary>
                        <div className="border-t border-cream-200 dark:border-navy-800 px-4 py-1">
                          <ul className="divide-y divide-cream-200 dark:divide-navy-800">
                            {sg.items.map((a) => (
                              <ArticleListItem key={a.slug} a={a} ui={ui} dateFmt={dateFmt} />
                            ))}
                          </ul>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {g.practiceSlug && (
                <div className="border-t border-cream-200 dark:border-navy-800 py-4">
                  <Link
                    href={`/practice-areas/${g.practiceSlug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 dark:text-gold-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  >
                    {ui.viewPracticeArea}
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </Link>
                </div>
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const lower = text.toLowerCase();
  const parts: ReactNode[] = [];
  let i = 0;
  let from = 0;
  while (i < lower.length) {
    const next = lower.indexOf(query, i);
    if (next === -1) break;
    if (next > from) parts.push(text.slice(from, next));
    parts.push(
      <mark
        key={next}
        className="bg-gold-200/70 dark:bg-gold-500/30 text-navy-950 dark:text-cream-50 rounded-sm px-0.5"
      >
        {text.slice(next, next + query.length)}
      </mark>
    );
    from = next + query.length;
    i = from;
  }
  if (from < text.length) parts.push(text.slice(from));
  return <>{parts}</>;
}
