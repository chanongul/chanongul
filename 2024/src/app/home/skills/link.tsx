import Link from "next/link";
import { RefObject, forwardRef, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const SkillsLink = forwardRef<HTMLDivElement, HomePageSkillsLinkProps>(
  ({ containerRef, type }, _) => {
    const [containerWidth, setContainerWidth] = useState<number>();

    useEffect(() => {
      function updateWidth() {
        const containerEl = (containerRef as RefObject<HTMLDivElement>).current;
        if (containerEl) {
          setContainerWidth(containerEl.clientWidth);
        }
      }
      updateWidth();

      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }, [containerRef, type]);

    return (
      <Link
        href={`/profile#${type.toLowerCase().replace(/\s+/g, "-")}`}
        className="group inline-flex h-full items-center gap-2 px-3 pt-2 text-[0.65em] sm:px-6 sm:pt-4 md:text-[0.85em] landscape:px-3 landscape:pt-2 landscape:text-[0.5em] lg:landscape:px-6 lg:landscape:pt-2 lg:landscape:text-[0.85em]"
        style={{ width: containerWidth }}
      >
        <h1 className="min-w-max font-sans font-light opacity-75">{type}</h1>
        <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
        <FiArrowRight className="min-h-[1.5em] min-w-[1.5em] rounded-full border border-neutral-200 p-0.5 opacity-75 transition-[transform,border-color] duration-300 md:p-1 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45 dark:border-neutral-600" />
      </Link>
    );
  },
);

SkillsLink.displayName = "SkillsLink";

export default SkillsLink;
