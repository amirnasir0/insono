"use client";

import { useState } from "react";

type BrandKey = "generic" | "signia" | "phonak" | "widex";

const BRAND_FAQS: Record<BrandKey, { q: string; a: string }[]> = {
  generic: [
    { q: "What is the price of hearing aids?", a: "Hearing aid prices start from ₹9,999 and vary by brand, technology, and features like Bluetooth or rechargeability. EMI options are available for every budget. Fill the form to get the full price list instantly on WhatsApp." },
    { q: "Do you offer free hearing tests?", a: "Yes, 100% free hearing tests by certified audiologists using advanced diagnostic equipment. No purchase obligation." },
    { q: "Which hearing aid brands are available?", a: "Signia, Phonak, Widex, Oticon, ReSound, and Starkey — all premium brands with genuine manufacturer warranty." },
    { q: "Can I get fitted on the same day?", a: "Yes. Most patients are professionally fitted and walk out with their hearing aid on the same day of their appointment." },
    { q: "Is there warranty and after-sales support?", a: "All hearing aids come with manufacturer warranty along with up to 4 years extended warranty, with full servicing support at our nearest clinic." },
    { q: "Is EMI available on hearing aids?", a: "Yes, 0% EMI options are available on most hearing aid models." },
  ],
  signia: [
    { q: "What is the price of Signia hearing aids?", a: "Signia hearing aid prices start from ₹15,000 and go up to ₹3,00,000 depending on model and technology. Call us for the latest discount." },
    { q: "Are Signia hearing aids rechargeable?", a: "Yes, Signia provides advanced rechargeable hearing aids with all-day battery backup." },
    { q: "Does Signia hearing aid support Bluetooth?", a: "Yes, premium Signia models support Bluetooth for calls, music and TV streaming." },
    { q: "Is free hearing test available?", a: "Yes, we offer FREE hearing test & consultation by certified Signia audiologists at our nearest clinic." },
    { q: "What warranty comes with Signia hearing aids?", a: "Signia offers 2 to 4 years manufacturer warranty depending on the model." },
    { q: "Which Signia hearing aid is best?", a: "Popular models include Pure Charge&Go, Styletto X, Motion X and Silk series. Our audiologist will recommend the right one." },
    { q: "Is EMI available on Signia?", a: "Yes, 0% EMI available on selected Signia models." },
  ],
  phonak: [
    { q: "What is the price of Phonak hearing aids?", a: "Phonak hearing aid prices start from ₹18,000. Call us for the latest offers and discounts." },
    { q: "Where can I buy Phonak hearing aid near me?", a: "From our authorized Phonak clinic nearest to you. Fill the form to get the address and book a free appointment." },
    { q: "Are Phonak hearing aids rechargeable?", a: "Yes, premium Phonak rechargeable models are available with full-day battery life." },
    { q: "Does Phonak support Bluetooth?", a: "Yes, direct calls & music streaming is supported on premium Phonak models." },
    { q: "Which Phonak model is best?", a: "Audeo Lumity & Paradise series are the most popular. Our audiologist will guide you based on your hearing profile." },
    { q: "Is EMI available on Phonak?", a: "Yes, 0% EMI options are available on selected Phonak models." },
    { q: "What warranty comes with Phonak?", a: "2–4 years manufacturer warranty included with all Phonak models." },
  ],
  widex: [
    { q: "What is the price of Widex hearing aids?", a: "Widex hearing aids start from ₹20,000 onwards. Prices vary based on model and technology level." },
    { q: "Are Widex hearing aids rechargeable?", a: "Yes, Widex Moment series is available in rechargeable variants with all-day battery." },
    { q: "Does Widex support Bluetooth?", a: "Yes, Widex supports Bluetooth for calls & music on compatible devices." },
    { q: "What warranty does Widex provide?", a: "Widex provides up to 4 years of manufacturer warranty on most models." },
    { q: "Which Widex model is best?", a: "Widex Moment is the most popular model known for its PureSound technology." },
    { q: "Is EMI available on Widex?", a: "Yes, easy EMI options are available on Widex hearing aids." },
    { q: "Do you offer free hearing test for Widex?", a: "Yes, free audiologist consultation and hearing test is available." },
  ],
};

export default function FAQAccordion({ brand }: { brand: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = BRAND_FAQS[brand as BrandKey] ?? BRAND_FAQS.generic;

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
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
