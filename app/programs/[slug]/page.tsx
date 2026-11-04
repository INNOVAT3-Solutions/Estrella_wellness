import { redirect } from "next/navigation";
import { WEIGHT_LOSS } from "@/lib/programs";
import { pageMetadata } from "@/lib/seo";
import { PAGE_COPY } from "@/lib/page-copy";
import { WeightLossDetail } from "@/components/programs/weight-loss-detail";

export function generateStaticParams() {
  return [{ slug: WEIGHT_LOSS.slug }];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  // Other slugs redirect to the weight loss program, so they share its metadata.
  void params;
  return pageMetadata(`/programs/${WEIGHT_LOSS.slug}`, PAGE_COPY.program);
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  // The GLP-1 weight loss program is the only program; any other
  // program URL lands on it.
  if (params.slug !== WEIGHT_LOSS.slug) {
    redirect(`/programs/${WEIGHT_LOSS.slug}`);
  }
  return <WeightLossDetail />;
}
