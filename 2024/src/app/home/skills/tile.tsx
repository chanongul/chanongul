"use client";

import { useRef } from "react";
import Carousel from "@/app/home/skills/carousel";
import Link from "@/app/home/skills/link";

export default function SkillsTile({
  type,
  skills,
  index,
  typesCount,
}: HomePageSkillsTileProps) {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <article
      ref={containerRef}
      id={index.toString()}
      className="relative grid h-full w-[calc(50vw-0.75rem)] flex-1 grid-rows-[auto,1fr] overflow-hidden rounded-xl border border-neutral-200 bg-white text-black transition-colors duration-300 sm:w-[calc(50vw-1.125rem)] md:rounded-2xl xl:w-[calc(50vw-1.5rem)] landscape:!w-full landscape:rounded-2xl dark:border-neutral-800 dark:bg-charcoal dark:text-white"
    >
      <Link containerRef={containerRef} type={type} />

      <Carousel containerRef={containerRef} skills={skills} />
    </article>
  );
}
