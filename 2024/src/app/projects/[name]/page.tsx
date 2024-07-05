import { sanityFetch } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/query";
import Header from "@/app/projects/[name]/header";
import Media from "@/app/projects/[name]/media";
import About from "@/app/projects/[name]/about";
import Info from "@/app/projects/[name]/info";
import Stack from "@/app/projects/[name]/stack";
import Link from "@/app/projects/[name]/link";

export const runtime = "edge";
export const dynamicParams = false;

export default async function ProjectDetail({
  params,
}: ProjectDetailPageProps) {
  const projectData = await sanityFetch<Project>({
    query: projectBySlugQuery,
    qParams: { slug: params.name },
  });

  return (
    <div className="grid size-full select-none grid-cols-1 justify-center gap-4 px-4 !pb-[5em] font-sans sm:gap-10 md:px-8 lg:px-16 xl:px-24">
      <Header {...projectData} />

      <Media {...projectData} />

      <About {...projectData} />

      <Info {...projectData} />

      <Stack {...projectData} />

      <Link />
    </div>
  );
}
