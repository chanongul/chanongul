import Education from "@/app/home/tiles/education";
import Experience from "@/app/home/tiles/experience";
import Statement from "@/app/home/tiles/statement";
import Profile from "@/app/home/tiles/profile";
import Contact from "@/app/home/tiles/contact";
import Skills from "@/app/home/tiles/skills";
import Projects from "@/app/home/tiles/projects";

export default function HomePageTiles({
  currentSection: curSect,
  profileData,
  contactsData,
  educationData,
  experienceData,
  skillsData,
  projectsData,
}: HomePageTilesProps) {
  return (
    <div className="auto-rows-1fr relative grid h-dvh w-full grid-cols-6 grid-rows-13 gap-3 p-3 text-sm md:grid-flow-col md:grid-cols-4 md:grid-rows-12 md:text-base xl:gap-4 xl:p-4 xl:text-xl landscape:grid-flow-col landscape:grid-cols-4 landscape:grid-rows-12">
      <Education currentSection={curSect} educationData={educationData} />

      <Experience currentSection={curSect} experienceData={experienceData} />

      <Statement currentSection={curSect} statementData={profileData} />

      <Profile currentSection={curSect} profileData={profileData} />

      <Contact currentSection={curSect} contactsData={contactsData} />

      <Skills currentSection={curSect} skillsData={skillsData} />

      <Projects currentSection={curSect} projectsData={projectsData} />
    </div>
  );
}
