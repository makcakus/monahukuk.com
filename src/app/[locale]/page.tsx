import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return { title: `${t("name")} — ${t("tagline")}` };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");
  const tNav = useTranslations("nav");

  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-700 mb-6">
              {t("hero.kicker")}
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-navy-950 leading-[1.05] tracking-tight">
              {t("hero.title")}
            </h1>
            <span className="gold-divider mt-8" />
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
              {t("hero.lead")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-6 py-3 text-sm font-medium text-cream-50 hover:bg-navy-800 transition-colors"
              >
                {tCta("consult")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center text-sm font-medium text-navy-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
              >
                {tNav("practiceAreas")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-200 bg-cream-100/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 max-w-2xl">
            {t("valuePropsTitle")}
          </h2>
          <span className="gold-divider mt-6" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <ValueProp
              title={t("valueProps.international.title")}
              body={t("valueProps.international.body")}
            />
            <ValueProp
              title={t("valueProps.fullService.title")}
              body={t("valueProps.fullService.body")}
            />
            <ValueProp
              title={t("valueProps.discretion.title")}
              body={t("valueProps.discretion.body")}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-cream-200">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              {t("ctaBanner.title")}
            </h2>
            <p className="mt-4 text-ink-soft text-lg max-w-2xl">
              {t("ctaBanner.body")}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3 text-sm font-medium text-navy-950 hover:bg-gold-600 hover:text-cream-50 transition-colors"
            >
              {t("ctaBanner.button")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueProp({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-xl text-navy-900 mb-3">{title}</h3>
      <p className="text-ink-soft leading-relaxed">{body}</p>
    </div>
  );
}
