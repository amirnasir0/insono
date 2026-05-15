"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the price of Phonak hearing aids in Mumbai?",
    a: "Phonak prices start from ₹18,500 and vary by technology level (Sphere, Lumity, etc.). We offer 0% EMI options for all models. Fill the form to get the latest Phonak price list instantly on WhatsApp.",
  },
  {
    q: "Do you offer free Phonak trials in Mumbai?",
    a: "Yes, we offer a 100% free clinical trial of the latest Phonak models at our Mumbai clinic so you can experience the sound quality before you buy.",
  },
  {
    q: "Is Phonak Audeo Sphere available in Mumbai?",
    a: "Yes! Insono is an authorized partner for the latest Phonak Sphere AI technology in Mumbai. You can book a live demo at our clinic today.",
  },
  {
    q: "Do Phonak hearing aids connect to Android and iPhone?",
    a: "Absolutely. Phonak is famous for its universal connectivity, allowing you to stream calls and music directly from any Bluetooth-enabled device.",
  },
  {
    q: "What is the warranty on Phonak hearing aids?",
    a: "Phonak offers up to 4 years of international manufacturer warranty along with lifetime after-sales support at our Mumbai center.",
  },
  {
    q: "Do you provide home visits for Phonak trials in Mumbai?",
    a: "Yes, for senior citizens and those unable to travel, we provide home hearing tests and Phonak trials across Mumbai, Thane, and Andheri.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-[2rem] overflow-hidden transition-all duration-300 ${
            openIndex === i ? "border-[#184A99]/20 bg-slate-50/50" : "border-slate-100 bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center text-left p-6 sm:p-8"
          >
            <span className="font-bold text-slate-900 pr-8 text-base sm:text-lg leading-snug">{faq.q}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === i ? "bg-[#184A99] text-white rotate-180" : "bg-slate-100 text-slate-400"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* CSS grid trick for height animation — no framer-motion needed */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: openIndex === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div className="px-6 sm:px-8 pb-8">
                <div className="h-[1px] bg-slate-100 mb-6 w-full" />
                <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed font-medium">{faq.a}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
