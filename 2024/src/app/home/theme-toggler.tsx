"use client";

import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [isDark, setDark] = useState<boolean>(true);
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (isMounted) {
      if (!localStorage.getItem("theme")) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
          setDark(true);
        } else {
          localStorage.setItem("theme", "light");
          setDark(false);
        }
      } else {
        if (localStorage.getItem("theme") === "dark") {
          document.documentElement.classList.add("dark");
          setDark(true);
        } else {
          document.documentElement.classList.remove("dark");
          setDark(false);
        }
      }
    } else {
      setMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setActive(false);
      }, 1200);
    }
  }, [isActive]);

  function onClick() {
    if (localStorage.getItem("theme") === "dark") {
      setDark(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <>
      <div
        id="lg-theme-toggler"
        onClick={() => setActive(true)}
        className="hidden md:block z-10 fixed top-0 right-0 translate-x-1/4 -translate-y-1/4 md:hover:translate-x-0 md:hover:translate-y-0 size-[6em] text-orange-500 transition-all duration-300"
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
                  isDark ? "-translate-x-[15px]" : ""
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
        className={`md:hidden z-10 fixed top-0 right-0 size-[8em] text-orange-500 transition-all duration-300 ${isActive ? "active !translate-x-10 !-translate-y-10" : "translate-x-1/2 -translate-y-1/2"}`}
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
                  isDark ? "-translate-x-[15px]" : ""
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
