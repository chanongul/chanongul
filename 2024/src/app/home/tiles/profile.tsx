import { ReactSVG } from "react-svg";
import LoadingIndicator from "@/app/components/loading-indicator";

export default function ProfileTile({
  currentSection: curSect,
  profileData,
}: ProfileTileProps) {
  return (
    <section
      className={`order-1 col-span-4 row-span-4 md:order-none md:col-span-2 md:row-span-6 landscape:order-none landscape:col-span-2 landscape:row-span-6 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <article className="grid h-full w-full grid-cols-2 grid-rows-[auto_1fr] place-content-center justify-items-center gap-x-[5%] gap-y-[5%] p-[10%] sm:gap-x-[10%] sm:!p-[5%] md:gap-x-[5%] md:!p-[15%] 2xl:grid-cols-[6fr_4fr] xs:p-[5%] landscape:grid-rows-none landscape:justify-items-start landscape:!p-[10%] md:landscape:!p-[5%] lg:landscape:!p-[5%]">
        <ReactSVG
          src={profileData.photo}
          loading={LoadingIndicator}
          fallback={LoadingIndicator}
          className="col-span-2 row-span-1 row-start-2 flex h-full max-w-lg items-center justify-center place-self-center overflow-hidden text-orange-500 transition-all duration-300 landscape:col-span-1 landscape:row-span-2 landscape:row-start-auto landscape:w-full landscape:overflow-visible [&>#loading-indicator]:h-6 [&>#loading-indicator]:text-black md:[&>#loading-indicator]:h-6 xl:[&>#loading-indicator]:h-12 dark:[&>#loading-indicator]:text-white [&>div]:h-full [&>div]:w-auto landscape:[&>div]:h-auto landscape:[&>div]:w-full"
        />
        <h1 className="col-span-2 row-start-1 -ml-[1%] inline-flex flex-col text-center font-serif text-[3em] leading-none landscape:col-span-1 landscape:row-start-auto landscape:self-end landscape:text-start">
          <span className="text-[0.75em] sm:text-[1em] 2xl:!text-[1.25em] sm:landscape:text-[0.7em] md:landscape:text-[0.85em] lg:landscape:text-[1em]">
            Chanon
          </span>
          <span className="text-[0.5em] sm:text-[0.75em] 2xl:!text-[1em] sm:landscape:text-[0.5em] md:landscape:text-[0.65em] lg:landscape:text-[0.75em]">
            Gulgattimas
          </span>
        </h1>
        <p className="hidden self-start text-[0.65em] font-light leading-normal md:text-[0.95em] landscape:inline md:landscape:text-[0.65em] lg:landscape:text-[0.95em]">
          {profileData.description}
        </p>
      </article>
    </section>
  );
}
