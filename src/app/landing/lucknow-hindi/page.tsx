import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, Users, MapPin, Stethoscope, Star, Sparkles, ShieldCheck } from "lucide-react";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "लखनऊ में सबसे बेहतरीन कान की मशीन | मुफ्त जांच और होम ट्रायल",
  description:
    "लखनऊ में ओरिजिनल कान की मशीन (Hearing Aids) की तलाश है? अदृश्य, रिचार्जेबल और ब्लूटूथ हियरिंग एड्स ₹15,000 से शुरू। 0% EMI सुविधा। आज ही मुफ्त कान की जांच और ट्रायल बुक करें।",
  alternates: {
    canonical: "https://insonohearing.com/landing/lucknow-hindi",
  },
  openGraph: {
    title: "कान की मशीन लखनऊ | 100% मुफ्त हियरिंग टेस्ट और ट्रायल",
    description:
      "विश्व प्रसिद्ध ब्रांड्स (Signia, Phonak, Widex) की कान की मशीनें सीधे लखनऊ क्लिनिक पर। घर बैठे फ्री हियरिंग टेस्ट और ट्रायल भी उपलब्ध।",
    url: "https://insonohearing.com/landing/lucknow-hindi",
    type: "website",
  },
};

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

const COMPARISON_ROWS = [
  { feature: "मुफ्त कान की जांच (Free Test)", insono: true, others: false },
  { feature: "7 दिनों का मुफ्त ट्रायल (7-Day Trial)", insono: true, others: false },
  { feature: "घर बैठे जांच (Free Home Visit)", insono: true, others: false },
  { feature: "0% ब्याज पर आसान किस्त (EMI)", insono: true, others: false },
  { feature: "100% ओरिजिनल वारंटी (Original Warranty)", insono: true, others: "कभी-कभी" },
  { feature: "सर्टिफाइड ऑडियोलॉजिस्ट द्वारा जांच", insono: true, others: "निश्चित नहीं" },
  { feature: "लाइफटाइम फ्री फाइन-ट्यूनिंग सेवा", insono: true, others: false },
];

const MODELS = [
  {
    rank: 1,
    badge: "सबसे लोकप्रिय",
    badgeColor: "bg-[#184A99] text-white",
    title: "Signia Orion C&G",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772781326903-Signia-Orion-C%26G-200%40.jpg",
    features: ["रिचार्जेबल बैटरी", "ब्लूटूथ कनेक्टिविटी", "शोर कम करने की तकनीक", "एप कंट्रोल"],
    channels: "24 चैनल्स",
    style: "RIC (कान के पीछे)",
    highlight: "बजट में सबसे बेहतरीन रिचार्जेबल मशीन — पहली बार इस्तेमाल करने वालों के लिए बेस्ट",
  },
  {
    rank: 2,
    badge: "बिल्कुल अदृश्य (Invisible)",
    badgeColor: "bg-rose-600 text-white",
    title: "Signia Silk Charge&Go IX",
    brand: "Signia",
    brandLogo: "/brands/signia.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1772794609852-cosmic-blue_rose-gold_double_dd4310ec-bb18-403c-a7c9-05467ff34b3b-%281%29.webp",
    features: ["पूरी तरह अदृश्य", "रिचार्जेबल तकनीक", "क्रिस्टल क्लियर आवाज", "कान के अंदर फिट"],
    channels: "48 चैनल्स",
    style: "IIC (अदृश्य)",
    highlight: "दुनिया की पहली रिचार्जेबल अदृश्य मशीन जो बाहर से बिल्कुल नहीं दिखती",
  },
  {
    rank: 3,
    badge: "एआई संचालित (AI-Powered)",
    badgeColor: "bg-emerald-600 text-white",
    title: "Phonak Audeo Sphere I90",
    brand: "Phonak",
    brandLogo: "/brands/phonaklogo.svg",
    image: "https://an7bjwndlmaemx4x.public.blob.vercel-storage.com/products/1773054606126-IMG-1.png",
    features: ["डबल एआई चिप", "शोर शराबे में भी साफ़ आवाज", "यूनिवर्सल ब्लूटूथ", "फ़ास्ट चार्जिंग"],
    channels: "48 चैनल्स",
    style: "RIC",
    highlight: "दुनिया की पहली मशीन जो अत्यधिक शोर में भी आवाज को एकदम साफ़ और स्पष्ट करती है",
  },
];

