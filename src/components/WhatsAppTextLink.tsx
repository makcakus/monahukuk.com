"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

/** Sayfa içi WhatsApp bağlantısı; tıklama yüzen düğmeyle aynı olay adıyla izlenir. */
export function WhatsAppTextLink({
  locale,
  className,
  children,
}: {
  locale: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={whatsappUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { locale, placement: "invite" })}
      className={className}
    >
      {children}
    </a>
  );
}
