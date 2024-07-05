export default function ProjectDetailPageYoutube({
  src,
}: ProjectDetailPageMediaSourceProps) {
  return (
    <div className="aspect-square size-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 sm:aspect-video dark:border-neutral-800 dark:bg-charcoal">
      <iframe
        width="100%"
        height="100%"
        src={src as string}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
