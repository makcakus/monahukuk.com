import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getAllGazettePosts } from "@/lib/hukuki-haberler";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "tr" && locale !== "en") return {};
  const t = await getTranslations({ locale, namespace: "legalNews" });
  return pageMetadata({
    locale,
    path: "/legal-news",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function LegalNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "tr" && locale !== "en") notFound();
  setRequestLocale(locale);

  const t = await getTranslations("legalNews");
  const posts = await getAllGazettePosts(locale);

  const dateFmt = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero title={t("title")} />
      <section className="mx-auto max-w-4xl px-6 pb-20">
        {posts.length === 0 ? (
          <p className="text-ink-mute italic pt-6">{t("empty")}</p>
        ) : (
          <ul className="mt-10 space-y-10">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-cream-200 dark:border-navy-800 pb-10">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-700 dark:text-gold-400 mb-2">
                  {dateFmt.format(new Date(post.date))} · {post.readingMinutes} {t("minRead")}
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-navy-950 dark:text-cream-50 leading-snug mb-3">
                  <Link
                    href={`/legal-news/${post.slug}`}
                    className="hover:text-gold-700 dark:hover:text-gold-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-ink-soft dark:text-cream-300 leading-relaxed mb-4">
                  {post.description}
                </p>
                <Link
                  href={`/legal-news/${post.slug}`}
                  className="text-sm font-medium text-navy-800 dark:text-gold-400 hover:underline"
                >
                  {t("readMore")} →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
