"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContactTile({
  currentSection: curSect,
  contactData: contacts,
}: ContactTileProps) {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      className={`order-2 col-span-2 row-span-4 md:order-none md:row-span-3 landscape:order-none landscape:row-span-3 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <article className="grid h-full w-full grid-flow-col grid-cols-6 grid-rows-6 items-center justify-items-center gap-y-[10%] p-[20%] sm:gap-y-[12%] sm:p-[15%] md:grid-flow-row md:!gap-x-[5%] md:gap-y-[20%] md:p-[10%] xs:gap-x-[10%] landscape:!gap-x-[5%] landscape:p-[5%] md:landscape:!gap-x-[5%] md:landscape:p-[5%]">
        {contacts.map((contact, i) => (
          <a
            id={`contact-${i}`}
            key={i}
            href={contact.link}
            target="_blank"
            className={`col-span-6 row-span-2 h-full min-h-10 w-full max-w-16 items-center justify-center md:!col-span-2 md:row-span-3 xl:h-fit 2xl:max-w-24 xs:col-span-3 landscape:!col-span-1 landscape:row-span-6 xl:landscape:col-span-1 xl:landscape:row-span-6 ${i < 3 ? "flex" : "hidden xs:flex"}`}
          >
            {isMounted ? (
              <Image
                src={contact.logo}
                alt={contact.name}
                width={100}
                height={100}
                className="h-full w-auto xs:h-auto xs:w-full md:landscape:h-auto md:landscape:w-full xl:landscape:h-auto xl:landscape:w-full"
              />
            ) : (
              <Skeleton />
            )}
          </a>
        ))}
      </article>
    </section>
  );
}

function Skeleton() {
  return (
    <span className="mx-auto block aspect-square h-full w-auto animate-pulse rounded-full bg-black/10 xs:h-auto xs:w-full md:landscape:h-auto md:landscape:w-full xl:landscape:h-auto xl:landscape:w-full dark:bg-white/10" />
  );
}
