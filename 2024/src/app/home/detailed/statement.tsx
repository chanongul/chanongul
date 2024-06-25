export default function DetailedStatement({
  currentSection,
}: Pick<DetailedHomePageProps, "currentSection">) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "prof";

  return (
    <section
      className={`order-3 md:order-none landscape:order-none ${
        curSect
          ? "h-0 w-0 overflow-hidden opacity-0"
          : "col-span-6 row-span-2 cursor-pointer opacity-0 delay-300 md:col-span-2 md:row-span-3 landscape:col-span-2 landscape:row-span-3"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      statement
    </section>
  );
}
