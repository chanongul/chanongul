"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Skeleton from "@/app/home/contact/skeleton";

export default function ThemeToggler({ className }: ClassProps) {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  function onClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <button
      className={`group relative aspect-square size-full rounded-[20%] border border-neutral-200 bg-white text-orange-500 transition-colors duration-300 dark:border-neutral-800 dark:bg-charcoal ${className}`}
      type="button"
      onClick={onClick}
    >
      {isMounted ? (
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-current transition-transform duration-500 touch:group-active:scale-110 no-touch:group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="40%"
          height="40%"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle-cutout">
            <path
              className={`${
                theme === "dark" ? "-translate-x-[15px]" : ""
              } transition-all duration-500`}
              d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
            />
          </clipPath>
          <g clipPath="url(#theme-toggle-cutout)">
            <circle cx="16" cy="16" r="15" />
          </g>
        </svg>
      ) : null}
    </button>
  );
}
