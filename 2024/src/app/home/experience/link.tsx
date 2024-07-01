import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ExperienceLink({ header }: ExperienceLinkProps) {
  return (
    <Link
      href={`/profile#${header.toLowerCase()}`}
      className="group relative inline-flex h-full items-center justify-between pt-2 text-[0.65em] sm:pt-4 md:text-[0.85em] landscape:pt-2 landscape:text-[0.5em] lg:landscape:text-[0.85em]"
    >
      <h1 className="font-mono font-light opacity-75">{header}</h1>
      <FiArrowRight className="size-[1.5em] rounded-full border border-neutral-200 p-0.5 opacity-75 transition-transform duration-300 md:p-1 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45 dark:border-neutral-600" />
    </Link>
  );
}
