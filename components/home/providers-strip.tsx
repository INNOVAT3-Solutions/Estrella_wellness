import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const providers = [
  { src: "/doctors/Aurelia_doctor.png", name: "Dr. Aurelia", role: "Internal Medicine" },
  { src: "/doctors/Carmen_doctor.png", name: "Dr. Carmen", role: "Family Medicine" },
  { src: "/doctors/Ciro_doctor.png", name: "Dr. Ciro", role: "Primary Care" },
  { src: "/doctors/Hugo_doctor.png", name: "Dr. Hugo", role: "Internal Medicine" },
  { src: "/doctors/Yamaris_doctor.png", name: "Dr. Yamaris", role: "Family Medicine" },
  { src: "/doctors/Yanelis_doctor.png", name: "Dr. Yanelis", role: "Primary Care" },
];

export function ProvidersStrip() {
  return (
    <section className="section bg-cream-100 paper-grain paper-grain-light">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <div className="eyebrow">Your care team</div>
          <h2 className="mt-5 font-display text-display-lg font-light text-navy-900">
            The clinicians,
            <br />
            <span className="font-normal italic">the same group.</span>
          </h2>
          <p className="mt-7 max-w-md text-[16px] leading-[1.7] text-navy-900/70">
            Estrella Wellness is delivered by the medical group South Florida
            families have trusted for thirty years. Bilingual,
            board-credentialed, and personally invested in the outcome.
          </p>
          <Link
            href="/providers"
            className="mt-8 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.18em] text-navy-900 transition hover:border-navy-900"
          >
            Meet the providers
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6">
            {providers.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <figure className="group">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy-100">
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-4 border-t border-navy-900/15 pt-3">
                    <div className="font-display text-[17px] font-light text-navy-900">
                      {p.name}
                    </div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-navy-900/55">
                      {p.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
