import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { getAllArticles, type Article } from "@/lib/articles";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Home,
  ShieldAlert,
  Users,
  Scale,
  Cpu,
  Briefcase,
  FileText,
  HardHat,
  Building2,
  BookOpen,
} from "lucide-react";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

const ICONS: Record<string, ReactNode> = {
  Globe: <Globe size={20} />,
  Home: <Home size={20} />,
  ShieldAlert: <ShieldAlert size={20} />,
  Users: <Users size={20} />,
  Scale: <Scale size={20} />,
  Cpu: <Cpu size={20} />,
  Briefcase: <Briefcase size={20} />,
  FileText: <FileText size={20} />,
  HardHat: <HardHat size={20} />,
  Building2: <Building2 size={20} />,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "articles" });
  return pageMetadata({
    locale,
    path: "/articles",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("articles");
  const articles = await getAllArticles(locale);

  const dateFmt = new Intl.DateTimeFormat(
    locale === "tr" ? "tr-TR" : locale === "de" ? "de-DE" : locale === "ru" ? "ru-RU" : locale === "ar" ? "ar-EG" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const byCategory = new Map<string, Article[]>();
  for (const a of articles) {
    const cat = a.category ?? t("uncategorized");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(a);
  }

  // Order: practice areas first (locale-aware), then any extras
  type Group = { category: string; icon: ReactNode; slug: string | null; items: Article[] };
  const groups: Group[] = [];
  const seen = new Set<string>();
  for (const area of PRACTICE_AREAS) {
    const title = pickPA(area.title, locale);
    if (byCategory.has(title)) {
      groups.push({
        category: title,
        icon: ICONS[area.icon] ?? <BookOpen size={20} />,
        slug: area.slug,
        items: byCategory.get(title)!,
      });
      seen.add(title);
    }
  }
  for (const cat of byCategory.keys()) {
    if (!seen.has(cat)) {
      groups.push({
        category: cat,
        icon: <BookOpen size={20} />,
        slug: null,
        items: byCategory.get(cat)!,
      });
    }
  }

  return (
    <>
      <PageHero title={t("title")} />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-6">
        {articles.length === 0 ? (
          <p className="text-ink-mute italic">{t("empty")}</p>
        ) : (
          <div className="space-y-4">
            {groups.map((g) => (
              <details
                key={g.category}
                className="group rounded-xl border border-cream-200 dark:border-navy-800 bg-white dark:bg-navy-900/40 overflow-hidden hover:border-gold-400 transition-colors"
              >
                <summary className="cursor-pointer list-none flex items-center gap-4 px-6 py-5 select-none">
                  <span className="inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-navy-900 dark:bg-gold-500 text-cream-50 dark:text-navy-950 group-open:bg-gold-500 group-open:text-navy-950 transition-colors">
                    {g.icon}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display text-lg md:text-xl text-navy-900 dark:text-cream-50 leading-snug">
                      {g.category} {t("relatedSuffix")}
                    </span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-ink-mute dark:text-cream-200/60 mt-1">
                      {g.items.length} {g.items.length === 1 ? t("articleOne") : t("articleMany")}
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-ink-mute dark:text-cream-200/70 group-open:rotate-180 transition-transform"
                  />
                </summary>

                <div className="border-t border-cream-200 dark:border-navy-800 px-6 py-2 bg-cream-50/50 dark:bg-navy-950/30">
                  <ul className="divide-y divide-cream-200 dark:divide-navy-800">
                    {g.items.map((a) => (
                      <li key={a.slug} className="py-5">
                        <Link href={`/articles/${a.slug}`} className="block group/article">
                          <h3 className="font-display text-lg md:text-xl text-navy-900 dark:text-cream-50 group-hover/article:text-gold-700 dark:group-hover/article:text-gold-300 transition-colors leading-snug">
                            {a.title}
                          </h3>
                          {a.description && (
                            <p className="mt-2 text-sm text-ink-soft dark:text-cream-200 leading-relaxed">
                              {a.description}
                            </p>
                          )}
                          <p className="mt-3 text-xs text-ink-mute dark:text-cream-200/60 flex items-center gap-3">
                            <span>{dateFmt.format(new Date(a.date))}</span>
                            <span>·</span>
                            <span>
                              {a.readingMinutes} {t("minRead")}
                            </span>
                            <span className="ml-auto inline-flex items-center gap-1 text-navy-900 dark:text-cream-200 group-hover/article:text-gold-700 dark:group-hover/article:text-gold-300">
                              {t("readMore")} <ArrowRight size={14} />
                            </span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {g.slug && (
                    <div className="border-t border-cream-200 dark:border-navy-800 py-4">
                      <Link
                        href={`/practice-areas/${g.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 dark:text-gold-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                      >
                        {t("viewPracticeArea")}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
