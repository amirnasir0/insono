"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the price of hearing aids in Chandigarh?",
    a: "Hearing aid prices in Chandigarh start from ₹9,999 and can go up to ₹3,50,000 for high-end AI models. We offer brands like Signia, Phonak, and Widex with 0% EMI options. Fill the form to get the full price list.",
  },
  {
    q: "Which is the best hearing aid brand in India?",
    a: "Signia, Phonak, and Widex are the top-tier brands. The 'best' brand depends on your hearing loss and lifestyle. We offer free trials of all top brands at our Chandigarh clinic to help you decide.",
  },
  {
    q: "Do you offer free hearing tests in Chandigarh?",
    a: "Yes, we provide 100% free diagnostic hearing tests by certified audiologists at our Chandigarh center. No purchase is mandatory.",
  },
  {
    q: "Are Bluetooth hearing aids available?",
    a: "Yes, most modern hearing aids from Phonak and Signia come with Bluetooth for direct streaming of calls and music from your smartphone.",
  },
  {
    q: "Do you provide home trials in Chandigarh?",
    a: "Yes, we offer home hearing tests and trials across Chandigarh, Mohali, and Panchkula for those who cannot visit our clinic.",
  },
  {
    q: "What warranty do you provide?",
    a: "All devices come with an official manufacturer warranty of 2-4 years, plus Insono's lifetime service support in Chandigarh.",
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
