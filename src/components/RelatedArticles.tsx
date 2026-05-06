import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getRelatedArticles } from "@/lib/articles";

export async function RelatedArticles({
  locale,
  currentSlug,
  category,
  manualRelated,
  limit = 3,
}: {
  locale: string;
  currentSlug: string;
  category?: string;
  manualRelated?: string[];
  limit?: number;
}) {
  const items = await getRelatedArticles(
    locale,
    { slug: currentSlug, category, relatedSlugs: manualRelated },
    limit
  );

  if (items.length === 0) return null;

  const t = await getTranslations("articles");
  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="mt-6 border-t border-cream-200 pt-6"
    >
      <h2
        id="related-articles-heading"
        className="font-display text-2xl text-navy-900 dark:text-cream-50"
      >
        {t("relatedTitle")}
      </h2>
      <span className="gold-divider mt-4" />

      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/articles/${a.slug}`}
              className="group flex h-full flex-col rounded-lg border border-cream-200 bg-white dark:border-navy-800 dark:bg-navy-900 p-5 hover:border-gold-400 hover:shadow-sm transition-all"
            >
              {a.category && (
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold-700 dark:text-gold-400 mb-2">
                  {a.category}
                </p>
              )}
              <h3 className="font-display text-base leading-snug text-navy-900 dark:text-cream-50 group-hover:text-gold-700 transition-colors line-clamp-3">
                {a.title}
              </h3>
              <p className="mt-2 text-xs text-ink-mute">
                {dateFmt.format(new Date(a.date))} · {a.readingMinutes} {t("minRead")}
              </p>
              <span className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-medium text-navy-800 dark:text-cream-200 group-hover:text-gold-700 transition-colors">
                {t("readMore")}
                <ArrowRight size={12} className="rtl:rotate-180" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
