import { sanityFetch } from "@/sanity/lib/client";
import { skillTypesQuery, skillsQuery } from "@/sanity/lib/query";

export const runtime = "edge";

export default async function SkillsPage() {
  const skillsData = await sanityFetch<Skill[]>({
    query: skillsQuery,
  });
  const skillTypesData = await sanityFetch<SkillType[]>({
    query: skillTypesQuery,
  });
  const skills: SkillsByType = skillTypesData.reduce(
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
          .filter((skill) => skill.type === skillType.name && !skill.subtype)
          .map((skill) => ({
            logo: skill.logo,
            name: skill.name,
            prof: skill.prof,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      ),
    }),
    {},
  );

  return (
    <div className="">
      <article className=""></article>
    </div>
  );
}
