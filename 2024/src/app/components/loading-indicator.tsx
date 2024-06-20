export const indicatorCount = 4;

export default function LoadingIndicator() {
  return (
    <div className="flex gap-1 h-16 2xl:h-24 w-fit mx-auto">
      {Array.from({ length: indicatorCount }).map((_, i) => (
        <span
          key={i}
          className={`block rounded-full min-h-full w-auto aspect-square bg-black dark:bg-white`}
          style={{ animation: `loading-indicator-${i} 1s linear infinite` }}
        />
      ))}
    </div>
  );
}
