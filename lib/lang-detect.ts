// Picks English or Spanish from a visitor's language preferences.
// Shared by the server (Accept-Language header) and the browser
// (navigator.languages) so both agree on the same answer.

export type Lang = "en" | "es";

/** First supported language in preference order; English if neither appears. */
export function matchLang(preferences: readonly string[]): Lang {
  for (const pref of preferences) {
    const base = pref.trim().toLowerCase().split(/[-_]/)[0];
    if (base === "es") return "es";
    if (base === "en") return "en";
  }
  return "en";
}

/**
 * Parse an Accept-Language header ("es-US,es;q=0.9,en;q=0.8") into tags
 * ordered by the q-weights the browser sent.
 */
export function parseAcceptLanguage(header: string | null | undefined): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      const weight = q ? Number(q.trim().slice(2)) : 1;
      return { tag: tag.trim(), weight: Number.isFinite(weight) ? weight : 0, index };
    })
    .filter((p) => p.tag && p.tag !== "*" && p.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index)
    .map((p) => p.tag);
}
