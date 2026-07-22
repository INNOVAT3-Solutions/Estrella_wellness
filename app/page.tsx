import { Hero } from "@/components/home/hero";
import { PressStrip } from "@/components/home/press-strip";
import { WhatsIncluded } from "@/components/home/whats-included";
import { ProgramsGrid } from "@/components/home/programs-grid";
import { StatsBar } from "@/components/home/stats-bar";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { Comparison } from "@/components/home/comparison";
import { PharmacyPartner } from "@/components/home/pharmacy-partner";
import { ProvidersStrip } from "@/components/home/providers-strip";
import { FinalCta } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressStrip />
      <WhatsIncluded />
      <ProgramsGrid />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Comparison />
      <PharmacyPartner />
      <ProvidersStrip />
      <FinalCta />
    </>
  );
}
