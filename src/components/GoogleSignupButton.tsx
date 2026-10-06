"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useLocale } from "next-intl";
import { subscribeWithGoogle, type NewsletterState } from "@/app/actions/newsletter";

type GoogleIdApi = {
  initialize: (cfg: {
    client_id: string;
    callback: (r: { credential: string }) => void;
  }) => void;
  renderButton: (el: HTMLElement, opts: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    google?: { accounts: { id: GoogleIdApi } };
  }
}

const OR_LABEL: Record<string, string> = {
  tr: "veya",
  en: "or",
  de: "oder",
  ru: "или",
  ar: "أو",
  es: "o",
  fr: "ou",
};

/**
 * "Google ile devam et" — Google Identity Services butonu. KVKK rızası form
 * içindeki `consent` kutusundan okunur; işaretli değilse kayıt yapılmaz.
 * NEXT_PUBLIC_GOOGLE_CLIENT_ID yoksa hiçbir şey render edilmez.
 */
export function GoogleSignupButton({
  onResult,
  tone = "light",
}: {
  onResult: (state: NewsletterState) => void;
  tone?: "light" | "dark";
}) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const locale = useLocale();
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const init = () => {
    const api = window.google?.accounts.id;
    if (!api || !clientId || !btnRef.current) return;
    api.initialize({
      client_id: clientId,
      callback: async ({ credential }) => {
        const form = wrapRef.current?.closest("form");
        const consent =
          form?.querySelector<HTMLInputElement>('input[name="consent"]')
            ?.checked ?? false;
        const state = await subscribeWithGoogle(credential, locale, consent);
        onResultRef.current(state);
      },
    });
    btnRef.current.innerHTML = "";
    api.renderButton(btnRef.current, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "rectangular",
      width: 280,
      locale,
    });
  };

  useEffect(() => {
    if (window.google) init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, locale]);

  if (!clientId) return null;

  return (
    <div ref={wrapRef} className="space-y-3">
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="lazyOnload"
        onLoad={init}
      />
      <div
        className={`flex items-center gap-3 text-xs ${
          tone === "dark" ? "text-navy-800" : "text-ink-mute"
        }`}
      >
        <span className="h-px flex-1 bg-current opacity-30" />
        {OR_LABEL[locale] ?? OR_LABEL.en}
        <span className="h-px flex-1 bg-current opacity-30" />
      </div>
      <div ref={btnRef} className="flex min-h-[44px] justify-center sm:justify-start" />
    </div>
  );
}
