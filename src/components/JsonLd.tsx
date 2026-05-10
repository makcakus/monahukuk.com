/**
 * Generic JSON-LD render component.
 * Helper'lardan dönen objeyi <script type="application/ld+json"> içine yerleştirir.
 */
export function JsonLd({ data }: { data: unknown }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
