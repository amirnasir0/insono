import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title: "Hearing Aids for Tinnitus & Ringing in the Ear Relief | Insono Hearing",
  description:
    "End the constant ringing with advanced Tinnitus Masking Hearing Aids. Top brands like Signia, Phonak & Widex. Compare models and get the latest price list. Book a Free Trial today.",
};

const TINNITUS_MODELS = [
  {
    rank: 1,
    badge: "Best for Tinnitus",
    badgeColor: "bg-blue-600 text-white",
    title: "Signia Pure Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: ["Notch Therapy", "Bluetooth Streaming", "Rechargeable", "AI Speech Enhancement", "Ultra-Discrete"],
    highlight: "Exclusive Notch Therapy clinically proven to reduce tinnitus",
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
    highlight: "Uses fractal 'Zen' tones to mask tinnitus and reduce stress",
  },
  {
    rank: 3,
    badge: "Smart Masking",
    badgeColor: "bg-green-600 text-white",
    title: "Phonak Audeo Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak1.png",
    features: ["Tinnitus Balance App", "Universal Connectivity", "AutoSense OS 5.0", "Clear Speech", "Dynamic Noise Cancellation"],
    highlight: "Customizable masking sounds via Tinnitus Balance App",
  },
  {
    rank: 4,
    badge: "Maximum Control",
    badgeColor: "bg-red-600 text-white",
    title: "Resound Nexia",
    brand: "Resound",
    brandLogo: "/brands/resound.svg",
    image: "/lp/signia2.png",
    features: ["Tinnitus SoundGenerator", "Resound Relief App", "Auracast Ready", "Smallest RIC", "All-Day Battery"],
    highlight: "Advanced sound therapy with the Resound Relief app",
  },
];

const FAQS = [
  {
    q: "Can hearing aids really help with tinnitus?",
    a: "Yes! 80% of people with tinnitus also have some level of hearing loss. Hearing aids help by amplifying background sounds to mask the ringing and using specialized 'Notch Therapy' or 'Zen Tones' to train the brain to ignore the tinnitus.",
  },
  {
    q: "What is the price of a tinnitus masking device in India?",
    a: "Tinnitus hearing aid prices vary based on the technology level (e.g., Notch Therapy vs Basic Masking). We offer the best price guarantee on all top brands. Fill the form to get the latest price list on WhatsApp instantly.",
  },
  {
    q: "How long does it take for hearing aids to help tinnitus?",
    a: "While many feel instant relief due to the masking effect, it typically takes 2-4 weeks of consistent use for the brain to fully adapt and significantly reduce the perception of ringing.",
  },
  {
    q: "Are there any hearing aids that help with tinnitus?",
    a: "Absolutely. Brands like Signia (Notch Therapy), Widex (Zen), and Phonak (Tinnitus Balance) have dedicated hardware and software specifically designed to suppress tinnitus sounds.",
  },
  {
    q: "Do you offer Tinnitus Retraining Therapy (TRT) in Delhi?",
    a: "Yes, our clinics in Delhi and across India offer comprehensive Tinnitus management including Tinnitus Retraining Therapy (TRT). Our certified audiologists combine sound therapy with counseling to help you habituate to the sound.",
  },
];

