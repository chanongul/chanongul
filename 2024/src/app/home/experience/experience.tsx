import Link from "@/app/home/experience/link";
import Card from "@/app/home/experience/card";

export default function ExperiencePartTile({
  experience,
}: HomePageExperiencePartTileProps) {
  return (
    <article className="row-span-1 grid h-full w-full grid-rows-[auto,1fr] overflow-hidden rounded-xl border border-neutral-200 bg-white px-3 text-black transition-colors duration-300 sm:px-6 md:rounded-2xl landscape:row-span-2 landscape:rounded-2xl landscape:px-3 lg:landscape:px-6 xl:landscape:row-span-1 dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <Link header="Experience" />

      <div className="h-full w-full snap-y snap-mandatory overflow-auto">
        <div
          className="grid w-full"
          style={{
            height: `${experience.length * 100}%`,
            gridTemplateRows: `repeat(${experience.length}, 1fr)`,
          }}
        >
          {experience.map((exp, i) => (
            <Card
              key={i}
              h1={exp.title}
              h2={exp.name}
              from={exp.from}
              to={exp.to}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
