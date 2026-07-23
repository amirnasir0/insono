"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

export default function HeroCarousel({ images }: { images: ImageItem[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="-mx-4 lg:mx-0 order-first lg:order-2 lg:col-start-2 flex flex-col justify-center items-center w-full bnm-scale">
      <div className="relative w-full h-[240px] lg:h-[380px] flex items-center justify-center">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              i === currentIdx ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-contain drop-shadow-xl lg:drop-shadow-[0_20px_50px_rgba(24,74,153,0.15)]"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-4 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIdx ? "w-6 bg-[#184A99]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
