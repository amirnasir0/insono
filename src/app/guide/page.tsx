import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hearing Aid Buying Guide 2026 — How to Choose the Right Hearing Aid | Insono Hearing",
  description:
    "Complete hearing aid buying guide for 2026. Compare types (RIC, BTE, IIC), brands (Signia, Phonak, Widex), prices, and features. Expert advice from certified audiologists.",
  alternates: {
    canonical: "https://www.insonohearing.com/guide",
  },
  openGraph: {
    title: "Hearing Aid Buying Guide 2026 | Insono Hearing",
    description: "Everything you need to know before buying a hearing aid — types, brands, prices, and expert tips.",
    url: "https://www.insonohearing.com/guide",
  },
};

const TYPES = [
  {
    name: "RIC / RITE",
    full: "Receiver-in-Canal",
    image: "/ric.png",
    loss: "Mild to Severe",
    best: "Most adults, first-time users",
    pros: ["Nearly invisible", "Natural sound quality", "Rechargeable options", "Bluetooth ready"],
    href: "/hearing-aids/ric",
  },
  {
    name: "BTE",
    full: "Behind-the-Ear",
    image: "/bte.png",
    loss: "Mild to Profound",
    best: "Children, seniors, severe loss",
    pros: ["Most powerful", "Durable & easy to handle", "Compatible with all ear types", "Longest battery life"],
    href: "/hearing-aids/bte",
  },
  {
    name: "ITE",
    full: "In-the-Ear",
    image: "/ite.png",
    loss: "Mild to Moderately Severe",
    best: "Adults who want a discreet fit",
    pros: ["Custom-moulded fit", "Easy volume control", "No wire behind ear", "Good for dexterity issues"],
    href: "/hearing-aids/ite",
  },
  {
    name: "IIC / CIC",
    full: "Invisible-in-Canal",
    image: "/iic.png",
    loss: "Mild to Moderate",
    best: "Cosmetically conscious users",
    pros: ["Completely invisible", "Natural ear resonance", "No wind noise", "Discreet and compact"],
    href: "/hearing-aids/iic",
  },
];

const BRANDS = [
  {
    name: "Signia",
    logo: "/brands/signia.svg",
    tagline: "German-engineered AI hearing",
    known: "Notch Therapy for tinnitus, Own Voice Processing, Styletto slim design",
    range: "₹18,000 – ₹2,20,000",
    href: "/hearing-aids/signia",
  },
  {
    name: "Phonak",
    logo: "/brands/phonaklogo.svg",
    tagline: "Swiss precision for speech clarity",
    known: "Sphere AI chip, AutoSense OS, universal Bluetooth for all devices",
    range: "₹25,000 – ₹2,50,000",
    href: "/hearing-aids/phonak",
  },
  {
    name: "Widex",
    logo: "/brands/widex.svg",
    tagline: "Natural sound, zero compromise",
    known: "PureSound technology, Zen tinnitus therapy, ultra-fast sound processing",
    range: "₹30,000 – ₹2,00,000",
    href: "/hearing-aids/widex",
  },
  {
    name: "Oticon",
    logo: "/brands/oticon.svg",
    tagline: "Brain-first hearing technology",
    known: "BrainHearing™, Intent AI sensor, 360° sound awareness",
    range: "₹35,000 – ₹2,30,000",
    href: "/hearing-aids",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Get a Hearing Test",
    desc: "A certified audiologist performs a painless audiogram (20–30 min) to map your hearing loss across frequencies. This is the foundation of every recommendation.",
  },
  {
    step: "02",
    title: "Understand Your Audiogram",
    desc: "Your audiogram shows which frequencies you struggle with. Mild (26–40 dB), Moderate (41–60 dB), Severe (61–80 dB), or Profound (81+ dB). Each level needs a different device.",
  },
  {
    step: "03",
    title: "Choose the Right Type",
    desc: "Based on your loss level, lifestyle, and cosmetic preference, narrow down to RIC, BTE, ITE, or IIC. Your audiologist will guide you.",
  },
  {
    step: "04",
    title: "Pick a Technology Level",
    desc: "Entry, mid, or premium. Premium devices have AI scene detection, directional mics, and better noise cancellation — worthwhile if you're active in noisy environments.",
  },
  {
    step: "05",
    title: "Trial Before You Buy",
    desc: "Always insist on a 3–7 day trial. Wear the device in your real environment — home, office, market — before committing. Insono offers free trials at all clinics.",
  },
  {
    step: "06",
    title: "Fine-tuning & Follow-up",
    desc: "The first fitting is just the beginning. Audiologists adjust the programming over 2–4 visits. Budget time for this — it's what separates good hearing from great hearing.",
  },
];

