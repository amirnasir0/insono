"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of hearing aids does Insono Hearing offer?",
    a: "We provide BTE, RIC/RITE, ITE, CIC, and rechargeable models from leading brands, covering mild to profound hearing loss.",
  },
  {
    q: "How do I know which hearing aid is right for me?",
    a: "Our audiologists run a complete hearing evaluation and recommend the best device based on your hearing needs, lifestyle, and budget.",
  },
  {
    q: "Do new hearing aids come with a trial period?",
    a: "Yes, we offer a trial period so you can test the device in real-life situations. Adjustments or model changes are possible if needed.",
  },
  {
    q: "What follow-up care is included?",
    a: "We provide regular fine-tuning sessions, maintenance, and checkups to ensure your device works perfectly over time.",
  },
  {
    q: "Can I connect my hearing aid to my phone and TV?",
    a: "Yes, most of our modern hearing aids are Bluetooth-enabled, allowing you to stream calls, music, and TV audio directly.",
  },
  {
    q: "Are hearing aids water or sweat resistant?",
    a: "Many models are moisture-resistant with IP ratings, but they are not designed for swimming or bathing.",
  },
  {
    q: "How much do hearing aids cost, and do you offer financing?",
    a: "Costs vary by brand, features, and technology. We offer flexible payment plans and financing options to make them affordable.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // ✅ Fixed type

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#4b72b5] to-[#023784] py-16 px-4">
      <div className="max-w-4xl w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          FAQs – All You Need to Know
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/20">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left font-medium text-lg py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/70 font-mono text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                </div>
                {openIndex === idx ? (
                  <Minus size={20} className="text-white/80" />
                ) : (
                  <Plus size={20} className="text-white/80" />
                )}
              </button>
              <div
                className={`ml-10 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/80 text-sm leading-relaxed pr-6 pb-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-white/80 mb-6">
            Our audiologists are here to guide you. Book a free consultation
            today.
          </p>
          <a
            href="/form"
            className="inline-block bg-white text-[#023784] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
