"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide global nav & footer for all /landing/* pages (they have their own headers)
  const isLandingPage =
    pathname === "/landing" || pathname.startsWith("/landing/");

  return (
    <>
      {!isLandingPage && <Navigation />}

      {children}

      {!isLandingPage && <Footer />}
    </>
  );
}
