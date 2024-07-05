import { sanityFetch } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/query";
import Catalog from "@/app/projects/catalog";
import Link from "@/app/projects/link";

export const runtime = "edge";

export default async function ProjectsPage() {
  const projectsData = await sanityFetch<Project[]>({
    query: projectsQuery,
  });

  return (
    <div className="flex size-full select-none flex-col justify-center gap-10 px-4 !pb-[4em] font-sans md:px-8 lg:px-16 lg:!pb-[5em] xl:px-24">
      <Catalog projects={projectsData} />

      <Link />
    </div>
  );
}
