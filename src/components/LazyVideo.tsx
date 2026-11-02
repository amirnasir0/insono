"use client";

import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  controls?: boolean;
}

// Downloads and plays a video only while it is on screen, so videos lower
// on the page don't compete with the hero for bandwidth.
export default function LazyVideo({ src, className = "w-full h-full object-cover", controls = false }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      controls={controls}
      preload="none"
      className={className}
    />
  );
}
