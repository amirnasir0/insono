import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, MessageSquare, ArrowRight, Users, MapPin, Stethoscope, FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";
import CountdownTimer from "./CountdownTimer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hearing Aid Offers & Deals 2026 | Insono Hearing",
  description: "Limited time offers on premium hearing aids — Signia, Phonak, Widex, Oticon. Free hearing test, 7-day trial & 0% EMI. Claim your offer today.",
};

const FEATURED_MODELS = [
  {
    rank: 1,
    badge: "Best Seller",
    badgeColor: "bg-[#184A99] text-white",
    title: "Signia Pure Charge&Go",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772792684301-Signia-Pure-Charge%26Go-7IX%40%40%40.webp",
    features: ["IX Platform AI", "Own Voice Processing", "Rechargeable", "Tinnitus Therapy"],
    channels: "48 Channels",
    style: "RIC",
    highlight: "India's most sold hearing aid — clinically proven performance",
  },
  {
    rank: 2,
    badge: "Purest Sound",
    badgeColor: "bg-emerald-600 text-white",
    title: "Widex MOMENT Sheer",
    brand: "Widex",
    brandLogo: "/brands/widex.svg",
    image: "/lp/widex1.png",
    features: ["ZeroDelay Tech", "Natural Sound", "Rechargeable", "AI Personalization"],
    channels: "15 Channels",
    style: "RIC",
    highlight: "The most natural-sounding digital hearing aid ever made",
  },
  {
    rank: 3,
    badge: "Doctor's Choice",
    badgeColor: "bg-purple-600 text-white",
    title: "Phonak Lumity",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "/Phonak-Audeo-Lumity-Slim-hero-webp.webp",
    features: ["StereoSelect", "AutoSense OS 5.0", "Rechargeable", "Bluetooth"],
    channels: "48 Channels",
    style: "RIC",
    highlight: "Recommended by 9 out of 10 audiologists across India",
  },
];

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
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

const REVIEWS = [
  { name: "Vikram Sharma",   initials: "VS", avatarColor: "bg-[#184A99]",  location: "Delhi",      time: "1 month ago",  text: "Got the seasonal offer on Signia Pure — saved over ₹25,000. The audiologist was excellent and fitted me on the same day. Highly recommend Insono!" },
  { name: "Anita Rao",       initials: "AR", avatarColor: "bg-emerald-600", location: "Mumbai",    time: "2 months ago", text: "Got the seasonal discount for my mom. They gave a 7-day trial before we committed. The Widex MOMENT sounds incredibly natural. Thank you Insono!" },
  { name: "Kuldeep Dhillon", initials: "KD", avatarColor: "bg-purple-600",  location: "Chandigarh", time: "3 weeks ago",  text: "The seasonal offer included free home delivery and 0% EMI. I got the Phonak Lumity at a price I couldn't find anywhere else. After-sales support is great." },
  { name: "Meena Verma",     initials: "MV", avatarColor: "bg-rose-600",    location: "Noida",     time: "2 weeks ago",  text: "Didn't know what to expect but the free hearing test was thorough and the offer price was genuinely lower than other stores. Very happy with my purchase." },
];

const DEFAULT_OFFER = {
  name: "Big Discounts on Hearing Aids",
  badge: "Exclusive 2026 Deals",
  tagline: "Best prices of the year on all major hearing aid brands — Signia, Phonak, Widex & more",
  discount: "Save up to ₹31,500",
  endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
};

