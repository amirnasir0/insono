"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Which are the top 5 hearing aid brands in India?",
    a: "The top brands preferred by experts in India are Signia (formerly Siemens), Phonak, Widex, Oticon, and Starkey. Each brand offers unique features like AI speech enhancement, invisible designs, and rechargeable technology.",
  },
  {
    q: "What is the price range of the latest AI-powered hearing aids?",
    a: "Prices vary based on the technology level. Entry-level digital hearing aids start around ₹18,500, while premium AI-powered models can go higher. We offer a best-price guarantee and 0% EMI options to make them affordable.",
  },
  {
    q: "Can I try these hearing aids for free before purchasing?",
    a: "Yes! We offer a Free 3-Day Trial at our clinics or even at your home in select cities. This allows you to experience the sound quality and comfort in your real-life environment before making a decision.",
  },
  {
    q: "Are these hearing aids really invisible?",
    a: "Absolutely. Models like the Signia Silk and Starkey Evolv AI are designed to sit deep inside the ear canal (IIC), making them virtually invisible to others while providing crystal-clear sound.",
  },
  {
    q: "Do you offer home trials and audiologist consultations?",
    a: "Yes, Insono has a network of 1,500+ certified audiologists across 450+ cities in India. We provide comprehensive hearing tests, expert consultations, and trials at our clinics or through home visits.",
  },
  {
    q: "Is there a warranty provided on the devices?",
    a: "Yes, all our hearing aids come with an official manufacturer warranty, often up to 4 years. We also provide a device protection plan for added peace of mind.",
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
