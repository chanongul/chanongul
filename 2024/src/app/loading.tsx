import LoadingIndicator from "@/app/components/loading-indicator";

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-[100] flex h-dvh w-full items-center justify-center bg-orange-500 [&_span]:!bg-white">
      <div className="h-16 w-fit text-white 2xl:h-24">
        <LoadingIndicator />
      </div>
    </div>
  );
}
