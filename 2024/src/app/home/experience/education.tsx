"use client";

import Link from "@/app/home/experience/link";
import Card from "@/app/home/experience/card";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

export default function EducationTile({
  education,
}: HomePageEducationPartTileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTop, setTop] = useState<boolean>(true);
  const [isBottom, setBottom] = useState<boolean>(false);

  useEffect(() => {
    function checkTop() {
      if (containerRef.current) {
        setTop(containerRef.current.scrollTop === 0);
        setBottom(
          containerRef.current.scrollTop + containerRef.current.clientHeight ===
            containerRef.current.scrollHeight,
        );
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", checkTop);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", checkTop);
      }
    };
  }, [education]);

  return (
    <article className="grid h-full w-full grid-rows-[auto,1fr] overflow-hidden rounded-xl border border-neutral-200 bg-white px-3 text-black transition-colors duration-300 sm:px-6 md:rounded-2xl landscape:hidden landscape:rounded-2xl landscape:px-3 lg:landscape:px-6 xl:landscape:grid dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <Link header="Education" />

      <div className="relative size-full overflow-hidden">
        {!isTop && education.length > 1 && (
          <div className="absolute top-1 w-full">
            <FiChevronUp className="mx-auto size-4 opacity-20" />
          </div>
        )}
        <div
          ref={containerRef}
          className="size-full snap-y snap-mandatory overflow-auto"
        >
          <div
            className="grid w-full"
            style={{
              height: `${education.length * 100}%`,
              gridTemplateRows: `repeat(${education.length}, 1fr)`,
            }}
          >
            {education.map((edu, i) => (
              <Card
                key={i}
                h1={edu.major || ""}
                h2={edu.level}
                from={edu.from}
                to={edu.to}
              />
            ))}
          </div>
        </div>
        {!isBottom && education.length > 1 && (
          <div className="absolute bottom-1 w-full">
            <FiChevronDown className="mx-auto size-4 opacity-20" />
          </div>
        )}
      </div>
    </article>
  );
}
