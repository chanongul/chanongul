export default function DetailedEducation({
  currentSection,
}: DetailedEducationProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "edu";

  return (
    <section
      className={`order-2 md:order-none ${
        curSect
          ? curSect === sectName
            ? "opacity-100 col-span-full row-span-full"
            : "opacity-0 w-0 h-0 overflow-hidden"
          : "opacity-0 row-start-7 md:row-start-auto row-span-3 md:row-span-6 col-span-3 md:col-span-1 cursor-pointer delay-300"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      education
    </section>
  );
}
