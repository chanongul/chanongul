import LoadingIndicator from "@/app/components/loading-indicator";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 z-[100] h-dvh w-full bg-orange-500 flex items-center justify-center [&_span]:!bg-white">
      <LoadingIndicator />
    </div>
  );
}
