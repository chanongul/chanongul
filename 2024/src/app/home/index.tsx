"use client";

import Profile from "@/app/home/profile";
import Contact from "@/app/home/contact";
import Statement from "@/app/home/statement";
import Projects from "@/app/home/projects";
import Skills from "@/app/home/skills";
import Experience from "@/app/home/experience";

export default function HomePage({
  profileData,
  contactData,
  educationData,
  experienceData,
  skillsData,
  projectsData,
}: HomePageProps) {
  return (
    <div className="relative grid h-dvh w-full select-none grid-cols-[auto,1fr,auto] grid-rows-[repeat(4,1fr),auto,repeat(7,1fr)] gap-2 overflow-hidden p-2 [mask:linear-gradient(to_right,#000c,#000b),url(/images/noise.svg)] sm:gap-3 sm:p-3 lg:gap-4 lg:p-4 landscape:grid-flow-col landscape:grid-cols-10 landscape:grid-rows-[repeat(2,auto),repeat(11,1fr)] landscape:gap-2 landscape:p-2 lg:landscape:gap-4 lg:landscape:p-4">
      <Profile illustration={profileData.illustration} />

      <Contact contacts={contactData} resume={profileData.resume} />

      <Statement statement={profileData.description} />

      <Skills skills={skillsData} />

      <Experience education={educationData} experience={experienceData} />

      <Projects projects={projectsData} resume={profileData.resume} />
    </div>
  );
}
