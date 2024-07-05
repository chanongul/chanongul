import Image from "next/image";
import Link from "next/link";
import { durationFormatter } from "@/app/utils/duration-formatter";

export default function ProjectDetailPageInfo({
  preview,
  contribution,
  from,
  to,
  src,
}: ProjectDetailPageInfoProps) {
  return (
    <section className="grid size-full grid-cols-[1fr,3fr] gap-4 rounded-2xl text-[1em] sm:text-[1.05em]">
      <div className="col-span-full flex size-full flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors duration-300 sm:col-span-1 dark:border-neutral-800 dark:bg-charcoal dark:text-white">
        <div className="flex flex-col gap-1">
          <p className="min-w-max text-[0.85em] font-medium opacity-50">
            Timeline
          </p>
          <p className="text-[1em] font-light sm:text-[1.15em]">
            {durationFormatter(from, to)}
          </p>
        </div>

        {contribution && (
          <>
            <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
            <div className="flex flex-col gap-1">
              <p className="min-w-max text-[0.85em] font-medium opacity-50">
                Contribution
              </p>
              <p className="whitespace-pre-wrap text-[1em] font-light sm:text-[1.15em]">
                {contribution}
              </p>
            </div>
          </>
        )}

        {src && src.length > 0 && (
          <>
            <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
            <div className="flex flex-col gap-2">
              <p className="min-w-max text-[0.85em] font-medium opacity-50">
                Source Materials
              </p>
              <div className="flex flex-wrap gap-2">
                {src.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    className="rounded-full bg-neutral-300 px-3 py-1 text-[0.85em] font-light transition-colors duration-300 sm:text-[1em] dark:bg-neutral-800"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="col-span-full size-full border border-neutral-300 transition-colors duration-300 sm:col-span-1 dark:border-neutral-800">
        <Image
          src={preview}
          alt="Placeholder"
          width={1000}
          height={1000}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
