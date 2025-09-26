"use client"

import { usePathname } from "next/navigation"
import Navigation from "@/components/Navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  console.log("Current pathname:", pathname)

  const hideNavOn = ["/landing"] // pages to hide nav
  const showNav = !hideNavOn.includes(pathname)
  console.log("Show nav?", showNav)

  return (
    <>
      {showNav && <Navigation />}
      <main>{children}</main>
    </>
  )
}
