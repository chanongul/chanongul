"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function ProfilePageContactCard({ link, color, logo }: Contact) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group col-span-1 row-span-2 flex aspect-square size-full items-center justify-center rounded-[20%] border border-neutral-200 bg-white p-[20%] transition-[border-color,background-color] duration-300 sm:p-[25%] md:col-span-1 md:row-span-2 touch:active:!bg-[var(--bg-color)] no-touch:hover:!bg-[var(--bg-color)] landscape:!p-[20%] lg:landscape:!p-[25%] dark:border-neutral-800 dark:bg-charcoal"
      style={{ "--bg-color": color } as CSSProperties}
    >
      <ReactSVG
        src={logo}
        className="flex size-full items-center justify-center [&_svg]:max-w-16 [&_svg]:transition-[transform,color] [&_svg]:duration-500 touch:group-active:[&_svg]:scale-110 touch:group-active:[&_svg]:text-white no-touch:group-hover:[&_svg]:scale-110 no-touch:group-hover:[&_svg]:text-white"
      />
    </Link>
  );
}
