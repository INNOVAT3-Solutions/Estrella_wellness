import Image from "next/image";
import Link from "next/link";

const providers = [
  {
    src: "/doctors/Aurelia_doctor.png",
    name: "Dr. Aurelia",
    role: "Internal Medicine",
    bio: "Focused on metabolic health and chronic disease management, Dr. Aurelia leads patients through evidence-based weight management protocols.",
  },
  {
    src: "/doctors/Carmen_doctor.png",
    name: "Dr. Carmen",
    role: "Family Medicine",
    bio: "Long-term care, women's health, and hormonal balance. Dr. Carmen brings two decades of patient-centered experience to every plan.",
  },
  {
    src: "/doctors/Ciro_doctor.png",
    name: "Dr. Ciro",
    role: "Primary Care",
    bio: "Bilingual primary care provider with a focus on preventative medicine, recovery programs, and long-term wellness.",
  },
  {
    src: "/doctors/Hugo_doctor.png",
    name: "Dr. Hugo",
    role: "Internal Medicine",
    bio: "Hormone optimization, longevity, and men's health. Dr. Hugo emphasizes lab-driven, conservative protocols tailored to each patient.",
  },
  {
    src: "/doctors/Yamaris_doctor.png",
    name: "Dr. Yamaris",
    role: "Family Medicine",
    bio: "Family medicine and metabolic care. Dr. Yamaris is known for compassionate intake reviews and clear, plain-language treatment plans.",
  },
  {
    src: "/doctors/Yanelis_doctor.png",
    name: "Dr. Yanelis",
    role: "Primary Care",
    bio: "Primary care and women's wellness. Dr. Yanelis champions personalized hormone and longevity protocols for active patients.",
  },
];

export default function ProvidersPage() {
  return (
    <>
      <section className="bg-hero-radial">
        <div className="container-x grid items-center gap-10 pt-16 pb-20 lg:grid-cols-12 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-6">
            <div className="pill">Your care team</div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-navy-900 sm:text-5xl lg:text-6xl">
              The clinicians behind every Estrella program.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
              Estrella Wellness is staffed by the same medical group patients
              trust at our South Florida clinics — bilingual, board-credentialed
              providers who review every intake personally.
            </p>
            <Link href="/qualify" className="btn-primary mt-8">
              See if you qualify
            </Link>
          </div>
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] bg-navy-100 lg:col-span-6">
            <Image
              src="/doctors/Estrella_group.png"
              alt="Estrella team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft"
              >
                <div className="relative aspect-[4/5] bg-navy-100">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="font-display text-xl text-navy-900">
                    {p.name}
                  </div>
                  <div className="text-sm font-medium text-sun-600">
                    {p.role}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">
                    {p.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand-50">
        <div className="container-x">
          <div className="rounded-[2.5rem] bg-navy-gradient p-10 text-white sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">
                  About Estrella Medical Centers
                </div>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                  South Florida's medical home, now telehealth-first.
                </h2>
                <p className="mt-4 text-white/80">
                  Estrella Medical Centers has served families across Miami for
                  decades. Estrella Wellness extends that same standard of care
                  to patients across our licensed states — entirely from your
                  phone.
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5">
                <Image
                  src="/images/estrella-building.png"
                  alt="Estrella clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
