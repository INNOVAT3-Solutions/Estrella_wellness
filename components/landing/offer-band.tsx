"use client";

import { Marquee } from "@/components/ui/marquee";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";
import { WithLogo } from "@/components/ui/brand-mark";
import { EstrellaStar } from "@/components/ui/estrella-star";

const COPY = {
  en: [
    "New at {logo}",
    `Limited-time price: ${fmtPrice(WEIGHT_LOSS.price)}/mo`,
    "No membership needed",
    "Consultation included",
    "Weekly injections at our clinics",
    "Se habla español",
    "More programs coming soon",
  ],
  es: [
    "Nuevo en {logo}",
    `Precio por tiempo limitado: ${fmtPrice(WEIGHT_LOSS.price)}/mes`,
    "Sin membresía",
    "Consulta incluida",
    "Inyecciones semanales en nuestros centros",
    "Atención en español",
    "Más programas muy pronto",
  ],
};

export function OfferBand() {
  const { lang } = useLang();
  const items = pick(lang, COPY);

  return (
    <div className="border-y border-white/10 bg-navy-950 py-5 font-heading">
      <Marquee>
        {items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-12 whitespace-nowrap text-[clamp(1rem,1.5vw,1.25rem)] font-semibold text-white/90"
          >
            <span className="inline-flex items-center">
              <WithLogo text={item} tone="light" />
            </span>
            <EstrellaStar className="w-6" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
