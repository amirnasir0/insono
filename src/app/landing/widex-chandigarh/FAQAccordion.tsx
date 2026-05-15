"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the price of Widex hearing aids in Chandigarh?",
    a: "Widex hearing aids start from ₹19,500 and go up to ₹3,25,000 for the premium MOMENT series. We provide 0% EMI and exchange offers. Fill the form to get the latest Widex price list.",
  },
  {
    q: "Why is Widex known for 'natural sound'?",
    a: "Widex uses ZeroDelay technology that eliminates the 'echo' or 'metallic' sound found in many digital hearing aids, making it the top choice for musicians and sound purists.",
  },
  {
    q: "Is Widex MOMENT Sheer available in Chandigarh?",
    a: "Yes, Insono is an authorized premium partner for Widex in Chandigarh. We have the entire MOMENT Sheer collection available for a free clinical trial.",
  },
  {
    q: "Does Widex have rechargeable models?",
    a: "Yes, Widex MOMENT and Magnify series offer lithium-ion rechargeable models that last all day on a single charge.",
  },
  {
    q: "What is the warranty on Widex products?",
    a: "Widex offers up to 4 years of international warranty. Insono provides additional after-sales support and free servicing at our Chandigarh center.",
  },
  {
    q: "Do you offer home trials for Widex in Chandigarh?",
    a: "Yes, we provide home hearing tests and trials of Widex hearing aids across Chandigarh, Mohali, and Panchkula for your convenience.",
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
