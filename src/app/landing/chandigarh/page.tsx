"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";
import { Download, Phone, MessageSquare, ShieldCheck, Star } from "lucide-react";

const CHANDIGARH_MODELS = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-blue-600 text-white",
    title: "Signia Pure Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: ["Rechargeable", "AI Noise Cancellation", "Bluetooth", "Notch Therapy"],
    highlight: "AI-powered hearing with clinically proven Notch Therapy",
    waMessage: "Hi, I want to know about Signia Pure Charge&Go IX in Chandigarh",
  },
  {
    rank: 2,
    badge: "Best for First-Time Users",
    badgeColor: "bg-purple-600 text-white",
    title: "Phonak Audeo Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak1.png",
    features: ["AutoSense OS", "Universal Connectivity", "Clear Speech", "Noise Cancel"],
    highlight: "Automatically adapts to every sound environment",
    waMessage: "Hi, I want to know about Phonak Audeo Lumity in Chandigarh",
  },
  {
    rank: 3,
    badge: "Most Natural Sound",
    badgeColor: "bg-green-600 text-white",
    title: "Widex MOMENT Sheer",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex1.png",
    features: ["Zen Tones", "IP68 Waterproof", "Smartphone Control", "Rechargeable"],
    highlight: "World's fastest sound processing for the most natural hearing experience",
    waMessage: "Hi, I want to know about Widex MOMENT Sheer in Chandigarh",
  },
  {
    rank: 4,
    badge: "Best Connectivity",
    badgeColor: "bg-red-600 text-white",
    title: "ReSound Nexia",
    brand: "ReSound",
    brandLogo: "/brands/resound.svg",
    image: "/lp/signia2.png",
    features: ["Auracast Ready", "Relief App", "All-Day Battery", "Smallest RIC"],
    highlight: "Auracast-ready with all-day battery and advanced sound therapy",
    waMessage: "Hi, I want to know about ReSound Nexia in Chandigarh",
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
    <div className="space-y-4">
      {FAQS.map((faq, i) => (
        <div key={i} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center text-left py-2"
          >
            <span className="font-bold text-gray-900 pr-8 text-base">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 text-[16px] mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ChandigarhLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-blue-100">
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
        <div className="bg-red-600 text-white py-2 px-4 text-center text-[13px] font-bold uppercase tracking-wide">
          ⚠️ Limited Free Trial Slots in Chandigarh — This Month Only!
        </div>

        {/* SECTION 2 — HEADER */}
        <div className="sticky top-0 z-50 bg-white custom-mobile-header-wrapper">
          <header className="px-4 py-3 flex items-center justify-between border-b border-gray-100 custom-mobile-header">
            <Link href="/">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-10 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-black flex items-center gap-1.5 shadow-sm active:scale-95 transition uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              Call Expert
            </a>
          </header>
        </div>

        {/* SECTION 3 — HERO SECTION */}
        <section className="bg-[#003087] text-white relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="px-5 pt-10 pb-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/10">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-[11px] font-black uppercase tracking-widest">Chandigarh's Top-Rated Clinic</span>
            </div>

            <h1 className="text-[32px] font-black leading-tight mb-2 uppercase tracking-tight">
              Best Hearing Aids in <br/><span className="text-yellow-400">Chandigarh</span>
            </h1>
            
            <p className="text-blue-100 text-lg font-medium mb-6 leading-relaxed max-w-xs mx-auto">
              Get 100% Free Hearing Test & Trial from India's Largest Hearing Chain.
            </p>

            {/* Hero Image Section */}
            <div className="relative w-full h-[220px] mb-8">
              <Image 
                src="/hero2.png" 
                alt="Modern Hearing Aid" 
                fill 
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <div className="max-w-sm mx-auto mb-8">
              {/* DOWNLOAD BUTTON */}
              <a
                href="/price-download?utm_source=website&utm_medium=herocta&utm_campaign=chandigarh-mobile"
                className="w-full h-[64px] bg-white text-[#003087] flex items-center justify-center gap-3 rounded-2xl text-lg font-black shadow-xl shadow-black/20 active:scale-[0.98] transition border border-white/20"
              >
                <Download className="w-6 h-6" />
                Download Brand Price List
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-blue-200 uppercase tracking-widest mb-10">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Free</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> No Obligation</span>
            </div>

            {/* Trust Badges - Optimized for Mobile */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🧪", title: "Free Test" },
                { icon: "💳", title: "0% EMI" },
                { icon: "👥", title: "2 Lakh+" },
              ].map((b) => (
                <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl py-4 text-center">
                  <span className="text-2xl block mb-1">{b.icon}</span>
                  <p className="text-[10px] font-black leading-tight uppercase tracking-widest text-white">{b.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="h-4 bg-gradient-to-b from-transparent to-white/5"></div>
        </section>

        {/* SECTION 4 — WHY INSONO */}
        <section className="py-16 px-5 bg-white">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">Why Chandigarh Trusts Insono</h2>
          <div className="space-y-4">
            {[
              { icon: "🏥", title: "Local Chandigarh Clinic", desc: "Expert fitting and after-sales care at our centrally located clinic." },
              { icon: "🔍", title: "Compare 5+ Top Brands", desc: "Signia, Phonak, Widex & more — all available for a free trial." },
              { icon: "💰", title: "Lowest Price Guarantee", desc: "Genuine models with manufacturer warranty at the best local prices." },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{card.icon}</div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1 text-base">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — PRODUCT CARDS */}
        <section className="py-16 px-5 bg-gray-50">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center uppercase tracking-tight">Top Hearing Aids for 2026</h2>
          <p className="text-gray-500 text-center text-sm mb-12">Hand-picked for Chandigarh residents</p>
          <div className="space-y-8">
            {CHANDIGARH_MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-sm flex flex-col">
                <div className="relative h-64 bg-white p-6">
                  <Image src={p.image} alt={p.title} fill className="object-contain p-8" />
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-[#003087] text-[16px] font-bold italic mb-6 leading-snug">"{p.highlight}"</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.features.map((f) => (
                      <span key={f} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border border-blue-100">
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/916204260510?text=${encodeURIComponent(p.waMessage)}`}
                    className="w-full h-[56px] bg-[#25D366] text-white flex items-center justify-center gap-2 rounded-xl text-sm font-black uppercase tracking-widest shadow-md active:scale-95 transition"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — LEAD FORM SECTION */}
        <section className="py-20 px-5 bg-white border-y border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-black text-gray-900 leading-tight mb-4">Book Your Free Hearing Test in Chandigarh</h2>
            <p className="text-gray-500 text-[16px]">Takes 30 seconds. Our audiologist will call you back shortly.</p>
          </div>

          <div className="bg-red-600 text-white font-black text-center py-3 px-6 rounded-full inline-block mx-auto mb-10 w-full shadow-lg shadow-red-100 uppercase tracking-wide text-sm">
            🔴 Only 8 Slots Left This Month — Book Now
          </div>

          <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-200 shadow-xl shadow-gray-100">
            <LeadForm isMobile />
          </div>
        </section>

        {/* SECTION 8 — FAQ (Mobile Accordion) */}
        <section className="py-20 px-5 bg-white mb-20">
          <h2 className="text-2xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight underline decoration-[#003087] decoration-4 underline-offset-8">Hearing Aid FAQ</h2>
          <FAQAccordion />
        </section>

        {/* SECTION 6 — STICKY BOTTOM BAR */}
        <div className="fixed bottom-0 left-0 right-0 h-[56px] bg-white z-[9999] flex items-stretch shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] border-t border-gray-100 custom-bottom-bar">
          <a
            href="https://wa.me/916204260510?text=Hi, I want hearing aid info for Chandigarh"
            className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 font-black text-xs uppercase tracking-[0.15em]"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#003087] text-white flex items-center justify-center gap-2 font-black text-xs uppercase tracking-[0.15em]"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────────
          DESKTOP VERSION (min-width: 769px)
          KEPT EXACTLY AS IT WAS
      ──────────────────────────────────────────────────────────────────────────── */}
      <div className="hidden md:block">
        
        {/* SECTION 1: HERO */}
        <section className="pt-2 bg-gradient-to-br from-[#023784] via-[#023784] to-[#0350b8] text-white">
          <div className="max-w-5xl mx-auto px-4 pt-4 pb-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="hidden lg:inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Authorized Partner · Expert Audiologists in Chandigarh
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                  Best Hearing Aids in Chandigarh – <br />
                  <span className="text-yellow-300">Expert Care, Transparent Prices</span>
                </h1>
                <p className="text-blue-100 text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                  Get clinically fitted hearing aids from Signia, Widex & Phonak at Chandigarh's most trusted hearing clinic. Compare models, check prices & book a Free Hearing Test today.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Free Hearing Test", sub: "At Our Chandigarh Clinic" },
                    { label: "0% EMI", sub: "Easy Payments" },
                    { label: "2 Lakh+", sub: "Customers Served" },
                  ].map((t) => (
                    <div key={t.label} className="bg-white/10 p-3 rounded-2xl border border-white/10">
                      <div className="text-sm font-bold">{t.label}</div>
                      <div className="text-[10px] text-blue-200 uppercase">{t.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 flex-shrink-0">
                <div className="bg-white rounded-3xl shadow-2xl p-6 text-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                    Limited Slots Available
                  </div>
                  <p className="text-[#023784] font-bold text-lg mb-1 text-center pt-2">Get Price List & Book Free Test</p>
                  <p className="text-gray-500 text-xs mb-4 text-center">You'll instantly receive the full brand price list on WhatsApp — 100% free, no obligation.</p>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Logo Marquee */}
        <div className="bg-white py-8 border-b border-gray-100 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 mb-4">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Authorized Partner of All Top Brands</p>
          </div>
          <div className="relative flex items-center">
            <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
              {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                <img key={i} src={logo} alt="Brand Logo" className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300" />
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: WHY HEARING AIDS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 uppercase tracking-tight">Why Getting a Hearing Aid in Chandigarh Matters</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">Untreated hearing loss affects your relationships, career, and mental health. The right hearing aid changes everything.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: "Local Expert Support", desc: "Our Chandigarh audiologists provide in-person fitting, tuning, and after-sales care — not just a device in a box.", icon: "🌍" },
                { title: "Multi-Brand Comparison", desc: "We stock 100+ models from all top brands. We help you compare and choose what's genuinely right for you.", icon: "🎯" },
                { title: "Transparent Pricing", desc: "No hidden charges. See real prices upfront and get EMI options that fit your budget.", icon: "🧘" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-md transition duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PRODUCT CARDS */}
        <section className="max-w-5xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 uppercase tracking-tight">Best Hearing Aids Available in Chandigarh – 2026 Models</h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">Recommended by our expert audiologists at our Chandigarh clinic.</p>
          </div>

          <div className="grid gap-8">
            {CHANDIGARH_MODELS.map((p) => (
              <div key={p.rank} className="bg-white border border-gray-200 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row group">
                <div className="sm:w-72 bg-gray-50 relative min-h-[250px] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-contain p-8 group-hover:scale-105 transition duration-500" />
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={p.brandLogo} alt={p.brand} className="h-6 w-auto grayscale group-hover:grayscale-0 transition duration-500" />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{p.brand} Precision Technology</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 mb-2">{p.title}</h3>
                    <p className="text-blue-600 text-sm font-bold mb-6 italic leading-relaxed">"{p.highlight}"</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.features.map((f) => (
                        <span key={f} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-[10px] font-black border border-blue-100 uppercase tracking-wider">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
                    <a
                      href={`https://wa.me/916204260510?text=${encodeURIComponent(p.waMessage)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl text-xs font-black hover:bg-[#128C7E] transition shadow-lg shadow-green-100 uppercase tracking-widest"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat with Audiologist
                    </a>
                    <a href="#lead-form" className="w-full sm:w-auto bg-[#023784] text-white px-8 py-3.5 rounded-2xl font-black text-xs text-center hover:bg-[#012d66] transition shadow-lg shadow-blue-100 uppercase tracking-widest">
                      Download Price List
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: FAQ */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-16 uppercase tracking-tight">Hearing Aid in Chandigarh – <span className="text-yellow-400">FAQs</span></h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] transition duration-300">
                  <h3 className="text-lg font-black mb-4 text-yellow-300 flex items-start gap-3">
                    <span className="text-white/20">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-blue-50/80 text-sm sm:text-base leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: BOTTOM LEAD FORM */}
        <section className="py-24" id="lead-form">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-[#023784] to-[#012d66] rounded-[4rem] p-8 sm:p-20 text-center text-white shadow-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight">Book Your Free Hearing Test in Chandigarh</h2>
                <p className="text-blue-100 mb-12 max-w-xl mx-auto text-sm sm:lg">Don't let hearing loss hold you back. Fill the form below to get a <strong>Free Consultation</strong> and our latest price list sent to your WhatsApp.</p>
                <div className="bg-white max-w-md mx-auto rounded-[3rem] p-8 sm:p-10 text-left shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">12 People Viewing this offer</span>
                    </div>
                  </div>
                  <LeadForm compact />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Footer minimal as per landing style */}
        <footer className="py-12 border-t border-gray-100 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <Image
              src="/logo.webp"
              alt="Insono Hearing"
              width={120}
              height={40}
              className="h-8 w-auto mx-auto mb-6 grayscale opacity-50"
            />
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">© 2026 Insono Hearing · Chandigarh Specialist Center</p>
          </div>
        </footer>
      </div>

    </div>
  );
}
