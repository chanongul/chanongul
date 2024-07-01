import Link from "next/link";

export default function SkillsPage() {
  return (
    <section className="size-full h-dvh w-full p-2 font-mono text-black sm:p-3 xl:p-4 landscape:p-2 xl:landscape:p-4 dark:text-white">
      <article className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white md:rounded-2xl landscape:rounded-2xl dark:border-neutral-800 dark:bg-charcoal">
        <h1 className="">Skills Page</h1>
        <Link
          href="/"
          className="touch:active:underline no-touch:hover:underline"
        >
          Return Home?
        </Link>
      </article>
    </section>
  );
}
