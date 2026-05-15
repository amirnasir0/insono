"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";
import { Phone, MessageSquare, ArrowRight, Users, MapPin, Stethoscope, FileText } from "lucide-react";

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const SIGNIA_MODELS = [
  {
    rank: 1,
    badge: "Best Seller",
    badgeColor: "bg-[#184A99] text-white",
    title: "Signia Fun SP",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773219362292-SIGNIA-FAST-P-IMG-1.png",
    features: ["Super Power BTE", "Noise Reduction", "Tinnitus Therapy", "Wireless Streaming"],
    channels: "16 Channels",
    style: "BTE",
    highlight: "Powerful BTE for moderate to severe hearing loss",
  },
  {
    rank: 2,
    badge: "Top Rated",
    badgeColor: "bg-emerald-600 text-white",
    title: "Signia Orion C&G",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: ["Rechargeable", "Bluetooth Streaming", "Speech Clarity", "App Control"],
    channels: "24 Channels",
    style: "RIC",
    highlight: "Best entry-level rechargeable hearing aid by Signia",
  },
  {
    rank: 3,
    badge: "Nearly Invisible",
    badgeColor: "bg-purple-600 text-white",
    title: "Signia Silk",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1775551490244-Untitled-design---2026-04-07T141048.093.png",
    features: ["Invisible In-Canal", "Ready-to-Wear", "Own Voice Processing", "Tinnitus Therapy"],
    channels: "32 Channels",
    style: "IIC",
    highlight: "Smallest invisible hearing aid — fits instantly, no custom mold",
  },
  {
    rank: 4,
    badge: "Ultra Stylish",
    badgeColor: "bg-rose-600 text-white",
    title: "Signia Styletto",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772794609852-cosmic-blue_rose-gold_double_dd4310ec-bb18-403c-a7c9-05467ff34b3b-%281%29.webp",
    features: ["Slim Elegant Design", "Rechargeable", "Bluetooth 5.0", "IX Platform AI"],
    channels: "48 Channels",
    style: "RIC",
    highlight: "Fashion-forward hearing aid with premium sound quality",
  },
  {
    rank: 5,
    badge: "Doctor's Choice",
    badgeColor: "bg-amber-500 text-white",
    title: "Signia Pure Charge&Go",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772792684301-Signia-Pure-Charge%26Go-7IX%40%40%40.webp",
    features: ["IX Platform AI", "Own Voice Processing", "Rechargeable", "Tinnitus Therapy"],
    channels: "48 Channels",
    style: "RIC",
    highlight: "India's most sold hearing aid — clinically proven performance",
  },
];

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

const REVIEWS_BASE = [
  {
    name: "Vikram Sharma",
    initials: "VS",
    avatarColor: "bg-[#184A99]",
    time: "1 month ago",
  },
  {
    name: "Anita Rao",
    initials: "AR",
    avatarColor: "bg-emerald-600",
    time: "2 months ago",
  },
  {
    name: "Kuldeep Dhillon",
    initials: "KD",
    avatarColor: "bg-purple-600",
    time: "3 months ago",
  },
  {
    name: "Meena Verma",
    initials: "MV",
    avatarColor: "bg-rose-600",
    time: "2 weeks ago",
  },
];

