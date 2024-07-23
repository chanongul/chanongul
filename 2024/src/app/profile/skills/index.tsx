"use client";

import NoSubtypes from "@/app/profile/skills/no-subtypes";
import WithSubtypes from "@/app/profile/skills/with-subtypes";
import { useEffect, useState } from "react";

export default function ProfilePageSkillsSection({
  skillTypes,
  skills: skillsData,
}: ProfilePageSkillsSectionProps) {
  const [skills, setSkills] = useState<SkillsByType>({});

  useEffect(() => {
    setSkills(
      skillTypes.reduce(
        (acc, skillType) => ({
          ...acc,
          [skillType.name]: skillType.subtypes.reduce(
            (subAcc, subtype) => ({
              ...subAcc,
              [subtype]: skillsData
                .filter(
                  (skill) =>
                    skill.type === skillType.name && skill.subtype === subtype,
                )
                .map((skill) => ({
                  logo: skill.logo,
                  name: skill.name,
                  prof: skill.prof,
                }))
                .sort((a, b) => a.name.localeCompare(b.name)),
            }),
            skillsData
              .filter(
                (skill) => skill.type === skillType.name && !skill.subtype,
              )
              .map((skill) => ({
                logo: skill.logo,
                name: skill.name,
                prof: skill.prof,
              }))
              .sort((a, b) => a.name.localeCompare(b.name)),
          ),
        }),
        {},
      ),
    );
  }, [skillsData, skillTypes]);

  return (
    <section className="grid size-full grid-cols-6 gap-4 sm:text-[1.15em]">
      {Object.entries(skills).map(([type, subtypes], i) => {
        if (Array.isArray(subtypes)) {
          return (
            <NoSubtypes key={i} type={type} skills={subtypes as Skill[]} />
          );
        } else {
          return <WithSubtypes key={i} type={type} subtypes={subtypes} />;
        }
      })}
    </section>
  );
}
