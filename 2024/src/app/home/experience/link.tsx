import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ExperienceLink({
  header,
}: HomePageExperienceLinkProps) {
  return (
    <Link
      href="/profile#experience"
      className="group relative inline-flex h-full items-center gap-2 pt-2 text-[0.65em] sm:pt-4 md:text-[0.85em] landscape:pt-2 landscape:text-[0.5em] lg:landscape:text-[0.85em]"
    >
      <h1 className="font-sans font-light opacity-75">{header}</h1>
      <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
      <FiArrowRight className="min-h-[1.5em] min-w-[1.5em] rounded-full border border-neutral-200 p-0.5 opacity-75 transition-[transform,border-color] duration-300 md:p-1 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45 dark:border-neutral-600" />
    </Link>
  );
}
