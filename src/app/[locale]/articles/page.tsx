import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { getAllArticles } from "@/lib/articles";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "articles" });
  return { title: t("title"), description: t("lead") };
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

  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
      <section className="mx-auto max-w-4xl px-6 py-16">
        {articles.length === 0 ? (
          <p className="text-ink-mute italic">{t("empty")}</p>
        ) : (
          <ul className="divide-y divide-cream-200">
            {articles.map((a) => (
              <li key={a.slug} className="py-8 first:pt-0">
                <Link
                  href={`/articles/${a.slug}`}
                  className="block group"
                >
                  {a.category && (
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-700 mb-2">
                      {a.category}
                    </p>
                  )}
                  <h2 className="font-display text-2xl md:text-3xl text-navy-900 group-hover:text-navy-700 transition-colors">
                    {a.title}
                  </h2>
                  {a.description && (
                    <p className="mt-3 text-ink-soft leading-relaxed">
                      {a.description}
                    </p>
                  )}
                  <p className="mt-4 text-xs text-ink-mute flex items-center gap-3">
                    <span>{dateFmt.format(new Date(a.date))}</span>
                    <span>·</span>
                    <span>{a.readingMinutes} {t("minRead")}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-navy-900 group-hover:text-navy-700">
                      {t("readMore")} <ArrowRight size={14} />
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
