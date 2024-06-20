export default function ExperienceTile({
  currentSection: curSect,
}: HomePageTilesProps) {
  return (
    <section
      className={`order-5 md:order-none row-span-2 md:row-span-6 col-span-3 md:col-span-1 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      experience
    </section>
  );
}
