import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";

import PopupModal from "./PopupModal";

const CHANDIGARH_MODELS = [
  {
    rank: 1,
    badge: "Purest Sound",
    badgeColor: "bg-[#184A99] text-white",
    title: "Widex MOMENT Sheer",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex1.png",
    features: ["ZeroDelay Tech", "Natural Sound", "Rechargeable", "AI Personalization"],
    channels: "15 Channels",
    style: "RIC",
    highlight: "The most natural-sounding digital hearing aid ever made",
    waMessage: "Hi, I want to know about Widex MOMENT Sheer in Chandigarh",
  },
  {
    rank: 2,
    badge: "AI Powered",
    badgeColor: "bg-emerald-600 text-white",
    title: "Widex EVOKE 440",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex2.png",
    features: ["Machine Learning", "Fluid Sound", "Direct Streaming", "App Control"],
    channels: "15 Channels",
    style: "RIC",
    highlight: "The first smart hearing aid that learns from your preferences",
    waMessage: "Hi, I want to know about Widex EVOKE in Chandigarh",
  },
  {
    rank: 3,
    badge: "Discreet Fit",
    badgeColor: "bg-purple-600 text-white",
    title: "Widex MOMENT IIC",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex3.png",
    features: ["Invisible In-Canal", "Custom Fit", "PureSound Tech", "Tinnitus Masker"],
    channels: "15 Channels",
    style: "IIC",
    highlight: "Maximum discretion without compromising on Widex sound quality",
    waMessage: "Hi, I want to know about Widex MOMENT IIC in Chandigarh",
  },
  {
    rank: 4,
    badge: "Great Value",
    badgeColor: "bg-rose-600 text-white",
    title: "Widex Magnify",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex4.png",
    features: ["Rechargeable", "Smartphone Streaming", "Comfort Fit", "Clear Speech"],
    channels: "10 Channels",
    style: "RIC",
    highlight: "Premium features and rechargeability at an accessible price",
    waMessage: "Hi, I want to know about Widex Magnify in Chandigarh",
  },
  {
    rank: 5,
    badge: "Essential",
    badgeColor: "bg-amber-500 text-white",
    title: "Widex Enjoy",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex1.png",
    features: ["Stable Connection", "Speech Enhancement", "Durable Build", "Reliable Tech"],
    channels: "6 Channels",
    style: "BTE",
    highlight: "Widex quality and reliability for everyday hearing needs",
    waMessage: "Hi, I want to know about Widex Enjoy in Chandigarh",
  },
];

const FAQS = [
  {
    q: "What is the price of Widex hearing aids in Chandigarh?",
    a: "Widex hearing aids start from ₹19,500 and go up to ₹3,25,000 for the premium MOMENT series. We provide 0% EMI and exchange offers. Fill the form to get the latest Widex price list.",
  },
  {
    q: "Why is Widex known for 'natural sound'?",
    a: "Widex uses ZeroDelay technology that eliminates the 'echo' or 'metallic' sound found in many digital hearing aids, making it the top choice for musicians and sound purists.",
  },
  {
    q: "Is Widex MOMENT Sheer available in Chandigarh?",
    a: "Yes, Insono is an authorized premium partner for Widex in Chandigarh. We have the entire MOMENT Sheer collection available for a free clinical trial.",
  },
  {
    q: "Does Widex have rechargeable models?",
    a: "Yes, Widex MOMENT and Magnify series offer lithium-ion rechargeable models that last all day on a single charge.",
  },
  {
    q: "What is the warranty on Widex products?",
    a: "Widex offers up to 4 years of international warranty. Insono provides additional after-sales support and free servicing at our Chandigarh center.",
  },
  {
    q: "Do you offer home trials for Widex in Chandigarh?",
    a: "Yes, we provide home hearing tests and trials of Widex hearing aids across Chandigarh, Mohali, and Panchkula for your convenience.",
  },
];

