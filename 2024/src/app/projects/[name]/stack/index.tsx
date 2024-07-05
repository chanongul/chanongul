import Card from "@/app/projects/[name]/stack/card";

export default function ProjectDetailPageStack({
  stack,
}: ProjectDetailPageStackProps) {
  return (
    <section className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5 text-[1em] font-light leading-[1.75] text-black transition-colors duration-300 sm:text-[1.05em] dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <div className="flex w-full items-center gap-2">
        <p className="min-w-max text-[0.85em] opacity-50">Stack</p>
        <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
      </div>

      <div className="group/group flex flex-wrap items-center justify-center gap-2 py-2">
        {stack.map((skill, i) => (
          <Card key={i} {...skill} />
        ))}
      </div>
    </section>
  );
}
