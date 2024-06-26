"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

export default function StatementTile({
  currentSection: curSect,
  statement,
}: StatementTileProps) {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [isOverflowing, setOverflowing] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const overflowTextRef = useRef<HTMLDivElement>(null);

  const checkOverflow = () => {
    const sectionEl = sectionRef.current;
    const overflowTextEl = overflowTextRef.current;

    if (sectionEl && overflowTextEl) {
      setOverflowing(sectionEl.scrollHeight > sectionEl.clientHeight);
    }
  };

  useEffect(() => {
    setMounted(true);
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  useEffect(() => {
    checkOverflow();
  }, [isMounted]);

  return (
    <section
      ref={sectionRef}
      className={`relative order-3 col-span-6 row-span-2 overflow-hidden border border-neutral-200 md:order-none md:col-span-2 md:row-span-3 landscape:order-none landscape:col-span-2 landscape:row-span-3 dark:border-black ${
        curSect ? "opacity-0" : "flex opacity-100"
      } ${isOverflowing ? "items-start" : "items-center"}`}
    >
      <article
        className={`flex w-full items-center justify-center text-justify font-serif leading-relaxed ${isMounted ? "h-fit px-[1em] py-[0.5em]" : "h-full p-[2%]"}`}
      >
        {isMounted ? statement : <Skeleton />}
      </article>
      <div
        id="hide-overflow-text"
        ref={overflowTextRef}
        className={`absolute bottom-0 left-0 z-10 h-1/3 w-full bg-neutral-200/20 opacity-0 transition-all duration-300 dark:bg-black/20 ${isOverflowing ? "opacity-100" : "opacity-0"}`}
      />
    </section>
  );
}

function Skeleton({ className }: ClassProps) {
  return (
    <div className={`grid h-full w-full items-center ${className}`}>
      <div className="flex h-3/5 gap-[2%]">
        <div className="h-full w-1/4 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-1/2 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-1/4 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
      <div className="flex h-3/5 gap-[2%]">
        <div className="h-full w-1/5 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-1/5 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-3/5 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
      <div className="flex h-3/5 gap-[2%]">
        <div className="h-full w-1/3 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-2/3 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-1/4 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
      <div className="flex h-3/5 gap-[2%]">
        <div className="h-full w-3/5 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-1/6 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-2/5 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
      <div className="flex h-3/5 gap-[2%]">
        <div className="h-full w-1/3 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="h-full w-2/3 rounded-full bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  );
}
