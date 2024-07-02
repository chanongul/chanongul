"use client";

import { useEffect, useState } from "react";
import Skeleton from "@/app/home/statement/skeleton";
import { useRouter } from "next/navigation";

export default function StatementSection({ statement }: StatementSectionProps) {
  const [isMounted, setMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  return (
    <section
      onClick={() => router.push("/profile")}
      className="order-3 col-span-full row-span-1 size-full cursor-pointer rounded-xl border border-neutral-200 bg-white px-[4%] py-[3%] text-center font-mono text-[0.85em] text-black transition-colors duration-300 md:rounded-2xl lg:text-[1em] 2xl:text-[1.25em] landscape:col-span-4 landscape:row-span-1 landscape:hidden landscape:rounded-2xl lg:landscape:block dark:border-neutral-800 dark:bg-charcoal dark:text-white"
    >
      {isMounted ? statement : <Skeleton />}
    </section>
  );
}
