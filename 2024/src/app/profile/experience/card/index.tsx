import Image from "next/image";
import Education from "@/app/profile/experience/card/education";
import Experience from "@/app/profile/experience/card/experience";
import { durationFormatter } from "@/app/utils/duration-formatter";

export default function index({
  experience,
  index,
  length,
}: ProfilePageExperienceCardProps) {
  return (
    <div className="col-span-full grid size-full grid-cols-[auto,1fr] gap-x-4 gap-y-2 sm:grid-cols-[1fr,auto,1fr] xl:col-span-4 xl:col-start-2">
      <div className="row-span-2 grid grid-rows-[auto,1fr] justify-items-center gap-2 transition-colors duration-300 sm:order-2 sm:row-span-1">
        <Image
          src={experience.logo}
          alt="Education"
          width={300}
          height={300}
          className="size-16 min-w-16"
        />
        {index < length - 1 && (
          <span className="block h-full w-px bg-black/25 dark:bg-white/25" />
        )}
      </div>
      <div
        className={`flex items-center text-[0.85em] opacity-50 transition-colors duration-300 sm:h-16 ${index % 2 === 0 ? "sm:order-1 sm:justify-end" : "sm:order-3"}`}
      >
        {durationFormatter(experience.from, experience.to)}
      </div>
      <div
        className={`flex w-fit flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 transition-colors duration-300 dark:border-neutral-800 dark:bg-charcoal dark:text-white ${index % 2 === 0 ? "sm:order-3 sm:items-start sm:text-start" : "sm:order-1 sm:items-end sm:justify-end sm:justify-self-end sm:text-end"} ${index < length - 1 ? "mb-[10%]" : ""}`}
      >
        {Object.hasOwn(experience, "gpa") ? (
          <Education {...(experience as Education)} index={index} />
        ) : (
          <Experience {...(experience as Experience)} index={index} />
        )}
      </div>
    </div>
  );
}
