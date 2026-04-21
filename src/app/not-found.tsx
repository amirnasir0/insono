import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Insono Hearing",
  robots: { index: false },
};

const brands = [
  {
    name: "Signia",
    logo: "/logos/signia.svg",
    href: "/hearing-aids/signia",
    count: 143,
    color: "bg-red-50 border-red-100",
  },
  {
    name: "Widex",
    logo: "/logos/widexlogo.svg",
    href: "/hearing-aids/widex",
    count: 135,
    color: "bg-blue-50 border-blue-100",
  },
  {
    name: "Phonak",
    logo: "/logos/phonaklogo.svg",
    href: "/hearing-aids/phonak",
    count: 95,
    color: "bg-rose-50 border-rose-100",
  },
  {
    name: "Oticon",
    logo: "/logos/oticon.svg",
    href: "/hearing-aids/oticon",
    count: null,
    color: "bg-orange-50 border-orange-100",
  },
];

const quickLinks = [
  { label: "All Hearing Aids", href: "/product" },
  { label: "Hearing Aid Prices", href: "/hearing-aid-price" },
  { label: "Book Free Trial", href: "/appointment" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQs", href: "/faq" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 mt-16 text-center">
        <div className="mb-6">
          <span className="text-8xl sm:text-9xl font-black text-[#023784]/10 select-none leading-none">
            404
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 max-w-md mb-8 text-sm sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Browse our hearing aids below or go back to the homepage.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <Link
            href="/"
            className="bg-[#023784] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#012d66] transition shadow-sm"
          >
            Go to Homepage
          </Link>
          <Link
            href="/product"
            className="border border-[#023784] text-[#023784] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#023784] hover:text-white transition"
          >
            Browse All Products
          </Link>
        </div>

        {/* Brand Cards */}
        <div className="w-full max-w-3xl mb-12">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Shop by Brand
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all ${brand.color}`}
              >
                <div className="relative w-20 h-8">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {brand.count && (
                  <span className="text-xs text-gray-500">
                    {brand.count}+ models
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full max-w-3xl">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#023784] hover:text-[#023784] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
