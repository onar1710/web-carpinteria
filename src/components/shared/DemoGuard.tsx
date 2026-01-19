"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const DemoGuard: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
    if (!isDemo) return;

    if (pathname !== "/") {
      router.replace("/");
    }
  }, [pathname, router]);

  useEffect(() => {
    const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
    if (!isDemo) return;

    const onClickCapture = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href") || "";

      if (hrefAttr.startsWith("#") || hrefAttr === "") return;

      if (hrefAttr.startsWith("/")) {
        if (hrefAttr === "/") return;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    };

    document.addEventListener("click", onClickCapture, true);
    return () => {
      document.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return null;
};

export default DemoGuard;
