"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";
import clsx from "clsx";

export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [pending, startTransition] = useTransition();

  return (
    <div className="inline-flex items-center text-xs font-medium uppercase tracking-wider gap-1">
      {routing.locales.map((l, idx) => (
        <span key={l} className="flex items-center gap-1">
          {idx > 0 && <span className="text-cream-200">·</span>}
          <button
            type="button"
            disabled={pending || l === locale}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: l });
              });
            }}
            className={clsx(
              "transition-colors",
              l === locale
                ? "text-navy-900"
                : "text-ink-mute hover:text-navy-700"
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
