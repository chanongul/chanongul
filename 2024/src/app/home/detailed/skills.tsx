export default function DetailedSkills({
  currentSection,
}: DetailedSkillsProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "skills";

  return (
    <section
      className={`order-4 md:order-none ${
        curSect
          ? curSect === sectName
            ? "opacity-100 col-span-full row-span-full"
            : "opacity-0 w-0 h-0 overflow-hidden"
          : "opacity-0 row-start-10 md:row-start-auto row-span-2 md:row-span-7 col-span-6 md:col-span-1 cursor-pointer delay-300"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      skills
    </section>
  );
}
