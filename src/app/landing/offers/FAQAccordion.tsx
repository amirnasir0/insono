"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What hearing aid offers are available right now?",
    a: "We run time-bound seasonal offers on all major brands — Signia, Phonak, Widex, Oticon, and ReSound. Fill the form above to get the current offer details and a full price list instantly on WhatsApp.",
  },
  {
    q: "Is the free hearing test included in the offer?",
    a: "Yes! Every offer includes a 100% free hearing test conducted by a certified audiologist at your nearest Insono clinic. No purchase required.",
  },
  {
    q: "Can I get a 7-day free trial under this offer?",
    a: "Yes. All our offers include a 7-day free home trial of the hearing aid of your choice. If you're not satisfied, return it — no questions asked.",
  },
  {
    q: "Is EMI available on the offer price?",
    a: "Absolutely. We offer 0% EMI starting at ₹999/month on all models, even during promotional offers. Our team will help you choose the best plan.",
  },
  {
    q: "Can I combine the offer with an exchange on my old hearing aid?",
    a: "Yes, exchange discounts can be combined with seasonal offers. Bring in your old hearing aid (any brand) and get an additional exchange value on top of the current offer.",
  },
  {
    q: "How long does the offer last?",
    a: "Our offers are strictly time-bound. The countdown on this page shows exactly how much time is left. Once it expires, the offer price is no longer available.",
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
          <div style={{ display: "grid", gridTemplateRows: openIndex === i ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
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
