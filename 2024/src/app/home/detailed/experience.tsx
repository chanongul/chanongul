export default function DetailedExperience({
  currentSection,
}: DetailedExperienceProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "exp";

  return (
    <section
      className={`order-3 md:order-none landscape:order-none ${
        curSect
          ? curSect === sectName
            ? "col-span-full row-span-full opacity-100"
            : "h-0 w-0 overflow-hidden opacity-0"
          : "col-span-3 row-span-3 row-start-7 cursor-pointer opacity-0 delay-300 md:col-span-1 md:row-span-6 md:row-start-auto landscape:col-span-1 landscape:row-span-6 landscape:row-start-auto"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      experience
    </section>
  );
}
