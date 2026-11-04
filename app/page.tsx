import { pageMetadata, requestLang } from "@/lib/seo";
import { siteGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_COPY } from "@/lib/page-copy";
import { LandingHero } from "@/components/landing/hero";
import { OfferBand } from "@/components/landing/offer-band";
import { LandingAbout } from "@/components/landing/about";
import { OpenToAll } from "@/components/landing/open-to-all";
import { WhyUs } from "@/components/landing/why-us";
import { Journey } from "@/components/landing/journey";
import { PatientStories } from "@/components/landing/patient-stories";
import { ComingSoon } from "@/components/landing/coming-soon";
import { Pricing } from "@/components/landing/pricing";
import { Clinics } from "@/components/landing/clinics";

export function generateMetadata() {
  return pageMetadata("/", PAGE_COPY.home, { absoluteTitle: true });
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteGraph(requestLang())} />
      <LandingHero />
      <OfferBand />
      <LandingAbout />
      <OpenToAll />
      <WhyUs />
      <Journey />
      <Clinics />
      <PatientStories />
      <ComingSoon />
      <Pricing />
    </>
  );
}
