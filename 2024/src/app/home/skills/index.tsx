"use client";

import { useEffect, useState } from "react";
import Tile from "@/app/home/skills/tile";

export default function SkillsSection({
  skills: skillsData,
  skillTypes,
}: HomePageSkillsSectionProps) {
  const [skills, setSkills] = useState<SkillsByType>({});
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    setSkills(
      skillTypes.reduce(
        (acc, skillType) => ({
          ...acc,
          [skillType.name]: skillsData
            .filter((skill) => skill.type === skillType.name)
            .map((skill) => ({
              logo: skill.logo,
              name: skill.name,
              prof: skill.prof,
            }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        }),
        {},
      ),
    );
  }, [skillsData, skillTypes]);

  return (
    <section
      className={`order-4 col-span-1 row-span-7 grid size-full min-w-[calc(50vw-0.75rem)] gap-2 sm:min-w-[calc(50vw-1.125rem)] sm:gap-3 lg:gap-4 xl:min-w-[calc(50vw-1.5rem)] landscape:order-1 landscape:col-span-3 landscape:row-span-full landscape:min-w-0 landscape:gap-2 lg:landscape:gap-4 ${!isMounted ? "rounded-xl border border-neutral-200 bg-white md:rounded-2xl landscape:rounded-2xl dark:border-neutral-800 dark:bg-charcoal" : ""} `}
      style={{ gridTemplateRows: `repeat(${skillTypes.length}, 1fr)` }}
    >
      {Object.entries(skills).map(([type, skill], i) => (
        <Tile
          key={i}
          type={type}
          skills={skill as Skill[]}
          index={i}
          typesCount={skillTypes.length}
        />
      ))}
    </section>
  );
}
