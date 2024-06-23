export default function DetailedProfile({
  currentSection,
}: DetailedProfileProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "prof";

  return (
    <section
      className={`order-1 md:order-none landscape:order-none ${
        curSect
          ? curSect === sectName
            ? "col-span-full row-span-full opacity-100"
            : "h-0 w-0 overflow-hidden opacity-0"
          : "col-span-4 row-span-4 cursor-pointer opacity-0 delay-300 md:col-span-2 md:row-span-6 md:row-start-4 landscape:col-span-2 landscape:row-span-6 landscape:row-start-4"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      profile
    </section>
  );
}
