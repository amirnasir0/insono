"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="lg:w-1/2 w-full">
      {/* Main Image */}
      <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden mx-auto bg-white border border-gray-100 shadow-sm">
        <Image
          src={images[activeIndex]}
          alt={`${title} - view ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-contain rounded-xl transition-opacity duration-200"
        />
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {images.slice(0, 5).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 shadow-sm transition-all duration-200 focus:outline-none ${
                activeIndex === i
                  ? "border-[#023784] shadow-md scale-105"
                  : "border-gray-200 opacity-70 hover:opacity-100 hover:border-[#023784]/50"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
