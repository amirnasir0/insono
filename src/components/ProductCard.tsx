"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

interface ProductCardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({ title, imageUrl, slug }: ProductCardProps) {
  return (
    <div className="w-full rounded-xl shadow-md bg-white overflow-hidden border border-gray-200 flex flex-col h-full">
      {/* Product Image */}
      <div className="flex items-center justify-center bg-white p-4 sm:p-6">
        <Link href={`/product/${slug}`} className="block w-full text-center">
          <Image
            src={imageUrl}
            alt={title}
            width={220}
            height={220}
            className="mx-auto w-full max-w-[180px] sm:max-w-[220px] h-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="px-3 sm:px-4 pb-4 sm:pb-5 flex flex-col flex-1">
        {/* Title */}
        <h3
          className={`${poppins.className} text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 text-center`}
        >
          <Link href={`/product/${slug}`} className="hover:text-[#184A99]">
            {title}
          </Link>
        </h3>

        {/* Rating */}
        <div className="flex justify-center mb-2 sm:mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Features */}
        <ul className="text-gray-600 text-xs sm:text-sm space-y-1 mb-3 text-center sm:text-left">
          <li>Easy smartphone control via app</li>
          <li>Nearly invisible design</li>
        </ul>

        {/* Spacer pushes CTA to bottom */}
        <div className="flex-grow" />

        {/* CTA */}
        <a
          href="/price-download?utm_source=website&utm_medium=product_cards&utm_campaign=pricedownload"
          className="block w-full text-center bg-[#184A99] text-white font-medium text-xs sm:text-sm md:text-base py-2 sm:py-2.5 rounded-md hover:bg-[#0f3a7e] transition"
        >
          Get the Best Price
        </a>
      </div>
    </div>
  );
}
