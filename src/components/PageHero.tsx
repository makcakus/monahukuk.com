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
    <section className="border-b border-cream-200">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 md:pt-24 md:pb-16">
        {kicker && (
          <p className="text-xs uppercase tracking-[0.25em] text-gold-700 mb-5">
            {kicker}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight tracking-tight max-w-3xl">
          {title}
        </h1>
        <span className="gold-divider mt-6" />
        {lead && (
          <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