const REVIEWS = [
  {
    name: "Sanjeev Chadda",
    initials: "SC",
    avatarColor: "bg-[#184A99]",
    location: "Sector 44, Chandigarh",
    time: "2 weeks ago",
    text: "As a music teacher, I was very picky about sound quality. Widex MOMENT is the only aid that sounded natural to me. Thanks to Insono for the expert fitting.",
  },
  {
    name: "Mohit Jindal",
    initials: "MJ",
    avatarColor: "bg-emerald-600",
    location: "Zirakpur",
    time: "1 month ago",
    text: "The AI features in Widex EVOKE are amazing. It automatically adjusts to different environments. Great experience at Insono Chandigarh clinic.",
  },
  {
    name: "Mrs. Surinder Kaur",
    initials: "SK",
    avatarColor: "bg-purple-600",
    location: "Mohali",
    time: "3 months ago",
    text: "I was looking for something invisible. Widex IIC was the perfect fit. Extremely happy with the professional service and the free trial period.",
  },
  {
    name: "Rajiv Singla",
    initials: "RS",
    avatarColor: "bg-rose-600",
    location: "Chandigarh",
    time: "1 week ago",
    text: "Best price for Widex in Chandigarh. The team is very helpful and the after-sales support is genuine. Highly recommended for senior citizens.",
  },
];

