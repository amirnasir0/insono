import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, ChevronRight, Ear, Award, Zap, HeartHandshake, ShieldCheck, Star, Check, MessageSquare, FileText } from "lucide-react";
import { clinics } from "@/app/our-clinic/clinics-data";
import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { PopupTrigger } from "./PopupTrigger";
import PopupModal from "./PopupModal";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Find Nearest Insono Hearing Aid Clinic | Certified Audiologists & Free Trial",
  description:
    "Find your nearest Insono certified hearing aid diagnostic and fitting clinic. Expert audiologists, free diagnostic testing, and trials. Book a free slot today.",
  alternates: {
    canonical: "https://insonohearing.com/landing/clinic",
  },
  openGraph: {
    title: "Find Nearest Insono Clinic | Expert Hearing Care India",
    description:
      "India's trusted hearing aid clinic network. Free diagnostic hearing test & multi-brand trials. Consult with certified audiologists near you.",
    url: "https://insonohearing.com/landing/clinic",
    type: "website",
  },
};

const STATE_ORDER = [
  "Delhi",
  "Uttar Pradesh",
  "Haryana",
  "Maharashtra",
  "West Bengal",
  "Bihar",
  "Jharkhand",
  "Punjab",
  "Uttarakhand",
  "Jammu & Kashmir",
  "Telangana",
];

function getState(clinic: (typeof clinics)[0]) {
  if (clinic.state) return clinic.state;
  const loc = clinic.locationLine ?? "";
  for (const s of STATE_ORDER) {
    if (loc.includes(s)) return s;
  }
  const parts = loc.split("—");
  return parts[1]?.trim() ?? "Other";
}

const FAQS = [
  {
    question: "Where is the nearest Insono clinic located?",
    answer: "We have certified diagnostic clinics located across multiple states in India. Please fill out the form with your details to find the exact address nearest to your location.",
  },
  {
    question: "Is the hearing test and audiogram free?",
    answer: "Yes. When you book through this page, your diagnostic hearing test, audiologist consultation, and live device trial are 100% free with zero obligation.",
  },
  {
    question: "Do I need to schedule an appointment in advance?",
    answer: "Pre-booking is highly recommended as it ensures a senior audiologist and soundproof testing room are reserved for your slot with no waiting time.",
  },
  {
    question: "What should I bring to my clinic appointment?",
    answer: "If you have any recent audiograms or ENT reports, please bring them along. Otherwise, just bring a family member to help with your sound testing.",
  },
  {
    question: "What are the clinic working hours?",
    answer: "Our Insono clinics are open from 10:00 AM to 7:00 PM daily.",
  },
];

