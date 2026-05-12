"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";
import { Download, Phone, MessageSquare, ShieldCheck, Star, ArrowRight, CheckCircle2, Zap, Users, MapPin, Stethoscope, FileText } from "lucide-react";

const CHANDIGARH_MODELS = [
  {
    rank: 1,
    badge: "2026 Flagship",
    badgeColor: "bg-[#184A99] text-white",
    title: "Signia Pure Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "/lp/signia1.png",
    features: ["Multi-Stream NPU", "Real-Time Tracking", "OVP 2.0 Architecture", "Wireless Charging"],
    highlight: "Powered by the 2026 Multi-Stream NPU for 360° conversation clarity",
    waMessage: "Hi, I want to know about the 2026 Signia IX in Chandigarh",
  },
  {
    rank: 2,
    badge: "AI Evolution",
    badgeColor: "bg-[#0D2240] text-white",
    title: "Oticon Intent",
    brand: "Oticon",
    brandLogo: "/brands/oticon.svg",
    image: "/lp/oticon1.png",
    features: ["4D Bio-Sensors", "Neural Network 2.0", "Cognitive Sound", "LE Audio Ready"],
    highlight: "World's first 4D Bio-Sensory AI that adapts to your listening intent",
    waMessage: "Hi, I want to know about the 2026 Oticon Intent in Chandigarh",
  },
  {
    rank: 3,
    badge: "Smart Connectivity",
    badgeColor: "bg-[#0D2240] text-white",
    title: "Phonak Audeo Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak1.png",
    features: ["Auracast™ Ready", "AutoSense 6.0 AI", "Universal Bluetooth", "Bio-Metric Sensors"],
    highlight: "Hyper-personalized sound with next-gen Auracast™ connectivity",
    waMessage: "Hi, I want to know about the 2026 Phonak Lumity in Chandigarh",
  },
  {
    rank: 4,
    badge: "Bio-Tech Leader",
    badgeColor: "bg-emerald-600 text-white",
    title: "Starkey Genesis AI",
    brand: "Starkey",
    brandLogo: "/brands/signia.svg", // Placeholder
    image: "/lp/star1.png",
    features: ["Neuro-Processor 2.0", "Fall Detection AI", "Vitals Tracking", "51-Hour Runtime"],
    highlight: "Advanced 2026 Neuro-Processing with integrated biometric health tracking",
    waMessage: "Hi, I want to know about the 2026 Starkey Genesis AI in Chandigarh",
  },
];

const FAQS = [
  {
    q: "What is the price of hearing aids in Chandigarh?",
    a: "Prices start from ₹9,999 and vary by brand, technology, and features like Bluetooth or rechargeability. EMI options are available for every budget. Fill the form to get the full price list instantly on WhatsApp.",
  },
  {
    q: "Do you offer free hearing tests in Chandigarh?",
    a: "Yes, 100% free hearing tests at our Chandigarh clinic by certified audiologists using advanced diagnostic equipment. No purchase obligation.",
  },
  {
    q: "Which hearing aid brands are available in Chandigarh?",
    a: "Signia, Phonak, Widex, Oticon, ReSound, and Starkey — all premium brands with genuine manufacturer warranty.",
  },
  {
    q: "Can I get fitted on the same day?",
    a: "Yes. Most patients are professionally fitted and walk out with their hearing aid on the same day of their appointment.",
  },
  {
    q: "Do you offer home visits in Chandigarh?",
    a: "Yes, home hearing tests and trials are available across Chandigarh, especially for senior citizens who prefer in-home consultation.",
  },
  {
    q: "Is there warranty and after-sales support?",
    a: "All hearing aids come with manufacturer warranty along with up to 4 years extended warranty, with full servicing support at our Chandigarh clinic.",
  },
];

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

