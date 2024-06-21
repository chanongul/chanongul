"use client";

import { useState } from "react";
import HomePageTiles from "@/app/home/tiles";
import DetailedHomePage from "@/app/home/detailed";
import ThemeToggler from "@/app/home/theme-toggler";

export default function HomePage(props: HomePageProps) {
  const [curSect, setCurSect] = useState<string | null>(null);

  return (
    <div className="relative w-full h-dvh">
      <HomePageTiles {...props} currentSection={curSect} />

      <DetailedHomePage {...props} currentSection={[curSect, setCurSect]} />

      <ThemeToggler />
    </div>
  );
}
