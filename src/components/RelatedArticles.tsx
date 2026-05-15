import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowNext } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getRelatedArticles, Article } from "@/lib/articles";

export async function RelatedArticles({
  locale,
  currentSlug,
  category,
  manualRelated,
  limit = 3,
  prevArticle,
  nextArticle,
}: {
  locale: string;
  currentSlug: string;
  category?: string;
  manualRelated?: string[];
  limit?: number;
  prevArticle?: Article | null;
  nextArticle?: Article | null;
}) {
  const items = await getRelatedArticles(
    locale,
    { slug: currentSlug, category, relatedSlugs: manualRelated },
    limit
  );

  const t = await getTranslations("articles");
  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const hasPagination = prevArticle || nextArticle;
  if (items.length === 0 && !hasPagination) return null;

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="mt-6 border-t border-cream-200 pt-6"
    >
      {/* Başlık satırı: sol = "İlgili Makaleler", sağ = önceki/sonraki butonlar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2
          id="related-articles-heading"
          className="font-display text-2xl text-navy-900 dark:text-cream-50"
        >
          {t("relatedTitle")}
        </h2>

        {hasPagination && (
          <div className="flex items-center gap-2 rtl:flex-row-reverse">
            {/* Önceki makale (daha yeni) */}
            {prevArticle ? (
              <Link
                href={`/articles/${prevArticle.slug}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-cream-300 dark:border-navy-700 bg-white dark:bg-navy-900 px-3.5 py-1.5 text-xs font-medium text-navy-800 dark:text-cream-200 hover:border-gold-400 hover:text-gold-700 dark:hover:text-gold-400 transition-all"
                title={prevArticle.title}
              >
                <ArrowLeft size={13} className="shrink-0 rtl:rotate-180" />
                <span className="max-w-[140px] truncate">{t("prevArticle")}</span>
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 dark:border-navy-800 px-3.5 py-1.5 text-xs text-ink-mute opacity-40 cursor-not-allowed">
                <ArrowLeft size={13} className="shrink-0 rtl:rotate-180" />
                <span>{t("prevArticle")}</span>
              </span>
            )}

            {/* Sonraki makale (daha eski) */}
            {nextArticle ? (
              <Link
                href={`/articles/${nextArticle.slug}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-cream-300 dark:border-navy-700 bg-white dark:bg-navy-900 px-3.5 py-1.5 text-xs font-medium text-navy-800 dark:text-cream-200 hover:border-gold-400 hover:text-gold-700 dark:hover:text-gold-400 transition-all"
                title={nextArticle.title}
              >
                <span className="max-w-[140px] truncate">{t("nextArticle")}</span>
                <ArrowNext size={13} className="shrink-0 rtl:rotate-180" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 dark:border-navy-800 px-3.5 py-1.5 text-xs text-ink-mute opacity-40 cursor-not-allowed">
                <span>{t("nextArticle")}</span>
                <ArrowNext size={13} className="shrink-0 rtl:rotate-180" />
              </span>
            )}
          </div>
        )}
      </div>

      <span className="gold-divider mt-4" />

      {items.length > 0 && (
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
      )}
    </section>
  );
}
