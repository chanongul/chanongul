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
        onClick={() => setCur((cur - 1 + images.length) % images.length)}
        className="group absolute left-0 top-0 z-10 h-full w-1/2"
      >
        <FiChevronLeft className="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 text-black/25 opacity-0 transition-opacity duration-300 sm:w-1/3 touch:group-active:opacity-100 no-touch:group-hover:opacity-100" />
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
        onClick={() => setCur((cur + 1) % images.length)}
        className="group absolute right-0 top-0 z-10 h-full w-1/2"
      >
        <FiChevronRight className="absolute right-1/2 top-1/2 h-auto w-full -translate-y-1/2 translate-x-1/2 text-black/25 opacity-0 transition-opacity duration-300 sm:w-1/3 touch:group-active:opacity-100 no-touch:group-hover:opacity-100" />
      </button>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-white/25 p-1.5 backdrop-blur-md sm:p-2">
        {(images as string[]).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCur(i)}
            className={`flex justify-center gap-1 rounded-full p-1 transition-colors duration-300 ${
              cur === i ? "bg-charcoal" : "bg-charcoal/25"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
