export default function ProjectsTile({
  currentSection: curSect,
  projectsData: projects,
}: ProjectsTileProps) {
  const startYear = new Date(projects[0].from).getFullYear();
  const recentYear = new Date(projects[projects.length - 1].to).getFullYear();

  console.log(startYear, recentYear);

  return (
    <section
      className={`order-7 col-span-6 row-span-2 md:order-none md:col-span-1 md:row-span-5 landscape:order-none landscape:col-span-1 landscape:row-span-5 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <article className="font-serif">
        <p className="inline-flex flex-col items-center justify-center text-center">
          Up to
          <span className="font-mono text-[7.5em] font-bold leading-none">
            {projects.length}
          </span>
          Software design and development projects
        </p>
      </article>
    </section>
  );
}
