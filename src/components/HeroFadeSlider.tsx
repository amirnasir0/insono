"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroFadeSliderProps {
  images: string[];
  altPrefix: string;
  className?: string;
  interval?: number;
  arrows?: boolean;
}

// The same inputs that end Chrome's LCP measurement
export const START_EVENTS = ["scroll", "pointerdown", "keydown", "touchstart"];

// Cross-fades hero images. All slides sit in one fixed-size box, so nothing
// shifts when the page hydrates. Autoplay starts on the visitor's first
// interaction, so a later slide never replaces the first one as the page's
// Largest Contentful Paint. Until then only the first slide is rendered, so
// the other images don't compete with it for bandwidth.
export default function HeroFadeSlider({
  images,
  altPrefix,
  className = "",
  interval = 3000,
  arrows = false,
}: HeroFadeSliderProps) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started || images.length <= 1) return;
    const start = () => setStarted(true);
    START_EVENTS.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    return () => START_EVENTS.forEach((e) => window.removeEventListener(e, start));
  }, [started, images.length]);

  useEffect(() => {
    if (!started || images.length <= 1) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [started, current, interval, images.length]);

  const go = (step: number) => {
    setStarted(true);
    setCurrent((prev) => (prev + step + images.length) % images.length);
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 rounded-full bg-black/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/25 hover:border-white/40";

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {images.map((img, i) => (i === 0 || started) && (
        <div
          key={img}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`${altPrefix} ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-contain"
          />
        </div>
      ))}

      {arrows && images.length > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${arrowClass} left-1`}>
            <ChevronLeft className="w-3 h-3 text-white/75" strokeWidth={1.5} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${arrowClass} right-1`}>
            <ChevronRight className="w-3 h-3 text-white/75" strokeWidth={1.5} />
          </button>
        </>
      )}
    </div>
  );
}
