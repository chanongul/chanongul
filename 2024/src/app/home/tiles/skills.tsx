export default function SkillsTile({
  currentSection: curSect,
}: HomePageTilesProps) {
  return (
    <section
      className={`order-6 md:order-none row-span-2 md:row-span-7 col-span-6 md:col-span-1 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      skills
    </section>
  );
}
