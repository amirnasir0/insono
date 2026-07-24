import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";

export const metadata: Metadata = {
  title: "Signia Orion Series Hearing Aids Price in India 2026 — Book a Free Trial",
  description:
    "Discover the rugged reliability of the German-engineered Signia Orion series. Rechargeable, Bluetooth, RIC, and custom formats. Save up to ₹31,500 + 0% interest EMI options. Try it free today.",
};

const TOP5 = [
  {
    rank: 1,
    badge: "Rechargeable & Bluetooth",
    badgeColor: "bg-amber-500 text-white",
    title: "Signia Orion C&G 200",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: [
      "Built-in rechargeable Li-ion battery",
      "Direct audio streaming from smartphone",
      "Automatic sound landscape adaptation",
      "48 channels of precise digital tuning",
      "Advanced sound directionality sensors",
    ],
    highlight: "The flagship rechargeable model of the premium Orion series.",
  },
  {
    rank: 2,
    badge: "Sleek & Discreet",
    badgeColor: "bg-rose-600 text-white",
    title: "Signia Orion 2 RIC",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: [
      "Extremely small behind-the-ear receiver",
      "Direct streaming for phone calls & music",
      "eWindScreen wind noise suppression",
      "State-of-the-art feedback canceller",
      "Premium moisture resistant nano-coating",
    ],
    highlight: "Maximum acoustic comfort, tailored specifically for discreet wear.",
  },
  {
    rank: 3,
    badge: "Custom Invisible Fit",
    badgeColor: "bg-indigo-600 text-white",
    title: "Signia Orion 2 CIC / ITE",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1775551490244-Untitled-design---2026-04-07T141048.093.png",
    features: [
      "Custom molded to fit deep inside ear canal",
      "Virtually invisible to external observers",
      "High power output options available",
      "Easy volume adjustment via smartphone app",
      "Natural sound quality and speech clarity",
    ],
    highlight: "German precision engineering custom molded for your absolute privacy.",
  },
  {
    rank: 4,
    badge: "Maximum Power",
    badgeColor: "bg-emerald-600 text-white",
    title: "Signia Orion 2 BTE",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: [
      "High-amplification for profound hearing loss",
      "Long-lasting battery life (Size 13/675)",
      "Telecoil-equipped for public loops",
      "Robust ruggedized housing construction",
      "Ergonomic fit behind the ear lobe",
    ],
    highlight: "Unmatched power and long-lasting durability for advanced hearing needs.",
  },
];

const REVIEWS = [
  {
    name: "Piyush Jain",
    initials: "PJ",
    avatarColor: "bg-[#184A99]",
    time: "1 month ago",
    location: "Delhi",
    text: "The Signia Orion C&G 200 is amazing. The rechargeable battery lasts all day long and my mother has no issues hearing soft-spoken relatives now. Insono provided excellent tuning.",
  },
  {
    name: "Sanjee Banerjee",
    initials: "SB",
    avatarColor: "bg-emerald-600",
    time: "2 months ago",
    location: "Kolkata",
    text: "Took a trial of the Orion 2 RIC and fell in love with it. Sound quality is incredibly natural. Insono made the transaction quick, gave us high discount, and set up 0% EMI.",
  },
  {
    name: "Honey Kumar",
    initials: "HK",
    avatarColor: "bg-purple-600",
    time: "3 months ago",
    location: "Mumbai",
    text: "Very reliable product. The feedback canceller on the Orion BTE model works beautifully—no whistling at all even at high volumes. Outstanding service by Insono.",
  },
  {
    name: "Meena Verma",
    initials: "MV",
    avatarColor: "bg-rose-600",
    time: "2 weeks ago",
    location: "Bangalore",
    text: "I bought the customized Orion CIC. Completely invisible in the ear, and the clarity in restaurants is fantastic. Zero hidden charges. Thank you Insono!",
  },
];

const COMPARISON_ROWS = [
  { feature: "Free Hearing Test", others: false },
  { feature: "7-Day Free Trial", others: false },
  { feature: "Genuine Products", others: "Sometimes" },
  { feature: "EMI / 0% Finance", others: false },
  { feature: "Home Delivery (COD)", others: false },
  { feature: "Lifetime Servicing", others: false },
  { feature: "Certified Audiologist", others: "Varies" },
  { feature: "Price Transparency", others: false },
] as const;

const BRAND_LOGOS = [
  "/brands/signia.svg",
];

