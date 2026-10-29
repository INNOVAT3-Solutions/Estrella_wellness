import { LandingHero } from "@/components/landing/hero";
import { OfferBand } from "@/components/landing/offer-band";
import { LandingAbout } from "@/components/landing/about";
import { OpenToAll } from "@/components/landing/open-to-all";
import { WhyUs } from "@/components/landing/why-us";
import { Journey } from "@/components/landing/journey";
import { PatientStories } from "@/components/landing/patient-stories";
import { ComingSoon } from "@/components/landing/coming-soon";
import { Pricing } from "@/components/landing/pricing";

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <OfferBand />
      <LandingAbout />
      <OpenToAll />
      <WhyUs />
      <Journey />
      <PatientStories />
      <ComingSoon />
      <Pricing />
    </>
  );
}
