import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const tFooter = useTranslations("footer");
  const tContact = useTranslations("contact");
  const locale = useLocale();
  const year = new Date().getFullYear();
  const showLegalNews = true; // legal-news is available in all 7 locales

  return (
    <footer className="mt-24 border-t border-cream-200 bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-cream-50">{tSite("name")}</p>
          <p className="mt-2 text-sm text-cream-200/80 max-w-sm">
            {tSite("tagline")}
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] mb-3 h-[1rem] truncate text-gold-300">
            {tFooter("siteMap")}
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold-300 block truncate max-w-full">{t("about")}</Link></li>
            <li><Link href="/team" className="hover:text-gold-300 block truncate max-w-full">{t("team")}</Link></li>
            <li><Link href="/practice-areas" className="hover:text-gold-300 block truncate max-w-full">{t("practiceAreas")}</Link></li>
            <li><Link href="/articles" className="hover:text-gold-300 block truncate max-w-full">{t("articles")}</Link></li>
            {showLegalNews && (
              <li><Link href="/legal-news" className="hover:text-gold-300 block truncate max-w-full">{t("legalNews")}</Link></li>
            )}
            <li><Link href="/contact" className="hover:text-gold-300 block truncate max-w-full">{t("contact")}</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold-300 block truncate max-w-full">{t("privacy")}</Link></li>
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] mb-3 h-[1rem] truncate text-gold-300">
            {tContact("title")}
          </p>
          <ul className="space-y-2 text-sm text-cream-200/90">
            <li>{tContact("officeAddress")}</li>
            <li className="truncate">
              <a href={`tel:${tContact("phoneNumber").replace(/\s|\(|\)/g, "")}`} className="hover:text-gold-300">
                {tContact("phoneNumber")}
              </a>
            </li>
            <li className="truncate">
              <a href={`mailto:${tContact("emailAddress")}`} className="hover:text-gold-300">
                {tContact("emailAddress")}
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] mb-2 text-gold-300">
            {tFooter("newsletterHeading")}
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-1 text-sm text-cream-100 hover:text-gold-300 transition-colors"
          >
            {tFooter("newsletterCta")}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-cream-200/70">
          <p>© {year} {tSite("name")}. {tFooter("rights")}</p>
          <p className="md:max-w-md md:text-end">{tFooter("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
