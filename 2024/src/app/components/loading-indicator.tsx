export const indicatorCount = 4;

export default function LoadingIndicator() {
  return (
    <div id="loading-indicator" className="flex h-full !w-fit gap-1">
      {Array.from({ length: indicatorCount }).map((_, i) => (
        <span
          key={i}
          className={`block aspect-square min-h-full w-auto rounded-full bg-current transition-colors`}
          style={{
            animation: `loading-indicator 1s ${i * 250}ms linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
