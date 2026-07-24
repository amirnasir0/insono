"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";

export default function PopupModal({
  city,
  citySlug,
}: {
  city: string;
  citySlug: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("insono:open-popup", open);
    return () => window.removeEventListener("insono:open-popup", open);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0D2240]/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[#184A99] via-[#E83D6D] to-[#184A99]" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="px-6 pt-5 pb-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <Image src="/image/dha-price.png" alt="Price List" fill className="object-cover" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-2.5 py-0.5 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider">Free · Instant on WhatsApp</span>
                  </div>
                  <h2 className="text-[18px] font-black text-[#0D2240] leading-tight">
                    {city !== "Hearing Aid" && city !== "generic" ? `${city} Hearing Aid` : "Hearing Aid"}<br />Price List 2026
                  </h2>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">What&apos;s included</p>
                <ul className="space-y-2">
                  {(city !== "Hearing Aid" && city !== "generic"
                    ? [
                        city.toLowerCase().includes("phonak")
                          ? "All Phonak models (Lumity, Infinio, Naida & Terra)"
                          : city.toLowerCase().includes("widex")
                          ? "All Widex models (Moment, SmartRIC, Evoke & Unique)"
                          : `All ${city} models (Silk, Styletto, Pure & Motion)`,
                        `Official ${city} prices with EMI breakdown`,
                        `Side-by-side ${city} feature comparison chart`,
                        `Exclusive ${city} clinic discount`,
                      ]
                    : [
                        "Signia, Phonak, Widex, ReSound & more",
                        "All model prices with EMI breakdown",
                        "Side-by-side feature comparison chart",
                        "Exclusive clinic trial & discounts",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                      <span className="text-emerald-500 font-black text-sm leading-none mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                compact
                city={citySlug}
                isMobile={typeof window !== "undefined" && window.innerWidth < 768}
              />

              <div className="flex items-center justify-center gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-[10px]">★</span>)}
                <span className="text-[9px] text-slate-400 font-medium ml-1">4.9 · 1,200+ reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
