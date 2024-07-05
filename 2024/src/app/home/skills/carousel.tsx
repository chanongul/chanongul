"use client";

import { useEffect, useRef, useState, forwardRef, RefObject } from "react";
import Card from "@/app/home/skills/card";

const SkillsCarousel = forwardRef<HTMLDivElement, HomePageSkillsCarouselProps>(
  ({ containerRef, skills }, _) => {
    const [isOverflowing, setOverflowing] = useState<boolean>();
    const [trackHeight, setTrackHeight] = useState<number>();
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function checkOverflow() {
        const containerEl = (containerRef as RefObject<HTMLDivElement>).current;
        const trackEl = trackRef.current;
        if (containerEl && trackEl) {
          setOverflowing(trackEl.scrollWidth > containerEl.clientWidth);
          setTrackHeight(trackEl.clientHeight);
        }
      }
      checkOverflow();

      window.addEventListener("resize", checkOverflow);
      return () => {
        window.removeEventListener("resize", checkOverflow);
      };
    }, [containerRef, skills]);

    return (
      <div
        ref={trackRef}
        className={`group my-auto flex h-fit items-center landscape:w-full ${!isOverflowing ? "!w-full justify-center" : ""}`}
      >
        <div
          className={`flex whitespace-nowrap touch:group-active:[animation-play-state:paused] no-touch:group-hover:[animation-play-state:paused] ${
            isOverflowing ? "animate-scroll" : ""
          }`}
          style={{ animationDuration: `${skills.length * 5}s` }}
        >
          {skills.map((skill, i) => (
            <div key={i}>
              <Card logo={skill.logo} name={skill.name} prof={skill.prof} />
            </div>
          ))}
          {isOverflowing &&
            skills.map((skill, i) => (
              <div key={i + skills.length}>
                <Card logo={skill.logo} name={skill.name} prof={skill.prof} />
              </div>
            ))}
        </div>
        {isOverflowing && (
          <>
            <div
              className="absolute left-0 top-1/2 row-start-2 w-full -translate-y-1/2 bg-[linear-gradient(to_right,white_5%,transparent_20%,transparent_80%,white_95%)] bg-clip-border opacity-100 transition-opacity duration-300 dark:opacity-0"
              style={{ height: `${trackHeight! + 10}px` }}
            />
            <div
              className="absolute left-0 top-1/2 row-start-2 w-full -translate-y-1/2 bg-[linear-gradient(to_right,theme(colors.charcoal)_5%,transparent_20%,transparent_80%,theme(colors.charcoal)_95%)] bg-clip-border opacity-0 transition-opacity duration-300 dark:opacity-100"
              style={{ height: `${trackHeight! + 10}px` }}
            />
          </>
        )}
      </div>
    );
  },
);

SkillsCarousel.displayName = "SkillsCarousel";

export default SkillsCarousel;
