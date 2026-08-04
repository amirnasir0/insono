"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import LandingNav from "./LandingNav";
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

  // Hide global nav & footer for all /admin/* pages
  const isAdminPage =
    pathname === "/admin" || pathname.startsWith("/admin/");

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      {isLandingPage ? <LandingNav /> : <Navigation />}

      <main className={!isLandingPage ? "pt-9 md:pt-12" : ""}>
        {children}
      </main>

      {!isLandingPage && <Footer />}
    </>
  );
}
