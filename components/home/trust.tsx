import { ShieldCheck, FileText, Lock, Clock } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Provider-led, not direct-to-product",
    body: "No medication is shipped without a licensed clinician's review and prescription.",
  },
  {
    icon: FileText,
    title: "Informed-consent first",
    body: "Compounded medications, telemedicine, and HIPAA disclosures are reviewed before any plan begins.",
  },
  {
    icon: Lock,
    title: "Private & secure",
    body: "Your medical information is encrypted, stored securely, and never sold.",
  },
  {
    icon: Clock,
    title: "Care that follows up",
    body: "Refills, messaging, lab tracking, and provider check-ins live in one dashboard.",
  },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_30%_30%,rgba(247,138,8,.4),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(110,170,220,.3),transparent_55%)]" />
      <div className="container-x py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">
            Why Estrella
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            A clinic experience, delivered through telehealth.
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            We built Estrella around the things that actually move outcomes:
            clean onboarding, conservative provider workflows, transparent
            pricing, and follow-through care.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-500/20 text-sun-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg">{it.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/75">
                  {it.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
