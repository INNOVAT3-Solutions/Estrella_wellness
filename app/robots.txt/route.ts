import { SITE_URL } from "@/lib/seo";

/*
 * robots.txt. Policy (client decision, 2026-11-04): welcome search engines
 * and AI search/answer tools, do not allow AI model training.
 *
 * - Content-Signal states the preference (search=yes, ai-input=yes,
 *   ai-train=no). Crawlers obey only the most specific group naming them,
 *   so the line is repeated in every group.
 * - Training-only crawlers (OpenAI GPTBot, Anthropic ClaudeBot) are
 *   disallowed. Google-Extended is left alone on purpose: it also controls
 *   Gemini grounding, and blocking it would cut Gemini citations.
 * - /qualify and /dashboard stay crawlable so their noindex tag is seen.
 */

export const dynamic = "force-static";

const SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=no";

const BODY = `User-agent: *
${SIGNAL}
Allow: /
Disallow: /api/

User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
${SIGNAL}
Allow: /
Disallow: /api/

User-agent: GPTBot
User-agent: ClaudeBot
${SIGNAL}
Disallow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export function GET() {
  return new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
