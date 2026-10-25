import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NewsletterInlineCTA } from "./NewsletterInlineCTA";
import { Reveal } from "./Reveal";
import { WheelMark } from "./WheelMark";
import { WhatsAppTextLink } from "./WhatsAppTextLink";

/**
 * Anasayfanın kapanışı: baskı yok, tek davet ve iki yol (form, WhatsApp).
 * Bülten bunun altında küçük bir köşede durur; kapanışın asıl işi randevu.
 */
export function InviteCta() {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="sd-curtain sd-panel sd-panel--page -mt-14 relative">
      {/* Taşan işaret panelin kendisini değil bu sarmalı kırpar; panelin üst
          gölgesi ve yuvarlak köşeleri bozulmaz. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[inherit]"
      >
        <WheelMark className="absolute -end-24 -top-6 h-[34rem] w-auto md:-end-10 md:top-4 md:h-[40rem]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl text-navy-900 text-balance max-w-2xl leading-[1.05]">
            {t("invite.title")}
          </h2>
          <span className="gold-divider sd-draw mt-8" />
          <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed">{t("invite.body")}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-[52px] w-[calc(100%-4.5rem)] items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-gold-300 px-6 text-sm font-medium text-navy-950 shadow-lg shadow-navy-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0 active:scale-[0.98] sm:w-auto"
            >
              {tCta("consult")}
              <ArrowRight size={16} className="shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
            <WhatsAppTextLink
              locale={locale}
              className="inline-flex h-[52px] w-[calc(100%-4.5rem)] items-center justify-center whitespace-nowrap rounded-sm border border-navy-900/25 px-6 text-sm font-medium text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900/5 active:translate-y-0 active:scale-[0.98] dark:border-cream-100/40 dark:text-cream-50 dark:hover:bg-cream-50/10 sm:w-auto"
            >
              {t("invite.whatsapp")}
            </WhatsAppTextLink>
          </div>
        </Reveal>

        <div className="mt-24 max-w-3xl">
          <Reveal variant="soft">
            <NewsletterInlineCTA id="newsletter" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
