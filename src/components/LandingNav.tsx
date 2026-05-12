"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";

export default function LandingNav() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* ── Scarcity Banner ── */}
        <div className="bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-bold shadow-md animate-pulse">
          ⚠️ Lowest Price Match offer — Limited Free Trial Slots Available This Month!
        </div>

        {/* ── Header ── */}
        <header className="bg-transparent">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Hearing Solutions"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Multi-Brand Comparison Experts
              </span>
              <a
                href="tel:+916204260510"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Call Now
              </a>
            </div>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider"
            >
              Compare Now
            </button>
          </div>
        </header>
      </div>

      {/* ── Popup Modal ── */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          ></div>
          <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 md:p-10 max-w-md w-full z-10">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                Locate Your Nearest Clinic
              </h2>
              <p className="text-slate-500 text-sm">
                Enter your details to locate the closest center.
              </p>
            </div>
            <LeadForm />
            <p className="text-center text-[10px] text-slate-400 mt-6 leading-tight uppercase tracking-widest font-bold">
              🔐 100% Secure • Lowest Price Guarantee
            </p>
          </div>
        </div>
      )}

      {/* ── Sticky Mobile Bottom Bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-[60] flex gap-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
        <a
          href="https://wa.me/916204260510?text=Hi, I want to compare hearing aids and get the best price."
          className="flex-1 bg-green-600 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider shadow-lg shadow-green-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="flex-[2] bg-blue-600 text-white h-14 rounded-2xl flex items-center justify-center font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-200"
        >
          Compare Now
        </button>
      </div>
    </>
  );
}
