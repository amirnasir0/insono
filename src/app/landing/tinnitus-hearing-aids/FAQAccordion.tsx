"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Can hearing aids really help with tinnitus?",
    a: "Yes! 80% of people with tinnitus also have some level of hearing loss. Hearing aids help by amplifying background sounds to mask the ringing and using specialized 'Notch Therapy' or 'Zen Tones' to train the brain to ignore the tinnitus.",
  },
  {
    q: "What is the price of a tinnitus masking device?",
    a: "Tinnitus hearing aid prices vary based on the technology level (e.g., Notch Therapy vs Basic Masking). We offer the best price guarantee on all top brands. Fill the form to get the latest price list on WhatsApp instantly.",
  },
  {
    q: "How long does it take for hearing aids to help tinnitus?",
    a: "While many feel instant relief due to the masking effect, it typically takes 2–4 weeks of consistent use for the brain to fully adapt and significantly reduce the perception of ringing.",
  },
  {
    q: "Are there any hearing aids specifically made for tinnitus?",
    a: "Absolutely. Brands like Signia (Notch Therapy), Widex (Zen Tones), and Phonak (Tinnitus Balance) have dedicated hardware and software specifically designed to suppress tinnitus sounds.",
  },
  {
    q: "Do you offer Tinnitus Retraining Therapy (TRT)?",
    a: "Yes, our clinics offer comprehensive tinnitus management including Tinnitus Retraining Therapy (TRT). Our certified audiologists combine sound therapy with counseling to help you habituate to the sound.",
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
