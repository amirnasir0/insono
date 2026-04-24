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

const TRUST_POINTS = [
  { icon: "🇩🇪", title: "Latest German Tech", desc: "Engineered for precision and clarity." },
  { icon: "📍", title: "450+ Cities", desc: "Available at a clinic near you." },
  { icon: "👩‍⚕️", title: "Certified Experts", desc: "1500+ audiologists across India." },
  { icon: "🛡️", title: "4-Year Warranty", desc: "Up to 4 years of device protection." },
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
      
      {/* ── Scarcity Banner ── */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-bold sticky top-0 z-[60] shadow-md animate-pulse">
        ⚠️ Trial of powerful hearing aids available – only 500 slots left this month!
      </div>

      {/* ── Header ── */}
      <header className="bg-white border-b border-slate-200 sticky top-[36px] sm:top-[40px] z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.webp" alt="Insono Hearing" width={120} height={40} className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              1,500+ Audiologists Pan-India
            </span>
            <a 
              href="tel:+916204260510" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call Now
            </a>
          </div>
          <a href="#lead-form" className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Book Trial
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6">
                Trusted by 4 Million+ Indians
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 mb-6">
                Experience Our <span className="text-blue-600">Top 5 Hearing Aids</span> of 2026
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Engineered in Germany, our AI-powered hearing aids provide crystal-clear sound for nearly all hearing challenges. Small, rechargeable, and virtually invisible.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">Free 3-Day Trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">0% EMI Available</span>
                </div>
              </div>
            </div>

            <div className="relative" id="lead-form">
              <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-[3rem]"></div>
              <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Secure Your Trial Slot</h2>
                  <p className="text-slate-500 text-sm">Find out if you're eligible to try our hearing aids in your area.</p>
                </div>
                <LeadForm />
                <p className="text-center text-[10px] text-slate-400 mt-6 leading-tight uppercase tracking-widest font-bold">
                  🔐 256-bit Secure • Your data is 100% private
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features Grid ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_POINTS.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      <Image src={product.image} alt={product.title} fill className="object-contain" />
                    </div>
                    <div className={`absolute top-6 right-6 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${product.badgeColor}`}>
                      {product.badge}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={product.brandLogo} alt={product.brand} className="h-6 w-auto grayscale group-hover:grayscale-0 transition-all" />
                      <span className="w-px h-4 bg-slate-200"></span>
                      <h3 className="text-2xl font-black text-slate-900">{product.title}</h3>
                    </div>

                    <p className="text-blue-600 font-bold text-sm mb-8 italic">"{product.highlight}"</p>

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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative">
                <div className="text-blue-500 text-6xl font-serif absolute top-6 right-10 opacity-20">“</div>
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

      {/* ── Final Eligibility Check ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">How to try these hearing aids in your area?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
                We have a presence in 450+ cities across India. Answer a few short questions and claim your trial slot today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#lead-form" 
                  className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                >
                  Check Eligibility
                </a>
                <a 
                  href="tel:+916204260510" 
                  className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                >
                  Call +91 6204 260 510
                </a>
              </div>
              
              <p className="mt-10 text-blue-200 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-ping"></span>
                Only 12 slots remaining in your area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Image src="/logo.webp" alt="Insono Hearing" width={100} height={30} className="h-6 w-auto grayscale opacity-50" />
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

      {/* ── Sticky Mobile Bottom Bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-[60] flex gap-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:+916204260510" 
          className="flex-1 bg-slate-100 text-slate-900 h-14 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider border border-slate-200"
        >
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          Call Now
        </a>
        <a 
          href="#lead-form" 
          className="flex-[2] bg-blue-600 text-white h-14 rounded-2xl flex items-center justify-center font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-200"
        >
          Book Free Trial
        </a>
      </div>
      <div className="md:hidden h-24"></div>

    </div>
  );
}
