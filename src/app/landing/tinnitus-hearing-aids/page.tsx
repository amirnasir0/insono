import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";

export const metadata: Metadata = {
  title: "Hearing Aids for Tinnitus & Ringing in the Ear Relief | Insono Hearing",
  description:
    "End the constant ringing with advanced Tinnitus Masking Hearing Aids. Top brands like Signia, Phonak & Widex. Compare models and get the latest price list. Book a Free Trial today.",
};

const TINNITUS_MODELS = [
  {
    rank: 1,
    badge: "Best for Tinnitus",
    badgeColor: "bg-[#184A99] text-white",
    title: "Signia Pure Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: ["Notch Therapy", "Bluetooth Streaming", "Rechargeable", "AI Speech Enhancement", "Ultra-Discrete"],
    channels: "48 Channels",
    style: "RIC",
    highlight: "Exclusive Notch Therapy clinically proven to reduce tinnitus perception",
  },
  {
    rank: 2,
    badge: "Soothing Sounds",
    badgeColor: "bg-purple-600 text-white",
    title: "Widex MOMENT Sheer",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex1.png",
    features: ["Zen Tones (Fractal Sounds)", "Natural Sound", "Smartphone Control", "Rechargeable", "IP68 Water Resistant"],
    channels: "15 Channels",
    style: "RIC",
    highlight: "Uses fractal 'Zen' tones to mask tinnitus and reduce stress",
  },
  {
    rank: 3,
    badge: "Smart Masking",
    badgeColor: "bg-emerald-600 text-white",
    title: "Phonak Audeo Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak1.png",
    features: ["Tinnitus Balance App", "Universal Connectivity", "AutoSense OS 5.0", "Clear Speech", "Dynamic Noise Cancellation"],
    channels: "32 Channels",
    style: "RIC",
    highlight: "Customizable masking sounds via the Tinnitus Balance app",
  },
  {
    rank: 4,
    badge: "Maximum Control",
    badgeColor: "bg-rose-600 text-white",
    title: "Resound Nexia",
    brand: "Resound",
    brandLogo: "/brands/resound.svg",
    image: "/lp/signia2.png",
    features: ["Tinnitus SoundGenerator", "Resound Relief App", "Auracast Ready", "Smallest RIC", "All-Day Battery"],
    channels: "32 Channels",
    style: "RIC",
    highlight: "Advanced sound therapy with the Resound Relief app",
  },
];

const FAQS = [
  {
    q: "Can hearing aids really help with tinnitus?",
    a: "Yes! 80% of people with tinnitus also have some level of hearing loss. Hearing aids help by amplifying background sounds to mask the ringing and using specialized 'Notch Therapy' or 'Zen Tones' to train the brain to ignore the tinnitus.",
  },
  {
    q: "What is the price of a tinnitus masking device?",
    a: "Tinnitus hearing aid prices vary based on the technology level (e.g., Notch Therapy vs Basic Masking). We offer the best price guarantee on all top brands. Fill the form to get the latest price list on WhatsApp instantly.",
  },
  {
    q: "How long does it take for hearing aids to help tinnitus?",
    a: "While many feel instant relief due to the masking effect, it typically takes 2–4 weeks of consistent use for the brain to fully adapt and significantly reduce the perception of ringing.",
  },
  {
    q: "Are there any hearing aids specifically made for tinnitus?",
    a: "Absolutely. Brands like Signia (Notch Therapy), Widex (Zen Tones), and Phonak (Tinnitus Balance) have dedicated hardware and software specifically designed to suppress tinnitus sounds.",
  },
  {
    q: "Do you offer Tinnitus Retraining Therapy (TRT)?",
    a: "Yes, our clinics offer comprehensive tinnitus management including Tinnitus Retraining Therapy (TRT). Our certified audiologists combine sound therapy with counseling to help you habituate to the sound.",
  },
];

const REVIEWS = [
  {
    name: "Ramesh Gupta",
    initials: "RG",
    avatarColor: "bg-[#184A99]",
    location: "Delhi",
    time: "3 weeks ago",
    text: "The Signia Notch Therapy completely changed my life. The constant ringing has reduced by nearly 80%. The audiologist at Insono was the first one who properly explained what tinnitus is.",
  },
  {
    name: "Sunita Kapoor",
    initials: "SK",
    avatarColor: "bg-purple-600",
    location: "Gurgaon",
    time: "1 month ago",
    text: "I was sceptical but the Widex Zen tones actually work. Within 3 weeks the ringing became much more manageable. The free trial was a game changer — no pressure to buy.",
  },
  {
    name: "Dr. Pradeep Mehta",
    initials: "PM",
    avatarColor: "bg-emerald-600",
    location: "Mumbai",
    time: "2 months ago",
    text: "Professionally done audiogram and tinnitus assessment. The Phonak Tinnitus Balance app was set up perfectly for my needs. I sleep so much better now. Highly recommend Insono.",
  },
  {
    name: "Kavita Nair",
    initials: "KN",
    avatarColor: "bg-rose-600",
    location: "Bangalore",
    time: "2 weeks ago",
    text: "My tinnitus was affecting my sleep and concentration at work. With Insono's expert guidance, I found the right sound therapy. The difference in just 4 weeks is remarkable.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Free Hearing Test",    others: false },
  { feature: "7-Day Free Trial",      others: false },
  { feature: "Genuine Products",      others: "Sometimes" },
  { feature: "EMI / 0% Finance",      others: false },
  { feature: "Home Delivery (COD)",   others: false },
  { feature: "Lifetime Servicing",    others: false },
  { feature: "Certified Audiologist", others: "Varies" },
  { feature: "Price Transparency",    others: false },
] as const;

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

