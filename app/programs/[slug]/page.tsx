import { redirect } from "next/navigation";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { WeightLossDetail } from "@/components/programs/weight-loss-detail";

export function generateStaticParams() {
  return [{ slug: WEIGHT_LOSS.slug }];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug === WEIGHT_LOSS.slug) {
    return {
      title: `${WEIGHT_LOSS.en.name} · ${fmtPrice(WEIGHT_LOSS.price)}/mo Limited-Time Offer · Estrella Wellness`,
      description: WEIGHT_LOSS.en.description,
    };
  }
  return { title: "Estrella Wellness" };
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  // The GLP-1 weight loss program is the only program; any other
  // program URL lands on it.
  if (params.slug !== WEIGHT_LOSS.slug) {
    redirect(`/programs/${WEIGHT_LOSS.slug}`);
  }
  return <WeightLossDetail />;
}
