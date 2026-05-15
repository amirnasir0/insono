"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Headphones,
  BookOpen,
  Calendar,
  HelpCircle,
  FileText,
  Home,
  ArrowRight,
  Search,
  Tag,
  Star,
  Phone,
} from "lucide-react";

type Category =
  | "clinic"
  | "product"
  | "guide"
  | "appointment"
  | "faq"
  | "blog"
  | "general"
  | "brand";

type PageEntry = {
  title: string;
  href: string;
  description: string;
  keywords: string[];
  category: Category;
};

const allPages: PageEntry[] = [
  // Core
  { title: "Homepage", href: "/", description: "Explore all hearing aid services, brands and clinics", keywords: ["home", "index", "main", "insono", "start"], category: "general" },
  { title: "All Hearing Aids", href: "/product", description: "Browse all hearing aid models from Signia, Phonak, Widex & more", keywords: ["product", "products", "hearing", "aid", "aids", "models", "all", "shop"], category: "product" },
  { title: "Hearing Aid Prices 2026", href: "/hearing-aid-price", description: "Compare hearing aid prices from ₹18,000 to ₹2,50,000", keywords: ["price", "prices", "cost", "rate", "cheap", "affordable", "budget", "hearing", "aid"], category: "product" },
  { title: "Book a Free Appointment", href: "/appointment", description: "Schedule a free hearing test or consultation with an audiologist", keywords: ["appointment", "book", "schedule", "test", "trial", "free", "consult", "visit"], category: "appointment" },
  { title: "Our Clinics", href: "/our-clinic", description: "Find Insono hearing aid clinics near you across India", keywords: ["clinic", "clinics", "location", "near", "centre", "center", "branch", "store"], category: "clinic" },
  { title: "Hearing Aid Buying Guide", href: "/guide", description: "How to choose the right hearing aid — types, brands, prices explained", keywords: ["guide", "buying", "choose", "how", "tips", "best", "select", "compare", "which"], category: "guide" },
  { title: "FAQ", href: "/faq", description: "Frequently asked questions about hearing loss and hearing aids", keywords: ["faq", "question", "questions", "help", "support", "answer", "doubt"], category: "faq" },
  { title: "Contact Us", href: "/contact-us", description: "Call or email our audiology team for support", keywords: ["contact", "reach", "call", "email", "support", "help", "phone", "number", "whatsapp"], category: "general" },
  { title: "About Insono Hearing", href: "/about-us", description: "Learn about Insono Hearing Solutions — founded 2015, 15+ clinics", keywords: ["about", "team", "company", "insono", "founder", "manoj", "who", "history"], category: "general" },
  { title: "Patient Testimonials", href: "/testimonial", description: "Read real reviews from our hearing aid patients", keywords: ["testimonial", "testimonials", "review", "reviews", "feedback", "patient", "story"], category: "general" },
  { title: "Awards & Certifications", href: "/awards", description: "Insono's brand certifications and industry recognitions", keywords: ["award", "awards", "recognition", "certificate", "certification", "achievement"], category: "general" },
  { title: "Blog", href: "/blog", description: "Articles on hearing health, hearing loss, and hearing aids", keywords: ["blog", "article", "articles", "post", "news", "read", "content", "health"], category: "blog" },

  // Brands
  { title: "Signia Hearing Aids", href: "/hearing-aids/signia", description: "Full range of Signia hearing aids — Styletto, Pure, Silk & more", keywords: ["signia", "siemens", "styletto", "pure", "silk", "intuis", "brand"], category: "brand" },
  { title: "Phonak Hearing Aids", href: "/hearing-aids/phonak", description: "Phonak Lumity, Paradise, Marvel — rechargeable & Bluetooth", keywords: ["phonak", "marvel", "lumity", "paradise", "audeo", "bolero", "brand"], category: "brand" },
  { title: "Widex Hearing Aids", href: "/hearing-aids/widex", description: "Widex Moment, Evoke — natural sound, AI-powered", keywords: ["widex", "moment", "evoke", "beyond", "brand"], category: "brand" },
  { title: "Oticon Hearing Aids", href: "/hearing-aids/oticon", description: "Oticon More, Real, Intent — 360° sound processing", keywords: ["oticon", "more", "real", "intent", "opn", "brand"], category: "brand" },

  // Types
  { title: "RIC Hearing Aids", href: "/hearing-aids/ric", description: "Receiver-in-canal — small, powerful, barely visible", keywords: ["ric", "receiver", "canal", "type", "slim", "small"], category: "product" },
  { title: "BTE Hearing Aids", href: "/hearing-aids/bte", description: "Behind-the-ear — durable, for all levels of hearing loss", keywords: ["bte", "behind", "ear", "type"], category: "product" },
  { title: "ITE Hearing Aids", href: "/hearing-aids/ite", description: "In-the-ear — custom-fit, easy to handle", keywords: ["ite", "in", "ear", "type", "custom"], category: "product" },
  { title: "IIC / Invisible Hearing Aids", href: "/hearing-aids/iic", description: "Completely invisible — sits deep inside the ear canal", keywords: ["iic", "invisible", "hidden", "canal", "type", "deep"], category: "product" },
  { title: "CIC Hearing Aids", href: "/hearing-aids/cic", description: "Completely-in-canal — discreet and compact", keywords: ["cic", "completely", "canal", "type", "discreet"], category: "product" },
  { title: "ITC Hearing Aids", href: "/hearing-aids/itc", description: "In-the-canal — partial fit, easy controls", keywords: ["itc", "canal", "type"], category: "product" },
  { title: "Invisible Hearing Aids", href: "/hearing-aids/invisible", description: "Invisible hearing aids that no one can see", keywords: ["invisible", "hidden", "discreet", "type", "iic", "cic"], category: "product" },
  { title: "Bluetooth Hearing Aids", href: "/hearing-aids/bluetooth", description: "Stream audio directly from phone, TV & more", keywords: ["bluetooth", "wireless", "smart", "connect", "stream", "type", "phone", "tv"], category: "product" },
  { title: "Rechargeable Hearing Aids", href: "/hearing-aids/rechargeable", description: "No batteries — charge overnight, hear all day", keywords: ["rechargeable", "battery", "charge", "wireless", "type"], category: "product" },

  // Clinics
  { title: "Clinic in Andheri Mumbai", href: "/our-clinic/andheri-mumbai", description: "Insono hearing clinic at Lokhandwala Complex, Andheri West, Mumbai", keywords: ["mumbai", "andheri", "lokhandwala", "maharashtra", "west", "palmspring"], category: "clinic" },
  { title: "Clinic in Noida", href: "/our-clinic/noida", description: "Insono hearing clinic in Sector 20, Noida, Uttar Pradesh", keywords: ["noida", "sector", "uttar", "pradesh", "up", "ncr"], category: "clinic" },
  { title: "Clinic in Gurgaon", href: "/our-clinic/gurgaon", description: "Insono hearing clinic in DLF Phase 2, Gurugram, Haryana", keywords: ["gurgaon", "gurugram", "haryana", "dlf", "ncr"], category: "clinic" },
  { title: "Clinic in Lajpat Nagar", href: "/our-clinic/lajpat-nagar", description: "Insono hearing clinic in Lajpat Nagar, South Delhi", keywords: ["lajpat", "nagar", "delhi", "south", "lajpatnagar"], category: "clinic" },
  { title: "Clinic in Vinod Nagar Delhi", href: "/our-clinic/vinod-nagar", description: "Insono hearing clinic in West Vinod Nagar, East Delhi", keywords: ["vinod", "nagar", "delhi", "east", "vinocnagar"], category: "clinic" },
  { title: "Clinic in Lucknow", href: "/our-clinic/lucknow", description: "Insono hearing clinic in Vikas Nagar, Lucknow, UP", keywords: ["lucknow", "uttar", "pradesh", "lko"], category: "clinic" },
  { title: "Clinic in Kolkata", href: "/our-clinic/kolkata", description: "Insono hearing clinic in Bhawanipur, Kolkata", keywords: ["kolkata", "calcutta", "west", "bengal", "bhawanipur"], category: "clinic" },
  { title: "Clinic in Dhanbad", href: "/our-clinic/Dhanbad", description: "Insono hearing clinic in Dhanbad, Jharkhand", keywords: ["dhanbad", "jharkhand"], category: "clinic" },
  { title: "Clinic in Deoghar", href: "/our-clinic/deoghar", description: "Insono hearing clinic in Deoghar, Jharkhand", keywords: ["deoghar", "jharkhand"], category: "clinic" },
  { title: "Clinic in Patna", href: "/our-clinic/patna", description: "Insono hearing clinic in Patna, Bihar", keywords: ["patna", "bihar"], category: "clinic" },
  { title: "Clinic in Ranchi", href: "/our-clinic/ranchi", description: "Insono hearing clinic — Ranchi, Jharkhand", keywords: ["ranchi", "jharkhand"], category: "clinic" },
  { title: "Clinic in Bhagalpur", href: "/our-clinic/bhagalpur", description: "Insono hearing clinic in Bhagalpur, Bihar", keywords: ["bhagalpur", "bihar"], category: "clinic" },
  { title: "Clinic in Giridih", href: "/our-clinic/giridih", description: "Insono hearing clinic in Giridih, Jharkhand", keywords: ["giridih", "jharkhand"], category: "clinic" },
  { title: "Clinic in Hyderabad", href: "/our-clinic/hyderabad", description: "Insono hearing clinic — Hyderabad, Telangana", keywords: ["hyderabad", "telangana", "hyd"], category: "clinic" },
  { title: "Clinic in Chandigarh", href: "/our-clinic/chandigarh", description: "Insono hearing clinic — Chandigarh", keywords: ["chandigarh", "punjab", "chd"], category: "clinic" },
];

