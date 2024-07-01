import Link from "@/app/home/experience/link";
import Card from "@/app/home/experience/card";

export default function EducationTile({ education }: EducationPartTileProps) {
  return (
    <article className="grid h-full w-full grid-rows-[auto,1fr] overflow-hidden rounded-xl border border-neutral-200 bg-white px-3 text-black transition-colors duration-300 md:rounded-2xl landscape:hidden landscape:rounded-2xl landscape:px-3 lg:landscape:px-6 xl:landscape:grid dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <Link header="Education" />

      <div className="h-full w-full snap-y snap-mandatory overflow-auto">
        <div
          className="grid w-full"
          style={{
            height: `${education.length * 100}%`,
            gridTemplateRows: `repeat(${education.length}, 1fr)`,
          }}
        >
          {education.map((edu, i) => (
            <Card
              key={i}
              h1={edu.major || ""}
              h2={edu.level}
              from={edu.from}
              to={edu.to}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
