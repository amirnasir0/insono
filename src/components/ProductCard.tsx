"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { Eye,MessageCircle  } from "lucide-react";


interface ProductCardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({
  title,
  imageUrl,
  slug,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white transition hover:scale-105 hover:shadow-xl flex flex-col">
        {/* Image section with gradient */}
        <div className="relative h-48 flex items-center justify-center bg-gradient-to-r from-[#F4F9FF] to-[#184A99]">
          <Link href={`/product/${slug}`}>
            <Image
              src={imageUrl}
              alt={title}
              width={220}
              height={220}
              className="object-contain drop-shadow-xl cursor-pointer"
            />
          </Link>
        </div>

        {/* Content section */}
        <div className="p-4 flex flex-col flex-1">
          {/* Product Name */}
          {title && (
            <h3 className="text-lg sm:text-base font-semibold text-gray-900 text-center">
              <Link href={`/product/${slug}`} className="hover:text-[#184A99]">
                {title}
              </Link>
            </h3>
          )}

          {/* Spacer to push buttons down */}
          <div className="flex-1" />

          {/* Buttons row */}
          <div className="flex w-full justify-center items-stretch mt-2 gap-2">
            {/* WhatsApp button (20%) */}
            <a
  href={`https://wa.me/916206372640?text=Hello, I am interested in ${title}`}
  target="_blank"
  rel="noopener noreferrer"
  className="basis-[20%] flex items-center justify-center bg-green-500 text-white text-sm font-medium py-1 rounded-md hover:bg-green-600 transition"
>
  <MessageCircle className="w-5 h-5" />
</a>

            {/* Check Price button (80%) */}
            <a
  href="/price-download?utm_source=website&utm_medium=product_cards&utm_campaign=pricedownload"
  className="inline-flex items-center justify-center gap-2 bg-[#184A99] text-white text-sm sm:text-base font-semibold px-5 py-2 rounded-md shadow hover:bg-[#0f3a7e] hover:scale-[1.02] transition"
>
  <Eye className="w-4 h-4" />
  Check Price
</a>
          </div>
        </div>
      </div>

      {/* Popup */}
      {/* <Popup isOpen={open} onClose={() => setOpen(false)} title={title} /> */}
    </>
  );
}
