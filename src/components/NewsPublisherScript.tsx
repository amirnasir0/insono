"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Google News "preferred source" script. Landing pages are noindex ad pages,
// so it only costs them mobile performance — skip it there.
export default function NewsPublisherScript() {
  const pathname = usePathname();
  if (pathname.startsWith("/landing")) return null;

  return (
    <Script
      src="https://news.google.com/swg/js/v1/publisher.js"
      strategy="lazyOnload"
    />
  );
}
