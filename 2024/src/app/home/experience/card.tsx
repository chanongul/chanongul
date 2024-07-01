"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceCard({
  h1,
  h2,
  from,
  to,
}: ExperienceCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLParagraphElement>(null);
  const h2Ref = useRef<HTMLParagraphElement>(null);
  const [isH1Overflowing, setH1Overflowing] = useState<boolean>(false);
  const [isH2Overflowing, setH2Overflowing] = useState<boolean>(false);

  useEffect(() => {
    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  function checkOverflow() {
    const container = containerRef.current;
    const h1 = h1Ref.current;
    const h2 = h2Ref.current;

    if (container && h1 && h2) {
      setH1Overflowing(h1.clientWidth > container.clientWidth);
      setH2Overflowing(h2.clientWidth > container.clientWidth);
    }
  }

  function durationFormatter(from: string, to: string) {
    const f = new Date(from);
    const t = new Date(to);

    const diffInMonths =
      (t.getFullYear() - f.getFullYear()) * 12 + (t.getMonth() - f.getMonth());
    const formatYear = (date: Date) => date.getFullYear();
    const formatMonthYear = (date: Date) =>
      date.toLocaleString("default", { month: "short", year: "numeric" });

    return diffInMonths > 12
      ? `${formatYear(f)} - ${formatYear(t)}`
      : `${formatMonthYear(f)} - ${formatMonthYear(t)}`;
  }

  return (
    <div className="group flex min-h-full w-full snap-start flex-col justify-center gap-[0.35em] overflow-hidden font-mono text-[0.85em] lg:text-[1em] 2xl:text-[1.25em] landscape:flex-row landscape:items-center landscape:justify-normal landscape:gap-0">
      <div
        ref={containerRef}
        className="flex w-full flex-col gap-0 landscape:h-full landscape:max-w-[35%] landscape:justify-center landscape:gap-[0.25em] md:landscape:max-w-[40%]"
      >
        <div
          className={`w-full ${isH1Overflowing ? "touch:group-active:overflow-hidden no-touch:group-hover:overflow-hidden" : ""}`}
        >
          <div
            className={`inline-flex w-full ${isH1Overflowing ? "touch:group-active:w-auto touch:group-active:animate-scroll no-touch:group-hover:w-auto no-touch:group-hover:animate-scroll" : ""}`}
            style={{
              animationDuration: `${h1.length / 5}s`,
            }}
          >
            <h1
              className={`inline truncate text-[1.15em] font-medium leading-relaxed landscape:leading-none ${isH1Overflowing ? "touch:group-active:overflow-visible no-touch:group-hover:overflow-visible" : ""}`}
            >
              {h1}
              <span
                className={`hidden font-light opacity-15 ${isH1Overflowing ? "touch:group-active:inline no-touch:group-hover:inline" : ""}`}
              >
                &nbsp;&#47;&nbsp;
              </span>
            </h1>
            <p
              ref={h1Ref}
              className={`invisible absolute overflow-visible whitespace-nowrap text-[1.15em] font-medium leading-relaxed landscape:leading-none ${isH1Overflowing ? "touch:group-active:visible touch:group-active:static touch:group-active:overflow-visible no-touch:group-hover:visible no-touch:group-hover:static no-touch:group-hover:overflow-visible" : ""}`}
            >
              {h1}
              <span
                className={`hidden font-light opacity-15 ${isH1Overflowing ? "touch:group-active:inline no-touch:group-hover:inline" : ""}`}
              >
                &nbsp;&#47;&nbsp;
              </span>
            </p>
          </div>
        </div>
        <div
          className={`w-full ${isH2Overflowing ? "touch:group-active:overflow-hidden no-touch:group-hover:overflow-hidden" : ""}`}
        >
          <div
            className={`inline-flex w-full ${isH2Overflowing ? "touch:group-active:w-auto touch:group-active:animate-scroll no-touch:group-hover:w-auto no-touch:group-hover:animate-scroll" : ""}`}
            style={{ animationDuration: `${h2.length / 5}s` }}
          >
            <h2
              className={`inline truncate text-[0.85em] font-light landscape:leading-none ${isH2Overflowing ? "touch:group-active:overflow-visible no-touch:group-hover:overflow-visible" : ""}`}
            >
              {h2}
              <span
                className={`hidden font-light opacity-15 ${isH2Overflowing ? "touch:group-active:inline no-touch:group-hover:inline" : ""}`}
              >
                &nbsp;&#47;&nbsp;
              </span>
            </h2>
            <p
              ref={h2Ref}
              className={`invisible absolute overflow-visible whitespace-nowrap text-[0.85em] font-light landscape:leading-none ${isH2Overflowing ? "touch:group-active:visible touch:group-active:static touch:group-active:overflow-visible no-touch:group-hover:visible no-touch:group-hover:static no-touch:group-hover:overflow-visible" : ""}`}
            >
              {h2}
              <span
                className={`hidden font-light opacity-15 ${isH2Overflowing ? "touch:group-active:inline no-touch:group-hover:inline" : ""}`}
              >
                &nbsp;&#47;&nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr className="ml-[5%] hidden w-full opacity-25 landscape:block" />
      <hr className="w-full opacity-25 landscape:mr-[5%] landscape:block" />
      <p className="text-right text-[0.85em] font-light leading-none opacity-75 landscape:min-w-max landscape:flex-1">
        {durationFormatter(from, to)}
      </p>
    </div>
  );
}