const BRAND_LOGOS = [
  "/brands/widex.svg",
  "/brands/signia.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

export default function ChandigarhLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          header:not(.custom-mobile-header),
          .sticky.top-0:not(.custom-mobile-header-wrapper),
          .md\\:hidden.fixed.bottom-0:not(.custom-bottom-bar) {
            display: none !important;
          }
          body { padding-top: 0 !important; }
        }
        @keyframes wx-fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wx-scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .wx-fade-up    { animation: wx-fadeUp  0.5s ease both; }
        .wx-fade-up-d1 { animation: wx-fadeUp  0.5s 0.1s ease both; }
        .wx-fade-up-d2 { animation: wx-fadeUp  0.5s 0.2s ease both; }
        .wx-fade-up-d3 { animation: wx-fadeUp  0.5s 0.3s ease both; }
        .wx-fade-up-d4 { animation: wx-fadeUp  0.5s 0.4s ease both; }
        .wx-scale-in   { animation: wx-scaleIn 0.6s 0.1s ease both; }
        .wx-scale-in-d4{ animation: wx-scaleIn 0.8s 0.5s ease both; }
      `}} />

      {/* ── MOBILE VERSION ── */}
      <div className="block md:hidden pb-20">

        {/* URGENCY BAR */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2"></span>
          Limited Trial Slots for May in Chandigarh
        </div>

        {/* HEADER */}
        <div className="sticky top-0 z-50 bg-transparent custom-mobile-header-wrapper">
          <header className="px-4 py-3 flex items-center justify-between custom-mobile-header">
            <Link href="/">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-2 active:scale-95 transition uppercase tracking-widest"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Expert
            </a>
          </header>
        </div>

        {/* HERO */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden">
          <div className="px-4 pt-3 pb-10 relative z-10 text-center">
            <h1 className="wx-fade-up text-[22px] font-black leading-[1.15] mb-5 text-center tracking-tight">
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                Widex Digital Hearing Aids Price 2026
              </span>
            </h1>

            <div className="wx-scale-in relative w-full mb-5 flex flex-col items-center justify-center">
              <div className="absolute w-[140px] h-[140px] bg-[#184A99]/8 rounded-full blur-[40px]"></div>
              <Image
                src="/lp/widex1.png"
                alt="Widex Digital Hearing Aid"
                width={180}
                height={180}
                className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                priority
              />
            </div>

            <ul className="wx-fade-up-d2 space-y-3 mb-6 text-left">
              {[
                { icon: "🎵", text: "ZeroDelay Natural Sound Technology" },
                { icon: "🏥", text: "Free Hearing Test at Chandigarh Clinic" },
                { icon: "💰", text: "Save upto ₹31,500 on Widex Aids" },
              ].map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <span className="text-lg flex-shrink-0">{b.icon}</span>
                  <span className="text-[13px] font-semibold text-slate-700 leading-snug">{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="wx-fade-up-d3 w-full">
              <PopupTrigger className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Widex Price List
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Best Selling Hearing Aids</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to get the full price list</p>
          </div>
          <div className="space-y-3">
            {CHANDIGARH_MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="relative w-[110px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-3">
                  <Image src={p.image} alt={p.title} width={90} height={90} className="object-contain" loading="lazy" />
                  <span className={`absolute top-2 left-2 text-[8px] font-bold px-2 py-0.5 rounded-full leading-tight ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Image src={p.brandLogo} alt={p.brand} width={60} height={12} className="h-3 w-auto grayscale opacity-50" loading="lazy" />
                      <span className="text-[10px] text-slate-400 font-medium">{p.brand}</span>
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-1.5">{p.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold leading-tight">{f}</span>
                      ))}
                    </div>
                    <p className="text-[9px] text-slate-500 font-medium mb-1">{p.style} · {p.channels}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none mb-0.5">Starting from</p>
                      <p className="text-[11px] font-bold text-[#184A99]">Price on Request</p>
                    </div>
                    <PopupTrigger className="flex items-center gap-1 bg-[#184A99] text-white text-[10px] font-bold px-3 py-2 rounded-xl active:scale-95 transition flex-shrink-0">
                      See Price
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Insono Hearing vs Others</h2>
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono Hearing in Chandigarh</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-[#184A99] text-white text-[11px] font-bold">
              <div className="py-3 px-3">Feature</div>
              <div className="py-3 px-2 text-center border-l border-white/20 bg-white/10">
                <div className="text-yellow-300">Insono</div>
              </div>
              <div className="py-3 px-2 text-center border-l border-white/20 text-white/70">Others</div>
            </div>
            {[
              { feature: "Free Hearing Test",    insono: true, others: false },
              { feature: "7-Day Free Trial",      insono: true, others: false },
              { feature: "Genuine Products",      insono: true, others: "Sometimes" },
              { feature: "EMI / 0% Finance",      insono: true, others: false },
              { feature: "Home Delivery (COD)",   insono: true, others: false },
              { feature: "Lifetime Servicing",    insono: true, others: false },
              { feature: "Certified Audiologist", insono: true, others: "Varies" },
              { feature: "Price Transparency",    insono: true, others: false },
            ].map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-[11px] border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                <div className="py-3 px-3 font-medium text-slate-700 leading-snug">{row.feature}</div>
                <div className="py-3 px-2 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                  <span className="text-emerald-500 text-base font-black">✓</span>
                </div>
                <div className="py-3 px-2 flex items-center justify-center border-l border-slate-100">
                  {row.others === true ? (
                    <span className="text-emerald-500 text-base font-black">✓</span>
                  ) : row.others === false ? (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Book Free Hearing Test at Insono
          </PopupTrigger>
        </section>

        {/* REVIEWS — Mobile */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image src="/badge/google.webp" alt="Google" width={60} height={20} className="h-5 w-auto" />
              <span className="text-[11px] font-bold text-slate-500">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
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
                      {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-[10px]">★</span>)}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">&quot;{r.text}&quot;</p>
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

        {/* FAQ — Mobile */}
        <section className="py-20 px-6 bg-white mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Hearing Aid FAQ</h2>
          <FAQAccordion />
        </section>

        {/* STICKY BOTTOM BAR */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I want to chat with an audiologist about Widex hearing aids in Chandigarh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
          </a>
          <div className="w-px bg-white/20" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[10px] font-black leading-none text-center">A Call Can Save ₹31,500</span>
          </a>
        </div>
      </div>

      {/* ── DESKTOP VERSION ── */}
      <div className="hidden md:block">

        {/* HERO */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Column 1: Text */}
              <div className="flex-[1.6] pt-8">
                <div className="wx-fade-up hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse"></span>
                  Authorized Partner · Expert Audiologists in Chandigarh
                </div>

                <h1 className="wx-fade-up-d1 text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 text-[#0D2240] tracking-tight">
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Widex Digital Hearing Aids Price 2026
                  </span>
                </h1>

                <p className="wx-fade-up-d2 text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                  Discover the <span className="text-[#184A99] font-bold underline decoration-4 decoration-[#184A99]/10 underline-offset-8">2026 Elite Collection</span>. Experience digital clarity with a <span className="text-[#184A99] font-bold">Free Clinical Trial</span> at Chandigarh&apos;s most trusted center.
                </p>

                <div className="wx-fade-up-d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
                  <div>
                    <div className="text-[#184A99] mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-900">2 Lakh+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Happy Customers</p>
                  </div>
                  <div>
                    <div className="text-[#184A99] mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-900">15+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Clinics Across India</p>
                  </div>
                  <div>
                    <div className="text-[#184A99] mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-900">100+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Audiologists</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Image */}
              <div className="wx-scale-in-d4 hidden xl:flex flex-1 justify-center relative group py-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px] animate-pulse"></div>
                <Image
                  src="/lp/widex1.png"
                  alt="Premium Widex Hearing Aids"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700 rounded-3xl"
                  priority
                />
              </div>

              {/* Column 3: Form */}
              <div className="wx-fade-up-d4 w-full lg:w-[380px] flex-shrink-0 pt-8">
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    Free Consultation
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Download Widex Prices & Claim Free Trial</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 Widex Price List instantly on WhatsApp.</p>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Premium Collection</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">2026&apos;s Top Models</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">Individually selected by our experts for the active lifestyles of Chandigarh residents.</p>
          </div>

          <div className="grid gap-12">
            {CHANDIGARH_MODELS.map((p) => (
              <div
                key={p.rank}
                className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 flex flex-col lg:flex-row group"
              >
                <div className="lg:w-[420px] bg-slate-50 relative min-h-[400px] flex items-center justify-center p-12">
                  <Image src={p.image} alt={p.title} fill className="object-contain p-16 group-hover:scale-105 transition-transform duration-700" loading="lazy" sizes="420px" />
                  <div className={`absolute top-10 left-10 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="flex-1 p-12 lg:p-20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-5 mb-10">
                      <Image src={p.brandLogo} alt={p.brand} width={72} height={24} className="h-6 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" loading="lazy" />
                      <div className="h-5 w-[1px] bg-slate-200"></div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{p.style} · {p.channels}</span>
                    </div>
                    <h3 className="text-5xl font-bold text-slate-950 mb-6 tracking-tight">{p.title}</h3>
                    <p className="text-[#184A99] text-2xl font-bold mb-12 italic leading-relaxed">&quot;{p.highlight}&quot;</p>
                    <div className="flex flex-wrap gap-4 mb-12">
                      {p.features.map((f) => (
                        <span key={f} className="bg-slate-50 text-slate-500 px-6 py-3 rounded-2xl text-[11px] font-bold border border-slate-100 uppercase tracking-widest">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-start gap-10 pt-12 border-t border-slate-50">
                    <PopupTrigger className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#184A99] text-white px-12 py-6 rounded-[2rem] font-bold text-sm text-center hover:bg-[#13366e] transition border border-slate-200 uppercase tracking-widest shadow-xl shadow-blue-100">
                      Get Full Price List
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON — Desktop */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">The Difference</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Insono Hearing vs Others</h3>
              <p className="text-slate-500 mt-3 text-base">Why thousands in Chandigarh choose Insono</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 bg-[#184A99] text-white text-sm font-bold">
                <div className="py-4 px-6">Feature</div>
                <div className="py-4 px-4 text-center border-l border-white/20 bg-white/10">
                  <span className="text-yellow-300">Insono</span>
                </div>
                <div className="py-4 px-4 text-center border-l border-white/20 text-white/70">Others</div>
              </div>
              {[
                { feature: "Free Hearing Test",    insono: true, others: false },
                { feature: "7-Day Free Trial",      insono: true, others: false },
                { feature: "Genuine Products",      insono: true, others: "Sometimes" },
                { feature: "EMI / 0% Finance",      insono: true, others: false },
                { feature: "Home Delivery (COD)",   insono: true, others: false },
                { feature: "Lifetime Servicing",    insono: true, others: false },
                { feature: "Certified Audiologist", insono: true, others: "Varies" },
                { feature: "Price Transparency",    insono: true, others: false },
              ].map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                  <div className="py-4 px-6 font-medium text-slate-700">{row.feature}</div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                    <span className="text-emerald-500 text-lg font-black">✓</span>
                  </div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100">
                    {row.others === true ? (
                      <span className="text-emerald-500 text-lg font-black">✓</span>
                    ) : row.others === false ? (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Book Free Hearing Test at Insono
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* REVIEWS — Desktop */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Image src="/badge/google.webp" alt="Google" width={72} height={24} className="h-6 w-auto" />
                <span className="text-sm font-bold text-slate-500">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
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
                    {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                    <span className="text-[10px] text-slate-400 ml-1 self-center">{r.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">&quot;{r.text}&quot;</p>
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

        {/* FAQ — Desktop (static) */}
        <section className="bg-[#0D2240] py-32 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-24">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold mb-4 text-[#eaf5ff]">Q. {faq.q}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" loading="lazy" />
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">© 2026 Insono Hearing · Widex Specialist Center · Chandigarh</p>
          </div>
        </footer>
      </div>

      <PopupModal />
    </div>
  );
}
