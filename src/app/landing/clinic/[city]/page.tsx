import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MapPin, Clock, ArrowRight, Users, Stethoscope, Star, Check, Award, Ear, HeartHandshake, ShieldCheck, Zap, MessageSquare, FileText } from "lucide-react";
import { clinics, defaultFaqs, type Clinic } from "@/app/our-clinic/clinics-data";
import { PopupTrigger } from "../PopupTrigger";
import PopupModal from "../PopupModal";
import LeadForm from "../LeadForm";
import FAQAccordion from "../FAQAccordion";
import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

interface LandingClinic extends Clinic {
  noGmb?: boolean;
}

const campaignClinics: LandingClinic[] = [
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

const allClinics: LandingClinic[] = [...clinics, ...campaignClinics];

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return allClinics.map((c) => ({ city: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;

  const CITY_ALIASES: Record<string, string> = {
    gurugram: "gurgaon",
    delhi: "lajpat-nagar",
    mumbai: "andheri-mumbai",
  };

  let targetSlug = citySlug.toLowerCase();
  if (CITY_ALIASES[targetSlug]) {
    targetSlug = CITY_ALIASES[targetSlug];
  }

  const clinic = allClinics.find((c) => c.id.toLowerCase() === targetSlug);
  const rawName = clinic?.name ?? formatCity(citySlug);
  const cityName = rawName.startsWith("Insono")
    ? rawName
    : rawName.replace(/Hearing Aid Clinic/i, "Insono Hearing Aid Clinic");
  const locationLine = clinic?.locationLine ?? formatCity(citySlug);

  return {
    title: `${cityName} | Insono Hearing Solutions`,
    description: `Visit Insono Hearing Solutions in ${locationLine}. Free hearing test, certified audiologists, premium brands — Signia, Phonak, Widex & more. Book a free appointment today.`,
    alternates: {
      canonical: `https://insonohearing.com/landing/clinic/${citySlug}`,
    },
    openGraph: {
      title: `${cityName} | Insono Hearing Solutions`,
      description: `Free hearing test & same-day hearing aid fitting at our ${locationLine} clinic. All top brands, transparent pricing.`,
      url: `https://insonohearing.com/landing/clinic/${citySlug}`,
      type: "website",
    },
  };
}

const BRAND_LOGOS = [
  "/brands/signia.svg",
  "/brands/widex.svg",
  "/brands/phonaklogo.svg",
  "/brands/oticon.svg",
  "/brands/resound.svg",
];

export default async function ClinicCityLandingPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;

  const CITY_ALIASES: Record<string, string> = {
    gurugram: "gurgaon",
    delhi: "lajpat-nagar",
    mumbai: "andheri-mumbai",
  };

  let targetSlug = citySlug.toLowerCase();
  if (CITY_ALIASES[targetSlug]) {
    targetSlug = CITY_ALIASES[targetSlug];
  }

  const clinic = allClinics.find((c) => c.id.toLowerCase() === targetSlug);
  if (!clinic) notFound();

  const cityName = formatCity(citySlug);
  const displayName = clinic.name.startsWith("Insono")
    ? clinic.name
    : clinic.name.replace(/Hearing Aid Clinic/i, "Insono Hearing Aid Clinic");
  const locationLine = clinic.locationLine;

  // Build FAQs: use clinic-specific ones first, fill with defaults
  const clinicFaqs: { question: string; answer: string }[] = [
    ...(clinic.faqs ?? []),
    ...defaultFaqs
      .filter((_, i) => (clinic.faqs?.length ?? 0) + i < 7)
      .map((f) => ({
        question:
          typeof f.question === "function"
            ? f.question(displayName, clinic.address)
            : f.question,
        answer:
          typeof f.answer === "function"
            ? f.answer(clinic.address)
            : f.answer,
      })),
  ].slice(0, 7);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#eaf5ff] pb-12 md:pb-0">
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
          Certified Audiologist · Same-Day Fitting · {cityName}
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
                <MapPin className="w-3.5 h-3.5" /> Authorized Hearing Care Center · {cityName}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                Find Nearest Insono Hearing Aid Clinic in {cityName}
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
                    Fill details below to get a callback from our certified audiologist in {cityName} within minutes.
                  </p>
                  <LeadForm city={citySlug} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GMB MAP & CLINIC DETAILS SECTION ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-center text-slate-900">
            Our Certified Clinic in {cityName}
          </h2>
          <p className="text-slate-500 text-center text-sm md:text-base mb-12 max-w-xl mx-auto">
            Find address, timing, directions, and direct contact details for our clinic location.
          </p>

          {clinic.noGmb ? (
            /* Centered Single Details Card when no GMB map is available */
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-green-700 text-green-700" /> 4.9 Rated
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">Authorized Insono Center</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{displayName}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#E83D6D] shrink-0 mt-0.5" />
                  <span>{clinic.address}</span>
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>{clinic.hours}</span>
                  </div>
                  {locationLine && (
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                      <MapPin className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                      <span>{locationLine}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+916204260510"
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl px-6 py-4 text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Clinic
                </a>
                <PopupTrigger
                  isPriceHook
                  className="flex-1 bg-[#E83D6D] hover:bg-[#c9325c] text-white font-bold rounded-2xl px-6 py-4 text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  📄 Download the Latest Price List
                </PopupTrigger>
              </div>
            </div>
          ) : (
            /* Side-by-Side details card & map iframe */
            <div className="flex flex-col lg:flex-row items-stretch gap-8">
              {/* Left Column: Clinic Card Details */}
              <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-green-700 text-green-700" /> 4.9 Rated
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">Authorized Insono Center</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{displayName}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#E83D6D] shrink-0 mt-0.5" />
                    <span>{clinic.address}</span>
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                      <span>{clinic.hours}</span>
                    </div>
                    {locationLine && (
                      <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                        <MapPin className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                        <span>{locationLine}</span>
                      </div>
                    )}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Insono Hearing Solutions " + clinic.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-xs text-[#184A99] font-bold hover:underline"
                    >
                      <MapPin className="w-4.5 h-4.5 text-[#E83D6D] shrink-0" />
                      <span>Open in Google Maps →</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+916204260510"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl px-6 py-4 text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call Clinic
                  </a>
                  <PopupTrigger
                    isPriceHook
                    className="flex-1 bg-[#E83D6D] hover:bg-[#c9325c] text-white font-bold rounded-2xl px-6 py-4 text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    📄 Download the Latest Price List
                  </PopupTrigger>
                </div>
              </div>

              {/* Right Column: Embedded Google Maps GMB */}
              <div className="flex-1 min-h-[350px] bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 relative">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent("Insono Hearing Solutions " + clinic.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY CHOOSE INSONO ── */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900">
            Why Choose Insono Certified Clinics in {cityName}
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

      {/* ── REVIEWS SECTION ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Vikram Sharma", initials: "VS", color: "bg-[#184A99]", text: `Excellent service at Insono ${cityName}. The audiologist explained everything clearly. Got fitted the same day. Highly recommend!`, time: "1 month ago" },
              { name: "Anita Rao", initials: "AR", color: "bg-emerald-600", text: "I was confused between multiple brands but the team helped me choose the right one. Sound quality is amazing, pricing was transparent.", time: "2 months ago" },
              { name: "Meena Verma", initials: "MV", color: "bg-rose-600", text: `My mother got her hearing aid from Insono ${cityName}. After-sales support has been wonderful. Highly recommend to everyone.`, time: "2 weeks ago" },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 ${r.color}`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">{r.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{cityName} · <span className="text-emerald-500 font-semibold">✓ Verified</span></p>
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
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-slate-900">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={clinicFaqs} />
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
            © 2026 Insono Hearing Solutions · {displayName}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── CUSTOM STICKY MOBILE BOTTOM BAR ── */}
      <div className="custom-bottom-bar md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 flex">
        <a
          href={`https://wa.me/916204260510?text=Hi, I want to get the latest hearing aid price list for ${cityName}.`}
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

      {/* Popup modal */}
      <PopupModal city={cityName} citySlug={citySlug} />
    </div>
  );
}