const PRICE_TIERS = [
  {
    tier: "Entry Level",
    range: "₹18,000 – ₹35,000",
    color: "bg-slate-50 border-slate-200",
    badge: "bg-slate-200 text-slate-700",
    features: ["Digital signal processing", "Basic noise reduction", "Manual volume control", "Good for quiet environments"],
    best: "First-time users, mild loss, limited budget",
  },
  {
    tier: "Mid Range",
    range: "₹35,000 – ₹80,000",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-600 text-white",
    features: ["Automatic environment switching", "Bluetooth streaming", "Rechargeable battery", "Moderate noise cancellation"],
    best: "Active adults, moderate loss, office/social use",
  },
  {
    tier: "Premium",
    range: "₹80,000 – ₹2,50,000",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-500 text-white",
    features: ["AI-powered scene detection", "360° directional processing", "Made-for-iPhone/Android", "Tinnitus therapy built-in"],
    best: "Demanding environments, severe loss, tech-savvy users",
  },
];

const FAQS = [
  {
    q: "At what age should I start wearing hearing aids?",
    a: "As soon as hearing loss is diagnosed — at any age. Untreated hearing loss accelerates cognitive decline. Early intervention gives significantly better outcomes.",
  },
  {
    q: "How long do hearing aids last?",
    a: "Typically 4–7 years with proper care. Battery life depends on the model — rechargeable devices last 20–24 hours per charge.",
  },
  {
    q: "Do I need one or two hearing aids?",
    a: "If you have hearing loss in both ears (which is most common), two hearing aids are almost always recommended. Binaural fitting improves speech understanding in noise by up to 30%.",
  },
  {
    q: "Can I try a hearing aid before purchasing?",
    a: "Yes. Insono Hearing offers a free 3-day trial at all clinics. You take the device home and use it in your real environment before any commitment.",
  },
  {
    q: "What is the difference between a cheap and an expensive hearing aid?",
    a: "Chip processing speed, number of channels, directional microphones, AI capabilities, and Bluetooth connectivity. Expensive aids handle complex, noisy environments dramatically better.",
  },
  {
    q: "Is there a warranty on hearing aids?",
    a: "All devices sold by Insono come with an official manufacturer warranty of 1–4 years depending on the brand and model, plus Insono's own service guarantee.",
  },
];

