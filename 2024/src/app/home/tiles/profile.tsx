import { ReactSVG } from "react-svg";
import LoadingIndicator from "@/app/components/loading-indicator";

export default function ProfileTile({
  currentSection: curSect,
  photo,
}: ProfileTileProps) {
  return (
    <section
      className={`order-1 md:order-none row-span-4 md:row-span-6 col-span-4 md:col-span-2 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-2/3 overflow-hidden">
        <ReactSVG
          src={photo}
          loading={LoadingIndicator}
          fallback={LoadingIndicator}
          className="text-orange-500 w-full object-cover transition-all duration-300"
        />
      </div>
    </section>
  );
}
