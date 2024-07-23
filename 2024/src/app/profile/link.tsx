"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProfilePageLink() {
  return (
    <Link
      href="/projects"
      className="group relative mx-auto my-4 flex w-max gap-1 text-[1.45em] font-medium leading-none after:absolute after:top-[125%] after:block after:h-px after:w-0 after:bg-black after:transition-all after:duration-1000 sm:my-10 touch:active:after:w-full no-touch:hover:after:w-full dark:after:bg-white"
    >
      <p className="transition-colors duration-300">View my projects</p>

      <FiArrowRight className="size-[1em] [transition:transform_600ms_100ms,color_300ms] touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
    </Link>
  );
}
