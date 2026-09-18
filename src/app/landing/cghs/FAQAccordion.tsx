"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is CGHS hearing aid reimbursement?",
    a: "Under CGHS (Central Government Health Scheme) and CS(MA) Rules, central government employees and pensioners can claim reimbursement for hearing aids purchased from authorized dealers. As per the September 2026 Office Memorandum (No. S.11030/76/2026-EHS), the revised ceiling is ₹30,000 per ear for digital programmable and rechargeable hearing aids.",
  },
  {
    q: "How much can I get reimbursed under CGHS for hearing aids in 2026?",
    a: "As per the September 9, 2026 CGHS notification, the maximum admissible ceiling is ₹30,000 per ear for standard digital programmable and rechargeable hearing aids (BTE/ITC/CIC). For bilateral fitting (both ears), if clinically justified, reimbursement can go up to ₹60,000, subject to actual expenditure.",
  },
  {
    q: "Which hearing aids are approved under CGHS?",
    a: "CGHS approves Standard Digital Programmable and Rechargeable Hearing Aids — including Digital BTE (Behind-the-Ear), Digital ITC (In-the-Canal), and CIC (Completely-in-Canal) models. Body-worn/pocket-type and analogue BTE hearing aids are excluded. Brands like Signia, Phonak, Widex, Oticon, and ReSound all offer CGHS-eligible models.",
  },
  {
    q: "What are the steps to claim CGHS reimbursement for hearing aids?",
    a: "Step 1: Get referred by your CGHS Wellness Centre Medical Officer to an ENT specialist at a government or CGHS-empanelled hospital. Step 2: Get an audiometric assessment and brand-neutral clinical prescription. Step 3: Obtain prior approval from the ADCGHS (for pensioners) or Head of Department (for serving employees). Step 4: Purchase the hearing aid from an authorized dealer like Insono. Step 5: Submit your original bill, permission letter, ENT prescription, audiogram, and undertaking to your CGHS Wellness Centre.",
  },
  {
    q: "How often can I claim CGHS reimbursement for a hearing aid?",
    a: "Replacement claims are permitted only once every 5 years per ear. You must submit a signed undertaking stating that no reimbursement for a hearing aid was claimed in the previous 5 years for the same ear.",
  },
  {
    q: "Does CGHS reimbursement cover GST and fitting charges?",
    a: "Yes. As per the September 2026 circular, the ceiling rate is inclusive of GST and all applicable taxes. It also covers the cost of a complete usable package including standard charger, fitting, programming, and verification. Optional premium features like wireless streaming or app-based controls beyond standard are not reimbursable.",
  },
  {
    q: "Is warranty mandatory for CGHS-reimbursable hearing aids?",
    a: "Yes. The hearing aid device must come with a 3-year comprehensive warranty as per the September 2026 CGHS guidelines. Insono provides devices with manufacturer warranty plus lifetime free tuning and service support.",
  },
  {
    q: "Can Insono help with CGHS documentation and claim?",
    a: "Absolutely. Insono's CGHS-experienced audiologists assist you end-to-end — from selecting a CGHS-eligible hearing aid within the ₹30,000 ceiling, to providing correct billing documentation, warranty certificates, and guidance on submitting your reimbursement claim at your Wellness Centre.",
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
            openIndex === i
              ? "border-[#184A99]/20 bg-slate-50/50"
              : "border-slate-100 bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center text-left p-6 sm:p-8"
          >
            <span className="font-bold text-slate-900 pr-8 text-base sm:text-lg leading-snug">
              {faq.q}
            </span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === i
                  ? "bg-[#184A99] text-white rotate-180"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
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
                <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
