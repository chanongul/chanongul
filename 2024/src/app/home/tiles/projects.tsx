export default function ProjectsTile({
  currentSection: curSect,
}: ProjectsTileProps) {
  return (
    <section
      className={`order-7 landscape:order-none md:order-none row-span-2 landscape:row-span-5 md:row-span-5 col-span-6 landscape:col-span-1 md:col-span-1 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      projects
    </section>
  );
}
