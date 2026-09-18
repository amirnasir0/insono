import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";

export const metadata: Metadata = {
  title:
    "CGHS Hearing Aid Reimbursement 2026 — ₹30,000/Ear | Insono Hearing",
  description:
    "CGHS now reimburses ₹30,000 per ear (up to ₹60,000 bilateral) for digital hearing aids as per September 2026 OM. Get approved hearing aids from Insono with full CGHS billing, documentation & claim support.",
  alternates: {
    canonical: "https://insonohearing.com/landing/cghs",
  },
  openGraph: {
    title:
      "CGHS Hearing Aid Reimbursement 2026 — ₹30,000/Ear | Insono Hearing",
    description:
      "Get CGHS-approved digital hearing aids with complete reimbursement support. Updated Sep 2026 ceiling: ₹30,000/ear.",
    url: "https://insonohearing.com/landing/cghs",
    type: "website",
  },
};

const CGHS_MODELS = [
  {
    rank: 1,
    badge: "Best Within ₹60K Ceiling",
    badgeColor: "bg-blue-600 text-white",
    title: "Signia Pure Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "/products/pure-cg-bct-ix.png",
    features: [
      "Rechargeable — no battery changes needed",
      "AI speech clarity in noisy environments",
      "Bluetooth streaming for calls & TV",
      "CGHS-eligible: Digital BTE category",
      "3-year comprehensive warranty included",
    ],
    highlight: "Top pick for CGHS beneficiaries — fits within ₹60,000 ceiling.",
    cghsNote: "CGHS eligible · Digital BTE · 3-yr warranty",
  },
  {
    rank: 2,
    badge: "Invisible & Rechargeable",
    badgeColor: "bg-[#184A99] text-white",
    title: "Signia Silk Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image:
      "/products/signia-silk-charge-go-5ix-itc.png",
    features: [
      "World's first invisible rechargeable CIC",
      "CGHS-eligible: Digital CIC category",
      "Virtually undetectable — fully in-canal",
      "Crystal-clear speech intelligibility",
      "3-year manufacturer warranty",
    ],
    highlight:
      "Completely invisible — ideal for professionals & active lifestyles.",
    cghsNote: "CGHS eligible · Digital CIC · 3-yr warranty",
  },
  {
    rank: 3,
    badge: "Premium Clarity",
    badgeColor: "bg-amber-500 text-white",
    title: "Phonak Audeo Infinio",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/products/phonak-audeo-infinio.png",
    features: [
      "AutoSense OS 5.0 — adapts to every situation",
      "CGHS-eligible: Digital BTE-RIC category",
      "Roger Direct™ wireless microphone ready",
      "30+ hour rechargeable battery",
      "3-year comprehensive warranty",
    ],
    highlight: "Swiss engineering for effortless hearing in every situation.",
    cghsNote: "CGHS eligible · Digital BTE-RIC · 3-yr warranty",
  },
  {
    rank: 4,
    badge: "Natural Sound",
    badgeColor: "bg-purple-600 text-white",
    title: "Widex MOMENT Sheer",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/products/widex-moment-sheer.png",
    features: [
      "ZeroDelay™ — world's fastest sound processing",
      "CGHS-eligible: Digital BTE-RIC category",
      "Ultra-natural sound quality",
      "Rechargeable with 20-hour battery",
      "3-year warranty with CGHS billing",
    ],
    highlight: "Most natural sound experience in the industry.",
    cghsNote: "CGHS eligible · Digital BTE-RIC · 3-yr warranty",
  },
  {
    rank: 5,
    badge: "Value Choice",
    badgeColor: "bg-rose-600 text-white",
    title: "Signia Orion C&G 200",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image:
      "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: [
      "Reliable digital rechargeable BTE",
      "CGHS-eligible: Digital BTE category",
      "48 channels for precise sound control",
      "Tinnitus therapy included",
      "3-year manufacturer warranty",
    ],
    highlight:
      "Reliable German performance within CGHS ceiling — excellent value.",
    cghsNote: "CGHS eligible · Digital BTE · 3-yr warranty",
  },
];

