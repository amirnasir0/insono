import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, Users, MapPin, Stethoscope, FileText, Lock } from "lucide-react";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ─── Types ────────────────────────────────────────────────────────────────────

type BrandKey = "generic" | "signia" | "phonak" | "widex";

interface Model {
  rank: number;
  badge: string;
  badgeColor: string;
  title: string;
  brand: string;
  brandLogo: string;
  image: string;
  features: string[];
  channels: string;
  style: string;
  highlight: string;
}

interface BrandConfig {
  name: string;
  seoTitle: string;
  seoDescription: string;
  heroH1: string;
  heroSubtitle: string;
  urgencyBar: string;
  heroBullets: { icon: string; text: string }[];
  ctaText: string;
  priceListLabel: string;
  heroImage: string;
  formHeading: string;
  formSubtitle: string;
  productSectionHeading: string;
  productSectionSub: string;
  models: Model[];
  reviewTexts: string[];
  waText: string;
  footerLabel: string;
}

// ─── Models ───────────────────────────────────────────────────────────────────

const GENERIC_MODELS: Model[] = [
  { rank: 1, badge: "Best Seller", badgeColor: "bg-[#184A99] text-white", title: "Signia Orion C&G", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg", features: ["Rechargeable", "Bluetooth Streaming", "Speech Clarity", "App Control"], channels: "24 Channels", style: "RIC", highlight: "Best entry-level rechargeable hearing aid — great for first-time users" },
  { rank: 2, badge: "Ultra Stylish", badgeColor: "bg-rose-600 text-white", title: "Signia Styletto", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772794609852-cosmic-blue_rose-gold_double_dd4310ec-bb18-403c-a7c9-05467ff34b3b-%281%29.webp", features: ["Slim Elegant Design", "Rechargeable", "Bluetooth 5.0", "IX Platform AI"], channels: "48 Channels", style: "RIC", highlight: "Fashion-forward hearing aid with premium AI sound quality" },
  { rank: 3, badge: "AI Powered", badgeColor: "bg-emerald-600 text-white", title: "Phonak Audeo Sphere I90", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png", features: ["Dual AI Engines", "Speech from Noise", "Universal Bluetooth", "Rechargeable"], channels: "48 Channels", style: "RIC", highlight: "World's first hearing aid with a dedicated AI chip for speech clarity" },
  { rank: 4, badge: "Doctor's Choice", badgeColor: "bg-amber-500 text-white", title: "Phonak Audeo Lumity", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "/lp/phonak1.png", features: ["SmartSpeech Tech", "Universal Connectivity", "Health Tracking", "Waterproof"], channels: "24 Channels", style: "RIC", highlight: "Most popular Phonak model for active social lifestyles" },
  { rank: 5, badge: "Crystal Sound", badgeColor: "bg-purple-600 text-white", title: "Widex MOMENT 440", brand: "Widex", brandLogo: "/brands/widex.svg", image: "/lp/widex1.png", features: ["Pure Sound", "True Input Technology", "ZeroDelay", "App Control"], channels: "44 Channels", style: "RIC", highlight: "Widex's flagship — the world's fastest signal processing" },
  { rank: 6, badge: "Smart AI", badgeColor: "bg-teal-600 text-white", title: "Oticon Intent", brand: "Oticon", brandLogo: "/brands/oticon.svg", image: "/lp/oticon1.png", features: ["4D Sensor", "Intent Detection", "BrainHearing", "Rechargeable"], channels: "64 Channels", style: "RIC", highlight: "First hearing aid that senses user intent to automatically adjust" },
];

const SIGNIA_MODELS: Model[] = [
  { rank: 1, badge: "Best Seller", badgeColor: "bg-[#184A99] text-white", title: "Signia Fun SP", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773219362292-SIGNIA-FAST-P-IMG-1.png", features: ["Super Power BTE", "Noise Reduction", "Tinnitus Therapy", "Wireless Streaming"], channels: "16 Channels", style: "BTE", highlight: "Powerful BTE for moderate to severe hearing loss" },
  { rank: 2, badge: "Top Rated", badgeColor: "bg-emerald-600 text-white", title: "Signia Orion C&G", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg", features: ["Rechargeable", "Bluetooth Streaming", "Speech Clarity", "App Control"], channels: "24 Channels", style: "RIC", highlight: "Best entry-level rechargeable hearing aid by Signia" },
  { rank: 3, badge: "Nearly Invisible", badgeColor: "bg-purple-600 text-white", title: "Signia Silk", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1775551490244-Untitled-design---2026-04-07T141048.093.png", features: ["Invisible In-Canal", "Ready-to-Wear", "Own Voice Processing", "Tinnitus Therapy"], channels: "32 Channels", style: "IIC", highlight: "Smallest invisible hearing aid — fits instantly, no custom mold" },
  { rank: 4, badge: "Ultra Stylish", badgeColor: "bg-rose-600 text-white", title: "Signia Styletto", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772794609852-cosmic-blue_rose-gold_double_dd4310ec-bb18-403c-a7c9-05467ff34b3b-%281%29.webp", features: ["Slim Elegant Design", "Rechargeable", "Bluetooth 5.0", "IX Platform AI"], channels: "48 Channels", style: "RIC", highlight: "Fashion-forward hearing aid with premium sound quality" },
  { rank: 5, badge: "Doctor's Choice", badgeColor: "bg-amber-500 text-white", title: "Signia Pure Charge&Go", brand: "Signia", brandLogo: "/brands/signia.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772792684301-Signia-Pure-Charge%26Go-7IX%40%40%40.webp", features: ["IX Platform AI", "Own Voice Processing", "Rechargeable", "Tinnitus Therapy"], channels: "48 Channels", style: "RIC", highlight: "India's most sold hearing aid — clinically proven performance" },
];

const PHONAK_MODELS: Model[] = [
  { rank: 1, badge: "Best Seller", badgeColor: "bg-[#184A99] text-white", title: "Phonak Audeo Lumity", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "/lp/phonak1.png", features: ["SmartSpeech Tech", "Universal Bluetooth", "Health Tracking", "Waterproof"], channels: "24 Channels", style: "RIC", highlight: "Most popular Phonak model for active social lifestyles" },
  { rank: 2, badge: "AI Powered", badgeColor: "bg-emerald-600 text-white", title: "Phonak Audeo Sphere I90", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png", features: ["Dual AI Engines", "Speech from Noise", "Universal Bluetooth", "Rechargeable"], channels: "48 Channels", style: "RIC", highlight: "World's first hearing aid with a dedicated AI chip for speech clarity" },
  { rank: 3, badge: "Premium", badgeColor: "bg-rose-600 text-white", title: "Phonak Audeo Paradise", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "/lp/phonak2.png", features: ["AutoSense OS 4.0", "Tap Control", "Bluetooth Multi-Connect", "Rechargeable"], channels: "24 Channels", style: "RIC", highlight: "Connect to 2 Bluetooth devices simultaneously" },
  { rank: 4, badge: "Powerful", badgeColor: "bg-amber-500 text-white", title: "Phonak Naída Paradise", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "/lp/phonak3.png", features: ["Ultra Power", "Roger Ready", "Binaural VoiceStream", "IP68 Waterproof"], channels: "16 Channels", style: "BTE", highlight: "For severe-to-profound hearing loss with full connectivity" },
  { rank: 5, badge: "Compact", badgeColor: "bg-purple-600 text-white", title: "Phonak Audeo Fit", brand: "Phonak", brandLogo: "/brands/phonaklogo.svg", image: "/lp/phonak4.png", features: ["Health Data Tracking", "Activity Tracker", "Falls Detection", "Hearing Score"], channels: "16 Channels", style: "RIC", highlight: "The first hearing aid with integrated health tracking" },
];

const WIDEX_MODELS: Model[] = [
  { rank: 1, badge: "Purest Sound", badgeColor: "bg-[#184A99] text-white", title: "Widex MOMENT Sheer", brand: "Widex", brandLogo: "/brands/widex.svg", image: "/lp/widex1.png", features: ["ZeroDelay Tech", "Natural Sound", "Rechargeable", "AI Personalization"], channels: "15 Channels", style: "RIC", highlight: "The most natural-sounding digital hearing aid ever made" },
  { rank: 2, badge: "AI Powered", badgeColor: "bg-emerald-600 text-white", title: "Widex EVOKE 440", brand: "Widex", brandLogo: "/brands/widex.svg", image: "/lp/widex2.png", features: ["Machine Learning", "Fluid Sound", "Direct Streaming", "App Control"], channels: "15 Channels", style: "RIC", highlight: "The first smart hearing aid that learns from your preferences" },
  { rank: 3, badge: "Discreet Fit", badgeColor: "bg-purple-600 text-white", title: "Widex MOMENT IIC", brand: "Widex", brandLogo: "/brands/widex.svg", image: "/lp/widex3.png", features: ["Invisible In-Canal", "Custom Fit", "PureSound Tech", "Tinnitus Masker"], channels: "15 Channels", style: "IIC", highlight: "Maximum discretion without compromising on Widex sound quality" },
  { rank: 4, badge: "Great Value", badgeColor: "bg-rose-600 text-white", title: "Widex Magnify", brand: "Widex", brandLogo: "/brands/widex.svg", image: "/lp/widex4.png", features: ["Rechargeable", "Smartphone Streaming", "Comfort Fit", "Clear Speech"], channels: "10 Channels", style: "RIC", highlight: "Premium features and rechargeability at an accessible price" },
  { rank: 5, badge: "Essential", badgeColor: "bg-amber-500 text-white", title: "Widex Enjoy", brand: "Widex", brandLogo: "/brands/widex.svg", image: "/lp/widex1.png", features: ["Stable Connection", "Speech Enhancement", "Durable Build", "Reliable Tech"], channels: "6 Channels", style: "BTE", highlight: "Widex quality and reliability for everyday hearing needs" },
];

// ─── Comparison rows (same for all brands) ────────────────────────────────────

const COMPARISON_ROWS = [
  { feature: "Free Hearing Test",    others: false },
  { feature: "7-Day Free Trial",     others: false },
  { feature: "Genuine Products",     others: "Sometimes" },
  { feature: "EMI / 0% Finance",     others: false },
  { feature: "Home Delivery (COD)",  others: false },
  { feature: "Lifetime Servicing",   others: false },
  { feature: "Certified Audiologist",others: "Varies" },
  { feature: "Price Transparency",   others: false },
] as const;

// ─── Brand config ─────────────────────────────────────────────────────────────

const BRANDS: Record<BrandKey, BrandConfig> = {
  generic: {
    name: "Hearing Aid",
    seoTitle: "Hearing Aid Near Me | Best Price, Free Test & Authorized Clinic – Insono",
    seoDescription: "Find the best hearing aid near you. Free diagnostic hearing test, all top brands — Signia, Phonak, Widex & more. Prices from ₹9,999. Book free appointment today.",
    heroH1: "Hearing Aid Price & Clinic Near Me 2026",
    heroSubtitle: "Compare top brands — Signia, Phonak, Widex, ReSound & more. Get a Free Clinical Trial at your nearest Insono authorized hearing aid center.",
    urgencyBar: "A call can save you upto ₹31,500 on hearing aids",
    heroBullets: [
      { icon: "🏆", text: "Lowest price guaranteed" },
      { icon: "💳", text: "0% EMI options, prices start from ₹9,999 only" },
      { icon: "💰", text: "Save upto ₹31,500 on hearing aids" },
    ],
    ctaText: "Download Hearing Aid Price List",
    priceListLabel: "Download Hearing Aid Prices & Claim Free Trial",
    heroImage: "/signia_bct2.png",
    formHeading: "Download Hearing Aid Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Price List for all major brands instantly on WhatsApp.",
    productSectionHeading: "Top 5 Hearing Aids Near Me",
    productSectionSub: "Individually selected by our audiologists — best models across all major brands.",
    models: GENERIC_MODELS,
    reviewTexts: [
      "Excellent service at Insono. The audiologist was very patient in explaining which model suited my hearing loss. Got fitted the same day. Highly recommend!",
      "I was confused between multiple brands but the team at Insono helped me choose the right hearing aid. Sound quality is amazing and the price was transparent — no hidden charges.",
      "Free hearing test was done professionally. Got a 7-day trial before I bought. Cash on delivery made it easy. Very happy with my hearing aid!",
      "My mother got her hearing aid from Insono. The home delivery was on time and the after-sales support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to know about hearing aids near me",
    footerLabel: "Hearing Aid Specialist",
  },
  signia: {
    name: "Signia",
    seoTitle: "Signia Hearing Aid Near Me | Authorized Clinic – Free Test & Best Price",
    seoDescription: "Find the nearest authorized Signia hearing aid clinic. Free hearing test, certified audiologists & best price. Signia prices from ₹15,000. Book free appointment today.",
    heroH1: "Signia Hearing Aids Price Near Me 2026",
    heroSubtitle: "Discover the 2026 Elite Collection. Experience digital clarity with a Free Clinical Trial at your nearest authorized Signia center.",
    urgencyBar: "Limited Trial Slots Available — Authorized Signia Partner",
    heroBullets: [
      { icon: "🎧", text: "Bluetooth & Rechargeable Signia Models" },
      { icon: "🏥", text: "Free Hearing Test at Nearest Clinic" },
      { icon: "💰", text: "Save upto ₹31,500 on Signia Aids" },
    ],
    ctaText: "Download Signia Price List",
    priceListLabel: "Download Signia Prices & Claim Free Trial",
    heroImage: "/signia_bct2.png",
    formHeading: "Download Signia Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Signia Price List instantly on WhatsApp.",
    productSectionHeading: "2026's Top Signia Models",
    productSectionSub: "Individually selected by our experts — best Signia models for every lifestyle.",
    models: SIGNIA_MODELS,
    reviewTexts: [
      "Excellent service at Insono. The audiologist was very patient in explaining which Signia model suited my hearing loss. Got fitted the same day. Highly recommend!",
      "I was confused between multiple brands but the team at Insono helped me choose Signia Pure Charge&Go. Sound quality is amazing and the price was transparent — no hidden charges.",
      "Free hearing test was done professionally. Got a 7-day trial before I bought. Very happy with my Signia Styletto — looks great too!",
      "My mother got her Signia hearing aid from Insono. The home delivery was on time and the after-sales support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to chat with an audiologist about Signia hearing aids near me",
    footerLabel: "Signia Specialist Center",
  },
  phonak: {
    name: "Phonak",
    seoTitle: "Phonak Hearing Aid Near Me | Authorized Clinic – Free Test & Best Price",
    seoDescription: "Find the nearest authorized Phonak hearing aid clinic. Free hearing test, certified audiologists & best price. Phonak prices from ₹18,000. Book free appointment today.",
    heroH1: "Phonak Hearing Aids Price Near Me 2026",
    heroSubtitle: "Discover the 2026 Phonak Collection. Experience Swiss precision with a Free Clinical Trial at your nearest authorized Phonak center.",
    urgencyBar: "Limited Trial Slots Available — Authorized Phonak Partner",
    heroBullets: [
      { icon: "🎯", text: "Ultra clear sound with Phonak AutoSense AI" },
      { icon: "🏥", text: "Free Hearing Test at Nearest Clinic" },
      { icon: "💰", text: "Save upto ₹31,500 on Phonak Aids" },
    ],
    ctaText: "Download Phonak Price List",
    priceListLabel: "Download Phonak Prices & Claim Free Trial",
    heroImage: "/lp/phonak1.png",
    formHeading: "Download Phonak Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Phonak Price List instantly on WhatsApp.",
    productSectionHeading: "2026's Top Phonak Models",
    productSectionSub: "Individually selected by our experts — best Phonak models for every lifestyle.",
    models: PHONAK_MODELS,
    reviewTexts: [
      "Got my Phonak Audeo fitted at Insono. The AutoSense AI is incredible — adjusts automatically in every environment. The audiologist was very helpful. Highly recommend!",
      "Was confused between brands but Insono team recommended Phonak Lumity after my audiogram. Sound quality is amazing and pricing was transparent — no hidden charges.",
      "Free hearing test done professionally. Got 7-day trial before buying. Very happy with my Phonak Paradise — Bluetooth connectivity works perfectly!",
      "My father got his Phonak hearing aid from Insono. Home delivery was on time and after-sales support has been wonderful. Will recommend to everyone.",
    ],
    waText: "Hi, I want to chat with an audiologist about Phonak hearing aids near me",
    footerLabel: "Phonak Specialist Center",
  },
  widex: {
    name: "Widex",
    seoTitle: "Widex Hearing Aid Near Me | Authorized Clinic – Free Test & Best Price",
    seoDescription: "Find the nearest authorized Widex hearing aid clinic. Free hearing test, certified audiologists & best price. Widex prices from ₹20,000. Book free appointment today.",
    heroH1: "Widex Hearing Aids Price Near Me 2026",
    heroSubtitle: "Experience the world's most natural hearing technology with a Free Clinical Trial at your nearest authorized Widex center.",
    urgencyBar: "Limited Trial Slots Available — Authorized Widex Partner",
    heroBullets: [
      { icon: "🎼", text: "Natural sound with Widex PureSound technology" },
      { icon: "🏥", text: "Free Hearing Test at Nearest Clinic" },
      { icon: "💰", text: "Save upto ₹31,500 on Widex Aids" },
    ],
    ctaText: "Download Widex Price List",
    priceListLabel: "Download Widex Prices & Claim Free Trial",
    heroImage: "/lp/widex1.png",
    formHeading: "Download Widex Prices & Claim Free Trial",
    formSubtitle: "Get the full 2026 Widex Price List instantly on WhatsApp.",
    productSectionHeading: "2026's Top Widex Models",
    productSectionSub: "Individually selected by our experts — best Widex models for every lifestyle.",
    models: WIDEX_MODELS,
    reviewTexts: [
      "Got my Widex Moment fitted at Insono. The PureSound technology is incredible — the most natural sound I've ever heard. Audiologist was very patient. Highly recommend!",
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

// ─── Static params & Metadata ─────────────────────────────────────────────────

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

  const REVIEWS = REVIEWS_BASE.map((r, i) => ({
    ...r,
    text: config.reviewTexts[i],
  }));

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
          @keyframes bn-up {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes bn-left {
            from { opacity: 0; transform: translateX(-20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes bn-scale {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          .bn-up            { animation: bn-up    0.5s ease both; }
          .bn-up.d1         { animation-delay: 0.1s; }
          .bn-up.d2         { animation-delay: 0.2s; }
          .bn-up.d3         { animation-delay: 0.3s; }
          .bn-up.d4         { animation-delay: 0.4s; }
          .bn-left          { animation: bn-left  0.5s ease both; }
          .bn-scale         { animation: bn-scale 0.8s 0.5s ease both; }
        `
      }} />

      {/* ════════════════ MOBILE ════════════════ */}
      <div className="block md:hidden pb-20">

        {/* Urgency bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          {config.urgencyBar}
        </div>

        {/* Header */}
        <div className="sticky top-0 z-50 bg-transparent custom-mobile-header-wrapper">
          <header className="px-4 py-3 flex items-center justify-between custom-mobile-header">
            <Link href="/"><Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" /></Link>
            <a href="tel:+916204260510" className="bg-[#184A99] text-white px-4 py-2.5 rounded-full text-[12px] font-bold flex items-center gap-2 active:scale-95 transition">
              <Phone className="w-3.5 h-3.5" /> +91 62042 60510
            </a>
          </header>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden">
          <div className="px-4 pt-3 pb-10 relative z-10 text-center">
            <h1 className="bn-up text-[22px] font-black leading-[1.15] mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                {config.heroH1}
              </span>
            </h1>

            <div className="bn-up d1 relative w-full mb-5 flex flex-col items-center justify-center">
              <div className="absolute w-[140px] h-[140px] bg-[#184A99]/8 rounded-full blur-[40px]" />
              <Image src={config.heroImage} alt={`${config.name} Hearing Aid`} width={180} height={180} className="relative z-10 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]" priority fetchPriority="high" />
            </div>

            <div className="bn-up d2 space-y-2.5 mb-6 text-left">
              {config.heroBullets.map((b) => (
                <div key={b.text} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
                  <div className="w-9 h-9 rounded-xl bg-[#184A99]/10 flex items-center justify-center flex-shrink-0 text-lg">{b.icon}</div>
                  <span className="text-[13px] font-semibold text-slate-700 leading-snug" dangerouslySetInnerHTML={{ __html: b.text }} />
                </div>
              ))}
            </div>

            <div className="bn-up d3">
              <PopupTrigger className="w-full h-[50px] bg-[#184A99] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold shadow-lg shadow-[#184A99]/20 active:scale-[0.97] transition-all">
                <FileText className="w-4 h-4" />
                {config.ctaText}
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-8 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">{config.productSectionHeading}</h2>
            <p className="text-[11px] text-slate-400 mt-1">Tap any model to get the full price list</p>
          </div>
          <div className="space-y-3">
            {config.models.slice(0, 5).map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="relative w-[110px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-3">
                  <Image src={p.image} alt={p.title} width={90} height={90} loading="lazy" className="object-contain" />
                  <span className={`absolute top-2 left-2 text-[8px] font-bold px-2 py-0.5 rounded-full leading-tight ${p.badgeColor}`}>{p.badge}</span>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Image src={p.brandLogo} alt={p.brand} width={60} height={12} className="h-3 w-auto grayscale opacity-50" />
                      <span className="text-[10px] text-slate-400 font-medium">{p.brand}</span>
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-1.5">{p.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {p.features.slice(0, 3).map((f) => <span key={f} className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold leading-tight">{f}</span>)}
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

          {/* Lock teaser */}
          <div className="relative mt-3">
            <div className="space-y-3 pointer-events-none select-none" aria-hidden>
              {[1, 2].map((i) => (
                <div key={i} className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex h-24 ${i === 2 ? "opacity-40" : "opacity-70"}`}>
                  <div className="w-[110px] flex-shrink-0 bg-slate-100" />
                  <div className="flex-1 p-3 space-y-2">
                    <div className="h-3 bg-slate-100 rounded-full w-3/4" />
                    <div className="h-2 bg-slate-100 rounded-full w-1/2" />
                    <div className="h-2 bg-slate-100 rounded-full w-2/3" />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/75 backdrop-blur-[3px] rounded-2xl">
              <div className="text-center px-6">
                <div className="w-11 h-11 bg-[#184A99] rounded-full flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-[#184A99]/30">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[14px] font-black text-slate-900 mb-1">10+ More Models Available</h3>
                <p className="text-[11px] text-slate-500 mb-3">Download the full price list to compare all brands &amp; models</p>
                <PopupTrigger className="bg-[#184A99] text-white text-[12px] font-bold px-6 py-2.5 rounded-xl active:scale-95 transition shadow-md">
                  Download Full Price List
                </PopupTrigger>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-5">
            <h2 className="text-lg font-black text-slate-900">Insono Hearing vs Others</h2>
            <p className="text-[11px] text-slate-400 mt-1">Why thousands choose Insono Hearing</p>
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
                  {row.others === false ? <span className="text-red-400 text-base font-black">✗</span> : <span className="text-amber-500 text-[9px] font-bold leading-tight text-center">{row.others}</span>}
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
            <div className="flex items-center justify-center gap-1 mb-1">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}</div>
            <p className="text-[13px] font-black text-slate-800">4.9 / 5</p>
            <p className="text-[10px] text-slate-400 font-medium">Based on 1,200+ verified reviews</p>
          </div>
          <div className="space-y-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0 ${r.avatarColor}`}>{r.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold text-slate-800 leading-none">{r.name}</p>
                      <span className="text-[9px] text-slate-400">{r.time}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-0.5"><span className="text-emerald-500 font-semibold">✓ Verified</span></p>
                    <div className="flex gap-0.5 mt-1">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-[10px]">★</span>)}</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <a href="https://share.google/RDuVMbenuWSAEEqLt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 mt-4 text-[11px] font-bold text-[#184A99]">
            Read all 1,200+ reviews on Google →
          </a>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-white mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">{config.name} Hearing Aid FAQ</h2>
          <FAQAccordion brand={brandSlug} />
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar flex">
          <a href={`https://wa.me/916204260510?text=${encodeURIComponent(config.waText)}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-black leading-none">Chat with Audiologist</span>
          </a>
          <div className="w-px bg-white/20" />
          <a href="tel:+916204260510" className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2">
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-black leading-none text-center">A Call Can Save ₹31,500</span>
          </a>
        </div>
      </div>

      {/* ════════════════ DESKTOP ════════════════ */}
      <div className="hidden md:block">

        {/* Hero */}
        <section className="relative pt-2 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Col 1: Text */}
              <div className="flex-[1.6] pt-8">
                <div className="bn-left hidden lg:inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse" />
                  Authorized {config.name} Partner · Expert Audiologists
                </div>

                <h1 className="bn-up d1 text-5xl lg:text-[52px] font-black leading-[1.15] mb-8 tracking-tight">
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    {config.heroH1}
                  </span>
                </h1>

                <p className="bn-up d2 text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                  {config.heroSubtitle}
                </p>

                <div className="bn-up d3 grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 mb-12">
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

                <div className="bn-up d4 pt-8 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Official Partner of leading brands</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" />)}
                  </div>
                </div>
              </div>

              {/* Col 2: Hero image */}
              <div className="bn-scale hidden xl:flex flex-1 justify-center relative group py-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#184A99]/10 via-transparent to-[#E83D6D]/10 rounded-full blur-[100px] animate-pulse" />
                <Image src={config.heroImage} alt={`Premium ${config.name} Hearing Aids`} width={500} height={500} sizes="500px" className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-10 hover:scale-105 transition-transform duration-700 rounded-3xl" priority fetchPriority="high" />
              </div>

              {/* Col 3: Lead form */}
              <div className="bn-up d4 w-full lg:w-[380px] flex-shrink-0 pt-8">
                <div id="lead-form" className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    Free Consultation
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">{config.formHeading}</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">{config.formSubtitle}</p>
                  <LeadForm city={utmCity} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="models">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">Premium Collection</h2>
              <h3 className="text-5xl font-bold text-slate-900 tracking-tight">{config.productSectionHeading}</h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg">{config.productSectionSub}</p>
          </div>

          <div className="grid gap-12">
            {config.models.slice(0, 5).map((p) => (
              <div key={p.rank} className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 flex flex-col lg:flex-row group">
                <div className="lg:w-[420px] bg-slate-50 relative min-h-[400px] flex items-center justify-center p-12">
                  <Image src={p.image} alt={p.title} fill loading="lazy" sizes="(max-width: 1024px) 100vw, 420px" className="object-contain p-16 group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute top-10 left-10 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg ${p.badgeColor}`}>{p.badge}</div>
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
                      {p.features.map((f) => <span key={f} className="bg-slate-50 text-slate-500 px-6 py-3 rounded-2xl text-[11px] font-bold border border-slate-100 uppercase tracking-widest">{f}</span>)}
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

          {/* Lock teaser desktop */}
          <div className="relative mt-12">
            <div className="grid gap-12 pointer-events-none select-none" aria-hidden>
              {[1, 2].map((i) => (
                <div key={i} className={`bg-white border border-slate-100 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row h-[180px] ${i === 2 ? "opacity-30" : "opacity-60"}`}>
                  <div className="lg:w-[420px] bg-slate-100 flex-shrink-0" />
                  <div className="flex-1 p-12 space-y-4">
                    <div className="h-5 bg-slate-100 rounded-full w-1/3" />
                    <div className="h-8 bg-slate-100 rounded-full w-2/3" />
                    <div className="h-4 bg-slate-100 rounded-full w-1/2" />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/75 backdrop-blur-[4px] rounded-[4rem]">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-[#184A99] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#184A99]/30">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">10+ More Models Available</h3>
                <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">Download the complete price list to compare all brands, models &amp; features — free on WhatsApp.</p>
                <PopupTrigger className="inline-flex items-center gap-2 bg-[#184A99] text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-[#13366e] transition shadow-xl shadow-blue-100 uppercase tracking-widest">
                  <FileText className="w-4 h-4" />
                  Download Full Price List
                </PopupTrigger>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">The Difference</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Insono Hearing vs Others</h3>
              <p className="text-slate-500 mt-3 text-base">Why thousands choose Insono for {config.name}</p>
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
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100 bg-blue-50/40"><span className="text-emerald-500 text-lg font-black">✓</span></div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100">
                    {row.others === false ? <span className="text-red-400 text-lg font-black">✗</span> : <span className="text-amber-500 text-xs font-bold">{row.others}</span>}
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
              <div className="flex items-center justify-center gap-1 mb-2">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-2xl">★</span>)}</div>
              <p className="text-2xl font-black text-slate-800">4.9 / 5</p>
              <p className="text-sm text-slate-400 font-medium mt-1">Based on 1,200+ verified Google reviews</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REVIEWS.map((r) => (
                <div key={r.name} className="bg-slate-50 rounded-2xl border border-slate-100 p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${r.avatarColor}`}>{r.initials}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-none">{r.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5"><span className="text-emerald-500 font-semibold">✓ Verified</span></p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}<span className="text-[10px] text-slate-400 ml-1 self-center">{r.time}</span></div>
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
            <h2 className="text-4xl font-bold text-center mb-24">{config.name} Hearing Aid — FAQs</h2>
            <FAQAccordion brand={brandSlug} />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={140} height={40} className="h-9 w-auto mx-auto mb-8 grayscale opacity-50" />
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">
              © 2026 Insono Hearing · {config.footerLabel} · Near Me
            </p>
          </div>
        </footer>
      </div>

      {/* Popup modal */}
      <PopupModal city={`your nearest ${config.name} clinic`} citySlug={utmCity} />
    </div>
  );
}
