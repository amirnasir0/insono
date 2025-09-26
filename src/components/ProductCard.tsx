"use client";
import Link from "next/link";
import Image from "next/image";
import Popup from "@/components/popup";
import { useState } from "react";

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
              {/* WhatsApp Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.552 4.17 1.6 5.977L0 24l6.235-1.632A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.176-3.48-8.52zM12 22a9.93 9.93 0 01-5.073-1.393l-.363-.217-3.69.965.987-3.595-.238-.37A9.93 9.93 0 012 12c0-5.523 4.477-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122 12c0 5.523-4.477 10-10 10zm5.203-7.797l-1.614-.807a.75.75 0 00-1.04.29l-.508.857a7.5 7.5 0 01-3.318-3.318l.857-.508a.75.75 0 00.29-1.04l-.807-1.614a.75.75 0 00-1.043-.326A2.74 2.74 0 008.75 9.25c0 4.004 3.246 7.25 7.25 7.25.548 0 1.086-.115 1.568-.336a.75.75 0 00.326-1.043z" />
              </svg>
            </a>

            {/* Check Price button (80%) */}
            <button
              onClick={() => setOpen(true)}
              className="basis-[80%] bg-[#184A99] text-white text-sm font-medium py-1 rounded-md hover:bg-[#0f3a7e] transition"
            >
              Check Price
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={open} onClose={() => setOpen(false)} title={title} />
    </>
  );
}
