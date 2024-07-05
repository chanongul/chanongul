export default function ProjectDetailPageAbout({
  description,
}: ProjectDetailPageAboutProps) {
  return (
    <section className="grid size-full grid-cols-6 rounded-2xl text-[1em] transition-colors duration-300 sm:text-[1.05em]">
      <div className="col-span-full flex flex-col gap-2 sm:gap-4 xl:col-span-4 xl:col-start-2">
        <p className="my-4 min-w-max text-[1.5em] font-medium sm:my-0">
          About the project
        </p>
        <p className="text-[1em] font-light leading-[1.75] sm:text-[1.15em]">
          {description}
        </p>
      </div>
    </section>
  );
}