export default function HearingAidGuide() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#eaf5ff] to-white pt-16 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-4 py-1.5 text-xs font-bold text-[#184A99] mb-6 border border-[#184A99]/20">
            <span className="w-2 h-2 bg-[#184A99] rounded-full animate-pulse"></span>
            Updated for 2026 · Written by Certified Audiologists
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            The Complete Hearing Aid<br />
            <span className="bg-gradient-to-r from-[#184A99] to-[#E83D6D] bg-clip-text text-transparent">
              Buying Guide 2026
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Everything you need to know before buying a hearing aid — types, brands, prices, what to ask your audiologist, and how to avoid common mistakes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/appointment" className="bg-[#184A99] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#13366e] transition">
              Book Free Hearing Test
            </Link>
            <Link href="/hearing-aid-price" className="border-2 border-[#184A99] text-[#184A99] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#184A99]/5 transition">
              View Price List
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto pt-8 border-t border-slate-100">
            {[
              { label: "2 Lakh+", sub: "Patients Helped" },
              { label: "15+", sub: "Clinics" },
              { label: "4.9 ★", sub: "Google Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black text-[#184A99]">{s.label}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signs You Need a Hearing Aid ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-black text-[#184A99] uppercase tracking-widest mb-3">Step 1 — Know the Signs</p>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Do You Need a Hearing Aid?</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Most people wait 7 years after noticing hearing loss before seeking help. Don't. Early action preserves the brain's ability to process sound.
              </p>
              <ul className="space-y-3">
                {[
                  "You frequently ask people to repeat themselves",
                  "You struggle to follow conversations in noisy places",
                  "You keep the TV volume higher than others prefer",
                  "You miss parts of phone conversations",
                  "You hear a constant ringing or buzzing (tinnitus)",
                  "People say you speak too loudly",
                  "You avoid social situations due to hearing difficulty",
                ].map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span className="text-sm text-slate-700">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                <p className="text-sm font-bold text-amber-800">If you checked 3 or more — book a free hearing test. It takes 20 minutes and could change your life.</p>
              </div>
            </div>
            <div className="relative">
              <Image src="/audiologist.jpg" alt="Audiologist conducting hearing test" width={500} height={400} className="rounded-3xl object-cover w-full shadow-xl" />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Free at all clinics</p>
                <p className="text-lg font-black text-[#184A99]">Hearing Test</p>
                <p className="text-xs text-slate-500">Takes only 20–30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Hearing Aids ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-[#184A99] uppercase tracking-widest mb-3">Step 2 — Know the Types</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">4 Types of Hearing Aids Explained</h2>
            <p className="text-slate-500 max-w-xl mx-auto">The right type depends on your degree of hearing loss, lifestyle, and how visible you want the device to be.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TYPES.map((type) => (
              <Link key={type.name} href={type.href} className="group bg-slate-50 border border-slate-200 hover:border-[#184A99]/40 hover:shadow-lg rounded-3xl p-6 flex gap-5 transition-all duration-300">
                <div className="w-20 h-20 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                  <Image src={type.image} alt={type.name} width={56} height={56} className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-black text-slate-900 text-lg">{type.name}</span>
                    <span className="text-xs text-slate-400">· {type.full}</span>
                  </div>
                  <p className="text-xs text-[#184A99] font-bold mb-2">Best for: {type.best}</p>
                  <p className="text-xs text-slate-500 mb-3">Loss level: <span className="font-semibold text-slate-700">{type.loss}</span></p>
                  <div className="flex flex-wrap gap-1.5">
                    {type.pros.map((p) => (
                      <span key={p} className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-lg">{p}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Brands ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-[#184A99] uppercase tracking-widest mb-3">Step 3 — Choose a Brand</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Top Hearing Aid Brands in 2026</h2>
            <p className="text-slate-500 max-w-xl mx-auto">All of these brands are world-class. The right one depends on your specific hearing profile and priorities.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {BRANDS.map((brand) => (
              <Link key={brand.name} href={brand.href} className="group bg-white border border-slate-200 hover:border-[#184A99]/40 hover:shadow-lg rounded-3xl p-6 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={brand.logo} alt={brand.name} className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <p className="font-black text-slate-900">{brand.name}</p>
                    <p className="text-xs text-slate-400">{brand.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed"><span className="font-bold text-slate-700">Known for:</span> {brand.known}</p>
                <p className="text-sm font-bold text-[#184A99]">Price range: {brand.range}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Buying Process ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-[#184A99] uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">6 Steps to Buying the Right Hearing Aid</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Follow this process and you'll never overpay or under-fit.</p>
          </div>
          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex gap-5 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#184A99]/20 hover:bg-[#184A99]/[0.02] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#184A99] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/appointment" className="inline-flex items-center gap-2 bg-[#184A99] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#13366e] transition shadow-lg shadow-[#184A99]/20">
              Book Step 1 — Free Hearing Test
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-[#184A99] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Hearing Aid Price Ranges in 2026</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Prices vary by technology tier. Here's what you get at each level.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICE_TIERS.map((tier) => (
              <div key={tier.tier} className={`rounded-3xl border-2 p-6 ${tier.color}`}>
                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${tier.badge}`}>{tier.tier}</span>
                <p className="text-2xl font-black text-slate-900 mt-4 mb-1">{tier.range}</p>
                <p className="text-xs text-slate-500 mb-5">per device</p>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-bold text-slate-500 border-t border-slate-200 pt-4">Best for: {tier.best}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">Prices shown are per device (single ear). Binaural (both ears) pricing available at clinics.</p>
          <div className="text-center mt-6">
            <Link href="/hearing-aid-price" className="inline-flex items-center gap-2 border-2 border-[#184A99] text-[#184A99] px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#184A99]/5 transition">
              View Full Price List with Models
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Honest answers from our audiologists.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h3 className="font-black text-slate-900 mb-2 flex gap-2">
                  <span className="text-[#184A99]">Q.</span>{faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 bg-[#0D2240]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Find Your Perfect Hearing Aid?</h2>
          <p className="text-blue-200 mb-10 leading-relaxed">
            Our certified audiologists will test your hearing, explain your options, and let you trial the best device — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-[#184A99] px-10 py-4 rounded-xl font-black text-sm hover:bg-blue-50 transition">
              Book Free Hearing Test
            </Link>
            <a href="https://wa.me/916204260510?text=Hi, I read the hearing aid guide and want expert advice" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white hover:border-white px-10 py-4 rounded-xl font-black text-sm transition">
              Chat with an Audiologist
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
