"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";

const TOP5 = [
  {
    rank: 1,
    badge: "Most Popular",
    badgeColor: "bg-amber-500 text-white",
    title: "Signia Orion C&G 200",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: [
      "AI-powered smart hearing technology",
      "Real-time clarity in group conversations",
      "Rechargeable, lasts up to 24 hours",
      "Bluetooth streaming for TV & phone",
      "48 channels for crystal-clear sound"
    ],
    highlight: "German-engineered for maximum speech clarity.",
  },
  {
    rank: 2,
    badge: "Almost Invisible",
    badgeColor: "bg-indigo-600 text-white",
    title: "Signia Silk 7X",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1775551490244-Untitled-design---2026-04-07T141048.093.png",
    features: [
      "Virtually invisible in-canal design",
      "Ready-to-wear with a discreet fit",
      "Enhances speech in noisy settings",
      "Tinnitus therapy included",
      "Smartphone app control"
    ],
    highlight: "The world's smallest ready-to-wear hearing aid.",
  },
  {
    rank: 3,
    badge: "Smart AI",
    badgeColor: "bg-emerald-600 text-white",
    title: "Phonak Audeo I 90 Sphere",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png",
    features: [
      "Sphere Intelligence AI processing",
      "Universal Bluetooth connectivity",
      "Rechargeable with all-day battery",
      "360° Sound awareness",
      "Dynamic noise cancellation"
    ],
    highlight: "Breakthrough AI for hearing in loud noise.",
  },
  {
    rank: 4,
    badge: "Slim & Stylish",
    badgeColor: "bg-rose-600 text-white",
    title: "Phonak Slim L90-R",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1774002227903-Untitled-design---2026-03-20T155340.689.png",
    features: [
      "Unique ultra-slim ergonomic design",
      "AutoSense OS 5.0 adaptation",
      "Direct streaming to iOS & Android",
      "Available in multiple premium colors",
      "Fast charging capabilities"
    ],
    highlight: "Hearing technology meets premium fashion.",
  },
  {
    rank: 5,
    badge: "Best Value",
    badgeColor: "bg-cyan-600 text-white",
    title: "Signia Active Pro",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "/products/signia active pro.png",
    features: [
      "Modern earbud-style design",
      "Instant fit with click sleeves",
      "Portable pocket charging case",
      "Full Bluetooth functionality",
      "Enhanced natural sound experience"
    ],
    highlight: "Great for active lifestyles and first-time users.",
  },
];

const COMPARISON = [
  { feature: "Multi-Brand Availability", we: true, others: false, detail: "We offer Signia, Phonak, Widex, etc. Competitors often push single brands." },
  { feature: "Best Price Guarantee", we: true, others: false, detail: "Save up to 40% with our transparent, direct-to-consumer pricing." },
  { feature: "Free Home Trial", we: true, others: "Sometimes", detail: "Try the device in your real-life environment before buying." },
  { feature: "Pan-India Clinic Network", we: true, others: true, detail: "Widespread coverage for lifetime support." },
];

const FAQS = [
  {
    q: "Why choose us over traditional hearing aid clinics?",
    a: "Unlike traditional clinics that often push specific brands with high markups, we offer multi-brand choices (Signia, Phonak, Widex, etc.) at up to 40% lower prices, backed by a Free Trial and a network of certified experts.",
  },
  {
    q: "How do you offer better prices?",
    a: "We work directly with manufacturers and leverage our pan-India scale to pass the savings directly to you. We offer a Lowest Price Guarantee and 0% EMI options.",
  },
  {
    q: "Can I try the hearing aids before purchasing?",
    a: "Yes! We offer a Free Trial at our clinics or your home. This ensures you are 100% satisfied with the sound quality before making a decision.",
  },
  {
    q: "Are the devices authentic and warrantied?",
    a: "Absolutely. All our hearing aids are 100% original and come with the official manufacturer warranty (up to 4 years) and lifetime service support.",
  },
];

const TRUST_POINTS = [
  { icon: "💰", title: "Up to 40% Savings", desc: "Best price guarantee on top brands." },
  { icon: "📍", title: "Pan-India Presence", desc: "Available at a clinic near you." },
  { icon: "👩‍⚕️", title: "Certified Experts", desc: "Highly qualified audiologists across India." },
  { icon: "🛡️", title: "4-Year Warranty", desc: "Full manufacturer protection." },
];

const REVIEWS = [
  {
    name: "Piyush Jain",
    role: "Verified Customer",
    quote: "I compared prices with several local clinics. You not only saved me money but provided much better service.",
  },
  {
    name: "Sanjee Banerjee",
    role: "Verified Customer",
    quote: "The ability to try multiple brands at home was a game changer. Highly recommend over traditional setups.",
  },
  {
    name: "Mr. Honey",
    role: "Happy Father",
    quote: "Excellent support and genuine products. The audiologist was very patient with my daughter.",
  },
];

