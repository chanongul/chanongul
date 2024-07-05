import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function education({
  city,
  major,
  level,
  name,
  gpa,
  index,
}: ProfilePageExperienceEducationCardProps) {
  return (
    <>
      <p className="text-[1.25em] font-medium leading-tight">{major}</p>
      <p className="text-[0.85em] opacity-50">{level}</p>
      <div className="flex gap-2">
        <SlLocationPin
          className={`mt-1 size-[1.5em] min-w-[1.5em] ${index % 2 === 1 ? "sm:order-last" : ""}`}
        />
        <div className="flex flex-col">
          <p className="text-[0.95em]">{name}</p>
          <p className="text-[0.65em]">{city}</p>
        </div>
      </div>
      <p className="text-orange-500">{`GPA: ${(+gpa).toFixed(2)}`}</p>
    </>
  );
}
