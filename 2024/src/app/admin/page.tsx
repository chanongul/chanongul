"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (isMounted) {
      window.open(
        process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "",
        "_blank",
        "noopener,noreferrer",
      );
      router.replace("/");
    }
  }, [isMounted]);

  return <div className="h-dvh w-full bg-white dark:bg-charcoal" />;
}
