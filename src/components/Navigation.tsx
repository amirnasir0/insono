// app/components/Navigation.tsx  (NO "use client")
import Link from "next/link";
import Image from "next/image";
import { Home, MapPin, Phone, Search, ChevronDown } from "lucide-react";
import MobileMenu from "./nav/MobileMenu";
import { topLinks, sections } from "./nav/menuData";
<<<<<<< HEAD
import SearchBox from "./nav/SearchBox";

type NavigationProps = {
  minimal?: boolean;
};

export default function Navigation({ minimal = false }: NavigationProps) {
  if (minimal) {
    return (
      <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm">
        <div className="w-full flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Insono Hearing"
              width={130}
              height={45}
              priority
            />
          </Link>

          <a
            href="tel:+916204260510"
            className="bg-[#023784] text-white px-4 py-2 rounded-md font-semibold"
          >
            Call Now
          </a>
        </div>
      </header>
    );
  }
=======

export default function Navigation() {
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="w-full flex items-center justify-between px-3 sm:px-6 lg:px-20 py-3">
        {/* =================== LOGO =================== */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Insono Hearing"
            width={130}
            height={45}
            priority
          />
        </Link>

        {/* =================== DESKTOP NAV =================== */}
        <nav className="hidden md:flex items-center justify-start flex-1 gap-8 ml-8 text-gray-800 font-medium text-[16px] relative">
          {/* 🏠 Home */}
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#023784] transition"
          >
            <Home size={20} className="text-[#023784]" />
            <span>Home</span>
          </Link>

          {/* 🦻 Hearing Aids - Full Width Mega Menu (hover-only) */}
          <div className="relative">
            {/* Button */}
            <div className="peer flex items-center gap-1 hover:text-[#023784] transition cursor-pointer">
              Hearing Aids
              <ChevronDown size={16} className="mt-0.5" />
            </div>

            {/* Mega Menu Panel */}
            <div
              className="
    absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-2xl
    opacity-0 invisible peer-hover:opacity-100 peer-hover:visible
    hover:opacity-100 hover:visible
    translate-y-2 peer-hover:translate-y-0 hover:translate-y-0
    transition-all duration-200 z-50
    w-max min-w-[200px]
  "
            >
              <div className="w-full px-12 py-8 grid grid-cols-3 gap-10">
                {sections.map((section) => (
                  <div key={section.label}>
                    <h4 className="text-[#023784] font-semibold mb-3 text-lg">
                      {section.label}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="
                              block text-gray-700 text-sm transition-all duration-200 ease-out rounded-md
                              hover:bg-[#023784]/5 hover:text-[#023784] hover:pl-2
                              py-2 px-3
                            "
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🏥 Clinics + Other Links */}
          <Link href="/our-clinic" className="hover:text-[#023784] transition">
            Our Clinics
          </Link>

          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#023784] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* =================== DESKTOP RIGHT =================== */}
        <div className="hidden md:flex items-center gap-4 ml-6">
<<<<<<< HEAD
          <SearchBox />
=======
          <div className="relative w-56">
            <Search
              className="absolute left-2 top-2.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search hearing aids"
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#023784] focus:outline-none text-sm"
              aria-label="Search"
            />
          </div>
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
          <a
            href="tel:+916204260510"
            className="flex items-center gap-2 bg-[#f59e0b] text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition relative"
          >
            <span className="absolute inline-flex h-8 w-8 rounded-full bg-white/40 animate-ping -left-2" />
            <Phone size={16} className="relative z-10" /> 6204260510
          </a>
        </div>

        {/* =================== MOBILE NAV =================== */}
        <div className="flex md:hidden items-center gap-4 text-sm text-gray-700">
          <Link href="/" aria-label="Home">
            <Home size={20} className="text-[#023784]" />
          </Link>
          <Link href="/our-clinic" aria-label="Clinics">
            <MapPin size={20} className="text-[#023784]" />
          </Link>
          <a href="tel:+916204260510" aria-label="Call">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-[#023784]/30 animate-ping" />
              <Phone size={20} className="text-[#023784] relative z-10" />
            </div>
          </a>

          {/* Hamburger Menu (Client) */}
          <MobileMenu topLinks={topLinks} sections={sections} />
        </div>
      </div>
    </header>
  );
}
