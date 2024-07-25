import Card from "@/app/profile/skills/card";

export default function ProfilePageSkillsBySubtypeTile({
  name,
  subtypes,
}: ProfilePageSkillsBySubtypeTileProps) {
  return (
    <article className="col-span-full flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5 text-[1em] font-light leading-[1.75] text-black transition-colors duration-300 sm:text-[1.05em] xl:col-span-4 xl:col-start-2 dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <div className="flex w-full items-center gap-2">
        <p className="min-w-max text-[0.85em] opacity-50">{name}</p>
        <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
      </div>

      <div className="flex flex-col gap-4 divide-y divide-neutral-200 dark:divide-neutral-800">
        {subtypes.map((subtype, i) => (
          <div
            key={i}
            className="group/group flex flex-col gap-2 py-2 transition-[border-color] duration-300"
          >
            <p className="text-center text-[0.85em] font-medium underline decoration-neutral-300 underline-offset-4 opacity-60 transition-[text-decoration-color] duration-300 dark:decoration-neutral-700">
              {subtype.name}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {subtype.skills.map((skill, j) => (
                <Card key={j} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
