import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-cream-200 dark:border-navy-800">
      <div className="mx-auto max-w-6xl px-6 pt-5 pb-4 md:pt-6 md:pb-5">
        {kicker && (
          <p className="animate-hero-rise text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-400 mb-5">
            {kicker}
          </p>
        )}
        <h1 className="animate-hero-rise animate-hero-rise-delay-1 font-display text-4xl md:text-5xl text-navy-950 dark:text-cream-50 leading-tight tracking-tight max-w-3xl">
          {title}
        </h1>
        <span className="animate-hero-rise animate-hero-rise-delay-2 gold-divider mt-6" />
        {lead && (
          <p className="animate-hero-rise animate-hero-rise-delay-3 mt-6 text-lg text-ink-soft dark:text-cream-200 max-w-2xl leading-relaxed">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
