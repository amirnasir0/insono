"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";

export default function PopupModal() {
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
            <div className="h-1.5 w-full bg-gradient-to-r from-[#184A99] via-[#1A7F5C] to-[#184A99]" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors z-10"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="px-6 pt-5 pb-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50 flex items-center justify-center">
                  <Image
                    src="/image/dha-price.png"
                    alt="CGHS Hearing Aid Price List"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-2.5 py-0.5 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider">
                      Updated Sep 2026 · Free on WhatsApp
                    </span>
                  </div>
                  <h2 className="text-[18px] font-black text-[#0D2240] leading-tight">
                    CGHS Hearing Aid Price List<br />& Claim Guide 2026
                  </h2>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 mb-5 border border-emerald-100">
                <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-3">
                  What&apos;s included
                </p>
                <ul className="space-y-2">
                  {[
                    "Latest ₹30,000/ear CGHS ceiling rates (Sep 2026 OM)",
                    "List of CGHS-approved hearing aid models & brands",
                    "Step-by-step reimbursement claim process",
                    "Documentation checklist & undertaking format",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[12px] text-slate-700 font-medium"
                    >
                      <span className="text-emerald-500 font-black text-sm leading-none mt-0.5">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm compact />

              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400 text-[10px]">
                      ★
                    </span>
                  ))}
                  <span className="text-[9px] text-slate-400 font-medium ml-1">
                    4.9 · 1,200+ reviews
                  </span>
                </div>
                <span className="text-[9px] text-slate-300">|</span>
                <span className="text-[9px] text-slate-400 font-medium">
                  🔐 100% Secure
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
