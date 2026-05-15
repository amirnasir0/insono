import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title: "Top 5 Hearing Aids in India 2026 — Book a Free Trial | Insono Hearing",
  description:
    "Experience the world's most advanced hearing aids. AI-powered, invisible, and rechargeable. Book your free trial today at 450+ cities. Limited slots available.",
};

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

const FAQS = [
  {
    q: "Which are the top 5 hearing aid brands in India?",
    a: "The top brands preferred by experts in India are Signia (formerly Siemens), Phonak, Widex, Oticon, and Starkey. Each brand offers unique features like AI speech enhancement, invisible designs, and rechargeable technology.",
  },
  {
    q: "What is the price range of the latest AI-powered hearing aids?",
    a: "Prices vary based on the technology level. Entry-level digital hearing aids start around ₹18,500, while premium AI-powered models can go higher. We offer a best-price guarantee and 0% EMI options to make them affordable.",
  },
  {
    q: "Can I try these hearing aids for free before purchasing?",
    a: "Yes! We offer a Free 3-Day Trial at our clinics or even at your home in select cities. This allows you to experience the sound quality and comfort in your real-life environment before making a decision.",
  },
  {
    q: "Are these hearing aids really invisible?",
    a: "Absolutely. Models like the Signia Silk and Starkey Evolv AI are designed to sit deep inside the ear canal (IIC), making them virtually invisible to others while providing crystal-clear sound.",
  },
  {
    q: "Do you offer home trials and audiologist consultations?",
    a: "Yes, Insono has a network of 1,500+ certified audiologists across 450+ cities in India. We provide comprehensive hearing tests, expert consultations, and trials at our clinics or through home visits.",
  },
  {
    q: "Is there a warranty provided on the devices?",
    a: "Yes, all our hearing aids come with an official manufacturer warranty, often up to 4 years. We also provide a device protection plan for added peace of mind.",
  },
];

const REVIEWS = [
  {
    name: "Piyush Jain",
    role: "Verified Customer",
    quote: "These hearing aids have not just transformed my mother's life; they've also deeply influenced our entire family.",
  },
  {
    name: "Sanjee Banerjee",
    role: "Verified Customer",
    quote: "I would strongly recommend it for anyone who even has slight hearing impairment, go for Insono.",
  },
  {
    name: "Mr. Honey",
    role: "Happy Father",
    quote: "There's a big difference now. Khushi responds when we call out to her. I'm extremely happy for my daughter.",
  },
];

