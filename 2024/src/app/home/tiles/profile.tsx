import { ReactSVG } from "react-svg";
import LoadingIndicator from "@/app/components/loading-indicator";

export default function ProfileTile({
  currentSection: curSect,
  photo,
  statement,
}: ProfileTileProps) {
  return (
    <section
      className={`order-1 col-span-4 row-span-4 md:order-none md:col-span-2 md:row-span-6 landscape:order-none landscape:col-span-2 landscape:row-span-6 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] place-content-center justify-items-center gap-x-[10%] gap-y-[5%] p-[10%] sm:p-[5%] md:gap-x-[5%] md:p-[15%] landscape:grid-cols-[5fr_4fr] landscape:grid-rows-none landscape:justify-items-start landscape:p-[12%] md:landscape:p-[5%]">
        <ReactSVG
          src={photo}
          loading={LoadingIndicator}
          fallback={LoadingIndicator}
          className="row-span-1 row-start-2 flex h-full items-center justify-end place-self-center overflow-hidden text-orange-500 transition-all duration-300 landscape:row-span-2 landscape:row-start-auto landscape:w-full [&>#loading-indicator]:h-10 [&>#loading-indicator]:text-black md:[&>#loading-indicator]:h-12 xl:[&>#loading-indicator]:h-16 dark:[&>#loading-indicator]:text-white [&>div]:h-full [&>div]:w-auto landscape:[&>div]:h-auto landscape:[&>div]:w-full"
        />
        <h1 className="row-start-1 -ml-[1%] inline-flex flex-col text-center font-serif text-[3em] leading-none landscape:row-start-auto landscape:self-end landscape:text-start">
          <span className="text-[0.75em] sm:text-[1em] lg:text-[1.25em] sm:landscape:text-[0.7em] md:landscape:text-[1em]">
            Chanon
          </span>
          <span className="text-[0.5em] sm:text-[0.75em] lg:text-[1em] sm:landscape:text-[0.5em] md:landscape:text-[0.75em]">
            Gulgattimas
          </span>
        </h1>
        <p className="hidden self-start text-[0.65em] font-extralight leading-normal md:text-[1.2vw] landscape:inline">
          {statement}
        </p>
      </div>
    </section>
  );
}
