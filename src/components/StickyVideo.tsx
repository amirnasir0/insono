"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface StickyVideoProps {
  src: string;
}

export default function StickyVideo({ src }: StickyVideoProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // ✅ Only mount after full page load
  useEffect(() => {
    const onLoad = () => setMounted(true);
    if (document.readyState === "complete") {
      setMounted(true);
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // Show CTA button 2s after appearing
  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => setShowButton(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-[9999] rounded-xl overflow-hidden shadow-xl bg-black/90"
      style={{
        width: "220px", // desktop size
        aspectRatio: "9/16",
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 left-2 z-20 bg-black/60 text-white rounded-full p-1 hover:bg-black transition"
        aria-label="Close video"
      >
        <X size={14} />
      </button>

      {/* Video */}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="none" // ✅ important for performance
        className="w-full h-full object-cover"
      />

      {/* CTA Button Overlay */}
      {showButton && (
        <div className="absolute bottom-3 left-0 w-full flex justify-center z-20">
          <Link
            href="/price-download?utm_source=website&utm_medium=video&utm_campaign=signia_bct"
            className="px-3 py-1.5 text-xs bg-[#F9A825] text-black font-semibold rounded-full shadow-lg hover:bg-[#e09400] transition"
          >
           View Models & Price
          </Link>
        </div>
      )}
    </div>
  );
}
