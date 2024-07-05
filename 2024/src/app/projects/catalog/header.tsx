import React from "react";

export default function ProjectsPageHeader({ f }: ProjectsPageHeaderProps) {
  const [filter, setFilter] = f;

  return (
    <header className="flex flex-col items-center justify-center sm:flex-row sm:items-baseline sm:justify-between">
      <h1 className="my-[1em] font-serif text-[2.25em] font-semibold leading-none transition-colors duration-300 sm:my-[1.5em] sm:!mb-0 sm:text-[2.35em] 2xl:my-[2em] 2xl:text-[3em]">
        Projects
      </h1>

      <div className="flex gap-2 text-[1em] lg:text-[1.25em]">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`rounded-full border border-neutral-300 px-4 py-1 transition-colors duration-300 dark:border-neutral-700 ${
            filter === null ? "bg-neutral-300 dark:bg-neutral-700" : ""
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("Development")}
          className={`rounded-full border border-neutral-300 px-4 py-1 transition-colors duration-300 dark:border-neutral-700 ${
            filter === "Development" ? "bg-neutral-300 dark:bg-neutral-700" : ""
          }`}
        >
          Development
        </button>
        <button
          type="button"
          onClick={() => setFilter("Design")}
          className={`rounded-full border border-neutral-300 px-4 py-1 transition-colors duration-300 dark:border-neutral-700 ${
            filter === "Design" ? "bg-neutral-300 dark:bg-neutral-700" : ""
          }`}
        >
          Design
        </button>
      </div>
    </header>
  );
}
