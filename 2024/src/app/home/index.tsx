"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import HomePageTiles from "@/app/home/tiles";
import DetailedHomePage from "@/app/home/detailed";
import ThemeToggler from "@/app/home/theme-toggler";

export default function HomePage() {
  const [isPending, setPending] = useState<boolean>(true);
  const [curSect, setCurSect] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 200);
  }, []);

  return (
    <div className="relative w-full h-dvh">
      {/* {isPending && <Loading />} */}

      <HomePageTiles currentSection={curSect} />

      <DetailedHomePage currentSection={[curSect, setCurSect]} />

      <ThemeToggler />
    </div>
  );
}
