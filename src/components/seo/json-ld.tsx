/**
 * Renders a JSON-LD structured-data block. Server-safe.
 *
 * The payload is serialized by us from trusted, static data, so the
 * `dangerouslySetInnerHTML` here carries no user input.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
