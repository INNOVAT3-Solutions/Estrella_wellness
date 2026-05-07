import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  {
    figure: "25 yrs",
    label: "Compounding practice",
  },
  {
    figure: "28 states",
    label: "Licensed footprint",
  },
  {
    figure: "Miami, FL",
    label: "FL DOH PH35751",
  },
];

export function PharmacyPartner() {
  return (
    <section className="section bg-cream-100 paper-grain paper-grain-light">
      <div className="container-x">
        <div className="grid items-start gap-12 border-t border-navy-900/15 pt-14 md:grid-cols-12 md:gap-16 md:pt-20">
          <Reveal className="md:col-span-7">
            <div className="eyebrow">The pharmacy partner</div>
            <h2 className="mt-6 font-display text-display-lg font-light leading-[0.98] text-navy-900">
              Made in Miami.
              <br />
              <span className="font-normal italic">Compounded with care.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[16px] leading-[1.7] text-navy-900/70">
              Compounded medications in your Estrella program are dispensed by{" "}
              <span className="text-navy-900">Greenstone Rx</span> — a specialty
              compounding pharmacy headquartered, like our medical group, in
              Miami, Florida. They have spent a quarter century preparing
              medicines for clinics, hospitals, and medical practices, and are
              licensed across the states we are licensed to serve.
            </p>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.7] text-navy-900/55">
              Compounded medications are not FDA-approved in the same manner as
              commercially manufactured drugs. They are dispensed by a licensed
              compounding pharmacy in response to a prescription written by an
              Estrella clinician.
            </p>
            <Link
              href="https://www.greenstonerx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-navy-900"
            >
              Visit greenstonerx.com
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <div className="md:pl-12 md:border-l md:border-navy-900/15">
              <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                In short
              </div>
              <dl className="mt-6 divide-y divide-navy-900/15">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <dt className="font-display text-[28px] font-light leading-none text-navy-900">
                      {f.figure}
                    </dt>
                    <dd className="text-right text-[12px] uppercase tracking-[0.18em] text-navy-900/60">
                      {f.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 rounded-none border border-navy-900/15 bg-cream-50 p-6">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  How it reaches you
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] text-navy-900/75">
                  Once your provider writes a prescription, Greenstone prepares
                  and ships your protocol — discreetly, typically within three
                  to five business days.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
