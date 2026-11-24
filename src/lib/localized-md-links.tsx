import type { ComponentPropsWithoutRef } from "react";
import { localizeInternalHref } from "@/lib/article-fallback";

type AnchorProps = ComponentPropsWithoutRef<"a"> & { node?: unknown };

/**
 * MDXRemote ve ReactMarkdown için `components` haritası: gövdedeki dil öneksiz
 * iç bağlantıları (`/articles/<slug>`) sayfanın diline çevirir. Bkz.
 * localizeInternalHref.
 */
export function localizedLinkComponents(locale: string) {
  return {
    a: ({ node, href, ...rest }: AnchorProps) => {
      // ReactMarkdown `node` prop'unu da geçirir; DOM'a sızmasın.
      void node;
      return <a href={href ? localizeInternalHref(locale, href) : href} {...rest} />;
    },
  };
}
