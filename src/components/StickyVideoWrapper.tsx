"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy-load StickyVideo (no SSR)
const StickyVideo = dynamic(() => import("@/components/StickyVideo"), {
  ssr: false,
});

export default function StickyVideoWrapper() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onLoad = () => setShow(true);
    if (document.readyState === "complete") {
      setShow(true);
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  const excludedPaths = ["/price-download", "/checkout", "/login", "/admin"];

  if (excludedPaths.some((p) => pathname.startsWith(p))) return null;

  return show ? <StickyVideo src="/video/phonak.mp4" /> : null;
}