const categoryConfig: Record<Category, { icon: React.ElementType; badge: string; colors: string; iconColor: string }> = {
  clinic:      { icon: MapPin,      badge: "Clinic",       colors: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",  iconColor: "text-emerald-600 bg-emerald-100" },
  product:     { icon: Headphones,  badge: "Hearing Aid",  colors: "bg-blue-50 border-blue-100 hover:border-blue-300",           iconColor: "text-blue-600 bg-blue-100" },
  brand:       { icon: Star,        badge: "Brand",        colors: "bg-indigo-50 border-indigo-100 hover:border-indigo-300",     iconColor: "text-indigo-600 bg-indigo-100" },
  guide:       { icon: BookOpen,    badge: "Guide",        colors: "bg-violet-50 border-violet-100 hover:border-violet-300",     iconColor: "text-violet-600 bg-violet-100" },
  appointment: { icon: Calendar,    badge: "Appointment",  colors: "bg-orange-50 border-orange-100 hover:border-orange-300",    iconColor: "text-orange-600 bg-orange-100" },
  faq:         { icon: HelpCircle,  badge: "FAQ",          colors: "bg-amber-50 border-amber-100 hover:border-amber-300",        iconColor: "text-amber-600 bg-amber-100" },
  blog:        { icon: FileText,    badge: "Blog",         colors: "bg-rose-50 border-rose-100 hover:border-rose-300",           iconColor: "text-rose-600 bg-rose-100" },
  general:     { icon: Home,        badge: "Page",         colors: "bg-gray-50 border-gray-200 hover:border-gray-400",           iconColor: "text-gray-600 bg-gray-200" },
};

const brands = [
  { name: "Signia", logo: "/brands/signia.svg", href: "/hearing-aids/signia", bg: "bg-red-50 border-red-100 hover:border-red-300" },
  { name: "Widex", logo: "/brands/widexlogo.svg", href: "/hearing-aids/widex", bg: "bg-blue-50 border-blue-100 hover:border-blue-300" },
  { name: "Phonak", logo: "/brands/phonaklogo.svg", href: "/hearing-aids/phonak", bg: "bg-rose-50 border-rose-100 hover:border-rose-300" },
  { name: "Oticon", logo: "/brands/oticon.svg", href: "/hearing-aids/oticon", bg: "bg-orange-50 border-orange-100 hover:border-orange-300" },
];

const quickLinks = [
  { label: "All Hearing Aids", href: "/product", icon: Headphones },
  { label: "Hearing Aid Prices", href: "/hearing-aid-price", icon: Tag },
  { label: "Book Free Trial", href: "/appointment", icon: Calendar },
  { label: "Our Clinics", href: "/our-clinic", icon: MapPin },
  { label: "Contact Us", href: "/contact-us", icon: Phone },
  { label: "FAQs", href: "/faq", icon: HelpCircle },
];

function scoreMatch(page: PageEntry, tokens: string[]): number {
  let score = 0;
  for (const token of tokens) {
    if (token.length < 2) continue;
    for (const kw of page.keywords) {
      if (token === kw) { score += 4; continue; }
      if (token.length >= 3 && kw === token) { score += 4; continue; }
      if (token.length >= 3 && kw.includes(token)) { score += 2; continue; }
      if (kw.length >= 3 && token.includes(kw)) { score += 2; continue; }
      if (token.length >= 3 && kw.length >= 3 && token.slice(0, 3) === kw.slice(0, 3)) { score += 1; }
    }
  }
  return score;
}

export default function NotFoundClient() {
  const pathname = usePathname();

  const slugTokens = pathname
    .split("/")
    .filter(Boolean)
    .flatMap((part) => part.split("-"))
    .map((t) => t.toLowerCase())
    .filter((t) => t.length >= 2);

  const scoredPages = allPages
    .map((page) => ({ ...page, score: scoreMatch(page, slugTokens) }))
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const hasMatches = scoredPages.length > 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
        {/* Blurred 404 background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span className="text-[20rem] font-black text-[#023784]/5 leading-none">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-[#023784]/10 border border-[#023784]/20 shadow-sm">
          <Search className="w-9 h-9 text-[#023784]" strokeWidth={1.5} />
        </div>

        <h1 className="relative text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Page not found
        </h1>
        <p className="relative text-gray-500 max-w-sm sm:max-w-md text-sm sm:text-base leading-relaxed">
          <code className="font-mono text-[#023784] bg-[#023784]/8 px-1.5 py-0.5 rounded text-xs sm:text-sm break-all">
            {pathname}
          </code>{" "}
          doesn&apos;t exist or may have been moved.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
        {/* Suggested Pages */}
        {hasMatches && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                Did you mean?
              </p>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {scoredPages.map((page) => {
                const cfg = categoryConfig[page.category];
                const Icon = cfg.icon;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`group relative flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${cfg.colors}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${cfg.iconColor}`}>
                        <Icon className="w-4 h-4" strokeWidth={2} />
                      </div>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cfg.iconColor} border-current/20`}>
                        {cfg.badge}
                      </span>
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#023784] transition-colors">
                        {page.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {page.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-400 truncate">
                        {page.href}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#023784] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#023784] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#012d66] transition shadow-sm inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <Link
            href="/product"
            className="border border-[#023784] text-[#023784] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#023784] hover:text-white transition inline-flex items-center gap-2"
          >
            <Headphones className="w-4 h-4" /> Browse All Products
          </Link>
        </div>

        {/* Shop by Brand */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-200" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Shop by Brand
            </p>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${brand.bg}`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xs font-medium text-gray-600">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-200" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Quick Links
            </p>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#023784] hover:text-[#023784] hover:shadow-sm transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
