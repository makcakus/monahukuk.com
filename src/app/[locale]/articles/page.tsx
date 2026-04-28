import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { getAllArticles, type Article } from "@/lib/articles";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

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

  // Group by category
  const byCategory = new Map<string, Article[]>();
  for (const a of articles) {
    const cat = a.category ?? t("uncategorized");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(a);
  }

  // Order categories by practice areas list (locale-aware), then any extras
  const orderedCategories: string[] = [];
  const seen = new Set<string>();
  for (const area of PRACTICE_AREAS) {
    const title = pickPA(area.title, locale);
    if (byCategory.has(title)) {
      orderedCategories.push(title);
      seen.add(title);
    }
  }
  for (const cat of byCategory.keys()) {
    if (!seen.has(cat)) orderedCategories.push(cat);
  }

  function slugForCategory(category: string): string | null {
    const area = PRACTICE_AREAS.find((a) => pickPA(a.title, locale) === category);
    return area?.slug ?? null;
  }

  function categoryAnchor(category: string): string {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9À-ɏЀ-ӿ؀-ۿ]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
      <section className="mx-auto max-w-4xl px-6 py-16">
        {articles.length === 0 ? (
          <p className="text-ink-mute italic">{t("empty")}</p>
        ) : (
          <>
            {/* Category nav */}
            <nav className="mb-12 flex flex-wrap gap-2 text-sm">
              {orderedCategories.map((cat) => {
                const count = byCategory.get(cat)!.length;
                return (
                  <a
                    key={cat}
                    href={`#${categoryAnchor(cat)}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 dark:border-navy-800 bg-cream-50 dark:bg-navy-900/50 px-3.5 py-1.5 text-ink-soft dark:text-cream-200 hover:border-gold-400 hover:text-navy-900 dark:hover:text-cream-50 transition-colors"
                  >
                    {cat}
                    <span className="text-xs text-ink-mute dark:text-cream-200/60">({count})</span>
                  </a>
                );
              })}
            </nav>

            {orderedCategories.map((cat) => {
              const items = byCategory.get(cat)!;
              const slug = slugForCategory(cat);
              return (
                <section
                  key={cat}
                  id={categoryAnchor(cat)}
                  className="mb-16 last:mb-0 scroll-mt-24"
                >
                  <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-cream-200 dark:border-navy-800 pb-3">
                    {slug ? (
                      <Link
                        href={`/practice-areas/${slug}`}
                        className="font-display text-2xl md:text-3xl text-navy-900 dark:text-cream-50 hover:text-gold-700 dark:hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        {cat}
                        <ArrowRight
                          size={18}
                          className="text-ink-mute group-hover:text-gold-700 group-hover:translate-x-0.5 transition-all"
                        />
                      </Link>
                    ) : (
                      <h2 className="font-display text-2xl md:text-3xl text-navy-900 dark:text-cream-50">
                        {cat}
                      </h2>
                    )}
                    <span className="text-xs uppercase tracking-[0.2em] text-ink-mute dark:text-cream-200/70 shrink-0">
                      {items.length} {items.length === 1 ? t("articleOne") : t("articleMany")}
                    </span>
                  </div>

                  <ul className="divide-y divide-cream-200 dark:divide-navy-800">
                    {items.map((a) => (
                      <li key={a.slug} className="py-7 first:pt-0">
                        <Link href={`/articles/${a.slug}`} className="block group">
                          <h3 className="font-display text-xl md:text-2xl text-navy-900 dark:text-cream-50 group-hover:text-navy-700 dark:group-hover:text-gold-300 transition-colors leading-snug">
                            {a.title}
                          </h3>
                          {a.description && (
                            <p className="mt-2 text-ink-soft dark:text-cream-200 leading-relaxed">
                              {a.description}
                            </p>
                          )}
                          <p className="mt-3 text-xs text-ink-mute dark:text-cream-200/60 flex items-center gap-3">
                            <span>{dateFmt.format(new Date(a.date))}</span>
                            <span>·</span>
                            <span>
                              {a.readingMinutes} {t("minRead")}
                            </span>
                            <span className="ml-auto inline-flex items-center gap-1 text-navy-900 dark:text-cream-200 group-hover:text-navy-700 dark:group-hover:text-gold-300">
                              {t("readMore")} <ArrowRight size={14} />
                            </span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </>
        )}
      </section>
    </>
  );
}
