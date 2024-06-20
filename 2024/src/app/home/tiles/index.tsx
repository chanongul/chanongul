import Education from "@/app/home/tiles/education";
import Experience from "@/app/home/tiles/experience";
import Statement from "@/app/home/tiles/statement";
import Profile from "@/app/home/tiles/profile";
import Contact from "@/app/home/tiles/contact";
import Skills from "@/app/home/tiles/skills";
import Projects from "@/app/home/tiles/projects";
import TilesBackground from "@/app/home/tiles/background";

export default function HomePageTiles({
  currentSection: curSect,
}: HomePageTilesProps) {
  return (
    <div className="relative w-full h-dvh grid grid-cols-6 md:grid-cols-4 md:grid-rows-12 md:grid-flow-col p-3 xl:p-4 gap-3 xl:gap-4">
      <Education currentSection={curSect} />

      <Experience currentSection={curSect} />

      <Statement currentSection={curSect} />

      <Profile currentSection={curSect} />

      <Contact currentSection={curSect} />

      <Skills currentSection={curSect} />

      <Projects currentSection={curSect} />

      <TilesBackground currentSection={curSect} />
    </div>
  );
}