const REVIEWS = [
  {
    name: "Rajesh Sharma",
    initials: "RS",
    avatarColor: "bg-[#184A99]",
    time: "2 weeks ago",
    location: "Delhi",
    text: "Retired from Central Government. Insono helped me navigate the entire CGHS reimbursement process — from documentation to billing. Got my Signia hearing aid fitted perfectly and the claim went through without any issues.",
  },
  {
    name: "Sunita Agarwal",
    initials: "SA",
    avatarColor: "bg-blue-600",
    time: "1 month ago",
    location: "Noida",
    text: "I was confused about CGHS claim procedures but Insono's team explained everything step by step. They provided all the correct bills and warranty documents. My ₹60,000 reimbursement was approved smoothly.",
  },
  {
    name: "Col. (Retd.) Mahesh Verma",
    initials: "MV",
    avatarColor: "bg-amber-600",
    time: "3 weeks ago",
    location: "Lucknow",
    text: "As a pensioner, I was unaware of the new 2026 CGHS ceiling rates. Insono not only informed me but also helped me select an eligible model within budget. Outstanding service and patient-focused care.",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    avatarColor: "bg-purple-600",
    time: "1 month ago",
    location: "Chandigarh",
    text: "My mother is a CGHS beneficiary. Insono made the process hassle-free — proper CGHS-compliant bill, audiologist prescription, undertaking form. The hearing aid quality is also superb. Highly recommended!",
  },
];

const COMPARISON_ROWS = [
  { feature: "CGHS-Compliant Billing", others: false },
  { feature: "Documentation Assistance", others: false },
  { feature: "Free Audiometric Assessment", others: false },
  { feature: "3-Year Warranty (Required by CGHS)", others: "Sometimes" },
  { feature: "Models Within ₹30K CGHS Ceiling", others: "Varies" },
  { feature: "Free Claim Process Guidance", others: false },
  { feature: "Certified Audiologist On-Site", others: "Varies" },
  { feature: "Bilateral Fitting Support", others: false },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "🏥",
    title: "CGHS Wellness Centre Referral",
    desc: "Get referred by your CGHS Wellness Centre Medical Officer to an ENT specialist at a government or CGHS-empanelled hospital.",
  },
  {
    step: "02",
    icon: "👂",
    title: "Audiometric Test & ENT Prescription",
    desc: "The ENT specialist conducts a hearing assessment and provides a brand-neutral clinical prescription along with your authenticated audiogram.",
  },
  {
    step: "03",
    icon: "📋",
    title: "Prior Permission / Approval",
    desc: "Obtain prior approval: from ADCGHS for pensioners, or from your Head of Department/Office for serving employees, before purchase.",
  },
  {
    step: "04",
    icon: "🎧",
    title: "Purchase from Insono",
    desc: "Visit Insono's CGHS-registered centre. We help you select an eligible model within ₹30,000 ceiling and provide CGHS-compliant bills + 3-year warranty certificate.",
  },
  {
    step: "05",
    icon: "📁",
    title: "Submit Claim at Wellness Centre",
    desc: "Submit original bill, permission letter, ENT prescription, audiogram, and signed 5-year undertaking to your CGHS Wellness Centre or department.",
  },
];

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/phonaklogo.svg",
  "/brands/widex.svg",
  "/brands/oticon.svg",
];

