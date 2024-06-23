export default function TileBackground({
  currentSection: curSect,
}: TileBackgroundProps) {
  return (
    <div
      className={`absolute -z-10 h-full w-full p-3 transition-opacity xl:p-4 ${curSect ? "opacity-100 delay-300" : "opacity-0"}`}
    >
      <div className="h-full w-full rounded-xl bg-neutral-200 transition-colors duration-300 md:rounded-2xl landscape:rounded-2xl dark:bg-black" />
    </div>
  );
}
