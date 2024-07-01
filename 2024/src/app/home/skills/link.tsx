import Link from "next/link";
import { RefObject, forwardRef, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const SkillsLink = forwardRef<HTMLDivElement, SkillsLinkProps>(
  ({ containerRef, type }, _) => {
    const [containerWidth, setContainerWidth] = useState<number>();

    function updateWidth() {
      const containerEl = (containerRef as RefObject<HTMLDivElement>).current;
      if (containerEl) {
        setContainerWidth(containerEl.clientWidth);
      }
    }

    useEffect(() => {
      updateWidth();

      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }, []);

    return (
      <Link
        href={`/skills#${type.toLowerCase().split(" ")[0]}`}
        className="group inline-flex h-full items-center justify-between px-3 pt-2 text-[0.65em] sm:px-6 sm:pt-4 md:text-[0.85em] landscape:px-3 landscape:pt-2 landscape:text-[0.5em] lg:landscape:px-6 lg:landscape:pt-4 lg:landscape:text-[0.85em]"
        style={{ width: containerWidth }}
      >
        <h1 className="font-mono font-light opacity-75">{type}</h1>
        <FiArrowRight className="size-[1.5em] rounded-full border border-neutral-200 p-0.5 opacity-75 transition-transform duration-300 md:p-1 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45 dark:border-neutral-600" />
      </Link>
    );
  },
);

export default SkillsLink;
