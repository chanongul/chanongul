export default function EducationTile({
  currentSection: curSect,
}: HomePageTilesProps) {
  return (
    <section
      className={`order-4 md:order-none row-span-2 md:row-span-6 col-span-3 md:col-span-1 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      education
    </section>
  );
}
