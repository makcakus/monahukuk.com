import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return pageMetadata({
    locale,
    path: "/privacy-policy",
    title: t("title"),
    description: t("lead"),
  });
}

function Section({
  title,
  body,
  items,
}: {
  title: string;
  body: string;
  items?: string[];
}) {
  return (
    <div>
      <h2 className="font-display text-xl text-navy-900 dark:text-cream-50 mb-3">
        {title}
      </h2>
      <span className="gold-divider mb-5" />
      <p className="text-ink-soft leading-relaxed">{body}</p>
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2 pl-5 list-disc text-ink-soft leading-relaxed">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  const s2items = t.raw("s2.items") as string[];
  const s3items = t.raw("s3.items") as string[];
  const s5items = t.raw("s5.items") as string[];
  const s9items = t.raw("s9.items") as string[];

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-700 dark:text-gold-400 mb-8">
          {t("lastUpdated")}
        </p>

        <div className="prose-legal">
          <p>{t("intro")}</p>
        </div>

        <div className="mt-12 space-y-10">
          <Section title={t("s1.title")} body={t("s1.body")} />
          <Section title={t("s2.title")} body={t("s2.body")} items={s2items} />
          <Section title={t("s3.title")} body={t("s3.body")} items={s3items} />
          <Section title={t("s4.title")} body={t("s4.body")} />
          <Section title={t("s5.title")} body={t("s5.body")} items={s5items} />
          <Section title={t("s6.title")} body={t("s6.body")} />
          <Section title={t("s7.title")} body={t("s7.body")} />
          <Section title={t("s8.title")} body={t("s8.body")} />
          <Section title={t("s9.title")} body={t("s9.body")} items={s9items} />
          <Section title={t("s10.title")} body={t("s10.body")} />
          <Section title={t("s11.title")} body={t("s11.body")} />
          <Section title={t("s12.title")} body={t("s12.body")} />
          <Section title={t("s13.title")} body={t("s13.body")} />
          <Section title={t("s14.title")} body={t("s14.body")} />
        </div>
      </section>
    </>
  );
}
