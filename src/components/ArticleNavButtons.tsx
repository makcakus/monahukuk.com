import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Article } from "@/lib/articles";

export async function ArticleNavButtons({
  prevArticle,
  nextArticle,
}: {
  prevArticle?: Article | null;
  nextArticle?: Article | null;
}) {
  if (!prevArticle && !nextArticle) return null;

  const t = await getTranslations("articles");

  return (
    <div className="flex items-center gap-2 rtl:flex-row-reverse">
      {prevArticle ? (
        <Link
          href={`/articles/${prevArticle.slug}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 dark:border-navy-700 bg-white dark:bg-navy-900 px-3.5 py-1.5 text-xs font-medium text-navy-800 dark:text-cream-200 hover:border-gold-400 hover:text-gold-700 dark:hover:text-gold-400 transition-all"
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

      {nextArticle ? (
        <Link
          href={`/articles/${nextArticle.slug}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 dark:border-navy-700 bg-white dark:bg-navy-900 px-3.5 py-1.5 text-xs font-medium text-navy-800 dark:text-cream-200 hover:border-gold-400 hover:text-gold-700 dark:hover:text-gold-400 transition-all"
          title={nextArticle.title}
        >
          <span className="max-w-[140px] truncate">{t("nextArticle")}</span>
          <ArrowRight size={13} className="shrink-0 rtl:rotate-180" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 dark:border-navy-800 px-3.5 py-1.5 text-xs text-ink-mute opacity-40 cursor-not-allowed">
          <span>{t("nextArticle")}</span>
          <ArrowRight size={13} className="shrink-0 rtl:rotate-180" />
        </span>
      )}
    </div>
  );
}
