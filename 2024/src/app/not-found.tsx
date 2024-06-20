import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center items-center">
      <h1 className="gap-2 flex h-max">
        <span>404</span>
        <hr className="border-black dark:border-white bg-black dark:bg-white w-px h-[1.25em] block rounded-full transition-all duration-300" />
        <span>Not Found</span>
      </h1>
      <Link href="/">Return Home</Link>
    </section>
  );
}
