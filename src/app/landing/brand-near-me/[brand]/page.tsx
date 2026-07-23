import Image from "next/image";
import Link from "next/link";
import {
  Phone, MessageSquare, Award, Check, Lock,
  Zap, Ear, Battery, Bluetooth, BadgePercent,
  EyeOff, HeartHandshake, Volume2, ShieldCheck,
} from "lucide-react";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";
import HeroCarousel from "./HeroCarousel";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────

type BrandKey = "generic" | "signia" | "phonak" | "widex";

interface TableProduct {
  name: string;
  image: string;
  bestFor: string;
  features: string;
  tech: string;
  techColor: string;
}

interface BrandConfig {
  name: string;
  seoTitle: string;
  seoDescription: string;
  heroH1: string;
  heroSubtitle: string;
  urgencyBar: string;
  heroBullets: { icon: React.ReactNode; text: string; iconBg: string }[];
  ctaText: string;
  heroImages: { src: string; alt: string }[];
  formHeading: string;
  formSubtitle: string;
  productSectionHeading: string;
  tableProducts: TableProduct[];
  reviewTexts: string[];
  waText: string;
  footerLabel: string;
}

// ─── Brand configs ─────────────────────────────────────────────────────────────

const BRANDS: Record<BrandKey, BrandConfig> = {
  generic: {
    name: "Hearing Aid",
    seoTitle: "Hearing Aid Near You | Best Price, Free Test & Authorized Clinic – Insono",
    seoDescription: "Find the best hearing aid near you. Free diagnostic hearing test, all top brands — Signia, Phonak, Widex & more. Prices from ₹9,999. Book free appointment today.",
    heroH1: "Hearing Aid Price List Near You 2026",
    heroSubtitle: "Compare top brands — Signia, Phonak, Widex, ReSound & more. Free Clinical Trial at your nearest Insono authorized center.",
    urgencyBar: "A call can save you up to ₹31,500 on hearing aids",
    heroBullets: [
      { icon: <BadgePercent className="w-4 h-4 text-green-600" />, iconBg: "bg-green-100", text: `Save up to <span class="text-green-600 font-bold">₹31,500</span> on top brands` },
      { icon: <EyeOff className="w-4 h-4 text-blue-600" />, iconBg: "bg-blue-100", text: "Invisible but Powerful Designs" },
      { icon: <HeartHandshake className="w-4 h-4 text-purple-600" />, iconBg: "bg-purple-100", text: "Senior Citizen Discounts & 0% EMI" },
    ],
    ctaText: "Get July Prices & Best Offers",
    heroImages: [
      { src: "/hearwave/styletto.png", alt: "Signia Styletto Hearing Aid" },
      { src: "/hearwave/audeo-lumity.png", alt: "Phonak Audeo Lumity Hearing Aid" },
      { src: "/hearwave/oticon-intent.png", alt: "Oticon Intent Hearing Aid" },
    ],
    formHeading: "Download Hearing Aid Price List",
    formSubtitle: "Get the full 2026 Price List for all major brands — free callback within minutes.",
    productSectionHeading: "2026 Hearing Aid Model Comparison",
    tableProducts: [
      { name: "Signia Silk IX", image: "/signia-silk-ix-hero.png", bestFor: "Invisibility", features: "Invisible Fit, Instant Fit, Rechargeable", tech: "Essential", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Signia Styletto IX", image: "/signia_bct2.png", bestFor: "Style & Design", features: "SlimRIC Design, Rechargeable, Bluetooth", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Phonak Audeo Lumity", image: "/Phonak-Audeo-Lumity-Slim-hero-webp.webp", bestFor: "Versatility", features: "SmartSpeech Tech, Health Tracking, Waterproof", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Phonak Infinio", image: "/phonak-infinio-hero.webp", bestFor: "Maximum Power", features: "Chip-based AI, Rechargeable, Tinnitus Support", tech: "Premium AI", techColor: "bg-purple-50 text-purple-700 border-purple-100" },
      { name: "Phonak Audeo P", image: "/phonak-audeo-p-hero.webp", bestFor: "Smart AI Sound", features: "AutoSense OS, Universal Bluetooth, App Control", tech: "Premium AI", techColor: "bg-purple-50 text-purple-700 border-purple-100" },
    ],
    reviewTexts: [
      "Excellent service at Insono. The audiologist was very patient in explaining which model suited my hearing loss. Got fitted the same day. Highly recommend!",
      "I was confused between multiple brands but the team at Insono helped me choose the right hearing aid. Sound quality is amazing and the price was transparent — no hidden charges.",
      "Free hearing test was done professionally. Got a 7-day trial before I bought. Very happy with my hearing aid!",
      "My mother got her hearing aid from Insono. The home delivery was on time and the after-sales support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to know about hearing aids near me",
    footerLabel: "Hearing Aid Specialist",
  },
  signia: {
    name: "Signia",
    seoTitle: "Signia Hearing Aid Near You | Authorized Clinic – Free Test & Best Price",
    seoDescription: "Find the nearest authorized Signia hearing aid clinic. Free hearing test, certified audiologists & best price. Signia prices from ₹15,000. Book free appointment today.",
    heroH1: "Signia Hearing Aids Price List 2026",
    heroSubtitle: "Discover the 2026 Elite Collection. Experience digital clarity with a Free Clinical Trial at your nearest authorized Signia center.",
    urgencyBar: "Limited Trial Slots Available — Authorized Signia Partner",
    heroBullets: [
      { icon: <BadgePercent className="w-4 h-4 text-green-600" />, iconBg: "bg-green-100", text: `Save up to <span class="text-green-600 font-bold">₹31,500</span> on Signia aids` },
      { icon: <EyeOff className="w-4 h-4 text-blue-600" />, iconBg: "bg-blue-100", text: "Bluetooth & Rechargeable Signia Models" },
      { icon: <HeartHandshake className="w-4 h-4 text-purple-600" />, iconBg: "bg-purple-100", text: "Free Hearing Test at Nearest Clinic" },
    ],
    ctaText: "Download Signia Price List",
    heroImages: [
      { src: "/signia-silk-ix-hero.png", alt: "Signia Silk IX" },
      { src: "/ric-signia.png", alt: "Signia RIC" },
      { src: "/signia_bct.png", alt: "Signia Hearing Aid" },
    ],
    formHeading: "Download Signia Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Signia Price List instantly — free callback within minutes.",
    productSectionHeading: "2026 Signia Model Comparison",
    tableProducts: [
      { name: "Signia Silk IX", image: "/signia-silk-ix-hero.png", bestFor: "Invisibility", features: "Invisible Fit, Instant Fit, Rechargeable", tech: "Essential", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Signia Styletto IX", image: "/signia_bct2.png", bestFor: "Style & Design", features: "SlimRIC Design, Rechargeable, Bluetooth 5.0", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Signia Pure C&G IX", image: "/signia_bct2.png", bestFor: "Versatility", features: "IX Platform AI, Own Voice Processing, Rechargeable", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Signia Active Pro", image: "/brands/signia active pro.png", bestFor: "Active Lifestyle", features: "Earphone Design, Rechargeable, App Control", tech: "Essential", techColor: "bg-green-50 text-green-700 border-green-100" },
    ],
    reviewTexts: [
      "Excellent service at Insono. The audiologist was very patient in explaining which Signia model suited my hearing loss. Got fitted the same day. Highly recommend!",
      "I was confused between multiple brands but the team at Insono helped me choose Signia Pure Charge&Go. Sound quality is amazing and the price was transparent — no hidden charges.",
      "Free hearing test done professionally. Got a 7-day trial before I bought. Very happy with my Signia Styletto — looks great too!",
      "My mother got her Signia hearing aid from Insono. The home delivery was on time and after-sales support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to chat with an audiologist about Signia hearing aids near me",
    footerLabel: "Signia Specialist Center",
  },
  phonak: {
    name: "Phonak",
    seoTitle: "Phonak Hearing Aid Near You | Authorized Clinic – Free Test & Best Price",
    seoDescription: "Find the nearest authorized Phonak hearing aid clinic. Free hearing test, certified audiologists & best price. Phonak prices from ₹18,000. Book free appointment today.",
    heroH1: "Phonak Hearing Aids Price List 2026",
    heroSubtitle: "Discover the 2026 Phonak Collection. Experience Swiss precision with a Free Clinical Trial at your nearest authorized Phonak center.",
    urgencyBar: "Limited Trial Slots Available — Authorized Phonak Partner",
    heroBullets: [
      { icon: <BadgePercent className="w-4 h-4 text-green-600" />, iconBg: "bg-green-100", text: `Save up to <span class="text-green-600 font-bold">₹31,500</span> on Phonak aids` },
      { icon: <EyeOff className="w-4 h-4 text-blue-600" />, iconBg: "bg-blue-100", text: "Ultra clear sound with Phonak AutoSense AI" },
      { icon: <HeartHandshake className="w-4 h-4 text-purple-600" />, iconBg: "bg-purple-100", text: "Free Hearing Test at Nearest Clinic" },
    ],
    ctaText: "Download Phonak Price List",
    heroImages: [
      { src: "/Phonak-Audeo-Lumity-Slim-hero-webp.webp", alt: "Phonak Audeo Lumity" },
      { src: "/phonak-infinio-hero.webp", alt: "Phonak Infinio" },
      { src: "/phonak-audeo-p-hero.webp", alt: "Phonak Audeo P" },
    ],
    formHeading: "Download Phonak Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Phonak Price List instantly — free callback within minutes.",
    productSectionHeading: "2026 Phonak Model Comparison",
    tableProducts: [
      { name: "Phonak Audeo Lumity", image: "/Phonak-Audeo-Lumity-Slim-hero-webp.webp", bestFor: "Versatility", features: "SmartSpeech Tech, Universal Bluetooth, Waterproof", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Phonak Infinio", image: "/phonak-infinio-hero.webp", bestFor: "Best Performance", features: "Chip-based AI, Hands-free calls, Slim RIC", tech: "Premium AI", techColor: "bg-purple-50 text-purple-700 border-purple-100" },
      { name: "Phonak Audeo P", image: "/phonak-audeo-p-hero.webp", bestFor: "Smart Lifestyle", features: "AutoSense OS, Health Tracking, Falls Detection", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
    ],
    reviewTexts: [
      "Got my Phonak Audeo fitted at Insono. The AutoSense AI is incredible — adjusts automatically in every environment. Highly recommend!",
      "Was confused between brands but Insono team recommended Phonak Lumity after my audiogram. Sound quality is amazing and pricing was transparent — no hidden charges.",
      "Free hearing test done professionally. Got 7-day trial before buying. Very happy with my Phonak — Bluetooth connectivity works perfectly!",
      "My father got his Phonak hearing aid from Insono. Home delivery was on time and after-sales support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to chat with an audiologist about Phonak hearing aids near me",
    footerLabel: "Phonak Specialist Center",
  },
  widex: {
    name: "Widex",
    seoTitle: "Widex Hearing Aid Near You | Authorized Clinic – Free Test & Best Price",
    seoDescription: "Find the nearest authorized Widex hearing aid clinic. Free hearing test, certified audiologists & best price. Widex prices from ₹20,000. Book free appointment today.",
    heroH1: "Widex Hearing Aids Price List 2026",
    heroSubtitle: "Experience the world's most natural hearing technology with a Free Clinical Trial at your nearest authorized Widex center.",
    urgencyBar: "Limited Trial Slots Available — Authorized Widex Partner",
    heroBullets: [
      { icon: <BadgePercent className="w-4 h-4 text-green-600" />, iconBg: "bg-green-100", text: `Save up to <span class="text-green-600 font-bold">₹31,500</span> on Widex aids` },
      { icon: <EyeOff className="w-4 h-4 text-blue-600" />, iconBg: "bg-blue-100", text: "Natural sound with Widex PureSound technology" },
      { icon: <HeartHandshake className="w-4 h-4 text-purple-600" />, iconBg: "bg-purple-100", text: "Free Hearing Test at Nearest Clinic" },
    ],
    ctaText: "Download Widex Price List",
    heroImages: [
      { src: "/signia_bct2.png", alt: "Widex Hearing Aid" },
    ],
    formHeading: "Download Widex Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Widex Price List instantly — free callback within minutes.",
    productSectionHeading: "2026 Widex Model Comparison",
    tableProducts: [
      { name: "Widex MOMENT Sheer", image: "/signia_bct2.png", bestFor: "Purest Sound", features: "ZeroDelay Tech, Natural Sound, Rechargeable", tech: "Advanced", techColor: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Widex EVOKE 440", image: "/signia_bct2.png", bestFor: "AI Powered", features: "Machine Learning, Fluid Sound, App Control", tech: "Premium AI", techColor: "bg-purple-50 text-purple-700 border-purple-100" },
    ],
    reviewTexts: [
      "Got my Widex Moment fitted at Insono. The PureSound technology is incredible — the most natural sound I've ever heard. Highly recommend!",
      "Was confused between brands but Insono team recommended Widex EVOKE after my audiogram. The AI personalization is amazing and pricing was transparent.",
      "Free hearing test done professionally. Got 7-day trial before buying. Very happy with my Widex MOMENT — sounds completely natural!",
      "My mother got her Widex hearing aid from Insono. The home delivery was on time and lifetime tuning support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to chat with an audiologist about Widex hearing aids near me",
    footerLabel: "Widex Specialist Center",
  },
};

const VALID_BRANDS = Object.keys(BRANDS) as BrandKey[];

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

const REVIEWS_BASE = [
  { name: "Vikram Sharma",   initials: "VS", avatarColor: "bg-[#184A99]",  time: "1 month ago" },
  { name: "Anita Rao",       initials: "AR", avatarColor: "bg-emerald-600", time: "2 months ago" },
  { name: "Kuldeep Dhillon", initials: "KD", avatarColor: "bg-purple-600",  time: "3 months ago" },
  { name: "Meena Verma",     initials: "MV", avatarColor: "bg-rose-600",    time: "2 weeks ago" },
];

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return VALID_BRANDS.map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const config = BRANDS[brandSlug as BrandKey];
  if (!config) return {};
  return {
    title: config.seoTitle,
    description: config.seoDescription,
    alternates: { canonical: `https://insonohearing.com/landing/brand-near-me/${brandSlug}` },
    openGraph: { title: config.seoTitle, description: config.seoDescription, url: `https://insonohearing.com/landing/brand-near-me/${brandSlug}`, type: "website", locale: "en_IN" },
    robots: "index, follow",
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BrandNearMePage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params;
  if (!VALID_BRANDS.includes(brandSlug as BrandKey)) notFound();

  const config = BRANDS[brandSlug as BrandKey];
  const utmCity = `brand-near-me-${brandSlug}`;
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  const REVIEWS = REVIEWS_BASE.map((r, i) => ({ ...r, text: config.reviewTexts[i] }));

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden pb-12 md:pb-0">
      <style dangerouslySetInnerHTML={{
        __html: `
          header.bg-transparent,
          footer,
          div.fixed.bottom-0.left-0.right-0:not(.bnm-bottom-bar) { display: none !important; }
          body { padding-top: 0 !important; }
          @keyframes bnm-up {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes bnm-left {
            from { opacity: 0; transform: translateX(-18px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes bnm-scale {
            from { opacity: 0; transform: scale(0.95); }
            to   { opacity: 1; transform: scale(1); }
          }
          .bnm-up    { animation: bnm-up    0.55s ease both; }
          .bnm-left  { animation: bnm-left  0.55s ease both; }
          .bnm-scale { animation: bnm-scale 0.7s ease both; }
          .bnm-d1 { animation-delay: 0.1s; }
          .bnm-d2 { animation-delay: 0.2s; }
          .bnm-d3 { animation-delay: 0.3s; }
        `
      }} />

      {/* ── HEADER ── */}
      <header className="py-3 px-4 md:px-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1180px] mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.webp" alt="Insono Hearing" width={130} height={42} className="h-12 md:h-14 w-auto object-contain" priority />
          </Link>
          <a href="tel:+916204260510" className="flex items-center gap-2 bg-[#184A99] hover:bg-[#13366e] text-white font-semibold rounded-full px-5 py-2.5 text-sm transition-all active:scale-95 shadow-sm">
            <Phone className="w-4 h-4" /> +91 62042 60510
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-0 pb-12 md:pt-16 md:pb-24 overflow-hidden bg-white">
        {/* Background blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-violet-50/50" />
        <div className="absolute -top-48 -left-48 w-[650px] h-[650px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-indigo-400/15 blur-[100px]" />
        <div className="absolute -bottom-24 left-[15%] w-[500px] h-[350px] rounded-full bg-cyan-300/20 blur-[100px]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.08 }} />

        <div className="max-w-[1180px] mx-auto px-4 md:px-6 relative z-10">
          {/* Mobile H1 above grid */}
          <h1 className="lg:hidden text-[26px] font-extrabold leading-tight text-slate-900 text-center mb-4 px-1">Hearing Aid Price List 2026</h1>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">

            {/* ── Col 1: Text ── */}
            <div className="order-2 lg:order-1 text-left w-full bnm-left">
              <div className="hidden lg:inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <Award className="w-3.5 h-3.5" /> India&apos;s Trusted Multi-Brand Partner
              </div>
              <h1 className="hidden lg:block text-3xl lg:text-[40px] font-black leading-[1.14] text-slate-900 mb-4 tracking-tight">
                <span className="block">Hearing Aid Price</span>
                <span className="block">List 2026</span>
              </h1>

              <ul className="space-y-3 mb-5 text-left">
                {config.heroBullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${b.iconBg}`}>
                      {b.icon}
                    </div>
                    <span className="text-sm lg:text-base font-semibold text-slate-700" dangerouslySetInnerHTML={{ __html: b.text }} />
                  </li>
                ))}
              </ul>

              {/* Mobile price box + CTA */}
              <div className="lg:hidden mb-5 space-y-3">
                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-3.5 shadow-sm flex items-center gap-3 w-fit">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Prices start from</div>
                    <div className="font-bold text-base text-slate-900">₹15,000 | 0% EMI Offers</div>
                  </div>
                </div>
                <PopupTrigger className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold py-3.5 px-8 h-auto rounded-full shadow-lg gap-2 transition-all active:scale-95">
                  🔥 {config.ctaText} →
                </PopupTrigger>
              </div>

              {/* Mobile stats strip */}
              <div className="lg:hidden border-y border-slate-100 py-3 mb-5">
                <div className="grid grid-cols-4 gap-1">
                  {[
                    { val: "10k+", label: "Happy Users" },
                    { val: "15+", label: "Years Exp." },
                    { val: "50+", label: "Audiologists" },
                    { val: "98%", label: "Happy Rate" },
                  ].map((s, i) => (
                    <div key={i} className={`text-center ${i > 0 ? "border-l border-slate-100" : ""}`}>
                      <div className="text-lg font-bold text-[#184A99] leading-none mb-1">{s.val}</div>
                      <div className="text-xs text-slate-400 font-semibold leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: price box + CTA */}
              <div className="hidden lg:block">
                <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-4 shadow-sm flex items-center gap-3 mb-6 w-fit">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Prices start from</div>
                    <div className="font-bold text-lg text-slate-900">₹15,000 | 0% EMI Offers</div>
                  </div>
                </div>
                <PopupTrigger className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-lg h-14 px-10 rounded-full shadow-lg shadow-orange-100 transition-all active:scale-95">
                  🔥 {config.ctaText} →
                </PopupTrigger>
              </div>
            </div>

            {/* ── Col 2: Hero Carousel ── */}
            <HeroCarousel images={config.heroImages} />

            {/* ── Col 3: Lead Form (desktop only) ── */}
            <div className="hidden lg:block order-3 w-full bnm-up bnm-d2" id="lead-section">
              <div className="max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="bg-orange-500 text-white text-xs font-bold text-center py-2.5 rounded-t-3xl shadow-sm">
                  ⚡ Limited Free Trial Slots This Week — Unlock Price &amp; Book Yours Now
                </div>
                <div className="bg-white rounded-b-3xl shadow-xl p-6 md:p-7 border border-slate-100">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-slate-800 tracking-tight">{config.formHeading}</h3>
                <div className="flex justify-between items-center text-xs mb-3">
                  <span className="text-slate-400 font-medium">Enter your details below</span>
                  <span className="text-red-600 font-bold bg-red-50 px-2.5 py-1 rounded-xl border border-red-100 text-xs">Price starts from ₹15,000</span>
                </div>
                <LeadForm city={utmCity} />
                <p className="text-[11px] text-slate-400 text-center leading-snug mt-3">
                  💡 Please provide the correct WhatsApp number to receive the price list.
                </p>
                <div className="flex justify-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-widest mt-4">
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Instant Callback</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> No Spam</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> 100% Free</span>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR (desktop) ── */}
      <section className="py-8 bg-slate-100 hidden md:block border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { val: "10,000+", label: "Happy Customers" },
              { val: "15+", label: "Years Experience" },
              { val: "50+", label: "Expert Audiologists" },
              { val: "98%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-[#184A99]">{s.val}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS TABLE ── */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">{config.productSectionHeading}</h2>
            <p className="text-slate-500 text-base md:text-lg">Multi-brand comparison at one place. Try before you buy — no pressure.</p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {["Product", "Best For", "Key Features", "Technology", "Price"].map((h) => (
                    <th key={h} className="p-6 font-bold uppercase tracking-wider text-sm">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {config.tableProducts.map((p) => (
                  <tr key={p.name} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 bg-slate-50 rounded-xl p-1 shrink-0 flex items-center justify-center border border-slate-100">
                          <Image src={p.image} alt={p.name} width={56} height={56} loading="lazy" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="font-bold text-slate-900">{p.name}</div>
                      </div>
                    </td>
                    <td className="p-6 text-slate-600 text-sm">{p.bestFor}</td>
                    <td className="p-6 text-slate-600 text-sm">{p.features}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${p.techColor}`}>{p.tech}</span>
                    </td>
                    <td className="p-6">
                      <div className="flex flex-col items-start gap-1">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Lock className="w-3 h-3" />
                          <span className="blur-[4px] select-none text-slate-300 font-bold tracking-widest">₹XX,XXX</span>
                        </div>
                        <PopupTrigger className="text-[#184A99] text-xs font-bold hover:underline cursor-pointer">
                          See {currentMonth} Price →
                        </PopupTrigger>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {config.tableProducts.map((p) => (
              <div key={p.name} className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
                <div className="flex items-center gap-4 px-4 pt-4 pb-3">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-2 shrink-0 flex items-center justify-center border border-slate-100">
                    <Image src={p.image} alt={p.name} width={56} height={56} loading="lazy" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1.5">{p.name}</h3>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border uppercase tracking-wider ${p.techColor}`}>{p.tech}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100">
                  <div className="p-3.5">
                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Best For</div>
                    <div className="text-sm text-slate-700 font-semibold">{p.bestFor}</div>
                  </div>
                  <div className="p-3.5">
                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Key Features</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{p.features}</div>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1.5">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Price Hidden</span>
                    </div>
                    <div className="text-2xl font-black tracking-widest text-slate-300 blur-[7px] select-none mb-3 leading-none">₹XX,XXX</div>
                    <PopupTrigger className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl h-10 text-sm transition-all active:scale-95 flex items-center justify-center">
                      🔥 Get {currentMonth} Price List
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile all-models CTA */}
            <div className="rounded-3xl p-5 text-center bg-[#1d4ed8] text-white shadow-lg">
              <p className="font-bold text-sm mb-1">📋 Compare All Models at Once</p>
              <p className="text-blue-100 text-xs mb-4">Submit your details once to unlock all prices instantly</p>
              <PopupTrigger className="w-full bg-white text-[#1d4ed8] hover:bg-blue-50 font-bold rounded-xl h-11 text-sm transition-all active:scale-95 flex items-center justify-center">
                🔥 Download {currentMonth} Prices — Free
              </PopupTrigger>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 md:p-8 text-center">
            <p className="text-slate-800 font-bold text-sm md:text-xl leading-relaxed">
              📌 Prices start from <span className="text-[#184A99] font-black">₹15,000</span> —{" "}
              <PopupTrigger className="text-[#184A99] underline font-bold cursor-pointer inline">see {currentMonth.toLowerCase()} prices</PopupTrigger>
              {" "}+ get your free trial slot.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY INSONO (5-card grid) ── */}
      <section className="py-12 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Why Insono is the Best Choice Near You
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Certified audiologists, premium brands, transparent pricing — all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              { icon: <Volume2 className="w-6 h-6 md:w-8 md:h-8" />, title: "Free Hearing Test", desc: "Comprehensive audiometry in soundproof setup at no cost." },
              { icon: <Battery className="w-6 h-6 md:w-8 md:h-8" />, title: "Rechargeable Models", desc: "No more battery hassle. All-day charge in hours." },
              { icon: <Bluetooth className="w-6 h-6 md:w-8 md:h-8" />, title: "Bluetooth & App", desc: "Stream calls & music directly to your hearing aid." },
              { icon: <Ear className="w-6 h-6 md:w-8 md:h-8" />, title: "Invisible & Comfy", desc: "Ultra-discreet designs you'll forget you're wearing." },
              { icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />, title: "Lifetime Tuning", desc: "Free lifetime adjustments & software updates included." },
            ].map((card, i) => (
              <div
                key={i}
                className={`text-center p-4 md:p-6 rounded-2xl bg-blue-50/50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all ${i === 4 ? "col-span-2 md:col-span-1 max-w-xs md:max-w-none mx-auto w-full" : ""}`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md text-[#184A99]">
                  {card.icon}
                </div>
                <h3 className="font-bold text-sm md:text-base mb-2 text-slate-900">{card.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR GUARANTEE (Comparison Table) ── */}
      <section className="py-12 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-14 text-slate-900">
            Our <span className="text-[#184A99]">Guarantee</span>
          </h2>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#184A99] text-white">
              <div className="py-4 px-5 font-bold text-sm">Features</div>
              <div className="py-4 px-4 text-center border-l border-white/20 font-bold text-sm text-yellow-300">Insono</div>
              <div className="py-4 px-4 text-center border-l border-white/20 font-bold text-sm text-white/70">Others</div>
            </div>
            {/* Rows */}
            {[
              { feature: "Free Hearing Check-Ups",     insono: true,  others: true },
              { feature: "Experienced Audiologists",   insono: true,  others: false },
              { feature: "Free Device Trials",         insono: true,  others: false },
              { feature: "Free Fine-Tunings",          insono: true,  others: false },
              { feature: "Extended Warranty",          insono: true,  others: false },
              { feature: "Top Brand Availability",     insono: true,  others: false },
              { feature: "0% EMI Options",             insono: true,  others: false },
              { feature: "Price Transparency",         insono: true,  others: false },
            ].map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                <div className="py-4 px-5 text-sm font-medium text-slate-700">{row.feature}</div>
                <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                  <span className="text-emerald-500 text-lg font-black">✓</span>
                </div>
                <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100">
                  {row.others
                    ? <span className="text-emerald-500 text-lg font-black">✓</span>
                    : <span className="text-red-400 text-lg font-black">✗</span>
                  }
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <PopupTrigger className="inline-flex items-center justify-center gap-2 bg-[#184A99] hover:bg-[#13366e] text-white font-bold px-8 py-4 rounded-full text-sm transition-all active:scale-95 shadow-md shadow-blue-100">
              Book Free Appointment →
            </PopupTrigger>
          </div>
        </div>
      </section>


      <section className="py-12 md:py-20 bg-[#0D2240] text-white overflow-hidden relative border-t border-blue-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: checklist */}
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8">Trusted by Thousands Across India</h2>
              <div className="grid gap-4 md:gap-6">
                {[
                  { title: "Multi-Brand Authorized Center", desc: "Signia, Phonak, Widex, Oticon — all genuine with official warranty." },
                  { title: "Free Trial & Hearing Test", desc: "Experience the sound before you commit. No obligation." },
                  { title: "0% EMI & Senior Discounts", desc: "Flexible payment options starting from ₹2,500/month." },
                  { title: "Lifetime Free Tuning", desc: "Ongoing adjustments & software updates at zero cost." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#184A99] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-xl mb-1">{item.title}</h4>
                      <p className="text-blue-100/70 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats card (Hearwave style) */}
            <div className="flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-10 border border-white/10 text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-1">15+</div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200/70 mb-8">Years of Clinical Excellence</div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white">10k+</div>
                    <div className="text-xs text-blue-200/70 font-semibold mt-1 uppercase tracking-wider">Happy Patients</div>
                  </div>
                  <div className="border-l border-white/10">
                    <div className="text-3xl md:text-4xl font-black text-white">50k+</div>
                    <div className="text-xs text-blue-200/70 font-semibold mt-1 uppercase tracking-wider">Lives Changed</div>
                  </div>
                </div>
                <PopupTrigger className="w-full bg-white hover:bg-blue-50 text-[#0D2240] font-bold rounded-2xl py-4 text-sm transition-all active:scale-95 flex items-center justify-center">
                  Book Free Appointment
                </PopupTrigger>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
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
              <div key={r.name} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${r.avatarColor}`}>{r.initials}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">{r.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5"><span className="text-emerald-500 font-semibold">✓ Verified</span></p>
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
          <div className="text-center mt-6">
            <a href="https://share.google/RDuVMbenuWSAEEqLt" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#184A99] hover:underline">
              Read all 1,200+ reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            {config.name} Hearing Aid FAQ
          </h2>
          <FAQAccordion brand={brandSlug} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 md:py-16 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <Image src="/logo.webp" alt="Insono Logo" width={130} height={42} className="h-10 w-auto object-contain mb-6" />
          <div className="flex space-x-6 mb-6 text-slate-400">
            <a href="https://youtube.com/@insonohearing" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors"><FaYoutube size={20} /></a>
            <a href="https://www.instagram.com/insono_hearing_solutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com/insonohearingsolution" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors"><FaFacebook size={20} /></a>
            <a href="https://www.linkedin.com/company/insonohearing" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors"><FaLinkedin size={20} /></a>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            © 2026 Insono Hearing Solutions · {config.footerLabel}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── MOBILE STICKY BOTTOM BAR ── */}
      <div className="bnm-bottom-bar md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 flex">
        <a
          href={`https://wa.me/916204260510?text=${encodeURIComponent(config.waText)}`}
          target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
        </a>
        <div className="w-px bg-white/20" />
        <a href="tel:+916204260510" className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2">
          <Phone className="w-4 h-4" />
          <span className="text-[10px] font-black leading-none text-center">Call &amp; Save up to ₹31,500</span>
        </a>
      </div>

      <PopupModal city={config.name} citySlug={utmCity} />
    </div>
  );
}
