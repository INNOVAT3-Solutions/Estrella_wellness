import { notFound } from "next/navigation";
import { WEIGHT_LOSS } from "@/lib/programs";
import { pageMetadata, requestLang } from "@/lib/seo";
import { TOPIC_META, TOPIC_SLUGS, topicCopy, type TopicSlug } from "@/lib/topic-pages";
import { topicGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { TopicPage } from "@/components/programs/topic-page";

type Params = { params: { slug: string; topic: string } };

const isTopic = (p: Params["params"]): p is { slug: string; topic: TopicSlug } =>
  p.slug === WEIGHT_LOSS.slug && (TOPIC_SLUGS as string[]).includes(p.topic);

export function generateMetadata({ params }: Params) {
  if (!isTopic(params)) return {};
  return pageMetadata(`/programs/${WEIGHT_LOSS.slug}/${params.topic}`, TOPIC_META[params.topic]);
}

/** /programs/weight-loss/{semaglutide,tirzepatide,cost}; anything else is a 404. */
export default function TopicRoute({ params }: Params) {
  if (!isTopic(params)) notFound();
  const lang = requestLang();
  const copy = topicCopy(params.topic, lang);
  return (
    <>
      <JsonLd data={topicGraph(lang, params.topic, copy.crumb)} />
      <TopicPage copy={copy} lang={lang} />
    </>
  );
}
