"use client";

import { useEffect, useState } from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ResumeLink({ resume }: ResumeProps) {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [hasClicked, setClicked] = useState<boolean>(false);

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
      href={resume}
      target="_blank"
      onClick={() => {
        setClicked(true);
        localStorage.setItem("resumeClicked", "true");
      }}
      className="group relative hidden size-full items-center justify-between rounded-lg border border-neutral-200 bg-white p-[10%] text-[0.75em] text-black transition-colors duration-300 md:rounded-xl md:text-[1em] 2xl:!text-[1.25em] landscape:flex landscape:rounded-xl landscape:text-[0.6em] lg:landscape:text-[0.85em] xl:landscape:text-[1em] dark:border-neutral-800 dark:bg-charcoal dark:text-white"
    >
      <div className="flex size-full flex-col items-center justify-between">
        <p className="font-sans">View</p>
        <BsFileEarmarkPerson className="size-[1.5em] lg:size-[3em]" />
        <p className="font-sans">Resumé</p>
      </div>
      <div className="absolute left-0 top-0 size-full opacity-0 transition-all duration-300 touch:group-active:opacity-100 touch:group-active:backdrop-blur-sm no-touch:group-hover:opacity-100 no-touch:group-hover:backdrop-blur-sm">
        <FiArrowRight className="absolute left-1/2 top-1/2 h-3/4 w-auto -translate-x-1/2 -translate-y-1/2 opacity-60 transition-all duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
      </div>
      {!hasClicked && (
        <span className="absolute right-0 top-0 flex size-[0.75rem] -translate-y-1/3 translate-x-1/3 items-center justify-center rounded-full bg-orange-500">
          <span className="block min-h-[120%] min-w-[120%] animate-ping rounded-full bg-orange-500" />
        </span>
      )}
    </Link>
  );
}
