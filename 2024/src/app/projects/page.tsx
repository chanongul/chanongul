import { sanityFetch } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/query";

export const runtime = "edge";

export default async function ProjectsPage() {
  const projectsData = await sanityFetch<Project[]>({
    query: projectsQuery,
  });

  return (
    <div className="">
      <article className=""></article>
    </div>
  );
}
