import Navigator from "@/app/components/navigator";

export default function DetailedLayout({ children }: ChildrenProps) {
  return (
    <div className="relative size-full h-dvh w-full p-2 [mask:linear-gradient(to_right,#000c,#000b),url(/images/noise.svg)] sm:p-3 xl:p-4 landscape:p-2 xl:landscape:p-4">
      <Navigator />

      <div className="flex size-full flex-col items-center justify-center overflow-auto rounded-3xl border border-neutral-300 transition-[border-color,background-color] duration-300 md:rounded-3xl landscape:rounded-3xl dark:border-neutral-700">
        <div className="container grid size-full grid-rows-[auto,1fr] justify-items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
