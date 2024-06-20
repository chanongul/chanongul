export default function DetailedStatement({
  currentSection,
}: DetailedHomePageProps) {
  const [curSect, _] = currentSection;

  return (
    <section
      className={`order-3 md:order-none ${
        curSect
          ? "opacity-0 w-0 h-0 overflow-hidden"
          : "opacity-0 row-span-2 md:row-span-3 col-span-6 md:col-span-2 delay-300"
      }`}
    >
      statement
    </section>
  );
}
