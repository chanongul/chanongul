"use client";

import { useEffect, useRef, useState } from "react";
import { wrapGrid } from "animate-css-grid";
import Education from "@/app/home/detailed/education";
import Experience from "@/app/home/detailed/experience";
import Profile from "@/app/home/detailed/profile";
import Skills from "@/app/home/detailed/skills";
import Projects from "@/app/home/detailed/projects";
import Navigator from "@/app/home/detailed/nav";
import TileBackground from "@/app/home/detailed/background";

export default function DetailedHomePage({
  currentSection,
  profileData,
  contactsData,
  educationData,
  experienceData,
  skillsData,
  projectsData,
}: DetailedHomePageProps) {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [curSect, _] = currentSection;
  const [projFilters, setProjFilters] = useState<string[]>([]);

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
      <TileBackground currentSection={currentSection[0]} />

      <Education
        currentSection={currentSection}
        educationData={educationData}
      />

      <Experience
        currentSection={currentSection}
        experienceData={experienceData}
      />

      <Profile
        currentSection={currentSection}
        contactsData={contactsData}
        {...profileData}
      />

      <Skills currentSection={currentSection} skillsData={skillsData} />

      <Projects
        currentSection={currentSection}
        projectsData={projectsData}
        filters={projFilters}
      />

      <Navigator currentSection={currentSection} />
    </div>
  );
}
