import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TEAM, pick } from "@/lib/team";
import { Reveal } from "./Reveal";

// Ekip sayfasıyla (team/page.tsx) aynı eşleme: yalnız yayınlanmış üyeler.
const PHOTO_BY_NAME: Record<string, string> = {
  "Av. Mustafa AKÇAKUŞ": "/team/mustafa.jpeg",
  "Av. Murat BOSTAN": "/team/murat.jpeg",
};

export function TeamFaces() {
  const t = useTranslations("home");
  const tTeam = useTranslations("team");
  const locale = useLocale();
  const members = TEAM.filter((m) => PHOTO_BY_NAME[m.name]);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal variant="inline">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 text-balance max-w-2xl">
            {t("team.title")}
          </h2>
          <span className="gold-divider sd-draw mt-6" />
          <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">{tTeam("lead")}</p>
        </Reveal>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 max-w-3xl">
          {members.map((m, i) => (
            <li key={m.name}>
              <figure>
                <div className="team-face relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-100">
                  <Image
                    src={PHOTO_BY_NAME[m.name]}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover"
                  />
                </div>
                <Reveal as="div" variant="settle" step={i} className="mt-4">
                  <figcaption>
                    <p className="font-display text-xl text-navy-900">{m.name}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.14em] text-gold-700">
                      {pick(m.role, locale)}
                    </p>
                    <p className="mt-1 text-sm text-ink-mute">{m.bar}</p>
                  </figcaption>
                </Reveal>
              </figure>
            </li>
          ))}
        </ul>

        <Link
          href="/team"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold-700 hover:text-gold-800 underline decoration-gold-400 underline-offset-4"
        >
          {t("team.link")}
          <ArrowRight size={15} className="shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
