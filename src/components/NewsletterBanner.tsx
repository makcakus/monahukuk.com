"use client";

import { useActionState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle, MailCheck } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";

export function NewsletterBanner() {
  const t = useTranslations("newsletter");
  const locale = useLocale();
  if (locale !== "tr") return null;
  const [state, formAction, isPending] = useActionState<NewsletterState, FormData>(
    subscribeToNewsletter,
    null
  );

  if (state?.status === "alreadyConfirmed") {
    return (
      <div className="my-10 rounded-2xl border border-gold-200 bg-gold-50 dark:border-gold-700/30 dark:bg-navy-900 px-8 py-8 text-center">
        <CheckCircle className="mx-auto mb-3 text-gold-600 dark:text-gold-400" size={32} />
        <p className="font-display text-lg text-navy-900 dark:text-cream-50">
          {t("alreadyTitle")}
        </p>
        <p className="mt-1 text-sm text-ink-soft dark:text-cream-300">{t("alreadyBody")}</p>
      </div>
    );
  }

  if (state?.status === "pending" || state?.status === "resent") {
    return (
      <div className="my-10 rounded-2xl border border-gold-200 bg-gold-50 dark:border-gold-700/30 dark:bg-navy-900 px-8 py-8 text-center">
        <MailCheck className="mx-auto mb-3 text-gold-600 dark:text-gold-400" size={32} />
        <p className="font-display text-lg text-navy-900 dark:text-cream-50">
          {t(state.status === "resent" ? "resentTitle" : "pendingTitle")}
        </p>
        <p className="mt-1 text-sm text-ink-soft dark:text-cream-300">{t("pendingBody")}</p>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-2xl bg-navy-800 px-8 py-8">
      <div className="mx-auto max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-400 mb-1">
          {t("kicker")}
        </p>
        <h2 className="font-display text-2xl text-orange-400 leading-snug mb-3">
          {t("title")}
        </h2>

        <p className="text-sm text-white mb-6 leading-relaxed">{t("body")}</p>

        <form action={formAction} className="space-y-3">
          <input type="hidden" name="locale" value={locale} />
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t("placeholder")}
              className="flex-1 rounded-lg border border-navy-600 bg-navy-700 px-4 py-2.5 text-sm text-white placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
            <button
              type="submit"
              disabled={isPending}
              className="shrink-0 rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-orange-400 disabled:opacity-60 transition-colors"
            >
              {isPending ? t("submitting") : t("button")}
            </button>
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 shrink-0 accent-orange-400"
            />
            <span className="text-xs text-white/70 leading-relaxed">{t("consent")}</span>
          </label>

          {state?.status === "error" && (
            <p className="text-xs text-red-400">{t(state.errorKey)}</p>
          )}

        </form>
      </div>
    </div>
  );
}
