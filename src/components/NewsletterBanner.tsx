"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { Mail, CheckCircle } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";

export function NewsletterBanner() {
  const t = useTranslations("newsletter");
  const [state, formAction, isPending] = useActionState<NewsletterState, FormData>(
    subscribeToNewsletter,
    null
  );

  if (state?.success) {
    return (
      <div className="my-10 rounded-2xl border border-gold-200 bg-gold-50 dark:border-gold-700/30 dark:bg-navy-900 px-8 py-8 text-center">
        <CheckCircle className="mx-auto mb-3 text-gold-600 dark:text-gold-400" size={32} />
        <p className="font-display text-lg text-navy-900 dark:text-cream-50">{t("successTitle")}</p>
        <p className="mt-1 text-sm text-ink-soft dark:text-cream-300">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-2xl bg-navy-950 dark:bg-navy-900 px-8 py-8">
      <div className="mx-auto max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
            <Mail size={20} />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold-400">{t("kicker")}</p>
            <h2 className="font-display text-xl text-cream-50 leading-snug">{t("title")}</h2>
          </div>
        </div>

        <p className="text-sm text-cream-300 mb-6 leading-relaxed">{t("body")}</p>

        <form action={formAction} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t("placeholder")}
              className="flex-1 rounded-lg border border-navy-700 bg-navy-800 px-4 py-2.5 text-sm text-cream-50 placeholder:text-cream-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
            />
            <button
              type="submit"
              disabled={isPending}
              className="shrink-0 rounded-lg bg-gold-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-gold-500 disabled:opacity-60 transition-colors"
            >
              {isPending ? t("submitting") : t("button")}
            </button>
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 shrink-0 accent-gold-500"
            />
            <span className="text-xs text-cream-400 leading-relaxed">{t("consent")}</span>
          </label>

          {state && !state.success && (
            <p className="text-xs text-red-400">{t(state.errorKey)}</p>
          )}
        </form>
      </div>
    </div>
  );
}
