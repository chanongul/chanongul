export default function DetailedProfile({
  currentSection,
}: DetailedHomePageProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "prof";

  return (
    <section
      className={`order-1 md:order-none ${
        curSect
          ? curSect === sectName
            ? "opacity-100 col-span-full row-span-full"
            : "opacity-0 w-0 h-0 overflow-hidden"
          : "opacity-0 row-span-4 md:row-span-6 col-span-4 md:col-span-2 cursor-pointer delay-300"
      }`}
      onClick={() => setCurSect(sectName)}
    >
      profile
    </section>
  );
}
