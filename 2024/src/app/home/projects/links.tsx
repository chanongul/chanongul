"use client";

import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Resume from "@/app/home/projects/resume";

export default function ProjectLinks({
  startYear,
  length,
  previewsCount,
}: HomePageProjectLinkProps) {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <article className="col-span-2 grid size-full grid-cols-[2fr_1fr] gap-2 sm:gap-3 lg:gap-4 landscape:col-span-1 landscape:gap-2 lg:landscape:gap-4">
      <Link
        href="/projects"
        className="group relative col-span-2 flex size-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white p-[5%] text-black transition-colors duration-300 md:rounded-2xl landscape:col-span-1 landscape:rounded-2xl dark:border-neutral-800 dark:bg-charcoal dark:text-white"
      >
        {isMounted && (
          <>
            <p className="flex w-full flex-col text-center font-sans text-[0.85em] sm:text-[1.15em] 2xl:text-[1.35em] landscape:hidden">
              Explore
              <span className="font-mono text-[5em] font-black leading-none text-orange-500">
                {length}
              </span>
              project{length > 1 ? "s" : ""}
              <span>
                since&nbsp;
                {startYear}
              </span>
            </p>
            <p className="hidden w-full flex-col text-center font-sans text-[0.75em] leading-tight md:text-[1em] md:leading-normal 2xl:!text-[1.25em] landscape:flex landscape:text-[0.6em] lg:landscape:text-[0.85em] xl:landscape:text-[1em]">
              Explore
              <span className="font-mono text-[3em] font-black leading-none text-orange-500 landscape:text-[3em] lg:landscape:text-[4em] xl:landscape:text-[5em]">
                {length - previewsCount}
              </span>
              more project{length - previewsCount > 1 ? "s" : ""}
              <span className="hidden md:inline">
                since&nbsp;
                {startYear}
              </span>
            </p>
            <div className="absolute left-0 top-0 size-full opacity-0 transition-all duration-300 touch:group-active:opacity-100 touch:group-active:backdrop-blur-sm no-touch:group-hover:opacity-100 no-touch:group-hover:backdrop-blur-sm">
              <FiArrowRight className="absolute right-1/2 top-1/2 h-3/4 w-3/4 -translate-y-1/2 translate-x-1/2 opacity-60 transition-all duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
            </div>
          </>
        )}
      </Link>

      <Resume />
    </article>
  );
}
