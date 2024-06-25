export default function ProjectsTile({
  currentSection: curSect,
}: ProjectsTileProps) {
  return (
    <section
      className={`order-7 col-span-6 row-span-2 md:order-none md:col-span-1 md:row-span-5 landscape:order-none landscape:col-span-1 landscape:row-span-5 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      projects
    </section>
  );
}