const REVIEWS = [
  {
    name: "राम शरण श्रीवास्तव",
    location: "हजरतगंज, लखनऊ",
    initials: "RS",
    avatarColor: "bg-[#184A99]",
    time: "1 हफ्ता पहले",
    text: "मेरी उम्र 72 साल है और मैं क्लिनिक नहीं जा सकता था। इन्सोनो के डॉक्टर ने घर आकर मेरे कान की जांच की और मशीन का ट्रायल कराया। होम सर्विस बहुत लाजवाब है। बहुत-बहुत धन्यवाद।",
  },
  {
    name: "सुनीता बाजपेयी",
    location: "गोमती नगर, लखनऊ",
    initials: "SB",
    avatarColor: "bg-emerald-600",
    time: "3 हफ्ते पहले",
    text: "कान की मशीन की कीमत को लेकर बहुत कन्फ्यूजन था, पर इन्सोनो क्लिनिक पर मुझे एकदम पारदर्शी और सही दाम मिले। 0% EMI की वजह से पेमेंट करना भी आसान हो गया।",
  },
  {
    name: "आलोक वर्मा",
    location: "अलीगंज, लखनऊ",
    initials: "AV",
    avatarColor: "bg-purple-600",
    time: "1 महीना पहले",
    text: "मैंने अपने पिताजी के लिए यहां से अदृश्य (invisible) मशीन ली है। वह बाहर से बिल्कुल नहीं दिखती और पिताजी को अब टीवी देखने और बातचीत करने में कोई परेशानी नहीं होती।",
  },
];