export default function TinnitusLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            header:not(.tinnitus-mobile-header),
            .sticky.top-0:not(.tinnitus-mobile-header-wrapper),
            .md\\:hidden.fixed.bottom-0:not(.tinnitus-bottom-bar) { display: none !important; }
            body { padding-top: 0 !important; }
          }
          @keyframes ti-up {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes ti-left {
            from { opacity: 0; transform: translateX(-20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes ti-scale {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          .ti-up       { animation: ti-up   0.5s ease both; }
          .ti-up.d1    { animation-delay: 0.1s; }
          .ti-up.d2    { animation-delay: 0.2s; }
          .ti-up.d3    { animation-delay: 0.3s; }
          .ti-up.d4    { animation-delay: 0.4s; }
          .ti-left     { animation: ti-left  0.5s ease both; }
          .ti-scale    { animation: ti-scale 0.8s 0.5s ease both; }
        `
      }} />

      {/* ══════════════════════════════════════════════
          MOBILE  (hidden on md+)
      ══════════════════════════════════════════════ */}
      <div className="block md:hidden pb-20">

        {/* Urgency bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          Limited tinnitus assessment slots available — Book your free test now
        </div>

        {/* Sticky header */}
        <div className="sticky top-0 z-50 bg-transparent tinnitus-mobile-header-wrapper">
          <header className="tinnitus-mobile-header px-4 py-3 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-slate-100">
            <Link href="/">
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

            {/* 1. Social proof — first thing they see */}
            <div className="ti-up flex items-center justify-center gap-2 mb-4">
              <Image src="/badge/google.webp" alt="Google" width={52} height={18} className="h-[18px] w-auto" />
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <span className="text-[11px] font-bold text-slate-500">4.9 · 1,200+ Reviews</span>
            </div>

            {/* 2. Benefit-first headline — speaks directly to the pain */}
            <h1 className="ti-up d1 font-black leading-[1.1] mb-2 tracking-tight">
              <span className="text-[28px] text-[#0D2240] block">Finally, Silence the</span>
              <span className="text-[28px] text-[#0D2240] block">Ringing in Your Ears</span>
            </h1>
            <p className="ti-up d1 text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-5">
              Tinnitus Masking Hearing Aids · Expert Assessed · 2026
            </p>

            {/* 3. CTA — above the fold, rose color pops on blue gradient */}
            <div className="ti-up d2 w-full mb-2">
              <PopupTrigger className="w-full h-[52px] bg-[#E83D6D] text-white flex items-center justify-center gap-2 rounded-xl text-[15px] font-black shadow-lg shadow-[#E83D6D]/30 active:scale-[0.97] transition-all">
                Get Free Tinnitus Price List on WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </PopupTrigger>
            </div>
            <p className="ti-up d2 text-[10px] text-slate-400 font-medium mb-5">
              Free · Instant · No spam · Zero obligation
            </p>

            {/* 4. Brand trust strip */}
            <div className="ti-up d3 flex items-center justify-center gap-5 mb-7 grayscale opacity-40">
              <Image src="/brands/signia.svg" alt="Signia" width={52} height={14} className="h-3.5 w-auto" />
              <span className="w-px h-3 bg-slate-300" />
              <Image src="/brands/widex.svg" alt="Widex" width={52} height={14} className="h-3.5 w-auto" />
              <span className="w-px h-3 bg-slate-300" />
              <Image src="/brands/phonaklogo.svg" alt="Phonak" width={52} height={14} className="h-3.5 w-auto" />
            </div>

            {/* 5. Product image — below fold, for scrollers */}
            <div className="relative w-full mb-6 flex flex-col items-center justify-center">
              <div className="absolute w-[120px] h-[120px] bg-[#184A99]/8 rounded-full blur-[40px]" />
              <Image
                src="/ric-signia.png"
                alt="Hearing Aids for Tinnitus Relief"
                width={180}
                height={160}
                className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                priority
                fetchPriority="high"
              />
            </div>

            {/* 6. Rewritten bullets — outcome · care · price */}
            <ul className="space-y-2.5 text-left">
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">🔕</div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">80% of tinnitus patients find significant relief within 2–4 weeks</span>
              </li>
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">🏥</div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">Free tinnitus assessment by certified audiologist — no obligation</span>
              </li>
              <li className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">💰</div>
                <span className="text-[13px] font-semibold text-slate-700 leading-snug">Save up to <span className="text-emerald-600 font-black">₹31,500</span> · 0% EMI · Signia, Widex &amp; Phonak</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Product showcase */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Best Tinnitus Masking Hearing Aids</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to get the full price list</p>
          </div>
          <div className="space-y-3">
            {TINNITUS_MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="relative w-[110px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-3">
                  <Image src={p.image} alt={p.title} width={90} height={90} loading="lazy" className="object-contain" />
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

        {/* Comparison */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Insono Hearing vs Others</h2>
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono for tinnitus relief</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download &amp; Compare Prices
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
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Tinnitus FAQ</h2>
          <FAQAccordion />
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 tinnitus-bottom-bar flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I want to know about hearing aids for tinnitus relief and pricing"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[10px] font-black leading-none text-center">A Call Can Save ₹31,500</span>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP  (hidden on mobile)
      ══════════════════════════════════════════════ */}
      <div className="hidden md:block">

        {/* Hero */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Col 1: Text */}
              <div className="flex-[1.6] pt-8">
                <div className="ti-left hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse" />
                  Tinnitus Relief Specialist · Authorized Partner
                </div>

                <h1 className="ti-up d1 text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 text-[#0D2240] tracking-tight">
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Hearing Aids for Tinnitus &amp; Ringing Relief
                  </span>
                </h1>

                <p className="ti-up d2 text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                  End the constant ringing with clinically proven{" "}
                  <span className="text-[#184A99] font-bold">Tinnitus Masking Hearing Aids</span> — Signia Notch Therapy, Widex Zen Tones &amp; Phonak Tinnitus Balance. Book a{" "}
                  <span className="text-[#184A99] font-bold">Free Trial</span> today.
                </p>

                <div className="ti-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
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
                    <p className="text-xl font-bold text-slate-900">100+</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pan-India Cities</p>
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

                <div className="ti-up d4 pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Hero image */}
              <div className="ti-scale hidden xl:flex flex-1 justify-center relative group py-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px] animate-pulse" />
                <Image
                  src="/ric-signia.png"
                  alt="Hearing Aids for Tinnitus Relief"
                  width={420}
                  height={380}
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Col 3: Lead form */}
              <div className="ti-up d4 w-full lg:w-[380px] flex-shrink-0 pt-8">
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    Free Trial
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Get Tinnitus Relief Guide &amp; Prices</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 tinnitus model price list instantly on WhatsApp.</p>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product section */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Specialist Collection</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">Best Tinnitus Masking Aids 2026</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">
              Individually selected by our audiologists for maximum tinnitus relief.
            </p>
          </div>

          <div className="grid gap-12">
            {TINNITUS_MODELS.map((p) => (
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
                    className="object-contain p-16 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute top-10 left-10 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg ${p.badgeColor}`}>
                    {p.badge}
                  </div>
                </div>
                <div className="flex-1 p-12 lg:p-20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-5 mb-10">
                      <Image src={p.brandLogo} alt={p.brand} width={72} height={24} className="h-6 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" loading="lazy" />
                      <div className="h-5 w-[1px] bg-slate-200" />
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
                    <PopupTrigger className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#184A99] text-white px-12 py-6 rounded-[2rem] font-bold text-sm hover:bg-[#13366e] transition border border-slate-200 uppercase tracking-widest shadow-xl shadow-blue-100">
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

        {/* Comparison */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">The Difference</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Insono Hearing vs Others</h3>
              <p className="text-slate-500 mt-3 text-base">Why thousands choose Insono for tinnitus relief</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download &amp; Compare Prices
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

        {/* FAQ */}
        <section className="bg-[#0D2240] py-32 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-24">Tinnitus &amp; Ringing in Ear — FAQs</h2>
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

        {/* Footer */}
        <footer className="py-20 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" loading="lazy" />
            <div className="flex gap-6 justify-center text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
              <Link href="/landing/tinnitus-hearing-aids/privacy" className="hover:text-[#184A99]">Privacy Policy</Link>
              <Link href="/landing/tinnitus-hearing-aids/terms" className="hover:text-[#184A99]">Terms of Use</Link>
            </div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">© 2026 Insono Hearing · Tinnitus Relief Specialist</p>
          </div>
        </footer>
      </div>

      <PopupModal />
    </div>
  );
}
