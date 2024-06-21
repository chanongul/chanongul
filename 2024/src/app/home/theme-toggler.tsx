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
      }, 1200);
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
    <>
      <div
        id="lg-theme-toggler"
        onClick={() => setActive(true)}
        className={`hidden md:block z-10 fixed top-0 right-0 md:hover:translate-x-0 md:hover:translate-y-0 size-[6em] text-orange-500 transition-all duration-500 ${isHidden ? "translate-x-full -translate-y-full" : "translate-x-1/4 -translate-y-1/4"}`}
      >
        <button
          type="button"
          onClick={onClick}
          className="size-1/3 z-10 absolute bottom-[55%] left-[55%]"
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <clipPath id="lg-theme-toggle-cutout">
              <path
                className={`${
                  theme === "dark" ? "-translate-x-[15px]" : ""
                } transition-all duration-300`}
                d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
              />
            </clipPath>
            <g clipPath="url(#lg-theme-toggle-cutout)">
              <circle cx="16" cy="16" r="15" />
            </g>
          </svg>
        </button>
      </div>
      <div
        id={"sm-theme-toggler"}
        onClick={() => setActive(true)}
        className={`md:hidden z-10 fixed top-0 right-0 size-[8em] text-orange-500 transition-all duration-500 ${
          isHidden
            ? "translate-x-full -translate-y-full"
            : isActive
              ? "active !translate-x-10 !-translate-y-10"
              : "translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <button
          type="button"
          onClick={onClick}
          className="size-1/4 z-10 absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <clipPath id="sm-theme-toggle-cutout">
              <path
                className={`${
                  theme === "dark" ? "-translate-x-[15px]" : ""
                } transition-all duration-300`}
                d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
              />
            </clipPath>
            <g clipPath="url(#sm-theme-toggle-cutout)">
              <circle cx="16" cy="16" r="15" />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}
