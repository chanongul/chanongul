"use client";

import { useEffect, useState } from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
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
      className="relative w-full rounded-full border border-neutral-300 py-2 text-center text-[0.75em] transition-[border-color] duration-300 touch:active:!border-orange-500 no-touch:hover:!border-orange-500 dark:border-neutral-700"
    >
      <p className="">View Resumé</p>

      {!hasClicked && (
        <span className="absolute right-0 top-0 flex size-[0.65rem] -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full bg-orange-500">
          <span className="block min-h-[120%] min-w-[120%] animate-ping rounded-full bg-orange-500" />
        </span>
      )}
    </Link>
  );
}
