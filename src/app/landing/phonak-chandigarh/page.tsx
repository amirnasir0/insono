import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, Users, MapPin, Stethoscope, FileText } from "lucide-react";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";

// Only loaded when user clicks a CTA — zero cost on initial page load
import PopupModal from "./PopupModal";

const CHANDIGARH_MODELS = [
  {
    rank: 1,
    badge: "AI Powered",
    badgeColor: "bg-[#184A99] text-white",
    title: "Phonak Audeo Sphere I90",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png",
    features: ["Dual AI Engines", "Speech from Noise", "Universal Bluetooth", "Rechargeable"],
    channels: "48 Channels",
    style: "RIC",
    highlight: "World's first hearing aid with a dedicated AI chip for speech clarity",
  },
  {
    rank: 2,
    badge: "Ultra Stylish",
    badgeColor: "bg-emerald-600 text-white",
    title: "Phonak Slim L90-R",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1774002227903-Untitled-design---2026-03-20T155340.689.png",
    features: ["Ergonomic Slim Design", "AutoSense OS 5.0", "Direct Streaming", "Fast Charging"],
    channels: "32 Channels",
    style: "RIC",
    highlight: "Award-winning design that follows the natural curve of your head",
  },
  {
    rank: 3,
    badge: "Best Seller",
    badgeColor: "bg-purple-600 text-white",
    title: "Phonak Audeo Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak1.png",
    features: ["SmartSpeech Tech", "Universal Connectivity", "Health Tracking", "Waterproof Option"],
    channels: "24 Channels",
    style: "RIC",
    highlight: "Most popular Phonak model for active social lifestyles",
  },
  {
    rank: 4,
    badge: "Super Power",
    badgeColor: "bg-rose-600 text-white",
    title: "Phonak Naida Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak4.png",
    features: ["Ultimate Speech Clarity", "Power BTE", "Roger Connectivity", "App Control"],
    channels: "20 Channels",
    style: "BTE",
    highlight: "High-power hearing aid for severe to profound hearing loss",
  },
  {
    rank: 5,
    badge: "Great Value",
    badgeColor: "bg-amber-500 text-white",
    title: "Phonak Terra",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/lp/phonak3.png",
    features: ["Digital Sound", "Feedback Cancellation", "Comfort Fit", "Affordable"],
    channels: "12 Channels",
    style: "BTE/RIC",
    highlight: "Reliable Swiss quality at an entry-level price point",
  },
];

const REVIEWS = [
  {
    name: "Rajesh Ahluwalia",
    initials: "RA",
    avatarColor: "bg-[#184A99]",
    location: "Sector 17, Chandigarh",
    time: "2 weeks ago",
    text: "Switched to Phonak Lumity after using other brands. The speech clarity in noisy restaurants is unmatched. Excellent service by Insono audiologists.",
  },
  {
    name: "Gurpreet Singh",
    initials: "GS",
    avatarColor: "bg-emerald-600",
    location: "Mohali",
    time: "1 month ago",
    text: "The Phonak Slim looks like a Bluetooth headset, not a hearing aid. Very happy with the design and the seamless connectivity with my Android phone.",
  },
  {
    name: "Suman Lata",
    initials: "SL",
    avatarColor: "bg-purple-600",
    location: "Panchkula",
    time: "3 months ago",
    text: "Got my father fitted with Phonak Naida. He can finally hear the grandkids clearly. The free home trial was a blessing. Highly recommend Insono.",
  },
  {
    name: "Vikram Duggal",
    initials: "VD",
    avatarColor: "bg-rose-600",
    location: "Chandigarh",
    time: "1 week ago",
    text: "Best price for Phonak in Chandigarh. Transparent pricing and genuine products with warranty. The free hearing test was very professional.",
  },
];

