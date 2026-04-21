import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title: "Top 5 Hearing Aids in India 2025 — Prices & Comparison | Insono Hearing",
  description:
    "Compare the top 5 hearing aids in India with prices. Signia, Widex & Phonak models — starting ₹2,41,000. Free trial available. Cash on delivery.",
};

const TOP5 = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-yellow-400 text-yellow-900",
    title: "Widex Kit ARRDI 440",
    slug: "kit-arrdi-440-",
    brand: "Widex",
    brandLogo: "/brands/widexlogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773206476873-widex-p1.png",
    mrp: 800000,
    features: ["AI-Powered Sound", "Bluetooth Streaming", "Rechargeable", "Noise Cancellation", "Tinnitus Masking"],
    highlight: "World's most natural sound technology",
  },
  {
    rank: 2,
    badge: "Editor's Pick",
    badgeColor: "bg-blue-500 text-white",
    title: "Phonak Audeo I 90 Sphere",
    slug: "audeo-i-90-sphere",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png",
    mrp: 790000,
    features: ["Sphere Intelligence AI", "Bluetooth 5.2", "Rechargeable", "360° Sound", "Water Resistant"],
    highlight: "Industry-first full conversation hearing",
  },
  {
    rank: 3,
    badge: "Best Value",
    badgeColor: "bg-green-500 text-white",
    title: "Widex Kit ARRDI 330",
    slug: "kit-arrdi-330",
    brand: "Widex",
    brandLogo: "/brands/widexlogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773208950188-widex-5-%281%29.png",
    mrp: 480000,
    features: ["AI Sound Processing", "Bluetooth", "Rechargeable", "Noise Cancellation", "App Control"],
    highlight: "Premium features at an accessible price",
  },
  {
    rank: 4,
    badge: "Most Popular",
    badgeColor: "bg-red-500 text-white",
    title: "Signia Pure Charge&Go 7IX",
    slug: "signia-pure-charge-go-7ix",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772792684301-Signia-Pure-Charge%26Go-7IX%40%40%40.webp",
    mrp: 379990,
    features: ["IX Platform AI", "Bluetooth", "Rechargeable", "Own Voice Processing", "Tinnitus Therapy"],
    highlight: "Most sold hearing aid in India",
  },
  {
    rank: 5,
    badge: "Budget Pick",
    badgeColor: "bg-purple-500 text-white",
    title: "Phonak Audeo L 50-R",
    slug: "audeo-l-50-r",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773226833392-Untitled-design-%282%29.png",
    mrp: 241000,
    features: ["Bluetooth", "Rechargeable", "Speech Enhancer", "Noise Reduction", "App Control"],
    highlight: "Great entry point into premium hearing",
  },
];

const TRUST = [
  { icon: "🏆", label: "10+ Years", sub: "Trusted experience" },
  { icon: "🏥", label: "15+ Clinics", sub: "Pan India network" },
  { icon: "👨‍⚕️", label: "100+ Audiologists", sub: "Certified experts" },
  { icon: "😊", label: "50,000+ Patients", sub: "Lives improved" },
];

