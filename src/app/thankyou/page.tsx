"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, ChevronRight } from "lucide-react";

const WA_NUMBER = "916204260510";
const CALL_NUMBER = "+916204260510";
const WA_MESSAGE = "Hi, I just submitted a request on Insono. I'd like to know more about hearing aid prices and options.";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-[#eaf5ff] to-white px-4 pt-12 pb-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-200"
        >
          <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[28px] sm:text-4xl font-black text-[#0D2240] tracking-tight mb-2"
        >
          Request Received!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 text-[15px] max-w-sm mx-auto leading-relaxed"
        >
          Your price list is on its way to your WhatsApp. Our audiologist will reach out shortly.
        </motion.p>
      </section>

      {/* ── SAVINGS URGENCY BANNER ── */}
      <section className="px-4 max-w-lg mx-auto -mt-2 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex gap-3 items-start"
        >
          <span className="text-2xl flex-shrink-0">💰</span>
          <div>
            <p className="text-[13px] font-black text-amber-900 leading-snug mb-0.5">
              Save up to <span className="text-amber-600">₹31,500</span> — only via direct contact
            </p>
            <p className="text-[12px] text-amber-700 leading-snug">
              Our audiologists offer exclusive discounts that are never listed online. One call or message is all it takes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── PRIMARY CTAs ── */}
      <section className="px-4 max-w-lg mx-auto space-y-3 mb-8">
        <motion.a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center gap-3 font-bold text-[16px] shadow-lg shadow-green-200 active:scale-[0.98] transition-all"
        >
          <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.833L.057 23.057a.75.75 0 0 0 .921.921l5.224-1.453A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.724 9.724 0 0 1-4.962-1.354l-.356-.212-3.697 1.029 1.029-3.697-.212-.356A9.724 9.724 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
          Chat on WhatsApp
          <ChevronRight className="w-5 h-5 opacity-70" />
        </motion.a>

        <motion.a
          href={`tel:${CALL_NUMBER}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full h-14 bg-[#184A99] text-white rounded-2xl flex items-center justify-center gap-3 font-bold text-[15px] shadow-md shadow-blue-100 active:scale-[0.98] transition-all"
        >
          <Phone className="w-5 h-5" />
          Call +91 62042 60510
        </motion.a>

        <p className="text-center text-[11px] text-slate-400 font-medium pt-1">
          Free consultation · No obligation · No spam
        </p>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="px-4 max-w-lg mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-50 border border-slate-100 rounded-2xl p-5"
        >
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">What happens next</p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                color: "bg-[#184A99]",
                title: "Price list on WhatsApp",
                desc: "You'll receive a full price list of all brands & models — Signia, Phonak, Widex, Oticon & more.",
              },
              {
                step: "2",
                color: "bg-emerald-500",
                title: "Free consultation call",
                desc: "Our certified audiologist will call to understand your hearing needs and recommend the best fit.",
              },
              {
                step: "3",
                color: "bg-amber-500",
                title: "7-day home trial",
                desc: "Try your chosen hearing aid at home for 7 days. Buy only if you're 100% satisfied.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className={`w-8 h-8 ${s.color} rounded-full flex items-center justify-center flex-shrink-0 text-white text-[12px] font-black shadow-sm`}>
                  {s.step}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800 leading-tight mb-0.5">{s.title}</p>
                  <p className="text-[12px] text-slate-500 leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PRICE LIST ── */}
      <section className="px-4 max-w-2xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">2026 Price List</p>
              <h2 className="text-[18px] font-black text-[#0D2240]">Hearing Aid Prices in India</h2>
            </div>
            <span className="text-[10px] bg-amber-50 border border-amber-200 text-amber-700 font-bold px-2.5 py-1 rounded-full">MRP Prices</span>
          </div>

          <div className="space-y-3">
            {[
              {
                brand: "Signia", brandLogo: "/brands/signia.svg",
                model: "Signia Orion C&G",
                image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
                tier: "Entry Level", tierColor: "bg-slate-100 text-slate-600",
                channels: "24 Ch", style: "RIC",
                features: ["Rechargeable", "Bluetooth", "App Control"],
                price: "₹28,000",
                unit: "per pair",
              },
              {
                brand: "Signia", brandLogo: "/brands/signia.svg",
                model: "Signia Pure Charge&Go",
                image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772792684301-Signia-Pure-Charge%26Go-7IX%40%40%40.webp",
                tier: "Premium AI", tierColor: "bg-[#184A99]/10 text-[#184A99]",
                channels: "48 Ch", style: "RIC",
                features: ["IX Platform AI", "Own Voice Processing", "Tinnitus Therapy"],
                price: "₹65,000",
                unit: "per pair",
              },
              {
                brand: "Signia", brandLogo: "/brands/signia.svg",
                model: "Signia Styletto",
                image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772794609852-cosmic-blue_rose-gold_double_dd4310ec-bb18-403c-a7c9-05467ff34b3b-%281%29.webp",
                tier: "Premium AI", tierColor: "bg-rose-50 text-rose-600",
                channels: "48 Ch", style: "RIC",
                features: ["Slim Design", "Bluetooth 5.0", "Rechargeable"],
                price: "₹85,000",
                unit: "per pair",
              },
              {
                brand: "Phonak", brandLogo: "/brands/phonaklogo.svg",
                model: "Phonak Audeo Lumity",
                image: "/lp/phonak1.png",
                tier: "Mid Premium", tierColor: "bg-emerald-50 text-emerald-700",
                channels: "24 Ch", style: "RIC",
                features: ["SmartSpeech Tech", "Universal Bluetooth", "Waterproof"],
                price: "₹55,000",
                unit: "per pair",
              },
              {
                brand: "Phonak", brandLogo: "/brands/phonaklogo.svg",
                model: "Phonak Audeo Sphere I90",
                image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png",
                tier: "Ultra Premium", tierColor: "bg-purple-50 text-purple-700",
                channels: "48 Ch", style: "RIC",
                features: ["Dual AI Chip", "Speech from Noise", "Rechargeable"],
                price: "₹1,10,000",
                unit: "per pair",
              },
              {
                brand: "Widex", brandLogo: "/brands/widex.svg",
                model: "Widex MOMENT 440",
                image: "/lp/widex1.png",
                tier: "Premium", tierColor: "bg-indigo-50 text-indigo-700",
                channels: "44 Ch", style: "RIC",
                features: ["ZeroDelay Sound", "True Input Tech", "App Control"],
                price: "₹85,000",
                unit: "per pair",
              },
              {
                brand: "Oticon", brandLogo: "/brands/oticon.svg",
                model: "Oticon Intent",
                image: "/lp/oticon1.png",
                tier: "Ultra Premium", tierColor: "bg-teal-50 text-teal-700",
                channels: "64 Ch", style: "RIC",
                features: ["4D Sensor AI", "BrainHearing", "Rechargeable"],
                price: "₹1,00,000",
                unit: "per pair",
              },
              {
                brand: "ReSound", brandLogo: "/brands/resound.svg",
                model: "ReSound NEXIA",
                image: "/lp/resound1.png",
                tier: "Premium", tierColor: "bg-amber-50 text-amber-700",
                channels: "32 Ch", style: "RIC",
                features: ["Auracast BT", "Hands-Free Calls", "IP68 Waterproof"],
                price: "₹70,000",
                unit: "per pair",
              },
            ].map((p) => (
              <div key={p.model} className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex shadow-sm">
                {/* Image */}
                <div className="w-[90px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-2">
                  <img src={p.image} alt={p.model} className="w-16 h-16 object-contain" />
                </div>
                {/* Details */}
                <div className="flex-1 px-3 py-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <img src={p.brandLogo} alt={p.brand} className="h-3 w-auto grayscale opacity-50" />
                        <span className="text-[10px] text-slate-400 font-medium">{p.brand}</span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${p.tierColor}`}>{p.tier}</span>
                    </div>
                    <p className="text-[13px] font-bold text-slate-900 leading-tight mb-1.5">{p.model}</p>
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {p.features.map(f => (
                        <span key={f} className="text-[9px] bg-slate-50 text-slate-500 border border-slate-100 px-1.5 py-0.5 rounded-full font-medium">{f}</span>
                      ))}
                    </div>
                    <p className="text-[9px] text-slate-400 font-medium">{p.style} · {p.channels}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none">Starting from (MRP)</p>
                      <p className="text-[15px] font-black text-[#184A99] leading-tight">{p.price}</p>
                      <p className="text-[9px] text-slate-400">{p.unit}</p>
                    </div>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in the ${p.model}. Can you share the best price?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold bg-[#25D366] text-white px-3 py-2 rounded-xl flex-shrink-0 active:scale-95 transition"
                    >
                      Get Best Price
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Discount banner */}
          <div className="mt-4 bg-[#0D2240] rounded-2xl px-5 py-4 text-center">
            <p className="text-white font-black text-[14px] mb-1">Get up to <span className="text-yellow-400">₹31,500 off</span> these prices</p>
            <p className="text-slate-400 text-[12px] mb-3">Exclusive discounts are only available when you contact our audiologist directly. Not listed online.</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[13px] font-bold px-6 py-3 rounded-xl active:scale-95 transition"
            >
              Claim Discount on WhatsApp
            </a>
          </div>

          <p className="text-center text-[10px] text-slate-400 mt-3">
            MRP prices listed above are manufacturer&apos;s recommended retail prices. Actual prices may vary. Contact us for current offers.
          </p>
        </motion.div>
      </section>

      {/* ── GOOGLE TRUST BADGE ── */}
      <section className="px-4 max-w-lg mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-2 py-5 border-t border-slate-100"
        >
          <div className="flex items-center gap-2">
            <img src="/badge/google.webp" alt="Google" className="h-5 w-auto" />
            <span className="text-[12px] font-bold text-slate-500">Google Reviews</span>
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
            <span className="text-[13px] font-black text-slate-800 ml-1">4.9 / 5</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Based on 1,200+ verified reviews</p>
        </motion.div>
      </section>

      {/* ── STICKY BOTTOM BAR (mobile) ── */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex z-50">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-3 gap-0.5"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.833L.057 23.057a.75.75 0 0 0 .921.921l5.224-1.453A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.724 9.724 0 0 1-4.962-1.354l-.356-.212-3.697 1.029 1.029-3.697-.212-.356A9.724 9.724 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
          <span className="text-[10px] font-black">Chat on WhatsApp</span>
        </a>
        <div className="w-px bg-slate-100" />
        <a
          href={`tel:${CALL_NUMBER}`}
          className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-3 gap-0.5"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-black">Call Us Now</span>
        </a>
      </div>

      {/* bottom padding for sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
