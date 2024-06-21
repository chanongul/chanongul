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
    <div className="relative w-full h-dvh grid grid-cols-6 md:grid-cols-4 grid-rows-13 md:grid-rows-12 auto-rows-1fr md:grid-flow-col p-3 xl:p-4 gap-3 xl:gap-4">
      <Education currentSection={curSect} educationData={educationData} />

      <Experience currentSection={curSect} experienceData={experienceData} />

      <Statement currentSection={curSect} statement={profileData.statement} />

      <Profile currentSection={curSect} photo={profileData.photo} />

      <Contact currentSection={curSect} contactsData={contactsData} />

      <Skills currentSection={curSect} skillsData={skillsData} />

      <Projects currentSection={curSect} projectsData={projectsData} />
    </div>
  );
}
