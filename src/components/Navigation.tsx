"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Search, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type CategoryInfo = {
  title: string;
  description: string;
};

export default function Navigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo>({
    title: "Hearing Aids",
    description:
      "Explore our wide range of digital and rechargeable hearing aids, designed for adults, seniors, and children. Choose by type, brand, or user needs.",
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const words = [
    "best hearing aids",
    "digital hearing aids",
    "top 5 hearing aids",
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load animation
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setAnimatedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setAnimatedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, wordIndex, words]);

  const isFormPage = pathname === "/appointment";

  // Dropdown options
  const types: CategoryInfo[] = [
    {
      title: "RIC Hearing Aids",
      description:
        "Receiver-in-canal hearing aids suitable for mild to severe hearing loss.",
    },
    {
      title: "BTE Hearing Aids",
      description:
        "Behind-the-ear devices offering powerful amplification and easy handling.",
    },
    {
      title: "ITE Hearing Aids",
      description:
        "In-the-ear hearing aids, custom-made to fit your ear comfortably.",
    },
  ];

  const brands: CategoryInfo[] = [
    {
      title: "Signia",
      description:
        "Advanced hearing technology by Signia with digital clarity.",
    },
    {
      title: "Phonak",
      description: "Reliable Phonak hearing aids for all age groups and needs.",
    },
    {
      title: "Widex",
      description: "Widex hearing aids focusing on natural sound and comfort.",
    },
  ];

  const users: CategoryInfo[] = [
    {
      title: "Adults",
      description:
        "Hearing solutions designed for adults with varying degrees of hearing loss.",
    },
    {
      title: "Children",
      description:
        "Specialized hearing aids for children with pediatric audiology support.",
    },
    {
      title: "Seniors",
      description:
        "Hearing aids tailored for seniors with ease-of-use and comfort.",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 font-museo ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
    >
      <div className="w-full flex items-center justify-between px-3 sm:px-6 lg:px-20 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Insono Hearing"
            width={130}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        {!isFormPage && (
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-gray-800 font-medium text-[18px]">
            {/* Hearing Aids Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 px-2 py-1 rounded-md hover:text-[#023784] transition"
                onClick={() =>
                  setOpenMenu(openMenu === "hearing" ? null : "hearing")
                }
              >
                Hearing Aids <ChevronDown size={16} />
              </button>

              {openMenu === "hearing" && (
                <div
                  className="absolute pl-16 top-full mt-2 w-screen bg-white border border-gray-200 shadow-lg flex justify-center z-50 transform -translate-x-1/4"
                  ref={dropdownRef}
                >
                  <div className="w-full flex bg-white rounded-lg overflow-hidden">
                    {/* Left Panel */}
                    <div className="w-1/3 p-6 border-r border-gray-200">
                      <h4 className="font-bold text-[#023784] text-lg mb-2">
                        {selectedCategory.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedCategory.description}
                      </p>
                    </div>

                    {/* Right Panel */}
                    <div className="w-2/3 p-6 grid grid-cols-3 gap-6">
                      {/* Types */}
                      <div>
                        <h4 className="font-semibold text-[#023784] mb-2">
                          By Type
                        </h4>
                        <ul className="space-y-1 text-gray-700">
                          {types.map((t) => (
                            <li key={t.title}>
                              <button
                                className="hover:text-[#023784] text-left"
                                onClick={() => setSelectedCategory(t)}
                              >
                                {t.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Brands */}
                      <div>
                        <h4 className="font-semibold text-[#023784] mb-2">
                          By Brand
                        </h4>
                        <ul className="space-y-1 text-gray-700">
                          {brands.map((b) => (
                            <li key={b.title}>
                              <button
                                className="hover:text-[#023784] text-left"
                                onClick={() => setSelectedCategory(b)}
                              >
                                {b.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Users */}
                      <div>
                        <h4 className="font-semibold text-[#023784] mb-2">
                          For Users
                        </h4>
                        <ul className="space-y-1 text-gray-700">
                          {users.map((u) => (
                            <li key={u.title}>
                              <button
                                className="hover:text-[#023784] text-left"
                                onClick={() => setSelectedCategory(u)}
                              >
                                {u.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/clinics" className="px-2 py-1 hover:text-[#023784]">
              Our Clinics
            </Link>
            <Link
              href="/hearing-aid-price"
              className="px-2 py-1 hover:text-[#023784]"
            >
              Hearing Aid Price
            </Link>
          </nav>
        )}

        {/* Right section (search + call) */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          {!isFormPage && (
            <div className="relative w-56">
              <Search
                className="absolute left-2 top-2.5 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder={`Search for ${animatedText}`}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#023784] focus:outline-none text-sm"
              />
            </div>
          )}

          <a
            href="tel:+916204260510"
            className="flex items-center gap-2 bg-[#f59e0b] text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            <Phone size={16} /> 6204260510
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-6 text-sm text-gray-700 mr-4">
          <Link href="/clinics" className="flex flex-col items-center">
            <MapPin size={20} className="text-[#023784]" />
            <span className="text-xs">Clinics</span>
          </Link>
          <a href="tel:+916204260510" className="flex flex-col items-center">
            <Phone size={20} className="text-[#023784]" />
            <span className="text-xs">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
