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

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-legal">
          <p>{t("body")}</p>
        </div>
      </section>
    </>
  );
}