export default function OrionLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            header:not(.t5-mobile-header),
            .sticky.top-0:not(.t5-mobile-header-wrapper),
            .fixed.bottom-0:not(.t5-bottom-bar) { display: none !important; }
            body { padding-top: 0 !important; }
          }
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
        `
      }} />

      {/* ────────────────────────────────────────────────────────────
          MOBILE (max-width: 768px)
      ──────────────────────────────────────────────────────────── */}
      <div className="block md:hidden pb-20">

        {/* Urgency bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          Only 12 free trial slots left this week — Claim yours now
        </div>

        {/* Header */}
        <div className="sticky top-0 z-50 t5-mobile-header-wrapper">
          <header className="px-4 py-3 flex items-center justify-between t5-mobile-header bg-white/90 backdrop-blur-sm border-b border-slate-100">
            <Link href="/landing/signia-orion">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-2 active:scale-95 transition uppercase tracking-widest"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Expert
            </a>
          </header>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden">
          <div className="px-4 pt-4 pb-8 relative z-10 text-center">

            {/* Social proof */}
            <div className="t5-up flex items-center justify-center gap-2 mb-4">
              <Image src="/badge/google.webp" alt="Google" width={52} height={18} className="h-[18px] w-auto" />
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <span className="text-[11px] font-bold text-slate-500">4.9 · 1,200+ Reviews</span>
            </div>

            {/* Headline */}
            <h1 className="t5-up d1 font-black leading-[1.2] mb-2 tracking-tight text-[21px] xs:text-[24px] sm:text-[28px] md:text-[32px] text-[#0D2240]">
              Signia Orion Hearing Aids<br />
              Official 2026 Price List
            </h1>
            <p className="t5-up d1 text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-5">
              Authorized Signia Partner · 2026 Price Guide
            </p>

            {/* CTA */}
            <div className="t5-up d2 w-full mb-2">
              <PopupTrigger className="w-full h-[52px] bg-[#E83D6D] text-white flex items-center justify-center gap-2 rounded-xl text-[15px] font-black shadow-lg shadow-[#E83D6D]/30 active:scale-[0.97] transition-all">
                Get Orion Price List on WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </PopupTrigger>
            </div>
            <p className="t5-up d2 text-[10px] text-slate-400 font-medium mb-5">
              Free · Instant · No spam · Zero obligation
            </p>

            {/* Brand trust strip */}
            <div className="t5-up d3 flex items-center justify-center gap-5 mb-7 grayscale opacity-40">
              <Image src="/brands/signia.svg" alt="Signia" width={60} height={16} className="h-4 w-auto" />
              <span className="text-slate-400 text-xs font-semibold">German Sound Engineering</span>
            </div>

            {/* Product image */}
            <div className="relative w-full mb-6 flex items-center justify-center">
              <div className="absolute w-[120px] h-[120px] bg-[#184A99]/8 rounded-full blur-[40px]" />
              <Image
                src="https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg"
                alt="Signia Orion C&G 200"
                width={180}
                height={160}
                className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] rounded-2xl"
                priority
                fetchPriority="high"
              />
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 text-left">
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">🔊</div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">Advanced 48 channels &amp; feedback suppression for absolute clarity</span>
              </li>
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">💰</div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">Save up to <span className="text-emerald-600 font-black">₹31,500</span> · 0% EMI starts at <span className="text-[#184A99] font-black">₹18,000</span></span>
              </li>
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">🩺</div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">Free 3-Day clinical trial + expert audiologist tuning</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Product showcase */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Signia Orion Series Catalog</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to get direct pricing on WhatsApp</p>
          </div>
          <div className="space-y-3">
            {TOP5.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="relative w-[110px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-3">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={90}
                    height={90}
                    loading="lazy"
                    className="object-contain rounded-xl"
                  />
                  <span className={`absolute top-2 left-2 text-[8px] font-bold px-2 py-0.5 rounded-full leading-tight ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Image src={p.brandLogo} alt={p.brand} width={60} height={12} className="h-3 w-auto grayscale opacity-50" />
                      <span className="text-[10px] text-slate-400 font-medium">{p.brand}</span>
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-1.5">{p.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold leading-tight">
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-[9px] text-slate-500 font-medium mb-1">Orion Series · German Tech</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none mb-0.5">Starting from</p>
                      <p className="text-[11px] font-bold text-[#184A99]">Price on Request</p>
                    </div>
                    <PopupTrigger className="flex items-center gap-1 bg-[#184A99] text-white text-[10px] font-bold px-3 py-2 rounded-xl active:scale-95 transition flex-shrink-0">
                      See Price
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
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
            <h2 className="text-lg font-black text-slate-900">Insono Hearing vs Others</h2>
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono Hearing</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-[#184A99] text-white text-[11px] font-bold">
              <div className="py-3 px-3">Feature</div>
              <div className="py-3 px-2 text-center border-l border-white/20 bg-white/10 text-yellow-300">Insono</div>
              <div className="py-3 px-2 text-center border-l border-white/20 text-white/70">Others</div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-[11px] border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                <div className="py-3 px-3 font-medium text-slate-700 leading-snug">{row.feature}</div>
                <div className="py-3 px-2 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                  <span className="text-emerald-500 text-base font-black">✓</span>
                </div>
                <div className="py-3 px-2 flex items-center justify-center border-l border-slate-100">
                  {row.others === false ? (
                    <span className="text-red-400 text-base font-black">✗</span>
                  ) : (
                    <span className="text-amber-500 text-[9px] font-bold leading-tight text-center">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <PopupTrigger className="w-full mt-4 h-[46px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[13px] font-bold active:scale-[0.97] transition shadow-md shadow-[#184A99]/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Orion Price List
          </PopupTrigger>
        </section>

        {/* Reviews */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image src="/badge/google.webp" alt="Google" width={60} height={20} className="h-5 w-auto" />
              <span className="text-[11px] font-bold text-slate-500">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <p className="text-[13px] font-black text-slate-800">4.9 / 5</p>
            <p className="text-[10px] text-slate-400 font-medium">Based on 1,200+ verified reviews</p>
          </div>
          <div className="space-y-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0 ${r.avatarColor}`}>
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold text-slate-800 leading-none">{r.name}</p>
                      <span className="text-[9px] text-slate-400">{r.time}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-0.5">{r.location} · <span className="text-emerald-500 font-semibold">✓ Verified</span></p>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-[10px]">★</span>)}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
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
        <section className="py-20 px-6 bg-white mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <FAQAccordion />
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 t5-bottom-bar flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I want to know about Signia Orion hearing aids and pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.833L.057 23.057a.75.75 0 00.921.921l5.224-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.724 9.724 0 01-4.962-1.354l-.356-.212-3.697 1.029 1.029-3.697-.212-.356A9.724 9.724 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            <span className="text-[10px] font-black leading-none font-bold">Chat with Expert</span>
          </a>
          <div className="w-px bg-slate-100" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[10px] font-black leading-none text-center font-bold">Call and Save Up to ₹31,500</span>
          </a>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          DESKTOP (min-width: 769px)
      ──────────────────────────────────────────────────────────── */}
      <div className="hidden md:block">

        {/* Hero */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

              {/* Col 1: Text */}
              <div className="flex-[1.2] pt-0">
                <div className="t5-left hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse" />
                  Official Signia Partner Clinic · 100% Genuine German Products
                </div>

                <h1 className="t5-up d1 text-2xl lg:text-[38px] xl:text-[40px] font-black leading-[1.15] mb-8 tracking-tight">
                  <span className="block whitespace-nowrap bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Signia Orion Hearing
                  </span>
                  <span className="block whitespace-nowrap bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Aids Official 2026
                  </span>
                </h1>

                <p className="t5-up d2 text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                  Compare rechargeable, Bluetooth-enabled, RIC, custom CIC, and heavy-duty BTE models in the legendary Signia Orion series. Schedule your{" "}
                  <span className="text-[#184A99] font-bold">Free Clinical Trial</span> today.
                </p>

                <div className="t5-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
                  <div>
                    <p className="text-xl font-bold text-slate-900">2 Lakh+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Happy Users</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">100+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pan-India Cities</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">100+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Audiologists</p>
                  </div>
                </div>

                <div className="t5-up d4 pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Authorized Signia Partner Clinics</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Hero image */}
              <div className="t5-scale hidden xl:flex flex-[1.2] justify-center relative py-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px]" />
                <Image
                  src="https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg"
                  alt="Signia Orion Series Hearing Aids"
                  width={480}
                  height={440}
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0_0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700 rounded-3xl"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Col 3: Lead form */}
              <div className="t5-up d4 w-full lg:w-[360px] xl:w-[380px] flex-shrink-0 pt-0">
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    Free Trial
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Get Price List &amp; Book Trial</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Download the complete Signia Orion 2026 price guide instantly on WhatsApp.</p>
                  <LeadForm />
                  <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                    🔐 256-bit Secure · 100% Private
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Product section */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Orion Catalog</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">The Signia Orion Lineup</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">
              Combining world-class German durability, intelligent speech clarity, and all-day rechargeable comfort.
            </p>
          </div>

          <div className="grid gap-12">
            {TOP5.map((p) => (
              <div
                key={p.rank}
                className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 flex flex-col lg:flex-row group"
              >
                <div className="lg:w-[420px] bg-slate-50 relative min-h-[400px] flex items-center justify-center p-12">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain p-16 group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                  />
                  <div className={`absolute top-10 left-10 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="flex-1 p-12 lg:p-20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-5 mb-10">
                      <Image src={p.brandLogo} alt={p.brand} width={72} height={24} className="h-6 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
                      <div className="h-5 w-[1px] bg-slate-200" />
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">#{p.rank} Choice · Orion Series Tech</span>
                    </div>
                    <h3 className="text-5xl font-bold text-slate-950 mb-6 tracking-tight">{p.title}</h3>
                    <p className="text-[#184A99] text-2xl font-bold mb-12 italic leading-relaxed">&ldquo;{p.highlight}&rdquo;</p>
                    <div className="flex flex-wrap gap-4 mb-12">
                      {p.features.map((f) => (
                        <span key={f} className="bg-slate-50 text-slate-500 px-6 py-3 rounded-2xl text-[11px] font-bold border border-slate-100 uppercase tracking-widest">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-start gap-10 pt-12 border-t border-slate-50">
                    <PopupTrigger className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#184A99] text-white px-12 py-6 rounded-[2rem] font-bold text-sm hover:bg-[#13366e] transition border border-slate-200 uppercase tracking-widest shadow-xl shadow-blue-100">
                      Get Orion Price List
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">The Insono Advantage</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Insono Hearing vs Others</h3>
              <p className="text-slate-500 mt-3 text-base">Why thousands across India choose Insono</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 bg-[#184A99] text-white text-sm font-bold">
                <div className="py-4 px-6">Feature</div>
                <div className="py-4 px-4 text-center border-l border-white/20 bg-white/10 text-yellow-300">Insono</div>
                <div className="py-4 px-4 text-center border-l border-white/20 text-white/70">Others</div>
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                  <div className="py-4 px-6 font-medium text-slate-700">{row.feature}</div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                    <span className="text-emerald-500 text-lg font-black">✓</span>
                  </div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100">
                    {row.others === false ? (
                      <span className="text-red-400 text-lg font-black">✗</span>
                    ) : (
                      <span className="text-amber-500 text-xs font-bold">{row.others}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <PopupTrigger className="inline-flex items-center gap-3 bg-[#184A99] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-[#13366e] transition shadow-xl shadow-blue-100 uppercase tracking-widest">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download &amp; Compare Orion Prices
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Image src="/badge/google.webp" alt="Google" width={72} height={24} className="h-6 w-auto" />
                <span className="text-sm font-bold text-slate-500">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
              </div>
              <p className="text-2xl font-black text-slate-800">4.9 / 5</p>
              <p className="text-sm text-slate-400 font-medium mt-1">Based on 1,200+ verified Google reviews</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REVIEWS.map((r) => (
                <div key={r.name} className="bg-slate-50 rounded-2xl border border-slate-100 p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${r.avatarColor}`}>
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-none">{r.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{r.location} · <span className="text-emerald-500 font-semibold">✓ Verified</span></p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                    <span className="text-[10px] text-slate-400 ml-1 self-center">{r.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
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

        {/* FAQ - dark section */}
        <section className="bg-[#0D2240] py-32 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-24">Frequently Asked Questions</h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" loading="lazy" />
            <div className="flex gap-6 justify-center text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
              <Link href="/landing/signia-orion/privacy" className="hover:text-[#184A99]">Privacy Policy</Link>
              <Link href="/landing/signia-orion/terms" className="hover:text-[#184A99]">Terms of Use</Link>
            </div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">
              © 2026 Insono Hearing · Top Hearing Aid Specialist · India
            </p>
          </div>
        </footer>

      </div>

      <PopupModal />
    </div>
  );
}