function FAQAccordion() {
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
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              openIndex === i ? "bg-[#184A99] text-white rotate-180" : "bg-slate-100 text-slate-400"
            }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 sm:px-8 pb-8">
                  <div className="h-[1px] bg-slate-100 mb-6 w-full"></div>
                  <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ChandigarhLandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">
      {/* ── Global Style Overrides for Mobile ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          header:not(.custom-mobile-header), 
          .sticky.top-0:not(.custom-mobile-header-wrapper),
          .md\\:hidden.fixed.bottom-0:not(.custom-bottom-bar) {
            display: none !important;
          }
          body {
            padding-top: 0 !important;
          }
        }
      ` }} />
      {/* ────────────────────────────────────────────────────────────────────────────
          MOBILE VERSION (max-width: 768px)
      ──────────────────────────────────────────────────────────────────────────── */}
      <div className="block md:hidden pb-20">
        
        {/* SECTION 1 — TOP URGENCY BAR */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2"></span>
          Limited Trial Slots for May in Chandigarh
        </div>

        {/* SECTION 2 — HEADER */}
        <div className="sticky top-0 z-50 bg-transparent custom-mobile-header-wrapper">
          <header className="px-4 py-3 flex items-center justify-between custom-mobile-header">
            <Link href="/">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-2 active:scale-95 transition uppercase tracking-widest"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Expert
            </a>
          </header>
        </div>

        {/* SECTION 3 — HERO SECTION */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden">
          <div className="px-6 pt-10 pb-12 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 border border-slate-100 shadow-sm"
            >
              <Star className="w-3 h-3 text-[#184A99] fill-[#184A99]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Chandigarh's Most Trusted Clinic</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[26px] font-black leading-[1.1] mb-3 text-center tracking-tight px-2"
            >
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                Crystal Clear <br/>
                Hearing Aids <br/>
                in Chandigarh.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-20 text-slate-500 text-[12px] font-medium mb-1 leading-relaxed max-w-[240px] mx-auto"
            >
              Experience 2026's Best Brands with a <span className="text-[#184A99] font-bold">Free Trial</span> in Chandigarh.
            </motion.p>

            {/* Hero Image Section (Compact) */}
            <div className="relative w-full mb-3 flex flex-col items-center justify-center -mt-2">
              <div className="absolute w-[120px] h-[120px] bg-[#184A99]/5 rounded-full blur-[30px]"></div>
              <Image 
                src="/signia_bct2.png" 
                alt="Premium Signia Hearing Aids" 
                width={160} 
                height={160} 
                className="relative z-10 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                priority
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-[280px] mx-auto mb-4 relative z-30"
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full h-[46px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[13px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all"
              >
                <FileText className="w-4 h-4" />
                Download Brand Price List
              </button>
            </motion.div>

            {/* Official Partner Banner */}
            <div className="mb-10">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Official Partner of leading brands</p>
              <div className="flex items-center justify-center gap-6 grayscale opacity-50 overflow-hidden">
                {BRAND_LOGOS.map((logo, i) => (
                  <img key={i} src={logo} alt="brand" className="h-4 w-auto object-contain" />
                ))}
              </div>
            </div>

            {/* Quick Stats - Compact Row */}
            <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-8 max-w-[320px] mx-auto">
              {[
                { icon: <Users className="w-3.5 h-3.5" />, label: "2 Lakh+", sub: "Customers" },
                { icon: <MapPin className="w-3.5 h-3.5" />, label: "15+", sub: "Clinics" },
                { icon: <Stethoscope className="w-3.5 h-3.5" />, label: "100+", sub: "Audiologists" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="flex justify-center text-[#184A99] mb-1">{s.icon}</div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">{s.label}</p>
                  <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY INSONO */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="text-center mb-10">
            <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.3em] mb-3">Why Us</h2>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">Chandigarh's #1 Choice</h3>
          </div>
          <div className="space-y-4">
            {[
              { icon: "🏥", title: "Local Expert Clinic", desc: "Expert fitting and after-sales care at our centrally located Chandigarh clinic." },
              { icon: "🔍", title: "Test 5+ Top Brands", desc: "Signia, Phonak, Widex & more — all available for a side-by-side free trial." },
              { icon: "💰", title: "Direct Factory Pricing", desc: "Genuine models with manufacturer warranty at the best local rates in the city." },
            ].map((card) => (
              <div key={card.title} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex gap-5 items-start shadow-sm">
                <div className="text-3xl flex-shrink-0 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-2xl">{card.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5 text-base">{card.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — PRODUCT SHOWCASE */}
        <section className="py-20 px-6 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.3em] mb-3">The 2026 Collection</h2>
            <h3 className="text-2xl font-bold text-slate-900">Elite Performance</h3>
          </div>
          <div className="space-y-8">
            {CHANDIGARH_MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col">
                <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center">
                  <Image src={p.image} alt={p.title} fill className="object-contain p-10" />
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="p-8 pt-6 text-center">
                  <div className="flex justify-center mb-4 opacity-50">
                    <Image src={p.brandLogo} alt={p.brand} width={60} height={20} className="h-4 w-auto object-contain grayscale" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-[#184A99] text-[14px] font-bold italic mb-6 leading-snug">"{p.highlight}"</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {p.features.map((f) => (
                      <span key={f} className="bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="w-full h-[58px] bg-[#0D2240] text-white flex items-center justify-center gap-2 rounded-2xl text-[13px] font-bold uppercase tracking-widest active:scale-95 transition shadow-lg shadow-blue-100"
                  >
                    <FileText className="w-5 h-5" />
                    Get Full Price List
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — LEAD FORM */}
        <section id="lead-form" className="py-20 px-6 bg-[#eaf5ff]">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#0D2240] leading-tight mb-4 text-center">Book Free Hearing Test</h2>
            <p className="text-slate-600 text-base">Takes 30 seconds. VIP slots available for Chandigarh residents.</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white">
            <LeadForm isMobile />
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <section className="py-20 px-6 bg-white mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Hearing Aid FAQ</h2>
          <FAQAccordion />
        </section>

        {/* STICKY BOTTOM BAR */}
        <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white z-[9999] flex items-stretch shadow-[0_-10px_30px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar">
          <a
            href="https://wa.me/916204260510?text=Hi, I want hearing aid info for Chandigarh"
            className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────────
          DESKTOP VERSION (min-width: 769px)
      ──────────────────────────────────────────────────────────────────────────── */}
      <div className="hidden md:block">
        
        {/* HERO SECTION */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Column 1: Text */}
              <div className="flex-[1.6] pt-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20"
                >
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse"></span>
                  Authorized Partner · Expert Audiologists in Chandigarh
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 text-[#0D2240] tracking-tight"
                >
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Crystal Clear <br />
                    Hearing Aids. <br />
                    100% Invisible.
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium"
                >
                  Discover the <span className="text-[#184A99] font-bold underline decoration-4 decoration-[#184A99]/10 underline-offset-8">2026 Elite Collection</span>. Experience digital clarity with a <span className="text-[#184A99] font-bold">Free Clinical Trial</span> at Chandigarh's most trusted center.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12"
                >
                  {[
                    { icon: <Users className="w-6 h-6" />, label: "2 Lakh+", sub: "Happy Customers" },
                    { icon: <MapPin className="w-6 h-6" />, label: "15+", sub: "Clinics Across India" },
                    { icon: <Stethoscope className="w-6 h-6" />, label: "100+", sub: "Audiologists" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-[#184A99] mb-2">{s.icon}</div>
                      <p className="text-xl font-bold text-slate-900">{s.label}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.sub}</p>
                    </div>
                  ))}
                </motion.div>

                <div className="pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <img key={i} src={logo} alt="brand" className="h-4 w-auto object-contain" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Image (Center) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden xl:flex flex-1 justify-center relative group py-20"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px] animate-pulse"></div>
                <Image 
                  src="/signia_bct2.png" 
                  alt="Premium Signia Hearing Aids" 
                  width={500} 
                  height={500} 
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700 rounded-3xl"
                  priority
                />
              </motion.div>

              {/* Column 3: Form */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full lg:w-[380px] flex-shrink-0 pt-8"
              >
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    Free Consultation
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Download Prices & Claim Free Trial</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 Brand Price List instantly on WhatsApp.</p>
                  <LeadForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <div className="bg-white py-12 border-y border-slate-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Official Authorized Partner</span>
          </div>
          <div className="relative flex items-center">
            <div className="animate-marquee flex items-center gap-24 whitespace-nowrap">
              {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                <img key={i} src={logo} alt="Brand Logo" className="h-10 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition duration-500" />
              ))}
            </div>
          </div>
        </div>

        {/* WHY SECTION */}
        <section className="py-32 bg-slate-50" id="why">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">The Insono Standard</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">Why Chandigarh Trusts Us</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
              {[
                { title: "Clinical Fitting Excellence", desc: "Our senior audiologists in Chandigarh specialize in precision digital tuning and custom ear-mold solutions.", icon: <Star className="w-10 h-10 text-[#184A99]" /> },
                { title: "Direct Brand Partner", desc: "As authorized partners of Signia, Phonak & Widex, we offer 100% genuine devices with global warranty.", icon: <Zap className="w-10 h-10 text-amber-500" /> },
                { title: "Lifetime Local Care", desc: "Enjoy unlimited fine-tuning and servicing at our centrally located Chandigarh experience center.", icon: <ShieldCheck className="w-10 h-10 text-emerald-500" /> },
              ].map((item) => (
                <motion.div 
                  whileHover={{ y: -8 }}
                  key={item.title} 
                  className="bg-white p-12 rounded-[3.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-100 text-center transition-all duration-500"
                >
                  <div className="mb-10 flex justify-center bg-slate-50 w-20 h-20 mx-auto items-center rounded-[2rem]">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">{item.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Premium Collection</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">2026's Top Models</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">Individually selected by our experts for the active lifestyles of Chandigarh residents.</p>
          </div>

          <div className="grid gap-12">
            {CHANDIGARH_MODELS.map((p) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={p.rank} 
                className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col lg:flex-row group"
              >
                <div className="lg:w-[420px] bg-slate-50 relative min-h-[400px] flex items-center justify-center p-12">
                  <Image src={p.image} alt={p.title} fill className="object-contain p-16 group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute top-10 left-10 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="flex-1 p-12 lg:p-20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-5 mb-10">
                      <img src={p.brandLogo} alt={p.brand} className="h-6 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
                      <div className="h-5 w-[1px] bg-slate-200"></div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Medical Grade Technology</span>
                    </div>
                    <h3 className="text-5xl font-bold text-slate-950 mb-6 tracking-tight">{p.title}</h3>
                    <p className="text-[#184A99] text-2xl font-bold mb-12 italic leading-relaxed">"{p.highlight}"</p>
                    <div className="flex flex-wrap gap-4 mb-12">
                      {p.features.map((f) => (
                        <span key={f} className="bg-slate-50 text-slate-500 px-6 py-3 rounded-2xl text-[11px] font-bold border border-slate-100 uppercase tracking-widest">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-start gap-10 pt-12 border-t border-slate-50">
                    <button 
                      onClick={() => setIsPopupOpen(true)}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#184A99] text-white px-12 py-6 rounded-[2rem] font-bold text-sm text-center hover:bg-[#13366e] transition border border-slate-200 uppercase tracking-widest shadow-xl shadow-blue-100"
                    >
                      Get Full Price List <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — DESKTOP LEAD FORM (BOTTOM) */}
        <section id="lead-form-bottom" className="py-32 bg-[#eaf5ff]">
          <div className="max-w-4xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Immediate Assistance</h2>
              <h3 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">Get Your Free Consultation in Chandigarh</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">Our senior audiologists are available for same-day trials. Fill in your details to reserve your slot.</p>
            </div>
            <div className="w-full lg:w-[400px] bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white">
              <LeadForm />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
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
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" />
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">© 2026 Insono Hearing · Chandigarh Specialist Center</p>
          </div>
        </footer>
      </div>

      {/* ── PREMIUM LEAD POPUP MODAL ── */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-[#0D2240]/80 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 sm:p-12">
                <div className="inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-[#184A99] uppercase tracking-widest">VIP Access · Chandigarh</span>
                </div>
                
                <h2 className="text-3xl font-bold text-[#0D2240] mb-3 leading-tight">Download 2026 Price List</h2>
                <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
                  Enter your details to receive the full brand comparison and <span className="text-[#184A99] font-bold">Claim Your Free Clinical Trial</span> instantly.
                </p>

                <LeadForm compact isMobile={typeof window !== 'undefined' && window.innerWidth < 768} />

                <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale">
                   <img src="/brand/signia.webp" alt="Signia" className="h-4 w-auto object-contain" />
                   <img src="/brand/phonak.webp" alt="Phonak" className="h-4 w-auto object-contain" />
                   <img src="/brand/widex.webp" alt="Widex" className="h-4 w-auto object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
