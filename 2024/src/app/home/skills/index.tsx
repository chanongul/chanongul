import Tile from "@/app/home/skills/tile";

export default function SkillsSection({ skills }: HomePageSkillsSectionProps) {
  return (
    <section
      className="order-4 col-span-1 row-span-7 grid size-full min-w-[calc(50vw-0.75rem)] gap-2 sm:min-w-[calc(50vw-1.125rem)] sm:gap-3 lg:gap-4 xl:min-w-[calc(50vw-1.5rem)] landscape:order-1 landscape:col-span-3 landscape:row-span-full landscape:min-w-0 landscape:gap-2 lg:landscape:gap-4"
      style={{ gridTemplateRows: `repeat(${skills.length}, 1fr)` }}
    >
      {skills.map((skill, i) => (
        <Tile
          key={i}
          type={skill.name}
          skills={skill.skills}
          index={i}
          typesCount={skills.length}
        />
      ))}
    </section>
  );
}