function FAQAccordion({ city }: { city: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQS = [
    {
      q: `What is the price of hearing aids in ${city}?`,
      a: `Prices start from ₹9,999 and vary by brand, technology, and features like Bluetooth or rechargeability. EMI options are available for every budget. Fill the form to get the full price list instantly on WhatsApp.`,
    },
    {
      q: `Do you offer free hearing tests in ${city}?`,
      a: `Yes, 100% free hearing tests at our ${city} clinic by certified audiologists using advanced diagnostic equipment. No purchase obligation.`,
    },
    {
      q: `Which hearing aid brands are available in ${city}?`,
      a: "Signia, Phonak, Widex, Oticon, ReSound, and Starkey — all premium brands with genuine manufacturer warranty.",
    },
    {
      q: "Can I get fitted on the same day?",
      a: "Yes. Most patients are professionally fitted and walk out with their hearing aid on the same day of their appointment.",
    },
    {
      q: `Do you offer home visits in ${city}?`,
      a: `Yes, home hearing tests and trials are available across ${city}, especially for senior citizens who prefer in-home consultation.`,
    },
    {
      q: "Is there warranty and after-sales support?",
      a: `All hearing aids come with manufacturer warranty along with up to 4 years extended warranty, with full servicing support at our ${city} clinic.`,
    },
  ];

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
                  <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed font-medium">{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function SigniaCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = use(params);
  const city = formatCity(citySlug);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const REVIEWS = [
    {
      ...REVIEWS_BASE[0],
      location: city,
      text: `Excellent service at Insono ${city}. The audiologist was very patient in explaining which Signia model suited my hearing loss. Got fitted the same day. Highly recommend!`,
    },
    {
      ...REVIEWS_BASE[1],
      location: city,
      text: "I was confused between multiple brands but the team at Insono helped me choose Signia Pure Charge&Go. Sound quality is amazing and the price was transparent — no hidden charges.",
    },
    {
      ...REVIEWS_BASE[2],
      location: city,
      text: "Free hearing test was done professionally. Got a 7-day trial before I bought. Cash on delivery made it easy. Very happy with my Signia Styletto — looks great too!",
    },
    {
      ...REVIEWS_BASE[3],
      location: city,
      text: `My mother got her Signia hearing aid from Insono ${city}. The home delivery was on time and the after-sales support has been wonderful. Will recommend to everyone.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">
      {/* ── Global Style Overrides for Mobile ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
          Limited Trial Slots for May in {city}
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
          <div className="px-4 pt-3 pb-10 relative z-10 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[22px] font-black leading-[1.15] mb-5 text-center tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                Signia Hearing Aids Price in {city} 2026
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative w-full mb-5 flex flex-col items-center justify-center"
            >
              <div className="absolute w-[140px] h-[140px] bg-[#184A99]/8 rounded-full blur-[40px]"></div>
              <Image
                src="/signia_bct2.png"
                alt="Signia Digital Hearing Aid"
                width={180}
                height={180}
                className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                priority
              />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 mb-6 text-left"
            >
              {[
                { icon: "🎧", text: "Bluetooth & Rechargeable Models" },
                { icon: "🏥", text: `Free Hearing Test at ${city} Clinic` },
                { icon: "💰", text: "Save upto ₹31,500 on Signia Aids" },
              ].map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <span className="text-lg flex-shrink-0">{b.icon}</span>
                  <span className="text-[13px] font-semibold text-slate-700 leading-snug">{b.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all"
              >
                <FileText className="w-4 h-4" />
                Download Signia Price List
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — PRODUCT SHOWCASE */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Best Selling Signia Hearing Aids</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to get the full price list</p>
          </div>
          <div className="space-y-3">
            {SIGNIA_MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="relative w-[110px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-3">
                  <Image src={p.image} alt={p.title} width={90} height={90} className="object-contain" />
                  <span className={`absolute top-2 left-2 text-[8px] font-bold px-2 py-0.5 rounded-full leading-tight ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <img src={p.brandLogo} alt={p.brand} className="h-3 w-auto grayscale opacity-50" />
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
                    <p className="text-[9px] text-slate-500 font-medium mb-1">{p.style} · {p.channels}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none mb-0.5">Starting from</p>
                      <p className="text-[11px] font-bold text-[#184A99]">Price on Request</p>
                    </div>
                    <button
                      onClick={() => setIsPopupOpen(true)}
                      className="flex items-center gap-1 bg-[#184A99] text-white text-[10px] font-bold px-3 py-2 rounded-xl active:scale-95 transition flex-shrink-0"
                    >
                      See Price <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON — Insono vs Others */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Insono Hearing vs Others</h2>
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono Hearing in {city}</p>
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
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-[11px] border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
              >
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
          <button
            onClick={() => setIsPopupOpen(true)}
            className="w-full mt-4 h-[46px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[13px] font-bold active:scale-[0.97] transition shadow-md shadow-[#184A99]/20"
          >
            <FileText className="w-4 h-4" />
            Download & Compare Prices
          </button>
        </section>

        {/* REVIEWS SECTION — Mobile */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img src="/badge/google.webp" alt="Google" className="h-5 w-auto" />
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

        {/* SECTION 8 — FAQ */}
        <section className="py-20 px-6 bg-white mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Hearing Aid FAQ</h2>
          <FAQAccordion city={city} />
        </section>

        {/* STICKY BOTTOM BAR */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar flex">
          <a
            href={`https://wa.me/916204260510?text=Hi, I want to chat with an audiologist about Signia hearing aids in ${city}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
          </a>
          <div className="w-px bg-white/20" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-black leading-none text-center">A Call Can Save ₹31,500</span>
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
                  Authorized Partner · Expert Audiologists in {city}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 text-[#0D2240] tracking-tight"
                >
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Signia Hearing Aids Price in {city} 2026
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium"
                >
                  Discover the{" "}
                  <span className="text-[#184A99] font-bold underline decoration-4 decoration-[#184A99]/10 underline-offset-8">
                    2026 Elite Collection
                  </span>
                  . Experience digital clarity with a{" "}
                  <span className="text-[#184A99] font-bold">Free Clinical Trial</span> at {city}&apos;s most trusted center.
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
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Download Signia Prices & Claim Free Trial</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 Signia Price List instantly on WhatsApp.</p>
                  <LeadForm city={citySlug} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Premium Collection</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">2026&apos;s Top Signia Models</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">
              Individually selected by our experts for the active lifestyles of {city} residents.
            </p>
          </div>

          <div className="grid gap-12">
            {SIGNIA_MODELS.map((p) => (
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
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{p.style} · {p.channels}</span>
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

        {/* COMPARISON — Insono vs Others (Desktop) */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">The Difference</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Insono Hearing vs Others</h3>
              <p className="text-slate-500 mt-3 text-base">Why thousands in {city} choose Insono</p>
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
              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-3 bg-[#184A99] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-[#13366e] transition shadow-xl shadow-blue-100 uppercase tracking-widest"
              >
                <FileText className="w-5 h-5" />
                Download & Compare Prices
              </button>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION — Desktop */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src="/badge/google.webp" alt="Google" className="h-6 w-auto" />
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

        {/* FAQ SECTION */}
        <section className="bg-[#0D2240] py-32 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-24">Frequently Asked Questions</h2>
            <FAQAccordion city={city} />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" />
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">
              © 2026 Insono Hearing · Signia Specialist Center · {city}
            </p>
          </div>
        </footer>
      </div>

      {/* ── PREMIUM LEAD POPUP MODAL ── */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-[#0D2240]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#184A99] via-[#E83D6D] to-[#184A99]" />

              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors z-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-6 pt-5 pb-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                    <img src="/image/dha-price.png" alt="Price List" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-2.5 py-0.5 mb-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider">Free · Instant on WhatsApp</span>
                    </div>
                    <h2 className="text-[18px] font-black text-[#0D2240] leading-tight">
                      Download Complete<br />Signia Price List 2026
                    </h2>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">What&apos;s included</p>
                  <ul className="space-y-2">
                    {[
                      "Signia Fun SP, Orion, Silk, Styletto & Pure C&G",
                      "All model prices with EMI breakdown",
                      "Side-by-side feature comparison chart",
                      `Exclusive ${city} clinic discount`,
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                        <span className="text-emerald-500 font-black text-sm leading-none mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <LeadForm
                  compact
                  city={citySlug}
                  isMobile={typeof window !== "undefined" && window.innerWidth < 768}
                />

                <div className="flex items-center justify-center gap-4 mt-4">
                  <img src="/brands/signia.svg" alt="Signia" className="h-4 w-auto grayscale opacity-40" />
                  <span className="text-[9px] text-slate-300">|</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-[10px]">★</span>)}
                    <span className="text-[9px] text-slate-400 font-medium ml-1">4.9 · 1,200+ reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
