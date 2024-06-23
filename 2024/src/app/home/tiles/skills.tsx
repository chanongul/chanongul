export default function SkillsTile({
  currentSection: curSect,
}: SkillsTileProps) {
  return (
    <section
      className={`order-6 landscape:order-none md:order-none row-span-2 landscape:row-span-7 md:row-span-7 col-span-6 landscape:col-span-1 md:col-span-1 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      skills
    </section>
  );
}
