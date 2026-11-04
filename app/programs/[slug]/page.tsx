import { redirect } from "next/navigation";
import { WEIGHT_LOSS } from "@/lib/programs";
import { pageMetadata, requestLang } from "@/lib/seo";
import { localePath } from "@/lib/locale-path";
import { PAGE_COPY } from "@/lib/page-copy";
import { programGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
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
    redirect(localePath(requestLang(), `/programs/${WEIGHT_LOSS.slug}`));
  }
  return (
    <>
      <JsonLd data={programGraph(requestLang())} />
      <WeightLossDetail />
    </>
  );
}
