"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/programs";

export function Footer() {
  const pathname = usePathname() || "";
  if (pathname.startsWith("/qualify")) return null;

  return (
    <footer className="bg-navy-900 text-cream-50/80">
      {/* Top CTA strip */}
      <div className="border-b border-cream-50/12">
        <div className="container-x grid items-end gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <div className="eyebrow-light">Ready when you are</div>
            <h3 className="mt-5 font-display text-[40px] font-light leading-[1.0] text-cream-50 sm:text-[56px]">
              Ten minutes today.
              <br />
              <span className="font-normal italic">A plan tomorrow.</span>
            </h3>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <Link
              href="/qualify"
              className="inline-flex items-center justify-center gap-2 bg-cream-50 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:bg-cream-100"
            >
              Begin intake
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-x grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="bg-cream-50 p-3 inline-block">
            <Image
              src="/logo/logo.png"
              alt="Estrella Medical Centers"
              width={160}
              height={42}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-7 max-w-sm text-[14px] leading-[1.7] text-cream-50/65">
            Estrella Wellness is the telehealth arm of Estrella Medical
            Centers — extending clinician-guided programs from our South
            Florida medical group to patients across our licensed states.
          </p>
          <div className="mt-8 space-y-1.5 text-[13px] text-cream-50/65">
            <div>305.217.7553</div>
            <div>innovat3solutions@gmail.com</div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            Programs
          </div>
          <ul className="mt-5 space-y-3 text-[14px]">
            {PROGRAMS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="text-cream-50/80 transition hover:text-cream-50"
                >
                  {p.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            The Clinic
          </div>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li>
              <Link href="/how-it-works" className="text-cream-50/80 hover:text-cream-50">
                Process
              </Link>
            </li>
            <li>
              <Link href="/providers" className="text-cream-50/80 hover:text-cream-50">
                Providers
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-cream-50/80 hover:text-cream-50">
                Journal & FAQ
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-cream-50/80 hover:text-cream-50">
                Patient login
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            Reading
          </div>
          <ul className="mt-5 space-y-3 text-[14px] text-cream-50/80">
            <li>Treatment guides</li>
            <li>Clinical research</li>
            <li>Patient stories</li>
            <li>Bilingual care</li>
            <li>
              <a
                href="https://www.greenstonerx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                Pharmacy partner
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            Legal
          </div>
          <ul className="mt-5 space-y-3 text-[14px] text-cream-50/80">
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>HIPAA notice</li>
            <li>Telemedicine consent</li>
            <li>Compounded med disclosure</li>
          </ul>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="border-t border-cream-50/12 bg-navy-950">
        <div className="container-x flex flex-col gap-4 py-8 text-[11px] leading-[1.7] text-cream-50/50 lg:flex-row lg:items-start lg:justify-between">
          <div>
            © {new Date().getFullYear()} Estrella Medical Centers. All rights
            reserved.
          </div>
          <div className="max-w-3xl">
            Estrella Wellness offers telehealth services through licensed
            clinicians. Compounded medications are not FDA-approved in the same
            manner as commercially manufactured drugs and are dispensed by our
            partner compounding pharmacy,{" "}
            <a
              href="https://www.greenstonerx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-cream-50 hover:underline"
            >
              Greenstone Rx
            </a>{" "}
            (Miami, FL · FL DOH PH35751), in response to a prescription written
            by an Estrella clinician. This site is for informational purposes
            and is not medical advice. Treatment is at the discretion of the
            licensed clinician.
          </div>
        </div>
      </div>
    </footer>
  );
}