export default async function OffersLandingPage() {
  let dbOffer = null;
  try {
    dbOffer = await prisma.offer.findFirst({ where: { isActive: true } });
  } catch (e) {
    console.error("Failed to fetch offer from DB:", e);
  }
  const offer = dbOffer
    ? { ...dbOffer, endsAt: dbOffer.endsAt.toISOString() }
    : DEFAULT_OFFER;

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
          @keyframes of-up {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes of-scale {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes of-pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .of-up    { animation: of-up   0.5s ease both; }
          .of-up.d1 { animation-delay: 0.1s; }
          .of-up.d2 { animation-delay: 0.2s; }
          .of-up.d3 { animation-delay: 0.3s; }
          .of-up.d4 { animation-delay: 0.4s; }
          .of-scale { animation: of-scale 0.7s 0.4s ease both; }
          .of-viewing-dot { animation: of-pulse-dot 1.5s ease-in-out infinite; }
        `
      }} />

      {/* ── MOBILE ── */}
      <div className="block md:hidden pb-20">

        {/* Urgency bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          {offer.badge} · Offer Ends Soon
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
          <div className="px-4 pt-4 pb-10 relative z-10 text-center">

            {/* Offer badge */}
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">{offer.badge}</span>
            </div>

            <h1 className="of-up text-[22px] font-black leading-[1.15] mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                {offer.name}
              </span>
            </h1>

            <p className="of-up d1 text-[13px] text-slate-500 font-medium mb-4 leading-snug">{offer.tagline}</p>

            {/* Trust pills */}
            <div className="of-up d1 flex flex-wrap justify-center gap-2 mb-4">
              {["✓ Free Hearing Test", "✓ 7-Day Trial", "✓ 0% EMI"].map((t) => (
                <span key={t} className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-3 py-1">{t}</span>
              ))}
            </div>

            {/* Product image strip */}
            <div className="of-up d1 flex justify-center items-center gap-3 mb-4">
              {FEATURED_MODELS.map((p) => (
                <div key={p.rank} className="w-[72px] h-[72px] bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center p-1.5">
                  <Image src={p.image} alt={p.title} width={60} height={60} className="object-contain" />
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="of-up d2 flex items-center justify-center gap-1.5 mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full of-viewing-dot" />
              <span className="text-[11px] text-slate-500 font-medium"><span className="font-black text-slate-800">47 people</span> are viewing this offer right now</span>
            </div>

            {/* Countdown */}
            <div className="of-up d2 flex flex-col items-center gap-2 mb-5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Offer ends in</p>
              <CountdownTimer endsAt={offer.endsAt} />
            </div>

            {/* Discount pill */}
            <div className="of-up d2 inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 mb-5">
              <span className="text-[13px] font-black text-[#184A99]">{offer.discount}</span>
              <span className="text-[11px] text-slate-400 font-medium">· EMI from ₹799/mo</span>
            </div>

            <div className="of-up d3 w-full flex flex-col gap-2">
              <PopupTrigger className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all">
                <FileText className="w-4 h-4" />
                Get Offer Price on WhatsApp
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Featured models */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Hearing Aids on Offer</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to claim the offer price</p>
          </div>
          <div className="space-y-3">
            {FEATURED_MODELS.map((p) => (
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
                      <Image src={p.brandLogo} alt={p.brand} width={60} height={12} className="h-3 w-auto grayscale opacity-50" />
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
                      <p className="text-[9px] text-rose-500 font-bold leading-none mb-0.5">Offer Price</p>
                      <p className="text-[11px] font-bold text-[#184A99]">Price on Request</p>
                    </div>
                    <PopupTrigger className="flex items-center gap-1 bg-[#184A99] text-white text-[10px] font-bold px-3 py-2 rounded-xl active:scale-95 transition flex-shrink-0">
                      Claim <ArrowRight className="w-3 h-3" />
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
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono for hearing aid offers</p>
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
                  {row.others === false
                    ? <span className="text-red-400 text-base font-black">✗</span>
                    : <span className="text-amber-500 text-[9px] font-bold leading-tight text-center">{row.others}</span>}
                </div>
              </div>
            ))}
          </div>
          <PopupTrigger className="w-full mt-4 h-[46px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[13px] font-bold active:scale-[0.97] transition shadow-md shadow-[#184A99]/20">
            <FileText className="w-4 h-4" />
            Claim Offer Now
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
              {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
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
                    <div className="flex gap-0.5 mt-1">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-[10px]">★</span>)}</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-white mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion />
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar flex">
          <a
            href={`https://wa.me/916204260510?text=Hi, I want to know about the ${offer.name} hearing aid offer`}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
          </a>
          <div className="w-px bg-white/20" />
          <a href="tel:+916204260510" className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2">
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-black leading-none text-center">Call & Save up to ₹31,500</span>
          </a>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">

        {/* Hero */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Col 1: Text + Countdown */}
              <div className="flex-[1.6] pt-8">
                <div className="of-up hidden lg:inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-5 py-2 text-[11px] font-bold text-rose-700 mb-8">
                  <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                  {offer.badge} · Limited Time Offer
                </div>

                <h1 className="of-up d1 text-5xl lg:text-[52px] font-black leading-[1.15] mb-6 text-[#0D2240] tracking-tight">
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    {offer.name}
                  </span>
                </h1>

                <p className="of-up d2 text-slate-500 text-xl mb-6 max-w-xl leading-relaxed font-medium">{offer.tagline}</p>

                {/* Trust pills */}
                <div className="of-up d2 flex flex-wrap gap-3 mb-8">
                  {["✓ Free Hearing Test", "✓ 7-Day Free Trial", "✓ 0% EMI Available", "✓ Certified Audiologist"].map((t) => (
                    <span key={t} className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-4 py-1.5">{t}</span>
                  ))}
                </div>

                {/* Social proof */}
                <div className="of-up d2 flex items-center gap-2 mb-8">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full of-viewing-dot" />
                  <span className="text-sm text-slate-500"><span className="font-black text-slate-800">47 people</span> are viewing this offer right now</span>
                </div>

                {/* Discount + Countdown side by side */}
                <div className="of-up d2 flex flex-wrap items-center gap-8 mb-10">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">You Save</p>
                    <p className="text-3xl font-black text-[#E83D6D]">{offer.discount}</p>
                    <p className="text-xs text-slate-400 mt-1">EMI starting ₹799/month</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Offer Ends In</p>
                    <CountdownTimer endsAt={offer.endsAt} />
                  </div>
                </div>

                <div className="of-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
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

                <div className="of-up d4 pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Lead form */}
              <div className="of-up d4 w-full lg:w-[380px] flex-shrink-0 pt-8">
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    {offer.badge}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">Claim Your Offer</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">Get the full offer price list instantly on WhatsApp.</p>
                  <LeadForm offerName={offer.name} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">On Offer</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">Top Hearing Aids This Season</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">
              All major brands at special offer pricing — claimed by 2 lakh+ happy customers.
            </p>
          </div>

          <div className="grid gap-12">
            {FEATURED_MODELS.map((p) => (
              <div
                key={p.rank}
                className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 flex flex-col lg:flex-row group"
              >
                <div className="lg:w-[420px] bg-slate-50 relative min-h-[400px] flex items-center justify-center p-12">
                  <Image src={p.image} alt={p.title} fill loading="lazy" sizes="420px" className="object-contain p-16 group-hover:scale-105 transition-transform duration-700" />
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
                        <span key={f} className="bg-slate-50 text-slate-500 px-6 py-3 rounded-2xl text-[11px] font-bold border border-slate-100 uppercase tracking-widest">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-start gap-6 pt-12 border-t border-slate-50">
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-1">{offer.badge} Offer</p>
                      <p className="text-lg font-black text-[#E83D6D]">{offer.discount}</p>
                    </div>
                    <PopupTrigger className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#184A99] text-white px-12 py-6 rounded-[2rem] font-bold text-sm hover:bg-[#13366e] transition border border-slate-200 uppercase tracking-widest shadow-xl shadow-blue-100">
                      Claim Offer Price <ArrowRight className="w-4 h-4" />
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
              <p className="text-slate-500 mt-3 text-base">Why thousands choose Insono Hearing for their offers</p>
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
                    {row.others === false
                      ? <span className="text-red-400 text-lg font-black">✗</span>
                      : <span className="text-amber-500 text-xs font-bold">{row.others}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <PopupTrigger className="inline-flex items-center gap-3 bg-[#184A99] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-[#13366e] transition shadow-xl shadow-blue-100 uppercase tracking-widest">
                <FileText className="w-5 h-5" />
                Claim Offer &amp; Get Price List
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
                {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
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
                    {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                    <span className="text-[10px] text-slate-400 ml-1 self-center">{r.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="https://share.google/RDuVMbenuWSAEEqLt" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#184A99] hover:underline">
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
              © 2026 Insono Hearing · {offer.badge} · Limited Period Offer
            </p>
          </div>
        </footer>
      </div>

      <PopupModal offerName={offer.name} badge={offer.badge} />
    </div>
  );
}