export default function TinnitusLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* suppress global nav on mobile */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            header:not(.tinnitus-mobile-header),
            .sticky.top-0:not(.tinnitus-mobile-header-wrapper) { display: none !important; }
            body { padding-top: 0 !important; }
          }
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
        <div className="sticky top-0 z-50 tinnitus-mobile-header-wrapper">
          <header className="tinnitus-mobile-header px-4 py-3 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-slate-100">
            <Link href="/">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#184A99] text-white px-4 py-2.5 rounded-full text-[12px] font-bold flex items-center gap-2 active:scale-95 transition"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 62042 60510
            </a>
          </header>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white px-4 pt-4 pb-10 text-center">

          <h1 className="text-[22px] font-black leading-[1.15] mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
              Hearing Aids for Tinnitus Relief
            </span>
          </h1>

          <div className="relative w-full mb-5 flex items-center justify-center">
            <div className="absolute w-[160px] h-[160px] bg-[#184A99]/8 rounded-full blur-[40px]"></div>
            <Image
              src="/ric-signia.png"
              alt="Hearing Aids for Tinnitus Relief"
              width={220}
              height={200}
              className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
              priority
            />
          </div>

          {/* Styled bullets */}
          <div className="space-y-2.5 mb-6 text-left">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">🏆</div>
              <span className="text-[13px] font-semibold text-slate-700 leading-snug">Lowest price guaranteed</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">💳</div>
              <span className="text-[13px] font-semibold text-slate-700 leading-snug">0% EMI options, prices start from <span className="text-[#184A99] font-black">₹18,000</span></span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">💰</div>
              <span className="text-[13px] font-semibold text-slate-700 leading-snug">
                Save upto <span className="text-emerald-600 font-black text-[16px]">₹31,500</span> on hearing aids
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/916204260510?text=Hi, I want to know about hearing aids for tinnitus relief and pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Price List
          </a>
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I want to know about hearing aids for tinnitus relief and pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.51 5.833L.057 23.057a.75.75 0 00.921.921l5.224-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.724 9.724 0 01-4.962-1.354l-.356-.212-3.697 1.029 1.029-3.697-.212-.356A9.724 9.724 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
          </a>
          <div className="w-px bg-slate-100" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
              <div className="hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse"></span>
                Tinnitus Relief Specialist · Authorized Partner
              </div>

              <h1 className="text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                  Hearing Aids for Tinnitus & Ringing Relief
                </span>
              </h1>

              <p className="text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                End the constant ringing with clinically proven <span className="text-[#184A99] font-bold">Tinnitus Masking Hearing Aids</span> — Signia Notch Therapy, Widex Zen Tones & Phonak Tinnitus Balance. Book a Free Trial today.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
                {[
                  { label: "2 Lakh+", sub: "Happy Customers" },
                  { label: "15+", sub: "Clinics Across India" },
                  { label: "100+", sub: "Audiologists" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-slate-900">{s.label}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 opacity-60">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                <div className="flex items-center gap-10 grayscale">
                  {["/brands/signia.svg", "/brands/phonaklogo.svg", "/brands/widex.svg", "/brands/oticon.svg", "/brands/resound.svg"].map((logo, i) => (
                    <img key={i} src={logo} alt="brand" className="h-4 w-auto object-contain" />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 — Hero image */}
            <div className="hidden xl:flex flex-1 justify-center relative py-20">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px]"></div>
              <Image
                src="/ric-signia.png"
                alt="Hearing Aids for Tinnitus Relief"
                width={420}
                height={380}
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Column 3 — Form */}
            <div className="w-full lg:w-[380px] flex-shrink-0 pt-8" id="lead-form">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                  Free Trial
                </div>
                <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Get Tinnitus Relief Guide & Prices</h2>
                <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 tinnitus model price list instantly on WhatsApp.</p>
                <LeadForm />
                <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                  🔐 256-bit Secure · 100% Private
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Top Tinnitus Models ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-800">Best Tinnitus Masking Hearing Aids 2026</h2>
          <p className="text-gray-500 mt-2">Recommended by our expert audiologists for maximum relief.</p>
        </div>

        <div className="grid gap-6">
          {TINNITUS_MODELS.map((p) => (
            <div key={p.rank} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col sm:flex-row">
              <div className="sm:w-64 bg-gray-50 relative min-h-[200px]">
                <Image src={p.image} alt={p.title} fill className="object-contain p-6" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.badgeColor}`}>
                  {p.badge}
                </div>
              </div>
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img src={p.brandLogo} alt={p.brand} className="h-6 w-auto grayscale" />
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{p.brand} Technology</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-800 mb-1">{p.title}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-4 italic">&quot;{p.highlight}&quot;</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.features.map((f) => (
                      <span key={f} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold border border-blue-100">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-lg font-black text-[#023784]">Get Expert Advice</p>
                    </div>
                    <a
                      href={`https://wa.me/916204260510?text=Hi, I want to consult an audiologist about ${p.title} for tinnitus relief.`}
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#128C7E] transition shadow-sm w-fit"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat with Audiologist
                    </a>
                  </div>
                  <a href="#lead-form" className="w-full sm:w-auto bg-[#023784] text-white px-8 py-3 rounded-xl font-bold text-sm text-center hover:bg-[#012d66] transition">
                    Download Price List
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">Tinnitus & Ringing in Ear — FAQs</h2>
          <div className="space-y-8">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-3 text-yellow-300">Q: {faq.q}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Image src="/logo.webp" alt="Insono Hearing" width={100} height={30} className="h-6 w-auto grayscale opacity-50" />
            <div className="flex gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
              <Link href="/landing/tinnitus-hearing-aids/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link href="/landing/tinnitus-hearing-aids/terms" className="hover:text-blue-600">Terms of Use</Link>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            © 2026 Insono Hearing. All rights reserved. Our hearing aids are medical devices and should be fitted by certified professionals. Tinnitus relief results may vary by individual. Authorized partner for Signia, Phonak, and Widex in India.
          </p>
        </div>
      </footer>

    </div>
  );
}
