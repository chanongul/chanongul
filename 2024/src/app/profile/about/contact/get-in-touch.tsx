import Link from "next/link";
import { TbMailShare } from "react-icons/tb";
import Resume from "@/app/profile/about/contact/resume";

export default function ProfilePageEmail({
  email,
  resume,
}: ProfilePageEmailProps) {
  return (
    <div className="relative col-span-2 flex size-full flex-col items-center justify-center gap-6 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors duration-300 dark:border-neutral-800 dark:bg-charcoal">
      <p className="w-max text-[1.15em] font-medium leading-tight sm:text-[1.25em]">
        Get in touch?
      </p>

      <div className="flex w-full gap-2 xl:flex-col">
        <Resume resume={resume} />

        <Link
          href={email}
          target="_blank"
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-neutral-200 py-2 text-center text-[0.75em] transition-[background-color] duration-300 dark:bg-neutral-700"
        >
          Email me
          <TbMailShare className="transition-transform duration-300 touch:group-active:scale-125 no-touch:group-hover:scale-125" />
        </Link>
      </div>
    </div>
  );
}
