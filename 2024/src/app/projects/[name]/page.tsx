import { sanityFetch } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/query";

export const runtime = "edge";
export const dynamicParams = false;

export default async function ProjectDetail({
  params,
}: ProjectDetailPageProps) {
  const projectData = await sanityFetch<Project>({
    query: projectBySlugQuery(params.name),
  });

  return (
    <div className="">
      <article className=""></article>
    </div>
  );
}
