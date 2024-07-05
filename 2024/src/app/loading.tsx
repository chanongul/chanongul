import LoadingIndicator from "@/app/components/loading-indicator";

export default function Loading() {
  return (
    <div className="z-[100] flex h-dvh w-full items-center justify-center bg-white dark:bg-black">
      <div className="h-16 w-fit text-orange-500 2xl:h-24">
        <LoadingIndicator />
      </div>
    </div>
  );
}
