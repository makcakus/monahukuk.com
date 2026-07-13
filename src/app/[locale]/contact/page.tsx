import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { BookingSection } from "@/components/BookingSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return pageMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("lead"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  // Form konu seçenekleri — çalışma alanı başlıkları (client bundle'a
  // practice-areas verisini taşımamak için server'da hesaplanıp prop geçilir)
  const subjects = PRACTICE_AREAS.map((a) => pickPA(a.title, locale));

  const items = [
    {
      icon: <MapPin size={18} />,
      label: t("office"),
      value: t("officeAddress"),
    },
    {
      icon: <Phone size={18} />,
      label: t("phone"),
      value: t("phoneNumber"),
      href: `tel:${t("phoneNumber").replace(/\s|\(|\)/g, "")}`,
    },
    {
      icon: <Mail size={18} />,
      label: t("emailLabel"),
      value: t("emailAddress"),
      href: `mailto:${t("emailAddress")}`,
    },
    {
      icon: <Clock size={18} />,
      label: t("hours"),
      value: t("hoursValue"),
    },
  ];

  return (
    <>
      <PageHero title={t("title")} />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="grid gap-8 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.label} className="flex gap-4">
              <span className="mt-1 inline-flex w-9 h-9 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                {it.icon}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-700 mb-1">
                  {it.label}
                </p>
                {it.href ? (
                  <a href={it.href} className="text-navy-900 hover:text-navy-700">
                    {it.value}
                  </a>
                ) : (
                  <p className="text-ink-soft">{it.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ContactForm subjects={subjects} />
        </div>

        <div className="mt-12">
          <BookingSection />
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-cream-200 shadow-sm">
          <iframe
            src="https://maps.google.com/maps?cid=18036467465063864057&output=embed&z=17"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("mapTitle")}
          />
        </div>
      </section>
    </>
  );
}
