import SubtypeTile from "@/app/profile/skills/tile";

export default function ProfilePageSkillsSection({
  skills,
}: ProfilePageSkillsSectionProps) {
  return (
    <section
      id="skills"
      className="grid size-full scroll-mt-4 grid-cols-6 gap-4 sm:text-[1.15em]"
    >
      {skills.map((skill, i) => (
        <SubtypeTile key={i} name={skill.name} subtypes={skill.subtypes} />
      ))}
    </section>
  );
}
