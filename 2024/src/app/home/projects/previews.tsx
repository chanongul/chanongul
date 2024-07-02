"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectPreviews({
  projects,
  count,
}: ProjectPreviewsProps) {
  const [randomizedProjects, setRandomizedProjects] = useState<Project[]>([]);
  const [isMounted, setMounted] = useState<boolean>(false);
  const [isPending, setPending] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMounted(true);

    const proj = [];
    const usedIndices = new Set();
    while (proj.length < count) {
      const randIndex = Math.floor(Math.random() * projects.length);
      if (!usedIndices.has(randIndex)) {
        proj.push(projects[randIndex]);
        usedIndices.add(randIndex);
      }
    }
    setRandomizedProjects(proj);

    if (imageRef.current?.complete) {
      setPending(false);
    }
  }, [projects, count]);

  function durationFormatter(from: string, to: string) {
    const f = new Date(from).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    const t = new Date(to).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    if (f === t) {
      return f;
    }
    return `${f} - ${t}`;
  }

  return (
    <article
      className={`hidden size-full gap-2 overflow-hidden rounded-xl text-black sm:gap-3 md:rounded-2xl xl:gap-4 landscape:grid landscape:gap-2 landscape:rounded-2xl xl:landscape:gap-4 ${!isMounted ? "border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-charcoal" : ""}`}
      style={{ gridTemplateRows: `repeat(${count}, 1fr)` }}
    >
      {randomizedProjects.map((project, i) => (
        <Link
          key={i}
          href={`/projects/${project.slug}`}
          className="group relative hidden size-full overflow-hidden rounded-xl border border-neutral-200 bg-white text-black transition-all duration-300 md:rounded-2xl landscape:block landscape:rounded-2xl dark:border-neutral-800 dark:bg-charcoal dark:text-white"
        >
          {!isPending && (
            <Image
              ref={imageRef}
              className="size-full object-cover transition-all duration-500 touch:group-active:scale-110 no-touch:group-hover:scale-110"
              src={project.preview}
              alt={project.name}
              width={2000}
              height={2000}
              placeholder="blur"
              blurDataURL={`${project.preview}?w=20&h=15`}
              priority
            />
          )}
          <div className="absolute left-0 top-0 size-full rounded-xl bg-white/50 opacity-0 backdrop-blur-sm transition-all duration-300 md:rounded-2xl touch:group-active:opacity-100 no-touch:group-hover:opacity-100 landscape:rounded-2xl dark:bg-black/50">
            <div className="flex size-full flex-col items-center justify-center p-4 text-black opacity-60 landscape:p-1 lg:landscape:p-4 dark:text-white">
              <h3 className="font-mono text-[1.15em] font-bold leading-none xl:text-[1.5em] landscape:text-[1em] lg:landscape:text-[1.25em]">
                {project.name}
              </h3>
              <FiArrowRight className="size-[5em] transition-transform duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
              <p className="font-mono text-[0.65em] leading-none xl:text-[1em] landscape:text-[0.5em] lg:landscape:text-[0.75em]">
                {durationFormatter(project.from, project.to)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
}
