import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const ROWS = [
  {
    feature: "Reviewed by a real medical group",
    estrella: true,
    online: false,
    inperson: true,
  },
  {
    feature: "Asynchronous intake — no waiting room",
    estrella: true,
    online: true,
    inperson: false,
  },
  {
    feature: "Bilingual provider team",
    estrella: true,
    online: false,
    inperson: false,
  },
  {
    feature: "Provider response within 24 hours",
    estrella: true,
    online: false,
    inperson: false,
  },
  {
    feature: "Subscription with flexible cancellation",
    estrella: true,
    online: true,
    inperson: false,
  },
  {
    feature: "Free, discreet shipping",
    estrella: true,
    online: true,
    inperson: false,
  },
  {
    feature: "The same providers across programs",
    estrella: true,
    online: false,
    inperson: true,
  },
  {
    feature: "Transparent monthly pricing",
    estrella: true,
    online: false,
    inperson: false,
  },
];

const Cell = ({ value, accent = false }: { value: boolean; accent?: boolean }) =>
  value ? (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center ${
        accent ? "text-sun-700" : "text-navy-900"
      }`}
    >
      <Check className="h-5 w-5" strokeWidth={1.75} />
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center text-navy-900/25">
      <Minus className="h-5 w-5" strokeWidth={1.5} />
    </span>
  );

export function Comparison() {
  return (
    <section className="section bg-cream-50 paper-grain paper-grain-light">
      <div className="container-x">
        <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="eyebrow">A quiet distinction</div>
            <h2 className="mt-5 font-display text-display-lg font-light text-navy-900">
              It is the care
              <br />
              <span className="font-normal italic">behind the care.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:text-right">
            <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto">
              Most online clinics are marketplaces. Estrella is a medical
              group — the same one South Florida families have trusted for
              three decades, now extended to the patients we are licensed to
              serve.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-16">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-end gap-4 border-b border-navy-900/25 pb-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-navy-900/55">
                The detail
              </div>
              <div className="text-center">
                <div className="font-display text-[20px] font-light text-navy-900 sm:text-[22px]">
                  Estrella
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-sun-700">
                  Wellness
                </div>
              </div>
              <div className="text-center text-[12px] uppercase tracking-[0.18em] text-navy-900/55">
                Generic clinic
              </div>
              <div className="text-center text-[12px] uppercase tracking-[0.18em] text-navy-900/55">
                In-person doctor
              </div>
            </div>

            <div className="divide-y divide-navy-900/15">
              {ROWS.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center gap-4 py-5"
                >
                  <div className="font-display text-[16px] font-light text-navy-900 sm:text-[17px]">
                    {row.feature}
                  </div>
                  <div className="flex justify-center">
                    <Cell value={row.estrella} accent />
                  </div>
                  <div className="flex justify-center">
                    <Cell value={row.online} />
                  </div>
                  <div className="flex justify-center">
                    <Cell value={row.inperson} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
