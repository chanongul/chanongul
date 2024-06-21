"use client";

import { useEffect, useRef } from "react";
import { wrapGrid } from "animate-css-grid";
import Education from "@/app/home/detailed/education";
import Experience from "@/app/home/detailed/experience";
import Statement from "@/app/home/detailed/statement";
import Profile from "@/app/home/detailed/profile";
import Contact from "@/app/home/detailed/contact";
import Skills from "@/app/home/detailed/skills";
import Projects from "@/app/home/detailed/projects";
import Navigator from "@/app/home/detailed/nav";
import TileBackground from "@/app/home/detailed/background";

export default function DetailedHomePage({
  currentSection,
}: DetailedHomePageProps) {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [curSect, _] = currentSection;

  useEffect(() => {
    if (gridContainerRef.current) {
      wrapGrid(gridContainerRef.current, {
        easing: "easeInOut",
        duration: 300,
      });
    }
  }, []);

  return (
    <div
      ref={gridContainerRef}
      className={`absolute top-0 left-0 w-full h-dvh grid grid-cols-6 md:grid-cols-4  md:grid-rows-12 p-3 xl:p-4 ${curSect ? "!gap-0 grid-rows-1" : "gap-3 xl:gap-4 md:grid-flow-col"}`}
    >
      <TileBackground currentSection={currentSection} />

      <Education currentSection={currentSection} />

      <Experience currentSection={currentSection} />

      <Statement currentSection={currentSection} />

      <Profile currentSection={currentSection} />

      <Contact currentSection={currentSection} />

      <Skills currentSection={currentSection} />

      <Projects currentSection={currentSection} />

      <Navigator currentSection={currentSection} />
    </div>
  );
}
