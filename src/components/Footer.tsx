import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const tFooter = useTranslations("footer");
  const tContact = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-cream-200 bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-cream-50">{tSite("name")}</p>
          <p className="mt-2 text-sm text-cream-200/80 max-w-sm">
            {tSite("tagline")}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-3">
            {t("home")}
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold-300 inline-block truncate max-w-full">{t("about")}</Link></li>
            <li><Link href="/practice-areas" className="hover:text-gold-300 inline-block truncate max-w-full">{t("practiceAreas")}</Link></li>
            <li><Link href="/team" className="hover:text-gold-300 inline-block truncate max-w-full">{t("team")}</Link></li>
            <li><Link href="/articles" className="hover:text-gold-300 inline-block truncate max-w-full">{t("articles")}</Link></li>
            <li><Link href="/contact" className="hover:text-gold-300 inline-block truncate max-w-full">{t("contact")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-3">
            {tContact("title")}
          </p>
          <ul className="space-y-2 text-sm text-cream-200/90">
            <li>{tContact("officeAddress")}</li>
            <li>
              <a href={`tel:${tContact("phoneNumber").replace(/\s|\(|\)/g, "")}`} className="hover:text-gold-300">
                {tContact("phoneNumber")}
              </a>
            </li>
            <li>
              <a href={`mailto:${tContact("emailAddress")}`} className="hover:text-gold-300">
                {tContact("emailAddress")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-cream-200/70">
          <p>© {year} {tSite("name")}. {tFooter("rights")}</p>
          <p className="md:max-w-md md:text-right">{tFooter("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
