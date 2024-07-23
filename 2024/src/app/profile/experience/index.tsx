import Card from "@/app/profile/experience/card";

export default function ProfilePageExperienceSection({
  education: edu,
  experience: exp,
}: ProfilePageExperienceSectionProps) {
  const experience: (Education | Experience)[] = [...exp, ...edu];

  return (
    <section
      id="experience"
      className="grid grid-cols-6 gap-2 sm:text-[1.15em]"
    >
      <h1 className="col-span-full mb-4 text-center text-[1.5em] font-medium underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 dark:decoration-neutral-700">
        Experience
      </h1>

      {experience.map((ex, i) => (
        <Card key={i} experience={ex} length={experience.length} index={i} />
      ))}
    </section>
  );
}
