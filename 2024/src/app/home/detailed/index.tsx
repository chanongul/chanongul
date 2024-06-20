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

export default function DetailedHomePage({
  currentSection,
}: DetailedHomePageProps) {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [curSect, setCurSect] = currentSection;

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
      className={`absolute top-0 left-0 w-full h-dvh grid grid-cols-6 md:grid-cols-4  grid-rows-12 p-3 xl:p-4 ${curSect ? "!gap-0 grid-rows-1" : "gap-3 xl:gap-4 md:grid-flow-col"}`}
    >
      <Education currentSection={[curSect, setCurSect]} />

      <Experience currentSection={[curSect, setCurSect]} />

      <Statement currentSection={[curSect, setCurSect]} />

      <Profile currentSection={[curSect, setCurSect]} />

      <Contact currentSection={[curSect, setCurSect]} />

      <Skills currentSection={[curSect, setCurSect]} />

      <Projects currentSection={[curSect, setCurSect]} />

      <Navigator currentSection={[curSect, setCurSect]} />
    </div>
  );
}
