export default function DetailedContact({
  currentSection,
}: Pick<DetailedHomePageProps, "currentSection">) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "prof";

  return (
    <section
      className={`order-2 md:order-none landscape:order-none ${
        curSect
          ? "h-0 w-0 overflow-hidden opacity-0"
          : "col-span-2 row-span-4 opacity-0 delay-300 md:row-span-3 landscape:row-span-3"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      contact
    </section>
  );
}