export default function CompetitorPageClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* ── Scarcity Banner ── */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-bold sticky top-0 z-[60] shadow-md animate-pulse">
        ⚠️ Lowest Price Match offer — Limited Free Trial Slots Available This Month!
      </div>

      {/* ── Header ── */}
      <header className="bg-white border-b border-slate-200 sticky top-[36px] sm:top-[40px] z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.webp" alt="Hearing Solutions" width={120} height={40} className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Multi-Brand Comparison Experts
            </span>
            <a
              href="tel:+916204260510"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call Now
            </a>
          </div>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider"
          >
            Compare Now
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6">
                Save Up To 40% vs Competitors
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 mb-6">
                Don't Overpay For <span className="text-blue-600">Hearing Aids</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Compare multi-brand hearing aids from Signia, Phonak, and Widex. Get unbiased expert advice, free trials, and the best prices in India.
              </p>

              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-extrabold text-base mb-8 group bg-transparent border-none cursor-pointer"
              >
                <span>Click here to know your nearest clinic</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>

              <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">Free Trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">0% EMI Options</span>
                </div>
              </div>
            </div>

            {/* Hero Form - Inline */}
            <div className="relative" id="lead-form">
              <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-[3rem]"></div>
              <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Locate Your Nearest Clinic</h2>
                  <p className="text-slate-500 text-sm">Enter your details to locate the closest center.</p>
                </div>
                <LeadForm />
                <p className="text-center text-[10px] text-slate-400 mt-6 leading-tight uppercase tracking-widest font-bold">
                  🔐 100% Secure • Lowest Price Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Section ── */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">How We Compare</h2>
            <p className="text-slate-500">We put your hearing and your wallet first.</p>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-6 font-bold text-sm sm:text-base">
              <div>Feature</div>
              <div className="text-center text-blue-400">Our Clinics</div>
              <div className="text-center text-slate-400">Others</div>
            </div>
            {COMPARISON.map((item, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 items-center text-sm sm:text-base">
                <div className="font-bold text-slate-800">{item.feature}</div>
                <div className="flex justify-center text-green-600 font-bold">
                  {item.we ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  ) : "—"}
                </div>
                <div className="flex justify-center text-slate-400 font-bold">
                  {item.others === true ? (
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  ) : item.others === false ? (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <span className="text-xs text-slate-500">{item.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features Grid ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_POINTS.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products List ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Top Recommended Models</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Selected by experts for performance, reliability, and value.</p>
          </div>

          <div className="space-y-12">
            {TOP5.map((product) => (
              <div key={product.rank} className="group relative bg-white rounded-[2rem] border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="grid md:grid-cols-12">

                  {/* Product Image */}
                  <div className="md:col-span-5 bg-slate-50 relative flex items-center justify-center p-12 overflow-hidden">
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-2xl shadow-sm">
                      <span className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px]">{product.rank}</span>
                        Ranking
                      </span>
                    </div>
                    <div className="relative w-full aspect-square transition-transform duration-700 group-hover:scale-110">
                      <Image src={product.image} alt={product.title} fill className="object-contain" />
                    </div>
                    <div className={`absolute top-6 right-6 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${product.badgeColor}`}>
                      {product.badge}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={product.brandLogo} alt={product.brand} className="h-6 w-auto grayscale group-hover:grayscale-0 transition-all" />
                      <span className="w-px h-4 bg-slate-200"></span>
                      <h3 className="text-2xl font-black text-slate-900">{product.title}</h3>
                    </div>

                    <p className="text-blue-600 font-bold text-sm mb-8 italic">"{product.highlight}"</p>

                    <div className="space-y-4 mb-10">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Key Performance Features</p>
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <span className="text-sm font-medium text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setIsPopupOpen(true)}
                        className="flex-1 min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-100"
                      >
                        Compare & Get Best Price
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof / Testimonials ── */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Trusted by Thousands Pan-India</h2>
            <p className="text-slate-400 mb-12">See why customers choose us over traditional clinics.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative">
                <div className="text-blue-500 text-6xl font-serif absolute top-6 right-10 opacity-20">“</div>
                <p className="text-lg font-medium leading-relaxed mb-8 relative z-10 italic">
                  {review.quote}
                </p>
                <div>
                  <p className="font-black text-blue-400">{review.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-500">Everything you need to know about switching to us.</p>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-100 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Eligibility Check ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to compare?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
                Don't decide without checking our prices first. Speak to an expert today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                >
                  Get Price List
                </button>
                <a
                  href="tel:+916204260510"
                  className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                >
                  Call +91 6204 260 510
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Image src="/logo.webp" alt="Hearing Solutions" width={100} height={30} className="h-6 w-auto grayscale opacity-50" />
            <div className="flex gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
              <Link href="/landing/competitor/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link href="/landing/competitor/terms" className="hover:text-blue-600">Terms of Use</Link>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            © 2026 All rights reserved. Our hearing aids are medical devices and should be fitted by certified professionals.
          </p>
        </div>
      </footer>

      {/* ── Sticky Mobile Bottom Bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-[60] flex gap-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
        <a
          href="https://wa.me/916204260510?text=Hi, I want to compare hearing aids and get the best price."
          className="flex-1 bg-green-600 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider shadow-lg shadow-green-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp
        </a>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="flex-[2] bg-blue-600 text-white h-14 rounded-2xl flex items-center justify-center font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-200"
        >
          Compare Now
        </button>
      </div>
      <div className="md:hidden h-24"></div>

      {/* ── Popup Modal ── */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          ></div>
          <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 md:p-10 max-w-md w-full z-10">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Locate Your Nearest Clinic</h2>
              <p className="text-slate-500 text-sm">Enter your details to locate the closest center.</p>
            </div>
            <LeadForm />
            <p className="text-center text-[10px] text-slate-400 mt-6 leading-tight uppercase tracking-widest font-bold">
              🔐 100% Secure • Lowest Price Guarantee
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