const BRAND_LOGOS = [
  "/brands/phonaklogo.svg",
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
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

export default function ChandigarhLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            header:not(.custom-mobile-header),
            .sticky.top-0:not(.custom-mobile-header-wrapper),
            .md\\:hidden.fixed.bottom-0:not(.custom-bottom-bar) { display: none !important; }
            body { padding-top: 0 !important; }
          }
          @keyframes pc-up {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pc-left {
            from { opacity: 0; transform: translateX(-20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes pc-scale {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          .pc-up            { animation: pc-up    0.5s ease both; }
          .pc-up.d1         { animation-delay: 0.1s; }
          .pc-up.d2         { animation-delay: 0.2s; }
          .pc-up.d3         { animation-delay: 0.3s; }
          .pc-up.d4         { animation-delay: 0.4s; }
          .pc-left          { animation: pc-left  0.5s ease both; }
          .pc-scale         { animation: pc-scale 0.8s 0.5s ease both; }
        `
      }} />

      {/* ────────────────────────────────────────────────────────────
          MOBILE (max-width: 768px)
      ──────────────────────────────────────────────────────────── */}
      <div className="block md:hidden pb-20">

        {/* Urgency bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          Limited Trial Slots for May in Chandigarh
        </div>

        {/* Header */}
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

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden">
          <div className="px-4 pt-3 pb-10 relative z-10 text-center">
            <h1 className="pc-up text-[22px] font-black leading-[1.15] mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                Phonak Digital Hearing Aids Price 2026
              </span>
            </h1>

            <div className="pc-up d1 relative w-full mb-5 flex flex-col items-center justify-center">
              <div className="absolute w-[140px] h-[140px] bg-[#184A99]/8 rounded-full blur-[40px]" />
              <Image
                src="/lp/phonak1.png"
                alt="Phonak Digital Hearing Aid"
                width={180}
                height={180}
                className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                priority
                fetchPriority="high"
              />
            </div>

            <ul className="pc-up d2 space-y-3 mb-6 text-left">
              {[
                { icon: "🎧", text: "Universal Bluetooth Connectivity" },
                { icon: "🏥", text: "Free Hearing Test at Chandigarh Clinic" },
                { icon: "💰", text: "Save upto ₹31,500 on Phonak Aids" },
              ].map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <span className="text-lg flex-shrink-0">{b.icon}</span>
                  <span className="text-[13px] font-semibold text-slate-700 leading-snug">{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="pc-up d3 w-full">
              <PopupTrigger className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all">
                <FileText className="w-4 h-4" />
                Download Phonak Price List
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Best Selling Hearing Aids</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to get the full price list</p>
          </div>
          <div className="space-y-3">
            {CHANDIGARH_MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="relative w-[110px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-3">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={90}
                    height={90}
                    loading="lazy"
                    className="object-contain"
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
                    <p className="text-[9px] text-slate-500 font-medium mb-1">{p.style} · {p.channels}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none mb-0.5">Starting from</p>
                      <p className="text-[11px] font-bold text-[#184A99]">Price on Request</p>
                    </div>
                    <PopupTrigger className="flex items-center gap-1 bg-[#184A99] text-white text-[10px] font-bold px-3 py-2 rounded-xl active:scale-95 transition flex-shrink-0">
                      See Price <ArrowRight className="w-3 h-3" />
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
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono Hearing in Chandigarh</p>
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
            <FileText className="w-4 h-4" />
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
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Hearing Aid FAQ</h2>
          <FAQAccordion />
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar flex">
          <a
            href="https://wa.me/916204260510?text=Hi, I want to chat with an audiologist about Phonak hearing aids in Chandigarh"
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

      {/* ────────────────────────────────────────────────────────────
          DESKTOP (min-width: 769px)
      ──────────────────────────────────────────────────────────── */}
      <div className="hidden md:block">

        {/* Hero */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Col 1: Text */}
              <div className="flex-[1.6] pt-8">
                <div className="pc-left hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse" />
                  Authorized Partner · Expert Audiologists in Chandigarh
                </div>

                <h1 className="pc-up d1 text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 text-[#0D2240] tracking-tight">
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    Phonak Digital Hearing Aids Price 2026
                  </span>
                </h1>

                <p className="pc-up d2 text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                  Discover the{" "}
                  <span className="text-[#184A99] font-bold underline decoration-4 decoration-[#184A99]/10 underline-offset-8">
                    2026 Elite Collection
                  </span>
                  . Experience digital clarity with a{" "}
                  <span className="text-[#184A99] font-bold">Free Clinical Trial</span> at Chandigarh&apos;s most trusted center.
                </p>

                <div className="pc-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
                  {[
                    { icon: <Users className="w-6 h-6" />, label: "2 Lakh+", sub: "Happy Customers" },
                    { icon: <MapPin className="w-6 h-6" />, label: "15+",     sub: "Clinics Across India" },
                    { icon: <Stethoscope className="w-6 h-6" />, label: "100+", sub: "Audiologists" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-[#184A99] mb-2">{s.icon}</div>
                      <p className="text-xl font-bold text-slate-900">{s.label}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="pc-up d4 pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Hero image */}
              <div className="pc-scale hidden xl:flex flex-1 justify-center relative group py-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px] animate-pulse" />
                <Image
                  src="/lp/phonak1.png"
                  alt="Premium Phonak Hearing Aids"
                  width={500}
                  height={500}
                  sizes="500px"
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700 rounded-3xl"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Col 3: Lead form */}
              <div className="pc-up d4 w-full lg:w-[380px] flex-shrink-0 pt-8">
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    Free Consultation
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Download Phonak Prices &amp; Claim Free Trial</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full 2026 Phonak Price List instantly on WhatsApp.</p>
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
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Premium Collection</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">2026&apos;s Top Models</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">
              Individually selected by our experts for the active lifestyles of Chandigarh residents.
            </p>
          </div>

          <div className="grid gap-12">
            {CHANDIGARH_MODELS.map((p) => (
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
                      <Image src={p.brandLogo} alt={p.brand} width={72} height={24} className="h-6 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
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
                      Get Full Price List <ArrowRight className="w-4 h-4" />
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
              <p className="text-slate-500 mt-3 text-base">Why thousands in Chandigarh choose Insono</p>
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
                <FileText className="w-5 h-5" />
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

        {/* FAQ */}
        <section className="bg-[#0D2240] py-32 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-24">Frequently Asked Questions</h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" />
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">
              © 2026 Insono Hearing · Phonak Specialist Center · Chandigarh
            </p>
          </div>
        </footer>
      </div>

      {/* Popup modal — dynamically loaded, zero cost until first CTA click */}
      <PopupModal />
    </div>
  );
}