export default function LucknowHindiLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#eaf5ff]">
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide the default global landing nav on all viewports */
          header:not(.custom-mobile-header):not(.custom-desktop-header),
          .sticky.top-0:not(.custom-mobile-header-wrapper):not(.custom-desktop-header-wrapper),
          div.sticky.top-0:not(.custom-mobile-header-wrapper):not(.custom-desktop-header-wrapper) {
            display: none !important;
          }
          @media (max-width: 768px) {
            .md\\:hidden.fixed.bottom-0:not(.custom-bottom-bar) { display: none !important; }
            body { padding-top: 0 !important; }
          }
          @keyframes lk-up {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes lk-left {
            from { opacity: 0; transform: translateX(-20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes lk-scale {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          .lk-up            { animation: lk-up    0.5s ease both; }
          .lk-up.d1         { animation-delay: 0.1s; }
          .lk-up.d2         { animation-delay: 0.2s; }
          .lk-up.d3         { animation-delay: 0.3s; }
          .lk-up.d4         { animation-delay: 0.4s; }
          .lk-left          { animation: lk-left  0.5s ease both; }
          .lk-scale         { animation: lk-scale 0.8s 0.5s ease both; }
        `
      }} />

      {/* ────────────────────────────────────────────────────────────
          MOBILE (max-width: 768px)
      ──────────────────────────────────────────────────────────── */}
      <div className="block md:hidden pb-20">

        {/* Top Announcement Bar */}
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.15em] relative z-[60]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          लखनऊ में नवीनतम हियरिंग एड टेक्नोलॉजी
        </div>

        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 custom-mobile-header-wrapper">
          <header className="px-4 py-3 flex items-center justify-between custom-mobile-header">
            <Link href="/">
              <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <a
              href="tel:+916204260510"
              className="bg-[#184A99] text-white px-4 py-2.5 rounded-full text-[12px] font-bold flex items-center gap-2 active:scale-95 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              कॉल करें
            </a>
          </header>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eaf5ff] to-white relative overflow-hidden px-4 pt-4 pb-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-[#184A99]/10 border border-[#184A99]/20 rounded-full px-3 py-1 text-[11px] font-bold text-[#184A99] mb-3">
              <Sparkles className="w-3 h-3 text-[#E83D6D]" />
              ₹31,500 तक की बचत · स्पेशल डिस्काउंट ऑफर
            </div>

            <h1 className="lk-up text-[23px] font-black leading-[1.2] mb-4 text-[#0D2240] tracking-tight">
              लखनऊ में कान की मशीन की कीमत 2026
            </h1>

            <div className="lk-up d1 relative w-full mb-6 flex flex-col items-center justify-center">
              <div className="absolute w-[130px] h-[130px] bg-[#184A99]/8 rounded-full blur-[30px]" />
              <Image
                src="/signia_bct2.png"
                alt="Digital Hearing Aid"
                width={160}
                height={160}
                className="relative z-10 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                priority
              />
            </div>

            {/* Quick Selling Points */}
            <div className="lk-up d2 space-y-2.5 mb-6 text-left">
              <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
                <span className="text-xl">🇩🇪</span>
                <span className="text-[13px] font-semibold text-slate-700">नवीनतम जर्मन टेक्नोलॉजी व डिजिटल ऑडियो</span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
                <span className="text-xl">🫥</span>
                <span className="text-[13px] font-semibold text-slate-700">अदृश्य (Invisible) और रिचार्जेबल डिजाइन्स</span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
                <span className="text-xl">💳</span>
                <span className="text-[13px] font-semibold text-slate-700">
                  स्मार्ट मशीनें मात्र <span className="text-[#184A99] font-extrabold">₹15,000</span> से शुरू (0% EMI)
                </span>
              </div>
            </div>

            <div className="lk-up d3">
              <PopupTrigger className="w-full h-[54px] bg-[#25D366] text-white flex items-center justify-center gap-2 rounded-xl text-[14px] font-black shadow-lg shadow-green-200 active:scale-[0.97] transition-all">
                व्हाट्सएप पर प्राइस लिस्ट पाएं →
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* Machines Collection */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="text-center mb-6">
            <h2 className="text-lg font-black text-slate-900">कान की मशीन के सबसे आधुनिक मॉडल</h2>
            <p className="text-[11px] text-slate-400 mt-1">अपनी जरूरत के हिसाब से बेस्ट मॉडल चुनें</p>
          </div>

          <div className="space-y-4">
            {MODELS.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="relative w-full h-44 bg-slate-100 flex items-center justify-center p-4">
                  <Image src={p.image} alt={p.title} width={130} height={130} className="object-contain" loading="lazy" />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{p.brand} · {p.style}</p>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-[11px] text-[#184A99] font-bold mb-3 italic leading-relaxed">&ldquo;{p.highlight}&rdquo;</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.features.map((f) => (
                        <span key={f} className="text-[9px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-full font-semibold border border-slate-100">{f}</span>
                      ))}
                    </div>
                  </div>
                  <PopupTrigger className="w-full h-11 bg-[#184A99] text-white text-[12px] font-bold flex items-center justify-center gap-1.5 rounded-xl active:scale-95 transition">
                    ऑफर और कीमत जानें <ArrowRight className="w-3.5 h-3.5" />
                  </PopupTrigger>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-8 px-4 bg-white">
          <h2 className="text-lg font-black text-slate-900 text-center mb-5">Insono क्यों है सबसे बेहतर?</h2>
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="grid grid-cols-3 bg-[#0D2240] text-white text-[11px] font-bold">
              <div className="py-3 px-3">सुविधा (Features)</div>
              <div className="py-3 px-2 text-center bg-blue-900/50 text-yellow-300">Insono क्लिनिक</div>
              <div className="py-3 px-2 text-center text-white/70">अन्य दुकान</div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-[11px] border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                <div className="py-3 px-3 font-semibold text-slate-700 leading-snug">{row.feature}</div>
                <div className="py-3 px-2 flex items-center justify-center bg-blue-50/20">
                  <span className="text-emerald-500 text-base font-black">✓</span>
                </div>
                <div className="py-3 px-2 flex items-center justify-center">
                  {row.others === false ? (
                    <span className="text-red-400 text-base font-black">✗</span>
                  ) : (
                    <span className="text-amber-500 text-[10px] font-bold text-center leading-tight">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 px-4 bg-slate-50">
          <h2 className="text-lg font-black text-slate-900 text-center mb-6">हमारे लखनऊ के संतुष्ट ग्राहक</h2>
          <div className="space-y-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-black flex-shrink-0 ${r.avatarColor}`}>
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black text-slate-900 leading-none">{r.name}</h4>
                    <p className="text-[9px] text-slate-400 mt-0.5">{r.location} · <span className="text-emerald-500 font-bold">✓ वेरिफाइड</span></p>
                  </div>
                  <span className="text-[9px] text-slate-400 ml-auto">{r.time}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4 bg-white">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-8">अक्सर पूछे जाने वाले सवाल</h2>
          <FAQAccordion />
        </section>

        {/* Sticky Mobile Footer */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 custom-bottom-bar flex">
          <a
            href="https://wa.me/916204260510?text=नमस्ते, मुझे लखनऊ क्लिनिक पर कान की जांच के लिए अपॉइंटमेंट बुक करना है।"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 font-bold"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] leading-none">व्हाट्सएप अपॉइंटमेंट</span>
          </a>
          <div className="w-px bg-white/20" />
          <a
            href="tel:+916204260510"
            className="flex-1 bg-[#184A99] text-white flex flex-col items-center justify-center py-2.5 gap-0.5 px-2 font-bold"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[10px] leading-none">सीधे डॉक्टर से बात करें</span>
          </a>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          DESKTOP (min-width: 769px)
      ──────────────────────────────────────────────────────────── */}
      <div className="hidden md:block">

        {/* Desktop Header */}
        <div className="sticky top-0 z-50 custom-desktop-header-wrapper">
          <header className="bg-white border-b border-slate-100 py-4 px-6 custom-desktop-header">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <Link href="/">
                <Image src="/logo.webp" alt="Insono Hearing" width={130} height={42} className="h-10 w-auto object-contain" />
              </Link>
              <div className="flex items-center gap-6">
                <a
                  href="tel:+916204260510"
                  className="bg-[#184A99] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-[#13366e] transition flex items-center gap-2 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  कॉल करें: +91 62042 60510
                </a>
              </div>
            </div>
          </header>
        </div>

        {/* Hero */}
        <section className="relative pt-6 pb-20 bg-gradient-to-b from-[#eaf5ff] to-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Col 1: Text */}
              <div className="flex-[1.6] pt-4">
                <div className="lk-left inline-flex items-center gap-2 bg-[#184A99]/10 rounded-full px-5 py-2 text-[11px] font-bold text-[#184A99] mb-8 border border-[#184A99]/20">
                  <span className="w-2 h-2 bg-[#E83D6D] rounded-full animate-pulse" />
                  RCI सर्टिफाइड ऑडियोलॉजिस्ट · ₹31,500 तक की बचत
                </div>

                <h1 className="lk-up d1 text-4xl lg:text-[46px] font-black leading-[1.2] mb-8 text-[#0D2240] tracking-tight">
                  लखनऊ में सबसे बेहतरीन कान की मशीनें
                  <br />
                  <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                    लेटेस्ट डिजिटल व अदृश्य (Invisible) मॉडल्स
                  </span>
                </h1>

                <p className="lk-up d2 text-slate-500 text-lg mb-12 max-w-xl leading-relaxed font-medium">
                  विश्व के टॉप ब्रांड्स (Signia, Phonak, Widex) की अत्याधुनिक AI चिप, ब्लूटूथ कनेक्टिविटी और रिचार्जेबल टेक्नोलॉजी वाले हियरिंग एड्स पर ₹31,500 तक की बचत।
                </p>

                <div className="lk-up d3 grid grid-cols-3 gap-8 pt-8 border-t border-slate-100 mb-12">
                  {[
                    { label: "₹15,000 से शुरू", sub: "स्मार्ट हियरिंग एड्स" },
                    { label: "अदृश्य डिजाइन्स", sub: "बाहर से बिल्कुल न दिखने वाले" },
                    { label: "0% आसान EMI", sub: "बिना ब्याज के आसान किस्तें" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xl font-bold text-[#184A99] mb-1">{item.label}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="lk-up d4 mb-12 flex flex-col sm:flex-row gap-4">
                  <PopupTrigger className="bg-[#184A99] hover:bg-[#13366e] text-white px-8 py-4 rounded-2xl text-sm font-black shadow-lg shadow-blue-100 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    अदृश्य (Invisible) व स्मार्ट मॉडल्स देखें →
                  </PopupTrigger>
                  <a
                    href="#models"
                    className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl text-sm font-black active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    टेक्नोलॉजी और फीचर्स जानें
                  </a>
                </div>

                <div className="lk-up d4 pt-6 border-t border-slate-100 opacity-60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">आधिकारिक ब्रांड पार्टनर</p>
                  <div className="flex items-center gap-10 grayscale">
                    {BRAND_LOGOS.map((logo, i) => (
                      <Image key={i} src={logo} alt="brand" width={64} height={16} className="h-4 w-auto object-contain" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2: Form */}
              <div className="lk-up d4 w-full lg:w-[380px] flex-shrink-0 pt-4">
                <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-slate-900 relative overflow-hidden border border-slate-50">
                  <div className="absolute top-0 right-0 bg-[#E83D6D] text-white text-[10px] font-bold px-5 py-2 rounded-bl-2xl uppercase tracking-widest">
                    फ्री ऑफर बुकिंग
                  </div>
                  <h2 className="text-2xl font-bold mb-3 pt-4 text-[#0D2240]">अपॉइंटमेंट बुक करें और प्राइस लिस्ट पाएं</h2>
                  <p className="text-slate-500 text-xs mb-8 leading-relaxed">
                    प्राइस लिस्ट और मुफ्त ट्रायल ऑफर व्हाट्सएप पर तुरंत पाने के लिए नीचे फॉर्म भरें।
                  </p>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection */}
        <section id="models" className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">स्पेशल कलेक्शन</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">डिजिटल कान की मशीनों के प्रकार</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MODELS.map((p) => (
              <div key={p.rank} className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-2xl transition duration-500 flex flex-col justify-between p-8">
                <div>
                  <div className="relative w-full h-48 bg-slate-50 rounded-2xl flex items-center justify-center p-4 mb-6">
                    <Image src={p.image} alt={p.title} width={150} height={150} className="object-contain" loading="lazy" />
                    <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <Image src={p.brandLogo} alt={p.brand} width={64} height={20} className="h-5 w-auto object-contain grayscale opacity-50" />
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{p.style}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 mb-3">{p.title}</h3>
                    <p className="text-[#184A99] text-sm font-bold mb-6 italic leading-relaxed">&ldquo;{p.highlight}&rdquo;</p>
                    <div className="flex flex-wrap gap-2">
                      {p.features.map((f) => (
                        <span key={f} className="bg-slate-50 text-slate-500 px-4 py-2 rounded-xl text-[10px] font-bold border border-slate-100">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <PopupTrigger className="w-full flex items-center justify-center gap-2 bg-[#184A99] text-white py-4 rounded-2xl font-bold text-xs hover:bg-[#13366e] transition shadow-lg shadow-blue-100 uppercase tracking-widest">
                  ऑफर और कीमत जानें <ArrowRight className="w-4 h-4" />
                </PopupTrigger>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[10px] font-black text-[#184A99] uppercase tracking-[0.4em] mb-4">फर्क जानें</h2>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Insono बनाम अन्य हियरिंग एड क्लिनिक</h3>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="grid grid-cols-3 bg-[#0D2240] text-white text-sm font-bold">
                <div className="py-4 px-6">सुविधाएं (Features)</div>
                <div className="py-4 px-4 text-center border-l border-white/10 bg-white/5 text-yellow-300">Insono क्लिनिक</div>
                <div className="py-4 px-4 text-center border-l border-white/10 text-white/70">अन्य क्लिनिक</div>
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                  <div className="py-4 px-6 font-semibold text-slate-700">{row.feature}</div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100 bg-blue-50/30">
                    <span className="text-emerald-500 text-lg font-black">✓</span>
                  </div>
                  <div className="py-4 px-4 flex items-center justify-center border-l border-slate-100">
                    {row.others === true ? (
                      <span className="text-emerald-500 text-lg font-black">✓</span>
                    ) : row.others === false ? (
                      <span className="text-red-400 text-lg font-black">✗</span>
                    ) : (
                      <span className="text-amber-500 text-xs font-bold">{row.others}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-center text-3xl font-bold text-slate-900 mb-14">हमारे लखनऊ के खुश मरीज</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((r) => (
                <div key={r.name} className="bg-slate-50 rounded-3xl border border-slate-100 p-8 flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${r.avatarColor}`}>
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{r.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{r.location} · <span className="text-emerald-500 font-bold">✓ वेरिफाइड</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#0D2240] py-24 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">अक्सर पूछे जाने वाले सवाल</h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Desktop Footer */}
        <footer className="py-12 border-t border-slate-100 text-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Image src="/logo.webp" alt="Insono" width={120} height={36} className="h-8 w-auto mx-auto mb-6 grayscale opacity-50" />
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              © 2026 Insono Hearing Solutions · कान की मशीन क्लिनिक लखनऊ
            </p>
          </div>
        </footer>
      </div>

      {/* Popup modal */}
      <PopupModal />
    </div>
  );
}
