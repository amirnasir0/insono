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
    { q: "What is the price of Phonak hearing aids in India?", a: "Phonak hearing aid prices in India start from ₹15,000. Exact pricing depends on the model and technology level. Fill the form above to unlock the complete Phonak 2026 price list." },
    { q: "Does Insono offer EMI on Phonak hearing aids?", a: "Yes, 0% EMI options starting from ₹2,500/month are available on selected Phonak hearing aid models." },
    { q: "Why is Phonak considered the best for connectivity?", a: "Phonak hearing aids feature universal Bluetooth technology that connects directly to any smartphone (Android & iPhone), smart TVs, and laptops for crystal clear calls and audio streaming." },
    { q: "Does Insono provide home trials for Phonak?", a: "Yes, we offer free clinical trials and home trials so you can experience Phonak sound quality in your daily environment before purchasing." },
    { q: "Is there an exchange offer for my old hearing aids?", a: "Yes! We offer attractive trade-in and exchange discounts when upgrading your old hearing aid to a new 2026 Phonak model." },
  ],
  widex: [
    { q: "What is the price of Widex hearing aids in India?", a: "Widex hearing aid prices in India start from ₹15,000. Exact pricing depends on the model and technology level. Fill the form above to unlock the complete Widex 2026 price list." },
    { q: "Does Insono offer EMI on Widex hearing aids?", a: "Yes, 0% EMI options starting from ₹2,500/month are available on selected Widex hearing aid models." },
    { q: "What makes Widex PureSound technology unique?", a: "Widex PureSound eliminates the artificial, delayed sound common in other hearing aids, providing the most natural sound experience." },
    { q: "Are Widex hearing aids rechargeable?", a: "Yes, Widex MOMENT series features ultra-compact rechargeable options with all-day battery life." },
    { q: "Does Insono offer free hearing test for Widex?", a: "Yes, we offer a 100% FREE hearing test & trial by certified Widex audiologists at our nearest clinic." },
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