export default function Top5LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* Page-scoped styles: suppress global nav on mobile + entry animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            header:not(.top5-mobile-header),
            .sticky.top-0:not(.top5-mobile-header-wrapper) { display: none !important; }
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

      {/* ════════════════════════════════════════
          MOBILE HERO  (hidden on md+)
      ════════════════════════════════════════ */}
      <div className="block md:hidden pb-20">

        {/* Urgency bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2"></span>
          A call can save you upto ₹31,500 on hearing aids
        </div>

        {/* Sticky header */}
        <div className="sticky top-0 z-50 top5-mobile-header-wrapper">
          <header className="top5-mobile-header px-4 py-3 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-slate-100">
            <Link href="/">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#184A99] text-white px-4 py-2.5 rounded-full text-[12px] font-bold flex items-center gap-2 active:scale-95 transition"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 62042 60510
            </a>
          </header>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white px-4 pt-4 pb-10 text-center">

          <h1 className="t5-up text-[22px] font-black leading-[1.15] mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
              Top 5 Hearing Aids<br />in India 2026
            </span>
          </h1>

          <div className="t5-up d1 relative w-full mb-5 flex items-center justify-center">
            <div className="absolute w-[160px] h-[160px] bg-[#184A99]/8 rounded-full blur-[40px]"></div>
            <Image
              src="/hero3.png"
              alt="Top 5 Hearing Aids 2026"
              width={220}
              height={200}
              className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
              priority
            />
          </div>

          {/* Styled bullets */}
          <div className="t5-up d2 space-y-2.5 mb-6 text-left">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">🏆</div>
              <span className="text-[13px] font-semibold text-slate-700 leading-snug">Lowest price guaranteed</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">💳</div>
              <span className="text-[13px] font-semibold text-slate-700 leading-snug">0% EMI options available, prices start from <span className="text-[#184A99] font-black">₹18,000</span> only</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">💰</div>
              <span className="text-[13px] font-semibold text-slate-700 leading-snug">
                Save upto <span className="text-emerald-600 font-black text-[16px]">₹31,500</span> on hearing aids
              </span>
            </div>
          </div>

          <div className="t5-up d3 w-full">
            <a
              href="#mobile-form"
              className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Full Price List
            </a>
          </div>
        </section>

        {/* Mobile inline form */}
        <section id="mobile-form" className="px-4 py-8 bg-white border-t border-slate-100">
          <div className="text-center mb-5">
            <h2 className="text-[18px] font-black text-slate-900 mb-1">Secure Your Trial Slot</h2>
            <p className="text-[12px] text-slate-500">Get all 5 models with prices instantly on WhatsApp</p>
          </div>
          <LeadForm compact />
          <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">
            🔐 256-bit Secure · Your data is 100% private
          </p>
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I want to know about the top 5 hearing aids and pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.833L.057 23.057a.75.75 0 00.921.921l5.224-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.724 9.724 0 01-4.962-1.354l-.356-.212-3.697 1.029 1.029-3.697-.212-.356A9.724 9.724 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
          </a>
          <div className="w-px bg-slate-100" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span className="text-[10px] font-black leading-none text-center">A Call Can Save ₹31,500</span>
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP HERO  (hidden on mobile)
      ════════════════════════════════════════ */}
      <section className="hidden md:block relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Column 1 — Text */}
            <div className="flex-[1.6] pt-8">
              <div className="t5-left hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse"></span>
                Authorized Partner · Trusted by 4 Million+ Indians
              </div>

              <h1 className="t5-up d1 text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                  Top 5 Hearing Aids in India 2026
                </span>
              </h1>

              <p className="t5-up d2 text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                Compare Signia, Phonak, Widex & more — AI-powered, rechargeable, and virtually invisible. Get a{" "}
                <span className="text-[#184A99] font-bold">Free Clinical Trial</span> at India&apos;s most trusted hearing aid center.
              </p>

              <div className="t5-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
                {[
                  { label: "2 Lakh+", sub: "Happy Customers" },
                  { label: "15+",     sub: "Clinics Across India" },
                  { label: "100+",    sub: "Audiologists" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-slate-900">{s.label}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="t5-up d4 pt-8 border-t border-slate-100 opacity-60">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                <div className="flex items-center gap-10 grayscale">
                  {["/brands/signia.svg","/brands/phonaklogo.svg","/brands/widex.svg","/brands/oticon.svg","/brands/resound.svg"].map((logo, i) => (
                    <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" loading="lazy" />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 — Hero image */}
            <div className="t5-scale hidden xl:flex flex-1 justify-center relative py-20">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px]"></div>
              <Image
                src="/hero3.png"
                alt="Top 5 Hearing Aids 2026"
                width={420}
                height={380}
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Column 3 — Form */}
            <div className="t5-up d4 w-full lg:w-[380px] flex-shrink-0 pt-8" id="lead-form">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                  Free Trial
                </div>
                <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Download Prices & Claim Free Trial</h2>
                <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 price list for all 5 models instantly on WhatsApp.</p>
                <LeadForm />
                <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                  🔐 256-bit Secure · 100% Private
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* end desktop hero */}

      {/* ── Products List ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Top 5 Hearing Aids in 2026</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Selected by 1500+ audiologists for their superior performance and user satisfaction.</p>
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
                      <Image src={product.image} alt={product.title} fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                    <div className={`absolute top-6 right-6 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${product.badgeColor}`}>
                      {product.badge}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <Image src={product.brandLogo} alt={product.brand} width={72} height={24} className="h-6 w-auto grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
                      <span className="w-px h-4 bg-slate-200"></span>
                      <h3 className="text-2xl font-black text-slate-900">{product.title}</h3>
                    </div>

                    <p className="text-blue-600 font-bold text-sm mb-8 italic">&ldquo;{product.highlight}&rdquo;</p>

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
                      <a
                        href="#lead-form"
                        className="flex-1 min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-100"
                      >
                        Book Hearing Aid Trial
                      </a>
                      <a
                        href={`https://wa.me/916204260510?text=Hi, I want to know more about ${product.title}.`}
                        className="flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-slate-200 hover:border-green-500 hover:text-green-500 transition-all text-slate-400"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      </a>
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
            <h2 className="text-3xl md:text-5xl font-black mb-4">Trusted by 4 Million+ Indians</h2>
            <p className="text-slate-400 mb-12">Join thousands who have rediscovered the joy of hearing.</p>
            <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16 border border-white/10">
              <Image
                src="/patients .jpeg"
                alt="Happy Insono Customers"
                width={1200}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative hover:-translate-y-1 transition-transform duration-700">
                <div className="text-blue-500 text-6xl font-serif absolute top-6 right-10 opacity-20">&ldquo;</div>
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
            <p className="text-slate-500">Everything you need to know about the top hearing aids in India.</p>
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

      {/* ── Footer ── */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Image src="/logo.webp" alt="Insono Hearing" width={100} height={30} className="h-6 w-auto grayscale opacity-50" loading="lazy" />
            <div className="flex gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
              <Link href="/landing/top-5-hearing-aids/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link href="/landing/top-5-hearing-aids/terms" className="hover:text-blue-600">Terms of Use</Link>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            © 2026 Insono Hearing. All rights reserved. Our hearing aids are medical devices and should be fitted by certified professionals. Hearing improvement results may vary by individual profile. Authorized partner for Signia, Phonak, and Widex in India.
          </p>
        </div>
      </footer>

    </div>
  );
}
