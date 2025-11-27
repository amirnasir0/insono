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

  // ✅ Safe landing detection
  const isLandingPage =
    pathname === "/landing" || pathname.startsWith("/landing/");

  return (
    <>
      <Navigation minimal={isLandingPage} />

      {children}

      {/* Footer hide only for landing pages */}
      {!isLandingPage && <Footer />}
    </>
  );
}
