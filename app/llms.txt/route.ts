import { LOCATIONS } from "@/lib/booking";
import { PRICING, WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { STATS } from "@/lib/social-proof";
import { SITE_URL } from "@/lib/seo";

/*
 * /llms.txt (llmstxt.org): a plain Markdown summary for AI tools.
 * Built from the same data the pages use (price, clinics, hours, approved
 * stats), so it never disagrees with the site. Same compliance rules as the
 * pages: no outcome claims, approved stats only, approved payment wording.
 */

export const dynamic = "force-static";

const url = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);
const program = `/programs/${WEIGHT_LOSS.slug}`;

function body(): string {
  const clinics = LOCATIONS.map((l) => {
    const phone = l.phone.replace(/^\+1-(\d{3})-(\d{3})-(\d{4})$/, "($1) $2-$3");
    return `- Estrella Medical Centers - ${l.name}: ${l.address}. Phone ${phone}. Hours: ${l.hoursSummary.en}.`;
  }).join("\n");

  const stats = STATS.map((s) => `${s.number} ${s.label.en.charAt(0).toLowerCase()}${s.label.en.slice(1)}`).join("; ");

  return `# Estrella Wellness

> Estrella Wellness is the doctor-led GLP-1 weight loss program from Estrella Medical Centers, with weekly in-clinic care at six clinics in Miami-Dade and Broward, Florida. Open to everyone, no membership needed. Care in English and Spanish.

Estrella Medical Centers is a South Florida medical group (${stats}). The program is staffed by the Estrella Medical Centers medical team.

## What the program includes

- A doctor consultation and blood work review with a licensed Estrella doctor.
- If treatment is right for you, the GLP-1 medication your doctor chooses, given weekly by the medical team at an Estrella clinic, with a check-in at every visit.
- A nutritionist meal plan and a guided exercise program.

## Price and payment

- ${fmtPrice(PRICING.promo)} per month for a limited time (regular price ${fmtPrice(PRICING.regular)} per month). The doctor consultation is included. Billed monthly; cancel at any time.
- Payment is collected at or before the consultation. If your doctor finds you are not a candidate, you get a full refund.
- Details: [Refund policy](${url("/refunds")}).

## Medication

Your doctor decides whether any medication is appropriate for you. On your doctor's prescription, medication may be prepared by a partner compounding pharmacy, Greenstone Rx in Miami. Compounded drugs are not FDA-approved and have not been reviewed by the FDA for safety, effectiveness or quality. Availability may vary. This information is educational and is not a recommendation, diagnosis or guarantee of results.

## Clinics

Hours vary by clinic. Book online and choose the clinic, date and time.

${clinics}

## Pages (English)

- [Home](${url("/")}): overview of the program and price
- [The GLP-1 weight loss program](${url(program)}): what is included, medications, pricing
- [How it works](${url("/how-it-works")}): from booking to weekly visits
- [FAQ](${url("/faq")}): cost, payment and refunds, safety, who qualifies
- [Book a consultation](${url("/qualify")}): choose a clinic, date and time

## Páginas (español)

- [Inicio](${url("/es")}): el programa y su precio
- [El programa de pérdida de peso GLP-1](${url(`/es${program}`)}): qué incluye, medicamentos, precio
- [Cómo funciona](${url("/es/how-it-works")}): desde la cita hasta las visitas semanales
- [Preguntas frecuentes](${url("/es/faq")}): costo, pagos y reembolsos, seguridad
- [Agenda tu consulta](${url("/es/qualify")}): elige clínica, fecha y hora

## Contact

- Email: info@estrellamedicalcenters.com
- Phone: (305) 982-8810
- Parent organization: [Estrella Medical Centers](https://estrellamedicalcenters.com/)

## Optional

- [Terms of service](${url("/terms")})
- [Privacy policy](${url("/privacy")})
- [Cookie policy](${url("/cookies")})
- [Accessibility](${url("/accessibility")})
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
