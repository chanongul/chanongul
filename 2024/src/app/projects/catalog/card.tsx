"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { durationFormatter } from "@/app/utils/duration-formatter";

export default function ProjectsPageCard({
  preview,
  from,
  to,
  name,
  slug,
  types,
}: Project) {
  return (
    <div className="col-span-full flex size-full flex-col gap-4 sm:col-span-3 xl:col-span-2">
      <Link
        href={`/projects/${slug}`}
        className="group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 dark:border-neutral-800 dark:bg-charcoal"
      >
        <Image
          src={preview}
          alt={name}
          width={1000}
          height={1000}
          className="absolute transition-transform duration-1000 touch:group-active:scale-125 no-touch:group-hover:scale-125"
        />
        <div className="absolute left-0 top-0 size-full bg-white/50 opacity-0 transition-all duration-300 touch:group-active:opacity-100 touch:group-active:backdrop-blur-sm no-touch:group-hover:opacity-100 no-touch:group-hover:backdrop-blur-sm dark:bg-black/50">
          <FiArrowRight className="absolute right-1/2 top-1/2 h-3/4 w-3/4 -translate-y-1/2 translate-x-1/2 opacity-60 transition-all duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
        </div>
      </Link>

      <div className="flex items-center justify-between gap-2 text-[1em] sm:text-[1.05em]">
        <div className="flex flex-col gap-2">
          <Link
            href={`/projects/${slug}`}
            className="relative w-max text-[1.45em] font-medium leading-none after:absolute after:top-[105%] after:block after:h-px after:w-0 after:bg-black after:transition-all after:duration-500 touch:active:after:w-full no-touch:hover:after:w-full dark:after:bg-white"
          >
            {name}
          </Link>
          <p className="text-[0.85em] font-light opacity-50 transition-colors duration-300">
            {durationFormatter(from, to)}
          </p>
          <div className="flex gap-1">
            {types.map((type, i) => (
              <p
                key={i}
                className="w-max rounded-full bg-neutral-300 px-3 py-1 text-[0.75em] text-black/70 transition-colors duration-300 dark:bg-neutral-800 dark:text-white/70"
              >
                {type}
              </p>
            ))}
          </div>
        </div>

        <Link
          href={`/projects/${slug}`}
          className="group min-h-[2em] min-w-[2em] rounded-full border border-black p-2 opacity-50 transition-all duration-300 touch:active:opacity-100 no-touch:hover:opacity-100 dark:border-white"
        >
          <FiArrowRight className="size-full rounded-full transition-transform duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
        </Link>
      </div>
    </div>
  );
}
