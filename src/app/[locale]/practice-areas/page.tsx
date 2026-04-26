import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "practiceAreas" });
  return { title: t("title") };
}

export default async function PracticeAreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("practiceAreas");

  return (
    <>
      <PageHero title={t("title")} lead={t("lead")} />
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-ink-mute italic">{t("comingSoon")}</p>
      </section>
    </>
  );
}
