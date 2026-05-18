"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";

export default function PopupModal({ offerName, badge }: { offerName: string; badge: string }) {
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-100 rounded-full px-2.5 py-0.5 mb-2">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold text-rose-700 uppercase tracking-wider">{badge} · Limited Time</span>
                </div>
                <h2 className="text-[18px] font-black text-[#0D2240] leading-tight">{offerName}</h2>
                <p className="text-xs text-slate-400 mt-1">Get the full offer details instantly on WhatsApp</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">What&apos;s included</p>
                <ul className="space-y-2">
                  {[
                    "Special offer pricing on all major brands",
                    "Free hearing test at nearest clinic",
                    "7-day free trial — no commitment",
                    "0% EMI available on all models",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                      <span className="text-emerald-500 font-black text-sm leading-none mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                compact
                offerName={offerName}
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