export default function Top5LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Minimal Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.webp" alt="Insono Hearing" className="h-8 w-auto" />
          </Link>
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-[#023784] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#012d66] transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Expert
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-14 bg-gradient-to-br from-[#023784] via-[#023784] to-[#0350b8] text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            {/* Left: Copy */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Updated April 2026 · Expert Curated
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Top 5 Hearing Aids<br />
                <span className="text-yellow-300">in India — With Prices</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
                Compare Signia, Widex & Phonak. Starting from <strong className="text-white">₹2,41,000</strong>. Free trial · Cash on Delivery · Expert guidance.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {["✓ Free Home Delivery", "✓ 7-Day Return Policy", "✓ Free Trial Available", "✓ EMI Options"].map((t) => (
                  <span key={t} className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 max-w-md mx-auto lg:mx-0">
                {TRUST.map((t) => (
                  <div key={t.label} className="text-center">
                    <div className="text-xl mb-0.5">{t.icon}</div>
                    <div className="text-sm font-bold leading-tight">{t.label}</div>
                    <div className="text-xs text-blue-200 leading-tight">{t.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Lead form */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <p className="text-[#023784] font-bold text-lg mb-1 text-center">Get Price List — Free</p>
                <p className="text-gray-500 text-sm mb-4 text-center">Our expert calls you within 30 mins</p>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 5 Products ── */}
      <section className="max-w-5xl mx-auto px-4 py-12" id="products">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-800">Top 5 Hearing Aids — Ranked & Priced</h2>
          <p className="text-gray-500 mt-2 text-sm">All prices are MRP. Contact us for best deal & trial.</p>
        </div>

        <div className="space-y-4">
          {TOP5.map((p) => (
            <div key={p.rank} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
              {/* Mobile layout */}
              <div className="flex flex-col sm:flex-row">
                {/* Rank + Image */}
                <div className="relative sm:w-48 flex-shrink-0">
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                    <div className="w-9 h-9 rounded-xl bg-[#023784] text-white flex items-center justify-center font-black text-lg shadow-md">
                      {p.rank}
                    </div>
                  </div>
                  <div className="relative h-44 sm:h-full min-h-[160px] bg-gray-50">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                      <img src={p.brandLogo} alt={p.brand} className="h-5 w-auto" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-0.5">{p.title}</h3>
                    <p className="text-xs text-gray-400 mb-3 italic">{p.highlight}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.features.map((f) => (
                        <span key={f} className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
                    <div>
                      <p className="text-xs text-gray-400 leading-none mb-0.5">MRP</p>
                      <p className="text-2xl font-black text-gray-800">₹{p.mrp.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="flex gap-2 sm:ml-auto flex-wrap">
                      <Link
                        href={`/order/${p.slug}`}
                        className="flex-1 sm:flex-none bg-[#023784] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#012d66] transition text-center"
                      >
                        Buy Now — COD
                      </Link>
                      <Link
                        href={`/product/${p.slug}`}
                        className="flex-1 sm:flex-none border border-[#023784] text-[#023784] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#023784] hover:text-white transition text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Insono ── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-center text-gray-800 mb-8">Why 50,000+ Patients Trust Insono</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "🏥", title: "15+ Clinics", body: "Across Delhi NCR, Lucknow, Meerut & more" },
              { icon: "🎓", title: "Certified Experts", body: "100+ qualified audiologists on staff" },
              { icon: "🔁", title: "Free Trial", body: "Try before you buy at our clinics" },
              { icon: "🚚", title: "Free Delivery", body: "Cash on delivery, 5–7 business days" },
            ].map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{w.icon}</div>
                <p className="font-bold text-gray-800 text-sm mb-1">{w.title}</p>
                <p className="text-xs text-gray-500">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Lead Form ── */}
      <section className="max-w-lg mx-auto px-4 py-14" id="get-price">
        <div className="bg-[#023784] rounded-3xl p-7 sm:p-9 text-white text-center">
          <h2 className="text-2xl font-black mb-2">Still Confused?</h2>
          <p className="text-blue-100 text-sm mb-6">
            Talk to our audiologist — free of charge. We&apos;ll help you find the right hearing aid for your needs and budget.
          </p>
          <div className="bg-white rounded-2xl p-5">
            <LeadForm compact />
          </div>
        </div>
      </section>

      {/* ── Certifications strip ── */}
      <section className="border-t border-gray-100 py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 opacity-70">
          {["/images/certifications/signia.jpg", "/images/certifications/widex.png", "/images/certifications/phonak.jpeg"].map((src, i) => (
            <img key={i} src={src} alt="Certification" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition" />
          ))}
          <span className="text-xs text-gray-400 font-medium">Authorized Partner · Signia · Widex · Phonak</span>
        </div>
      </section>

      {/* ── Sticky Mobile Bottom Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex gap-3">
        <a
          href="tel:+919999999999"
          className="flex-1 flex items-center justify-center gap-2 border border-[#023784] text-[#023784] py-3 rounded-xl font-bold text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          Call Now
        </a>
        <a
          href="#get-price"
          className="flex-1 flex items-center justify-center gap-2 bg-[#023784] text-white py-3 rounded-xl font-bold text-sm"
        >
          Get Free Price List
        </a>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 sm:hidden" />
    </div>
  );
}
