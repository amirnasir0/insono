"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Split per site section so landing pages don't download the main-site nav
// (which pulls in framer-motion) and footer, and vice versa. SSR stays on.
const Navigation = dynamic(() => import("./Navigation"));
const LandingNav = dynamic(() => import("./LandingNav"));
const Footer = dynamic(() => import("./Footer"));

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
