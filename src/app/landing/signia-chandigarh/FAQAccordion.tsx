"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the price of hearing aids in Chandigarh?",
    a: "Prices start from ₹9,999 and vary by brand, technology, and features like Bluetooth or rechargeability. EMI options are available for every budget. Fill the form to get the full price list instantly on WhatsApp.",
  },
  {
    q: "Do you offer free hearing tests in Chandigarh?",
    a: "Yes, 100% free hearing tests at our Chandigarh clinic by certified audiologists using advanced diagnostic equipment. No purchase obligation.",
  },
  {
    q: "Which hearing aid brands are available in Chandigarh?",
    a: "Signia, Phonak, Widex, Oticon, ReSound, and Starkey — all premium brands with genuine manufacturer warranty.",
  },
  {
    q: "Can I get fitted on the same day?",
    a: "Yes. Most patients are professionally fitted and walk out with their hearing aid on the same day of their appointment.",
  },
  {
    q: "Do you offer home visits in Chandigarh?",
    a: "Yes, home hearing tests and trials are available across Chandigarh, especially for senior citizens who prefer in-home consultation.",
  },
  {
    q: "Is there warranty and after-sales support?",
    a: "All hearing aids come with manufacturer warranty along with up to 4 years extended warranty, with full servicing support at our Chandigarh clinic.",
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
