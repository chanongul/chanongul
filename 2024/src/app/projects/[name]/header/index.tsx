import Links from "@/app/projects/[name]/header/links";

export default function ProjectDetailPageHeader({
  name,
  types,
  links,
}: ProjectDetailPageHeaderProps) {
  return (
    <section className="flex size-full flex-col items-center justify-center gap-2 sm:flex-row">
      <header className="my-[1em] flex w-full flex-col items-center justify-center gap-4 text-center text-[2.25em] sm:mb-0 sm:mt-[1.5em] sm:items-start sm:justify-center sm:text-start sm:text-[2.35em] 2xl:mt-[2em] 2xl:text-[3em]">
        <h1 className="font-serif font-semibold leading-none transition-colors duration-300">
          {name}
        </h1>

        <div className="flex gap-2">
          {types.map((type, i) => (
            <p
              key={i}
              className="w-max rounded-full bg-neutral-300 px-5 py-2 text-[0.35em] text-black/70 transition-colors duration-300 dark:bg-neutral-800 dark:text-white/70"
            >
              {type}
            </p>
          ))}
        </div>
      </header>

      <Links links={links} />
    </section>
  );
}
