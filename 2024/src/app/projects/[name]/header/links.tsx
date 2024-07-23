import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Links({ links }: ProjectDetailPageLinksProps) {
  if (!links || links.length <= 0) return null;

  return (
    <div className="flex size-full flex-wrap items-end justify-center gap-2 sm:justify-end">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.url}
          target="_blank"
          className="group rounded-full bg-neutral-300 px-5 py-2 transition-colors duration-300 dark:bg-neutral-800"
        >
          Visit {link.name}&nbsp;
          <FiArrowRight className="inline-block transition-transform duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
        </Link>
      ))}
    </div>
  );
}
