import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function experience({
  title,
  description,
  name,
  city,
  index,
}: ProfilePageExperienceExperienceCardProps) {
  return (
    <>
      <p className="text-[1.25em] font-medium leading-tight">{title}</p>
      <ul
        className={`flex list-outside flex-col gap-1.5 text-[0.95em] ${description.split(`\n`).length > 1 ? "list-disc" : ""}`}
      >
        {description.split("\n").map((d, i) => (
          <li
            key={i}
            className={`whitespace-pre-wrap ${description.split(`\n`).length > 1 ? "ml-5" : ""}`}
          >
            {d}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <SlLocationPin
          className={`mt-1 size-[1.5em] min-w-[1.5em] ${index % 2 === 1 ? "order-last" : ""}`}
        />
        <div className="flex flex-col">
          <p className="text-[0.95em]">{name}</p>
          <p className="text-[0.65em]">{city}</p>
        </div>
      </div>
    </>
  );
}
