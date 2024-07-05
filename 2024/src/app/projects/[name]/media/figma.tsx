export default function ProjectDetailPageFigma({
  src,
}: ProjectDetailPageMediaSourceProps) {
  return (
    <div className="aspect-square size-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 sm:aspect-video dark:border-neutral-800 dark:bg-charcoal">
      <iframe
        className="col-span-full aspect-square size-full md:col-span-1"
        width="100%"
        height="100%"
        src={`https://www.figma.com/embed?embed_host=share&url=${src}`}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
