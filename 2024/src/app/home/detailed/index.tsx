"use client";

import { useEffect, useRef, useState } from "react";
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
  profileData,
  contactData: contactsData,
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
      className={`absolute left-0 top-0 z-10 grid h-dvh w-full grid-cols-6 grid-rows-13 p-3 md:grid-cols-4 md:grid-rows-12 xl:p-4 landscape:grid-cols-4 landscape:grid-rows-12 ${curSect ? "grid-rows-1 !gap-0" : "gap-3 md:grid-flow-col xl:gap-4 landscape:grid-flow-col"}`}
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

      <Contact currentSection={currentSection} contactData={contactsData} />

      <Profile
        currentSection={currentSection}
        contactData={contactsData}
        profileData={profileData}
      />

      <Statement currentSection={currentSection} />

      <Skills
        currentSection={currentSection}
        skillsData={skillsData}
        setProjFilters={setProjFilters}
      />

      <Projects
        currentSection={currentSection}
        projectsData={projectsData}
        filters={projFilters}
      />

      <Navigator currentSection={currentSection} />
    </div>
  );
}
