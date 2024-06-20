export default function ProjectsTile({
  currentSection: curSect,
}: HomePageTilesProps) {
  return (
    <section
      className={`order-7 md:order-none row-span-2 md:row-span-5 col-span-6 md:col-span-1 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      projects
    </section>
  );
}
