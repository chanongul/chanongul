export default function DetailedContact({
  currentSection,
}: DetailedHomePageProps) {
  const [curSect, _] = currentSection;

  return (
    <section
      className={`order-2 md:order-none ${
        curSect
          ? "opacity-0 w-0 h-0 overflow-hidden"
          : "opacity-0 row-span-4 md:row-span-3 col-span-2 delay-300"
      }`}
    >
      contact
    </section>
  );
}