export default function CGHSLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Restore global LandingNav so the logo is visible but hide the red scarcity banner */
          .global-scarcity-banner { display: none !important; }
          .fixed.bottom-0:not(.t5-bottom-bar) { display: none !important; }

          /* On mobile, replace 'Compare Now' button with 'Call Now' */
          @media (max-width: 767px) {
            header.bg-transparent button {
              display: none !important;
            }
            header.bg-transparent div.hidden {
              display: flex !important;
              gap: 0 !important;
            }
            header.bg-transparent div.hidden > span {
              display: none !important;
            }
            header.bg-transparent a[href^="tel:"] {
              padding: 7px 16px !important;
              font-size: 13px !important;
              font-weight: 700 !important;
            }
          }
          /* Removed padding-top override so navbar works */
          /* Restored header for mobile and desktop */
          @keyframes t5-up {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes t5-left {
            from { opacity: 0; transform: translateX(-20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes t5-scale {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          .t5-up            { animation: t5-up    0.5s ease both; }
          .t5-up.d1         { animation-delay: 0.1s; }
          .t5-up.d2         { animation-delay: 0.2s; }
          .t5-up.d3         { animation-delay: 0.3s; }
          .t5-up.d4         { animation-delay: 0.4s; }
          .t5-left          { animation: t5-left  0.5s ease both; }
          .t5-scale         { animation: t5-scale 0.8s 0.5s ease both; }
        `,
        }}
      />

      {/* ────────────────────────────────────────────────────────────
          MOBILE (max-width: 768px)
      ──────────────────────────────────────────────────────────── */}
      <div className="block md:hidden pb-20">
        {/* Urgency / notification bar */}
        <div className="bg-[#184A99] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2" />
          New CGHS Circular Sep 2026 — ₹30,000/ear ceiling now active
        </div>


        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden">
          <div className="px-4 pt-4 pb-8 relative z-10 text-center">
            {/* CGHS badge */}
            <div className="t5-up inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
              <span className="text-base">🏛️</span>
              <span className="text-[11px] font-black text-[#0D2240] uppercase tracking-wider">
                CGHS & CS(MA) Approved
              </span>
            </div>

            {/* Social proof */}
            <div className="t5-up flex items-center justify-center gap-2 mb-4">
              <Image
                src="/badge/google.webp"
                alt="Google"
                width={52}
                height={18}
                className="h-[18px] w-auto"
              />
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-500">
                4.9 · 1,200+ Reviews
              </span>
            </div>

            {/* Headline */}
            <h1 className="t5-up d1 font-black leading-[1.2] mb-2 tracking-tight text-[21px] xs:text-[24px] sm:text-[28px] text-[#0D2240]">
              CGHS Hearing Aid<br />
              Reimbursement 2026
            </h1>
            <p className="t5-up d1 text-[12px] text-[#184A99] font-black uppercase tracking-wider mb-1">
              New Ceiling: ₹30,000/ear · Up to ₹60,000 Bilateral
            </p>
            <p className="t5-up d1 text-[10px] text-slate-400 font-semibold mb-3">
              As per Office Memorandum dated September 9, 2026
            </p>

            {/* Hero image - compact so CTA stays visible */}
            <div className="relative w-full mb-4 flex items-center justify-center">
              <div className="absolute w-[160px] h-[160px] bg-[#184A99]/10 rounded-full blur-[40px]" />
              <Image
                src="/signia-silk-ix-hero.png"
                alt="CGHS Approved Hearing Aids India — Signia Silk IX"
                width={180}
                height={180}
                className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                priority
                fetchPriority="high"
              />
            </div>

            {/* CTA */}
            <div className="t5-up d2 w-full mb-2">
              <PopupTrigger className="w-full h-[52px] bg-[#E83D6D] text-white flex items-center justify-center gap-2 rounded-xl text-[15px] font-black shadow-lg shadow-[#E83D6D]/30 active:scale-[0.97] transition-all">
                Download CGHS Price List
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </PopupTrigger>
            </div>
            <p className="t5-up d2 text-[10px] text-slate-400 font-medium mb-5">
              Free · Includes Documentation Checklist · No Spam
            </p>

            {/* Key update callout */}
            <div className="t5-up d3 bg-[#184A99] text-white rounded-2xl px-4 py-4 mb-5 text-left">
              <p className="text-[11px] font-black uppercase tracking-widest mb-2 opacity-80">
                🆕 September 2026 CGHS Update
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 font-black">✓</span>
                  <span className="text-[12px] font-semibold">
                    ₹30,000/ear for Digital BTE, ITC & CIC models
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 font-black">✓</span>
                  <span className="text-[12px] font-semibold">
                    Up to ₹60,000 bilateral (if clinically justified)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 font-black">✓</span>
                  <span className="text-[12px] font-semibold">
                    Ceiling includes GST, fitting & programming
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 font-black">✓</span>
                  <span className="text-[12px] font-semibold">
                    3-year warranty mandatory for CGHS claim
                  </span>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 text-left">
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">
                  🏛️
                </div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">
                  CGHS & CS(MA) compliant billing & documentation
                </span>
              </li>
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">
                  💰
                </div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">
                  Models within{" "}
                  <span className="text-[#184A99] font-black">
                    ₹30,000 ceiling
                  </span>{" "}
                  with 3-yr warranty
                </span>
              </li>
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">
                  🩺
                </div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">
                  Free audiometric test + claim process guidance
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* CGHS Process Steps */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">
              5-Step CGHS Claim Process
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Follow these steps to get your hearing aid reimbursed
            </p>
          </div>
          <div className="space-y-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#184A99] text-white flex items-center justify-center text-[11px] font-black">
                  {step.step}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-base">{step.icon}</span>
                    <h3 className="text-[13px] font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <PopupTrigger className="w-full mt-4 h-[46px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[13px] font-bold active:scale-[0.97] transition shadow-md shadow-[#184A99]/20">
            📋 Get Documentation Checklist
          </PopupTrigger>
        </section>

        {/* Product showcase */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">
              Best Hearing Aids Within ₹60,000 Ceiling
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              All within ₹60,000 CGHS ceiling · Tap to get price on WhatsApp
            </p>
          </div>
          <div className="space-y-3">
            {CGHS_MODELS.map((p) => (
              <div
                key={p.rank}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex"
              >
                <div className="relative w-[110px] flex-shrink-0 bg-white flex items-center justify-center p-3">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={90}
                    height={90}
                    loading="lazy"
                    className="object-contain mix-blend-multiply"
                  />
                  <span
                    className={`absolute top-2 left-2 text-[8px] font-bold px-2 py-0.5 rounded-full leading-tight ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Image
                        src={p.brandLogo}
                        alt={p.brand}
                        width={60}
                        height={12}
                        className="h-3 w-auto grayscale opacity-50"
                      />
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-1">
                      {p.title}
                    </h3>
                    <div className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5 mb-1.5">
                      <span className="text-[8px] font-black text-[#184A99]">
                        ✓ {p.cghsNote}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {p.features.slice(0, 2).map((f) => (
                        <span
                          key={f}
                          className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold leading-tight"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none mb-0.5">
                        CGHS Bilateral
                      </p>
                      <p className="text-[11px] font-bold text-[#184A99]">
                        ₹60,000
                      </p>
                    </div>
                    <PopupTrigger className="flex items-center gap-1 bg-[#184A99] text-white text-[10px] font-bold px-3 py-2 rounded-xl active:scale-95 transition flex-shrink-0">
                      Get Price
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">
              Insono Hearing vs Others
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Trusted by CGHS beneficiaries across India
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-[#184A99] text-white text-[11px] font-bold">
              <div className="py-3 px-3">Feature</div>
              <div className="py-3 px-2 text-center border-l border-white/20 bg-white/10 text-yellow-300">
                Insono
              </div>
              <div className="py-3 px-2 text-center border-l border-white/20 text-white/70">
                Others
              </div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-[11px] border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
              >
                <div className="py-3 px-3 font-medium text-slate-700 leading-snug">
                  {row.feature}
                </div>
                <div className="py-3 px-2 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                  <span className="text-blue-500 text-base font-black">
                    ✓
                  </span>
                </div>
                <div className="py-3 px-2 flex items-center justify-center border-l border-slate-100">
                  {row.others === false ? (
                    <span className="text-red-400 text-base font-black">✗</span>
                  ) : (
                    <span className="text-amber-500 text-[9px] font-bold leading-tight text-center">
                      {row.others}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <PopupTrigger className="w-full mt-4 h-[46px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[13px] font-bold active:scale-[0.97] transition shadow-md shadow-[#184A99]/20">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CGHS Claim Checklist
          </PopupTrigger>
        </section>

        {/* Reviews */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/badge/google.webp"
                alt="Google"
                width={60}
                height={20}
                className="h-5 w-auto"
              />
              <span className="text-[11px] font-bold text-slate-500">
                Google Reviews
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-[13px] font-black text-slate-800">4.9 / 5</p>
            <p className="text-[10px] text-slate-400 font-medium">
              Based on 1,200+ verified reviews
            </p>
          </div>
          <div className="space-y-3">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-4"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0 ${r.avatarColor}`}
                  >
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold text-slate-800 leading-none">
                        {r.name}
                      </p>
                      <span className="text-[9px] text-slate-400">
                        {r.time}
                      </span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-0.5">
                      {r.location} ·{" "}
                      <span className="text-blue-500 font-semibold">
                        ✓ CGHS Beneficiary
                      </span>
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-yellow-400 text-[10px]">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <a
            href="https://share.google/RDuVMbenuWSAEEqLt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 mt-4 text-[11px] font-bold text-[#184A99]"
          >
            Read all 1,200+ reviews on Google →
          </a>
        </section>

        {/* FAQ */}
        <section className="py-8 px-6 bg-white mb-20">
          <h2 className="text-xl font-bold text-slate-900 mb-8 text-center">
            CGHS Hearing Aid — Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 t5-bottom-bar flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I am a CGHS beneficiary and want to know about CGHS approved hearing aids and reimbursement process"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.833L.057 23.057a.75.75 0 00.921.921l5.224-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.724 9.724 0 01-4.962-1.354l-.356-.212-3.697 1.029 1.029-3.697-.212-.356A9.724 9.724 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            <span className="text-[10px] font-black leading-none">
              CGHS WhatsApp Help
            </span>
          </a>
          <div className="w-px bg-slate-100" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#E83D6D] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2"
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-[10px] font-black leading-none text-center">
              Call CGHS Expert Now
            </span>
          </a>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          DESKTOP (min-width: 769px)
      ──────────────────────────────────────────────────────────── */}
      <div className="hidden md:block">
        {/* Alert bar */}
        <div className="bg-[#0D2240] text-white py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.2em]">
          <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2" />
          🆕 CGHS New Circular — September 9, 2026 · Revised Ceiling ₹30,000/ear · Up to ₹60,000 Bilateral
        </div>

        {/* Hero */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Col 1: Text */}
              <div className="flex-[1.2] pt-0">
                <div className="t5-left hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse" />
                  Authorized CGHS & CS(MA) Hearing Aid Partner · Pan-India
                </div>

                <h1 className="t5-up d1 text-xl lg:text-[32px] xl:text-[42px] font-black leading-[1.15] mb-8 tracking-tight">
                  <span className="block whitespace-nowrap bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    CGHS Hearing Aid
                  </span>
                  <span className="block whitespace-nowrap bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Reimbursement 2026
                  </span>
                </h1>

                <div className="t5-up d1 inline-flex items-center gap-3 bg-[#184A99] text-white rounded-2xl px-6 py-3 mb-8">
                  <span className="text-yellow-300 font-black text-xl">₹30,000</span>
                  <span className="text-white/80 text-sm">per ear · Up to</span>
                  <span className="text-yellow-300 font-black text-xl">₹60,000</span>
                  <span className="text-white/80 text-sm">bilateral</span>
                </div>

                <p className="t5-up d2 text-slate-600 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
                  Get 100% CGHS-compliant digital hearing aids with official billing,
                  3-year warranty & complete claim documentation support.
                </p>

                {/* CTA Desktop */}
                <div className="t5-up d2 mb-10">
                  <PopupTrigger className="inline-flex h-[52px] px-8 bg-[#E83D6D] text-white items-center justify-center gap-2 rounded-xl text-[15px] font-black shadow-lg shadow-[#E83D6D]/30 hover:bg-[#D42B59] active:scale-[0.97] transition-all cursor-pointer">
                    Download CGHS Price List
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </PopupTrigger>
                </div>

                <div className="t5-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
                  <div>
                    <p className="text-xl font-bold text-slate-900">₹30K</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Per Ear Ceiling
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">5 Years</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Replacement Cycle
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">3-Year</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Warranty Required
                    </p>
                  </div>
                </div>

                <div className="t5-up d4 pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                    CGHS-Approved Brands Available at Insono
                  </p>
                  <div className="flex items-center gap-8 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        alt="brand"
                        width={64}
                        height={16}
                        className="h-4 w-auto object-contain"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Hero image */}
              <div className="t5-scale hidden xl:flex flex-[1.2] items-center justify-center relative min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px]" />
                <Image
                  src="/signia-silk-ix-hero.png"
                  alt="CGHS Approved Digital Hearing Aids India — Signia Silk IX"
                  width={420}
                  height={420}
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Col 3: Lead form */}
              <div className="t5-up d4 w-full lg:w-[360px] xl:w-[380px] flex-shrink-0 pt-0">
                <div
                  id="lead-form"
                  className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50"
                >
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    CGHS Support
                  </div>
                  <h2 className="text-2xl font-bold mb-2 pt-4 text-[#0D2240]">
                    Download CGHS Price List
                  </h2>
                  <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                    Download the complete 2026 CGHS approved hearing aid price list
                    + reimbursement guide instantly on WhatsApp.
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
                    <p className="text-[10px] font-black text-[#184A99] uppercase tracking-widest mb-2">
                      🆕 Sep 2026 Ceiling Rates
                    </p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Per ear (BTE/ITC/CIC)</span>
                        <span className="font-black text-[#184A99]">₹30,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Bilateral (both ears)</span>
                        <span className="font-black text-[#184A99]">₹60,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Includes GST & fitting</span>
                        <span className="font-black text-[#184A99]">✓ Yes</span>
                      </div>
                    </div>
                  </div>
                  <LeadForm />
                  <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                    🔐 256-bit Secure · 100% Private
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CGHS Process Steps — Desktop */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">
                How to Claim
              </h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">
                5-Step CGHS Reimbursement Process
              </h3>
              <p className="text-slate-500 mt-4 text-lg max-w-xl mx-auto">
                Follow these steps to claim your ₹30,000 per ear CGHS
                reimbursement without any hassle.
              </p>
            </div>
            <div className="grid grid-cols-5 gap-6 relative">
              <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-blue-200 hidden lg:block" />
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#184A99] text-white flex items-center justify-center text-xl font-black mx-auto mb-5 shadow-lg shadow-[#184A99]/30 relative z-10">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <PopupTrigger className="inline-flex items-center gap-3 bg-[#184A99] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-[#0D2240] transition shadow-xl shadow-[#184A99]/20 uppercase tracking-widest">
                📋 Download Full CGHS Claim Checklist
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Product section — Desktop */}
        <section className="max-w-6xl mx-auto px-6 py-24" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="text-left">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">
                CGHS Approved Models
              </h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">
                Best Hearing Aids Within ₹60,000 Ceiling
              </h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">
              All models below are digital programmable/rechargeable — eligible
              for CGHS reimbursement under the September 2026 circular.
            </p>
          </div>

          <div className="grid gap-8">
            {CGHS_MODELS.map((p) => (
              <div
                key={p.rank}
                className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 flex flex-col lg:flex-row group"
              >
                <div className="lg:w-[380px] bg-white relative min-h-[320px] flex items-center justify-center p-10">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-contain p-14 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                  />
                  <div
                    className={`absolute top-8 left-8 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg ${p.badgeColor}`}
                  >
                    {p.badge}
                  </div>
                </div>
                <div className="flex-1 p-10 lg:p-16 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-5 mb-6">
                      <Image
                        src={p.brandLogo}
                        alt={p.brand}
                        width={72}
                        height={24}
                        className="h-6 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                      />
                      <div className="h-5 w-[1px] bg-slate-200" />
                      <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
                        <span className="text-[10px] font-black text-[#184A99]">
                          ✓ {p.cghsNote}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold text-slate-950 mb-4 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-[#184A99] text-xl font-bold mb-8 italic leading-relaxed">
                      &ldquo;{p.highlight}&rdquo;
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {p.features.map((f) => (
                        <span
                          key={f}
                          className="bg-slate-50 text-slate-500 px-5 py-2.5 rounded-2xl text-[11px] font-bold border border-slate-100 uppercase tracking-widest"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-50">
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-3">
                      <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-0.5">
                        CGHS Bilateral (Both Ears)
                      </p>
                      <p className="text-2xl font-black text-[#184A99]">
                        ₹60,000
                      </p>
                    </div>
                    <PopupTrigger className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#184A99] text-white px-10 py-5 rounded-[2rem] font-bold text-sm hover:bg-[#0D2240] transition border border-blue-600/20 uppercase tracking-widest shadow-xl shadow-[#184A99]/20">
                      Get CGHS Price & Eligibility
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison — Desktop */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">
                The Insono Advantage
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                Insono Hearing vs Others for CGHS
              </h3>
              <p className="text-slate-500 mt-3 text-base">
                Why CGHS beneficiaries across India trust Insono
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 bg-[#184A99] text-white text-sm font-bold">
                <div className="py-4 px-6">Feature</div>
                <div className="py-4 px-4 text-center border-l border-white/20 bg-white/10 text-yellow-300">
                  Insono
                </div>
                <div className="py-4 px-4 text-center border-l border-white/20 text-white/70">
                  Others
                </div>
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                >
                  <div className="py-4 px-6 font-medium text-slate-700">
                    {row.feature}
                  </div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                    <span className="text-blue-500 text-lg font-black">
                      ✓
                    </span>
                  </div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100">
                    {row.others === false ? (
                      <span className="text-red-400 text-lg font-black">✗</span>
                    ) : (
                      <span className="text-amber-500 text-xs font-bold">
                        {row.others}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <PopupTrigger className="inline-flex items-center gap-3 bg-[#184A99] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-[#0D2240] transition shadow-xl shadow-[#184A99]/20 uppercase tracking-widest">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CGHS Claim Documentation Checklist
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Reviews — Desktop */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Image
                  src="/badge/google.webp"
                  alt="Google"
                  width={72}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-sm font-bold text-slate-500">
                  Google Reviews
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-2xl font-black text-slate-800">4.9 / 5</p>
              <p className="text-sm text-slate-400 font-medium mt-1">
                Based on 1,200+ verified Google reviews · CGHS Beneficiaries
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REVIEWS.map((r) => (
                <div
                  key={r.name}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${r.avatarColor}`}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-none">
                        {r.name}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {r.location} ·{" "}
                        <span className="text-blue-500 font-semibold">
                          ✓ CGHS Beneficiary
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1 self-center">
                      {r.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://share.google/RDuVMbenuWSAEEqLt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#184A99] hover:underline"
              >
                Read all 1,200+ reviews on Google →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ — Desktop */}
        <section className="bg-[#0D2240] py-24 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-6">
              CGHS Hearing Aid — Frequently Asked Questions
            </h2>
            <p className="text-center text-slate-400 mb-16">
              Everything you need to know about CGHS hearing aid reimbursement
              as per the September 2026 circular.
            </p>
            <FAQAccordion />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image
              src="/logo.webp"
              alt="Insono"
              width={140}
              height={40}
              className="h-9 w-auto mx-auto mb-8 grayscale opacity-50"
              loading="lazy"
            />
            <div className="flex gap-6 justify-center text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
              <Link href="/policy" className="hover:text-[#184A99]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#184A99]">
                Terms of Use
              </Link>
            </div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">
              © 2026 Insono Hearing · CGHS Authorized Hearing Aid Partner · India
            </p>
            <p className="text-[10px] text-slate-300 mt-2 max-w-2xl mx-auto">
              Information based on Government of India, Ministry of Health &
              Family Welfare Office Memorandum No. S.11030/76/2026-EHS dated
              September 9, 2026. Ceiling rates are subject to actual expenditure.
            </p>
          </div>
        </footer>
      </div>

      <PopupModal />
    </div>
  );
}
