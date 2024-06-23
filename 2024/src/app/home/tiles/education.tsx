export default function EducationTile({
  currentSection: curSect,
}: EdutcationTileProps) {
  return (
    <section
      className={`order-4 col-span-3 row-span-3 md:order-none md:col-span-1 md:row-span-6 landscape:order-none landscape:col-span-1 landscape:row-span-6 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      education
    </section>
  );
}
