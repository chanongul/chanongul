import ExperienceTile from "@/app/home/experience/experience";
import EducationTile from "@/app/home/experience/education";

export default function ExperienceSection({
  education,
  experience,
}: HomePageExperienceSectionProps) {
  return (
    <section className="order-5 col-span-2 row-span-4 grid size-full grid-rows-2 gap-2 sm:gap-3 xl:gap-4 landscape:col-span-4 landscape:row-span-4 landscape:gap-2 xl:landscape:gap-4">
      <ExperienceTile experience={experience} />

      <EducationTile education={education} />
    </section>
  );
}
