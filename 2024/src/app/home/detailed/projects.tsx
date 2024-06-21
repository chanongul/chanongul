export default function DetailedProjects({
  currentSection,
}: DetailedProjectsProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "proj";

  return (
    <section
      className={`order-7 md:order-none ${
        curSect
          ? curSect === sectName
            ? "opacity-100 col-span-full row-span-full"
            : "opacity-0 w-0 h-0 overflow-hidden"
          : "opacity-0 row-span-2 md:row-span-5 col-span-6 md:col-span-1 cursor-pointer delay-300"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      projects
    </section>
  );
}
