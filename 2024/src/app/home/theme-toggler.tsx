"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const [isMounted, setMounted] = useState<boolean>(false);
  const [isHidden, setHidden] = useState<boolean>(true);
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      setHidden(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setActive(false);
      }, 1500);
    }
  }, [isActive]);

  if (!isMounted) return null;

  function onClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div
      id={"theme-toggler"}
      onClick={() => setActive(true)}
      className={`fixed bottom-0 right-0 z-10 size-[10em] text-orange-500 transition-all duration-500 landscape:top-0 ${
        isHidden
          ? "translate-x-full translate-y-full"
          : isActive
            ? "translate-x-1/2 translate-y-1/2 hover:translate-x-10 hover:translate-y-10 hover:after:!opacity-100 touch:translate-x-10 touch:translate-y-10 touch:after:!opacity-100 touch:hover:after:!opacity-100 landscape:-translate-y-1/2 hover:landscape:-translate-y-10 touch:landscape:-translate-y-10"
            : "translate-x-1/2 translate-y-1/2 hover:translate-x-10 hover:translate-y-10 hover:after:!opacity-100 touch:hover:translate-x-1/2 touch:hover:translate-y-1/2 touch:hover:after:!opacity-0 landscape:-translate-y-1/2 hover:landscape:-translate-y-10 touch:hover:landscape:-translate-y-1/2"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="absolute bottom-1/2 left-1/2 z-10 size-1/4 -translate-x-1/2 translate-y-1/2"
      >
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle-cutout">
            <path
              className={`${
                theme === "dark" ? "-translate-x-[15px]" : ""
              } transition-all duration-300`}
              d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
            />
          </clipPath>
          <g clipPath="url(#theme-toggle-cutout)">
            <circle cx="16" cy="16" r="15" />
          </g>
        </svg>
      </button>
    </div>
  );
}
