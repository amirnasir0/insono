"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";

export default function ClinicCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-extrabold text-base mb-8 group bg-transparent border-none cursor-pointer"
      >
        <span>Click here to know your nearest clinic</span>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 md:p-10 max-w-md w-full z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Locate Your Nearest Clinic</h2>
              <p className="text-slate-500 text-sm">Enter your details to locate the closest Clinic.</p>
            </div>

            <LeadForm />

            <p className="text-center text-[10px] text-slate-400 mt-6 leading-tight uppercase tracking-widest font-bold">
              🔐 100% Secure • Best Price Match Guarantee
            </p>
          </div>
        </div>
      )}
    </>
  );
}
