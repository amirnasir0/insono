"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the price of ReSound hearing aids in Chandigarh?",
    a: "ReSound hearing aids start from ₹16,500 and go up to ₹3,10,000 for the latest Nexia series. We offer easy EMI and special discounts at our Chandigarh center. Fill the form to get the full price list.",
  },
  {
    q: "What makes ReSound Nexia special?",
    a: "ReSound Nexia is the world's first hearing aid to support Auracast Bluetooth, which will soon be standard in public places like airports and theaters for direct audio streaming.",
  },
  {
    q: "Do you offer free ReSound trials in Chandigarh?",
    a: "Yes, we provide 100% free clinical trials for the latest ReSound Nexia and OMNIA models at our Chandigarh clinic. Book your demo today.",
  },
  {
    q: "Does ReSound connect to iPhone and Android?",
    a: "Absolutely. ReSound is a pioneer in 'Made for iPhone' technology and also supports direct streaming for most modern Android smartphones.",
  },
  {
    q: "What is the warranty on ReSound products?",
    a: "ReSound products come with up to 4 years of official manufacturer warranty. Insono provides lifetime support and free servicing in Chandigarh.",
  },
  {
    q: "Do you offer home services in Chandigarh?",
    a: "Yes, for senior citizens, we provide home hearing tests and ReSound trials across Chandigarh, Mohali, and Panchkula.",
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
