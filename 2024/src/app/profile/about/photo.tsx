import Image from "next/image";

export default function ProfilePagePhoto({ photo }: ProfilePagePhotoProps) {
  return (
    <article className="pointer-events-none col-span-full row-span-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 sm:col-span-5 sm:aspect-auto xl:col-span-3 dark:border-neutral-800 dark:bg-charcoal">
      <div className="relative size-full">
        <Image
          src={photo}
          alt="photo"
          width={1000}
          height={1000}
          className="size-full object-cover sm:absolute"
          priority
        />
      </div>
    </article>
  );
}
