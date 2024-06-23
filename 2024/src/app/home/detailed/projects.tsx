export default function DetailedProjects({
  currentSection,
}: DetailedProjectsProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "proj";

  return (
    <section
      className={`order-5 md:order-none landscape:order-none ${
        curSect
          ? curSect === sectName
            ? "col-span-full row-span-full opacity-100"
            : "h-0 w-0 overflow-hidden opacity-0"
          : "col-span-6 row-span-2 row-start-12 cursor-pointer opacity-0 delay-300 md:col-span-1 md:row-span-5 md:row-start-auto landscape:col-span-1 landscape:row-span-5 landscape:row-start-auto"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      projects
    </section>
  );
}
