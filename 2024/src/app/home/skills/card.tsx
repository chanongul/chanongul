"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function SkillCard({ logo, name, prof }: SkillCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { resolvedTheme: theme } = useTheme();

  return (
    <div
      className={`mx-1 flex items-center justify-center md:mx-1.5 xl:mx-2 ${logo ? "size-8 min-w-8 rounded-[20%] sm:!size-14 sm:!min-w-14 md:!size-16 md:!min-w-16 2xs:size-10 2xs:min-w-10 landscape:!size-6 landscape:!min-w-6 md:landscape:!size-10 md:landscape:!min-w-10 lg:landscape:!size-14 lg:landscape:!min-w-14 xl:landscape:!size-20 xl:landscape:!min-w-20 2xl:landscape:!size-[5vw] 2xl:landscape:!min-w-[5vw]" : "w-max rounded-xl"}`}
      style={{
        background: `conic-gradient(transparent ${360 - (prof / 10) * 360}deg, ${theme === "dark" ? "#fff5" : "#0005"} ${360 - (prof / 10) * 360}deg)`,
      }}
    >
      {logo ? (
        <div className="pointer-events-none flex size-full items-center justify-center rounded-[18%] bg-neutral-200 object-cover transition-all duration-300 touch:group-active:h-[95%] touch:group-active:w-[95%] no-touch:group-hover:h-[95%] no-touch:group-hover:w-[95%] dark:bg-neutral-800">
          <Image
            loading="lazy"
            ref={imageRef}
            src={logo}
            alt={name}
            width={250}
            height={250}
            className="size-3/5 rounded-[15%] lg:size-7/12"
          />
        </div>
      ) : (
        <p className="rounded-xl border border-black bg-neutral-100 bg-clip-padding px-[1em] py-[0.5em] font-mono text-[0.75em] font-medium leading-none transition-[background-color,border-color] duration-300 md:text-[1.25em] touch:group-active:border-transparent no-touch:group-hover:border-transparent landscape:text-[0.75em] lg:landscape:text-[1.25em] dark:border-white dark:bg-black">
          {name}
        </p>
      )}
    </div>
  );
}
