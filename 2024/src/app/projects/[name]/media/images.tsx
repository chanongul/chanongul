"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectDetailPageImages({
  src: images,
}: ProjectDetailPageMediaSourceProps) {
  const [cur, setCur] = useState<number>(0);

  return (
    <div className="relative aspect-square size-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 sm:aspect-video dark:border-neutral-800 dark:bg-charcoal">
      <button
        type="button"
        onClick={() => {
          if (cur > 0) setCur((prev) => prev - 1);
        }}
        className="group absolute left-0 top-0 z-10 h-full w-[10%]"
      >
        <FiChevronLeft className="absolute left-[10%] top-1/2 h-auto w-full -translate-y-1/2 text-white opacity-0 transition-opacity duration-300 sm:w-1/3 touch:group-active:opacity-100 no-touch:group-hover:opacity-100" />
      </button>
      {(images as string[]).map((image, i) => (
        <Image
          loading="eager"
          key={i}
          src={image}
          alt={`img-${i + 1}`}
          width={2500}
          height={2500}
          className={`absolute left-0 top-0 size-full object-cover ${cur === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button
        type="button"
        onClick={() => {
          if (cur < images.length - 1) setCur((prev) => prev + 1);
        }}
        className="group absolute right-0 top-0 z-10 h-full w-[10%]"
      >
        <FiChevronRight className="absolute right-[10%] top-1/2 h-auto w-full -translate-y-1/2 text-white opacity-0 transition-opacity duration-300 sm:w-1/3 touch:group-active:opacity-100 no-touch:group-hover:opacity-100" />
      </button>
    </div>
  );
}
