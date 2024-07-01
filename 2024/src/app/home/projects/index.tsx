import Previews from "@/app/home/projects/previews";
import Links from "@/app/home/projects/links";

export default function ProjectsSection({ projects }: ProjectsProps) {
  const previewsCount = 3;

  return (
    <section className="order-6 col-span-2 row-span-3 grid size-full grid-cols-1 gap-2 sm:gap-3 xl:gap-4 landscape:col-span-3 landscape:row-span-full landscape:grid-rows-[6fr,1fr] landscape:gap-2 xl:landscape:gap-4">
      <Previews projects={projects} count={previewsCount} />

      <Links
        startYear={new Date(projects[0].from).getFullYear()}
        length={projects.length}
        previewsCount={previewsCount}
      />
    </section>
  );
}
