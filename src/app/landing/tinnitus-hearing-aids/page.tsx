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
    image: "/lp/signia2.png", // Fallback image as resound specific is missing, using a high-quality BTE/RIC image
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
    <div className="min-h-screen bg-white">
        {/* ── Hero ── */}
        <section className="pt-2 bg-gradient-to-br from-[#023784] via-[#023784] to-[#0350b8] text-white">
          <div className="max-w-5xl mx-auto px-4 pt-4 pb-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="hidden lg:inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Tinnitus Relief Specialist · Authorized Partner
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                  Stop the Ringing: <br />
                  <span className="text-yellow-300">Hearing Aids for Tinnitus Relief</span>
                </h1>
                <p className="text-blue-100 text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                  Are you suffering from constant ringing, buzzing, or hissing in your ears? Get clinically proven <strong>Tinnitus Masking Devices</strong> and hearing aids from Signia, Widex & Phonak.
                </p>

                <div className="hidden lg:grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Clinically Proven", sub: "Masking Technology" },
                    { label: "Free Trial", sub: "At Our Clinics" },
                    { label: "0% EMI", sub: "Easy Payments" },
                  ].map((t) => (
                    <div key={t.label} className="bg-white/10 p-3 rounded-2xl border border-white/10">
                      <div className="text-sm font-bold">{t.label}</div>
                      <div className="text-[10px] text-blue-200 uppercase">{t.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 flex-shrink-0">
                <div className="bg-white rounded-3xl shadow-2xl p-6 text-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                    Limited Trials Available
                  </div>
                  <p className="text-[#023784] font-bold text-lg mb-1 text-center pt-2">Get Relief Guide & Prices</p>
                  <p className="text-gray-500 text-xs mb-4 text-center">Instantly download our Tinnitus management guide & full price list for all top brands.</p>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem & Solution ── */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800">Why Hearing Aids for Tinnitus?</h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Tinnitus is often a symptom of underlying hearing loss. When you can't hear background sounds, your brain focuses on the internal 'ringing'.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Sound Masking", desc: "Creates a gentle background sound that makes the tinnitus less noticeable.", icon: "🌊" },
                { title: "Notch Therapy", desc: "Specifically targets your tinnitus frequency to train your brain to ignore it.", icon: "🎯" },
                { title: "Stress Reduction", desc: "Fractal Zen tones and relaxing sounds help reduce the anxiety caused by ringing.", icon: "🧘" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
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
                    <p className="text-blue-600 text-sm font-semibold mb-4 italic">"{p.highlight}"</p>
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
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">Tinnitus & Ringing in Ear - FAQs</h2>
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

        {/* ── Final CTA Form ── */}
        <section className="py-20" id="lead-form">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-[#023784] to-[#012d66] rounded-[3rem] p-8 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black mb-4">Start Your Journey to Silence</h2>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">Don't let tinnitus control your life. Fill the form below to get a <strong>Free Tinnitus Consultation</strong> and our latest price list.</p>
                <div className="bg-white max-w-md mx-auto rounded-[2rem] p-6 sm:p-8 text-left shadow-xl">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">12 People Viewing this offer</span>
                    </div>
                  </div>
                  <LeadForm compact />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

      </div>
      );
}
