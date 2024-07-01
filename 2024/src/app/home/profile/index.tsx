import Photo from "@/app/home/profile/photo";
import Name from "@/app/home/profile/name";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProfileSection({ photo }: ProfileSectionProps) {
  return (
    <section className="order-1 col-span-2 row-span-4 overflow-hidden rounded-xl border border-neutral-200 bg-white text-black transition-colors duration-300 md:rounded-2xl landscape:order-4 landscape:col-span-4 landscape:row-span-8 landscape:rounded-2xl lg:landscape:row-span-7 dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <Link
        href="/profile"
        className="group relative grid size-full grid-rows-[auto_1fr] gap-[5%] p-[10%] sm:p-[5%] lg:gap-y-[5%] landscape:gap-y-[10%] md:landscape:gap-y-[5%]"
      >
        <Name />

        <Photo photo={photo} />

        <div className="absolute left-0 top-0 size-full rounded-xl bg-white/50 text-[1.25em] opacity-0 backdrop-blur-sm transition-all duration-300 md:rounded-2xl touch:group-active:opacity-100 no-touch:group-hover:opacity-100 landscape:rounded-2xl dark:bg-black/50">
          <div className="flex size-full flex-col items-center justify-center p-4 text-black opacity-60 landscape:p-1 lg:landscape:p-4 dark:text-white">
            <p className="font-mono text-[1.15em] font-bold leading-none xl:text-[1.5em] landscape:text-[1em] lg:landscape:text-[1.25em]">
              View
            </p>
            <FiArrowRight className="size-[5em] transition-transform duration-300 touch:group-active:-rotate-45 no-touch:group-hover:-rotate-45" />
            <p className="font-mono text-[1em] font-bold leading-none xl:text-[1.35em] landscape:text-[0.85em] lg:landscape:text-[1em]">
              Profile
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}