export default function ClinicListingPage() {
  const campaignClinics = [
    {
      id: "bangalore",
      name: "Insono Hearing Solutions Pvt Ltd. Koramangala Bangalore",
      locationLine: "Koramangala — Bangalore, Karnataka",
      address: "Unit No 127 First Floor, Raheja Arcade, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
      hours: "Open, Closes by 8 pm",
      tag: "Clinic",
      placeId: "ChIJu-bBqssRrjsRvY0bQc2323g",
      images: [
        "/clinics/noida-1.webp",
        "/clinics/noida-2.webp",
      ],
    },
    {
      id: "faridabad",
      name: "Hearing Aid Clinic in Faridabad",
      locationLine: "Faridabad — Haryana",
      address: "Faridabad, Haryana",
      hours: "Open, Closes by 7 pm",
      tag: "Clinic",
      noGmb: true,
      images: [
        "/clinics/noida-1.webp",
        "/clinics/noida-2.webp",
      ],
    },
    {
      id: "ghaziabad",
      name: "Hearing Aid Clinic in Ghaziabad",
      locationLine: "Ghaziabad — Uttar Pradesh",
      address: "Ghaziabad, Uttar Pradesh",
      hours: "Open, Closes by 7 pm",
      tag: "Clinic",
      noGmb: true,
      images: [
        "/clinics/noida-1.webp",
        "/clinics/noida-2.webp",
      ],
    }
  ];

  const allClinics = [...clinics, ...campaignClinics];

  // Build state → clinics map
  const stateMap: Record<string, typeof clinics> = {};
  for (const clinic of allClinics) {
    const state = getState(clinic);
    if (!stateMap[state]) stateMap[state] = [];
    stateMap[state].push(clinic);
  }

  const sortedStates = STATE_ORDER.filter((s) => stateMap[s]).concat(
    Object.keys(stateMap).filter((s) => !STATE_ORDER.includes(s))
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden pb-12 md:pb-0">
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide global LandingNav elements completely on this page */
          header.bg-transparent,
          footer,
          div.fixed.bottom-0.left-0.right-0:not(.custom-bottom-bar) {
            display: none !important;
          }
          body { padding-top: 0 !important; }
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fade-up 0.6s ease both; }
          .fade-up.d1 { animation-delay: 0.1s; }
          .fade-up.d2 { animation-delay: 0.2s; }
          .fade-up.d3 { animation-delay: 0.3s; }
        `
      }} />

      {/* ── CUSTOM DESKTOP HEADER ── */}
      <div className="hidden md:block py-4 px-8 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.webp" alt="Insono Logo" width={130} height={42} className="h-10 w-auto object-contain" priority />
          </Link>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Multi-Brand Comparison Experts
            </span>
            <a
              href="tel:+916204260510"
              className="flex items-center gap-2 bg-[#184A99] hover:bg-[#13366e] text-white font-semibold rounded-full px-6 py-2.5 text-xs transition-all active:scale-95 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ── CUSTOM MOBILE HEADER ── */}
      <div className="block md:hidden sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="bg-[#0D2240] text-white py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse mr-2" />
          15+ Clinics · Free Hearing Test · Same-Day Fitting
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.webp" alt="Insono Hearing" width={100} height={32} className="h-8 w-auto object-contain" />
          </Link>
          <a
            href="tel:+916204260510"
            className="bg-[#184A99] text-white px-4 py-2.5 rounded-full text-[12px] font-bold flex items-center gap-2 active:scale-95 transition"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>
      </div>



      {/* ── HERO SECTION ── */}
      <section className="relative pt-6 pb-16 md:pt-20 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Column 1: Text Copy */}
            <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left w-full fade-up">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#184A99] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                <MapPin className="w-3.5 h-3.5" /> Authorized Hearing Care Center
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                Find Nearest Insono Hearing Aid Clinic
              </h1>
              <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-700">
                    Equipped with certified audiologists & diagnostic labs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-700">
                    Free diagnostic hearing test & multi-brand trials
                  </span>
                </li>
              </ul>
              <div className="hidden lg:block">
                <PopupTrigger className="inline-flex items-center justify-center gap-2 bg-[#E83D6D] hover:bg-[#c9325c] text-white font-bold text-sm h-14 px-8 rounded-2xl shadow-lg shadow-rose-100 transition-all active:scale-95">
                  📍 Book Free Appointment Now
                </PopupTrigger>
              </div>
            </div>

            {/* Column 2: Lead Form Card */}
            <div className="lg:col-span-5 order-3 w-full fade-up d2">
              <div className="max-w-md mx-auto lg:ml-auto bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-[#E83D6D] text-white text-[11px] font-extrabold text-center py-2.5 uppercase tracking-wider">
                  ⚡ Slots Available Today
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-slate-800 tracking-tight">
                    Book Visit
                  </h3>
                  <p className="text-slate-500 text-xs text-center mb-6 leading-relaxed">
                    Fill details below to get a callback from our certified audiologist within minutes.
                  </p>
                  <LeadForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CERTIFIED CLINICS SECTION ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-center text-slate-900">
            Our Nearest Certified Clinics
          </h2>
          <p className="text-slate-500 text-center text-sm md:text-base mb-12 max-w-xl mx-auto">
            Choose your nearest city to view clinic details, get directions, or book a consultation slot.
          </p>

          {/* State groups */}
          <div className="space-y-12">
            {sortedStates.map((state) => (
              <div key={state}>
                {/* State label */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] bg-slate-200 flex-1" />
                  <span className="text-[11px] font-black text-[#184A99] uppercase tracking-[0.3em] px-3">{state}</span>
                  <div className="h-[1px] bg-slate-200 flex-1" />
                </div>

                {/* Clinic cards */}
                <div className="space-y-6">
                  {(stateMap[state] ?? []).map((clinic) => (
                    <div
                      key={clinic.id}
                      className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-green-700 text-green-700" /> 4.9 Rated
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">Authorized Insono Center</span>
                        </div>
                        <Link href={`/landing/clinic/${clinic.id}`}>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-[#184A99] transition-colors cursor-pointer">
                            {clinic.name.startsWith("Insono")
                              ? clinic.name
                              : clinic.name.replace(/Hearing Aid Clinic/i, "Insono Hearing Aid Clinic")}
                          </h3>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{clinic.address}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {clinic.hours}
                          </span>
                          {clinic.locationLine && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" /> {clinic.locationLine}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
                        <a
                          href="tel:+916204260510"
                          className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl px-6 py-3.5 text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          <Phone className="w-4 h-4" /> Call Clinic
                        </a>
                        <PopupTrigger
                          isPriceHook
                          className="bg-[#E83D6D] hover:bg-[#c9325c] text-white font-bold rounded-2xl px-6 py-3.5 text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          📄 Download the Latest Price List
                        </PopupTrigger>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE INSONO ── */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900">
            Why Choose Insono Certified Clinics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Ear className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Free Diagnostic Audiogram",
                desc: "Complete audiometry diagnostics performed in soundproof setups by certified audiologists.",
              },
              {
                icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
                title: "15+ Years Avg. Experience",
                desc: "Consult with highly qualified senior audiologists for accurate prescriptions.",
              },
              {
                icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Multi-Brand Trials & Demos",
                desc: "Try the latest rechargeable and invisible models across multiple brands in-clinic before buying.",
              },
              {
                icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Authorized Center Support",
                desc: "Benefit from genuine software, original brand warranties, and lifetime tuning support.",
              },
              {
                icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Priority Clinic Slots",
                desc: "Book online in advance to enjoy a zero-wait-time, focused consultation slot.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Lifetime Free Tuning",
                desc: "Get free lifetime adjustments, service checkups, and software updates for your device.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="text-center p-6 md:p-8 rounded-3xl bg-blue-50/40 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md text-[#184A99]">
                  {card.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-slate-900">{card.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-slate-900">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 md:py-16 bg-white border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <Image src="/logo.webp" alt="Insono Logo" width={130} height={42} className="h-10 w-auto object-contain mb-6" />
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 text-slate-400">
            <a href="https://youtube.com/@insonohearing" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.instagram.com/insono_hearing_solutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/insonohearingsolution" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.linkedin.com/company/insonohearing" target="_blank" rel="noopener noreferrer" className="hover:text-[#184A99] transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>

          <p className="text-slate-400 text-sm font-medium">
            © 2026 Insono Hearing Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── CUSTOM STICKY MOBILE BOTTOM BAR ── */}
      <div className="custom-bottom-bar md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 flex">
        <a
          href="https://wa.me/916204260510?text=Hi, I want to get the latest hearing aid price list."
          target="_blank" rel="noopener noreferrer"
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
          <span className="text-[10px] font-black leading-none text-center">Call & Save up to ₹31,500</span>
        </a>
      </div>

      {/* Popup Modal Component */}
      <PopupModal />
    </div>
  );
}
