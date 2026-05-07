"use client";

import { useRouter } from "next/navigation";
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { PROGRAMS } from "@/lib/programs";

export function Hero() {
  const router = useRouter();

  const programs = PROGRAMS.map((p) => ({
    image: p.image,
    category: p.shortName,
    title: p.tagline,
    onClick: () => router.push(`/programs/${p.slug}`),
  }));

  return (
    <PulseFitHero
      showHeader={false}
      title={
        <>
          Considered care.
          <br />
          <span className="font-normal italic">Delivered with intent.</span>
        </>
      }
      subtitle="A bilingual medical group has spent thirty years caring for South Florida families. We've taken that practice and made it travel — quietly, precisely, to your door."
      primaryAction={{
        label: "Begin intake",
        onClick: () => router.push("/qualify"),
      }}
      secondaryAction={{
        label: "How it works",
        onClick: () => router.push("/how-it-works"),
      }}
      socialProof={{
        avatars: [
          "/doctors/Aurelia_doctor.png",
          "/doctors/Carmen_doctor.png",
          "/doctors/Hugo_doctor.png",
          "/doctors/Yamaris_doctor.png",
        ],
        text: "Trusted by 12,000+ patients across our clinics",
      }}
      programs={programs}
      carouselSecondsPerCard={12}
    />
  );
}
