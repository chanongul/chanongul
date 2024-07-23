"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutBoard } from "react-icons/tb";
import ThemeToggler from "./theme-toggler";

export default function Navigator() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-[2%] left-1/2 z-50 my-1 flex -translate-x-1/2 -space-x-[0.5em] rounded-2xl bg-white/50 p-[0.15em] backdrop-blur-lg transition-colors duration-300 dark:bg-charcoal/50">
      <Link
        href="/"
        className="group size-[3em] rounded-[15%] p-[0.55em] text-black transition-colors duration-300 dark:text-white [&>svg]:!stroke-[1.5px]"
      >
        <TbLayoutBoard className="size-full transition-transform duration-300 touch:group-active:scale-110 no-touch:group-hover:scale-110" />
      </Link>
      <ThemeToggler className="!size-[3em] !border-none !bg-transparent [&>svg]:!size-1/2" />
    </nav>
  );
}
