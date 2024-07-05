"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function SkillCard({ logo, name, prof, type }: SkillCardProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const { resolvedTheme: theme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  function langLevel(prof: number) {
    switch (prof) {
      case 0:
        return "(A1)";
      case 1:
      case 2:
        return "(A2)";
      case 3:
      case 4:
        return "(B1)";
      case 5:
      case 6:
        return "(B2)";
      case 7:
      case 8:
        return "(C1)";
      case 9:
        return "(C2)";
      default:
        return "(Native)";
    }
  }

  if (!isMounted) return null;

  return (
    <div
      className={`group/self flex items-center justify-center ${logo ? "size-16 min-w-16 rounded-[20%] sm:size-20 sm:min-w-20 xl:size-24 xl:min-w-24" : "w-max rounded-xl"}`}
      style={{
        background: `conic-gradient(transparent ${360 - (prof / 10) * 360}deg, ${theme === "dark" ? "#fff5" : "#0005"} ${360 - (prof / 10) * 360}deg)`,
      }}
    >
      {logo ? (
        <div className="pointer-events-none relative flex size-full items-center justify-center rounded-[18%] bg-neutral-100 object-cover transition-all duration-300 touch:group-active/group:size-[96%] no-touch:group-hover/group:size-[96%] dark:bg-neutral-800">
          <Image
            loading="lazy"
            ref={imageRef}
            src={logo}
            alt={name}
            width={250}
            height={250}
            className="size-3/5 rounded-[15%] lg:size-7/12"
          />
          <div className="absolute bottom-full left-1/2 z-10 hidden w-max -translate-x-1/2 flex-col items-center justify-center rounded-lg bg-neutral-600/50 px-2 py-1 font-mono !text-white backdrop-blur-md touch:group-active/self:flex no-touch:group-hover/self:flex">
            <p className="text-[0.85em] leading-tight">{name}</p>
            <p className="text-[0.75em] leading-tight">
              {type === "Languages" ? langLevel(prof) : `(${prof}/10)`}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-xl border border-neutral-400 bg-neutral-100 bg-clip-padding px-[1em] py-[0.5em] font-sans font-medium leading-none transition-[background-color,border-color] duration-300 touch:group-active/group:border-transparent no-touch:group-hover/group:border-transparent dark:border-neutral-500 dark:bg-neutral-800">
          <p>{name}</p>
          <div className="absolute bottom-full left-1/2 z-10 hidden w-max -translate-x-1/2 flex-col items-center justify-center rounded-lg bg-neutral-600/50 px-2 py-1 font-mono !text-white backdrop-blur-md touch:group-active/self:flex no-touch:group-hover/self:flex">
            <p className="text-[0.75em] leading-tight">
              {type === "Languages" ? langLevel(prof) : `(${prof}/10)`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
