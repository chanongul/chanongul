"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function SkillCard({ logo, name, prof }: SkillCardProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const { resolvedTheme: theme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div
      className={`group/self flex items-center justify-center ${logo ? "size-16 min-w-16 rounded-[20%] sm:size-20 sm:min-w-20 xl:size-24 xl:min-w-24" : "w-max rounded-xl"}`}
      style={{
        background: `conic-gradient(transparent ${360 - (prof / 10) * 360}deg, ${theme === "dark" ? "#fff5" : "#0005"} ${360 - (prof / 10) * 360}deg)`,
      }}
    >
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
          <p className="text-[0.75em] leading-tight">{`(${prof}/10)`}</p>
        </div>
      </div>
    </div>
  );
}
