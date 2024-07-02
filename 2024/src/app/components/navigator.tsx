"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { TbLayoutBoard, TbUserCircle, TbBulb, TbFolders } from "react-icons/tb";

export default function Navigator() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="absolute bottom-4 my-1 flex gap-2">
      <Link
        href="/"
        className="size-[3em] rounded-[20%] border border-neutral-200 bg-white p-[0.75em] dark:border-neutral-800 dark:bg-charcoal touch:active:[&>svg]:scale-110 no-touch:hover:[&>svg]:scale-110"
      >
        <TbLayoutBoard className="size-full !stroke-1 transition-transform duration-300" />
      </Link>
      <Link
        href="/profile"
        className={`size-[3em] rounded-[20%] border border-neutral-200 bg-white p-[0.5em] dark:border-neutral-800 dark:bg-charcoal ${pathname.split("/")[1] === "profile" ? "bg-black text-white dark:bg-white dark:text-black [&>svg]:!stroke-[1.5px]" : "touch:active:[&>svg]:scale-110 no-touch:hover:[&>svg]:scale-110"}`}
      >
        <TbUserCircle className="size-full !stroke-1 transition-transform duration-300" />
      </Link>
      <Link
        href="/skills"
        className={`size-[3em] rounded-[20%] border border-neutral-200 bg-white p-[0.5em] dark:border-neutral-800 dark:bg-charcoal ${pathname.split("/")[1] === "skills" ? "bg-black text-white dark:bg-white dark:text-black [&>svg]:!stroke-[1.5px]" : "touch:active:[&>svg]:scale-110 no-touch:hover:[&>svg]:scale-110"}`}
      >
        <TbBulb className="size-full !stroke-1 transition-transform duration-300" />
      </Link>
      <Link
        href="/projects"
        className={`size-[3em] rounded-[20%] border border-neutral-200 bg-white p-[0.5em] dark:border-neutral-800 dark:bg-charcoal ${pathname.split("/")[1] === "projects" ? "bg-black text-white dark:bg-white dark:text-black [&>svg]:!stroke-[1.5px]" : "touch:active:[&>svg]:scale-110 no-touch:hover:[&>svg]:scale-110"}`}
      >
        <TbFolders className="size-full !stroke-1 transition-transform duration-300" />
      </Link>
    </nav>
  );
}
