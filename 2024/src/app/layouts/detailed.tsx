import Navigator from "@/app/components/navigator";

export default function DetailedLayout({ children }: ChildrenProps) {
  return (
    <div className="size-full h-dvh w-full p-2 font-mono text-black [mask:linear-gradient(to_right,#000c,#000b),url(/images/noise.svg)] sm:p-3 xl:p-4 landscape:p-2 xl:landscape:p-4 dark:text-white">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-neutral-200 md:rounded-3xl landscape:rounded-3xl dark:border-neutral-800">
        <div className="container relative grid h-full w-full grid-rows-[auto,1fr] justify-items-center">
          <Navigator />

          {children}
        </div>
      </div>
    </div>
  );
}
