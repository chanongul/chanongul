export default function SkillsTile({
  currentSection: curSect,
}: SkillsTileProps) {
  return (
    <section
      className={`order-6 col-span-6 row-span-2 md:order-none md:col-span-1 md:row-span-7 landscape:order-none landscape:col-span-1 landscape:row-span-7 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      skills
    </section>
  );
}
