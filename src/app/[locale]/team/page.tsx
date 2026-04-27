import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return pageMetadata({
    locale,
    path: "/team",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
      <section className="mx-auto max-w-3xl px-6 py-20" />
    </>
  );
}
