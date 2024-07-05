export default function ProfilePageStatement({
  statement,
}: ProfilePageStatementProps) {
  return (
    <article className="col-span-full flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5 text-[1em] font-light leading-[1.75] text-black transition-colors duration-300 sm:text-[1.05em] xl:order-3 xl:col-span-4 dark:border-neutral-800 dark:bg-charcoal dark:text-white">
      <div className="flex w-full items-center gap-2">
        <p className="min-w-max text-[0.85em] opacity-50">About me</p>
        <hr className="w-full opacity-50 transition-opacity duration-300 dark:opacity-20" />
      </div>
      <p className="text-[1.15em]">{statement}</p>
    </article>
  );
}
