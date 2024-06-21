export default function TileBackground({
  currentSection,
}: DetailedHomePageProps) {
  const [curSect, _] = currentSection;

  return (
    <div
      className={`-z-10 absolute p-3 xl:p-4 w-full h-full transition-opacity ${curSect ? "opacity-100 delay-300" : "opacity-0"}`}
    >
      <div className="w-full h-full bg-neutral-200 dark:bg-black transition-colors duration-300 rounded-xl md:rounded-2xl" />
    </div>
  );
}
