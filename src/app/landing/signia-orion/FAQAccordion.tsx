"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What makes the Signia Orion series unique?",
    a: "The Signia Orion series represents a perfect balance of advanced technology, rugged German reliability, and competitive pricing. Key features include adaptive directional microphones for superior speech clarity, automatic feedback prevention, and high-fidelity sound processing.",
  },
  {
    q: "Are Signia Orion hearing aids rechargeable?",
    a: "Yes! The Signia Orion C&G 200 is equipped with built-in rechargeable Lithium-ion battery technology, offering up to 24 hours of continuous operation on a single charge. It also features a portable charging case for quick-charging on the go.",
  },
  {
    q: "Does the Signia Orion series support direct Bluetooth streaming?",
    a: "Absolutely. The Signia Orion series supports direct Bluetooth audio streaming. You can connect it seamlessly to your Apple (iOS) and Android smartphones to stream phone calls, music, navigation, and TV audio directly to your ears.",
  },
  {
    q: "What is the price of the Signia Orion series in India?",
    a: "The Signia Orion series is priced highly competitively for a premium German hearing aid. Prices vary depending on the specific model (rechargeable, invisible custom, or ultra-power BTE). Insono offers a best-price guarantee along with 0% interest EMI options starting at ₹18,000.",
  },
  {
    q: "Can I try the Signia Orion for free before buying?",
    a: "Yes. We offer a Free 3-Day Trial of the Signia Orion. You can test the device's comfort and sound clarity in your actual daily settings—whether at home, during family dinners, or at work—with no obligation.",
  },
  {
    q: "How many sound processing channels does the Signia Orion have?",
    a: "The flagship models like the Signia Orion C&G 200 come with 48 channels of digital sound processing. This enables our certified audiologists to program the device with high precision, tailored to your exact hearing threshold.",
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
