"use client";

import { useEffect, useState } from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import Skeleton from "@/app/home/contact/skeleton";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function ResumeLink() {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [hasClicked, setClicked] = useState<boolean>(false);
  const { resolvedTheme: theme } = useTheme();

  useEffect(() => {
    setMounted(true);

    if (localStorage.getItem("resumeClicked") === null) {
      localStorage.setItem("resumeClicked", "false");
    } else {
      setClicked(localStorage.getItem("resumeClicked") === "true");
    }
  }, []);

  if (!isMounted) return null;

  return (
    <Link
      href={`/docs/${theme}/chanongul.pdf`}
      target="_blank"
      onClick={() => {
        setClicked(true);
        localStorage.setItem("resumeClicked", "true");
      }}
      className="group relative col-span-1 col-start-1 row-span-1 row-start-1 flex aspect-square size-full items-center justify-center rounded-[20%] border border-neutral-200 bg-white transition-colors duration-300 landscape:row-span-4 landscape:hidden dark:border-neutral-800 dark:bg-charcoal"
    >
      {isMounted ? (
        <BsFileEarmarkPerson className="size-[45%] transition-transform duration-300 touch:group-active:scale-110 no-touch:group-hover:scale-110" />
      ) : (
        <div className="flex size-full items-center justify-center p-[15%]">
          <Skeleton />
        </div>
      )}
      {!hasClicked && (
        <span className="absolute right-0 top-0 flex size-[0.65rem] -translate-y-1/3 translate-x-1/3 items-center justify-center rounded-full bg-orange-500">
          <span className="block min-h-[120%] min-w-[120%] animate-ping rounded-full bg-orange-500" />
        </span>
      )}
    </Link>
  );
}
