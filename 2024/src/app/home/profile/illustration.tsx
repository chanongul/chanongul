import { ReactSVG } from "react-svg";
import LoadingIndicator from "@/app/components/loading-indicator";

export default function ProfilePhoto({
  illustration,
}: ProfileIlustrationProps) {
  return (
    <ReactSVG
      src={illustration}
      loading={LoadingIndicator}
      fallback={LoadingIndicator}
      className="flex h-full max-w-lg items-center justify-center place-self-center overflow-hidden text-orange-500 transition-all duration-300 [&>#loading-indicator]:h-6 [&>#loading-indicator]:text-black/15 md:[&>#loading-indicator]:h-6 xl:[&>#loading-indicator]:h-12 dark:[&>#loading-indicator]:text-white/15 [&>div]:h-full"
    />
  );
}
