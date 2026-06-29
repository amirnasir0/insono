"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Star,
  Calendar,
  Phone,
  CheckCircle2,
  XCircle,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { type Clinic } from "./clinics-data";

/* ---------- Region ---------- */
function getRegion(id: string, locationLine: string, state?: string): string {
  if (state) {
    if (state === "Delhi" || state === "Uttar Pradesh" || state === "Haryana") return "Delhi NCR";
    if (state === "Maharashtra") return "Maharashtra";
    if (state === "Bihar") return "Bihar";
    if (state === "Jharkhand") return "Jharkhand";
    if (state === "West Bengal") return "West Bengal";
    if (state === "Punjab" || state === "Chandigarh" || state === "Himachal Pradesh") return "Punjab";
    return "Others";
  }
  const l = locationLine.toLowerCase();
  if (id === "andheri-mumbai") return "Maharashtra";
  if (l.includes("delhi") || l.includes("noida") || l.includes("gurugram") || l.includes("gurgaon")) return "Delhi NCR";
  if (l.includes("bihar")) return "Bihar";
  if (l.includes("jharkhand")) return "Jharkhand";
  if (l.includes("west bengal") || l.includes("kolkata") || l.includes("garia") || l.includes("asansol")) return "West Bengal";
  if (l.includes("punjab") || l.includes("chandigarh") || l.includes("ludhiana") || l.includes("jalandhar") || l.includes("ambala")) return "Punjab";
  if (l.includes("maharashtra") || l.includes("mumbai")) return "Maharashtra";
  return "Others";
}

const REGIONS = ["All", "Delhi NCR", "Maharashtra", "Bihar", "Jharkhand", "West Bengal", "Punjab", "Others"];

/* ---------- Stats ---------- */
const stats = [
  { value: "15+", label: "Cities" },
  { value: "2,00,000+", label: "Patients Served" },
  { value: "4.9★", label: "Google Rating" },
  { value: "Free", label: "Hearing Test" },
];

/* ---------- Trust strip ---------- */
const trustFeatures = [
  { emoji: "🎧", label: "Free Hearing Test" },
  { emoji: "🏠", label: "3-Day Home Trial" },
  { emoji: "💳", label: "0% EMI Available" },
  { emoji: "🛡️", label: "Up to 4-Year Warranty" },
  { emoji: "✅", label: "100% Genuine Devices" },
  { emoji: "📞", label: "Lifetime Aftercare" },
];

/* ---------- Comparison ---------- */
const comparisonRows: { text: string; insono: boolean; others: boolean }[] = [
  { text: "Quick and easy appointment booking", insono: true, others: false },
  { text: "Free hearing test, anytime", insono: true, others: false },
  { text: "Free preliminary hearing report", insono: true, others: false },
  { text: "Home visits by audiologists", insono: true, others: false },
  { text: "3-day home trial before purchase", insono: true, others: false },
  { text: "Live expert consultation anytime", insono: true, others: false },
  { text: "Multiple brand choices (5+ brands)", insono: true, others: false },
  { text: "Service & warranty reminders", insono: true, others: false },
  { text: "Hassle-free aftercare & fine-tuning", insono: true, others: false },
  { text: "Clinic visit mandatory for everything", insono: false, others: true },
  { text: "Clinic visit required for accessories", insono: false, others: true },
];

/* ---------- WhatsApp SVG ---------- */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ========== Main Component ========== */
export default function ClinicsList({ clinics }: { clinics: Clinic[] }) {
  const [activeRegion, setActiveRegion] = useState("All");

  const enriched = clinics.map((c) => ({
    ...c,
    region: getRegion(c.id, c.locationLine, c.state),
    isNew: c.id === "andheri-mumbai",
  }));

  const filtered =
    activeRegion === "All"
      ? enriched
      : enriched.filter((c) => c.region === activeRegion);

  const regionCount = (r: string) =>
    r === "All" ? enriched.length : enriched.filter((c) => c.region === r).length;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#012d66] via-[#023784] to-[#1a56b0] text-white pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/15 border border-white/20 px-3 py-1 rounded-full mb-4">
            15+ Locations Across India
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Find a Hearing Aid Clinic<br className="hidden sm:block" /> Near You
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Certified audiologists, free hearing tests, and the world's best hearing aid brands — all under one roof. Walk in or book online.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="/appointment"
              className="bg-white text-[#023784] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition shadow-lg text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Free Appointment
            </Link>
            <a
              href="tel:+916204260510"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call +91 62042 60510
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-blue-200 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="bg-white border-b border-gray-100 py-4 px-4 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {trustFeatures.map((f) => (
            <div key={f.label} className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-700 font-medium">
              <span className="text-lg">{f.emoji}</span> {f.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── Region Filter Tabs ── */}
      <section className="sticky top-[64px] z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeRegion === r
                    ? "bg-[#023784] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {r}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  activeRegion === r ? "bg-white/25 text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {regionCount(r)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinics Grid ── */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Result count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-gray-800">{filtered.length}</span> clinic{filtered.length !== 1 ? "s" : ""}
            {activeRegion !== "All" && <> in <span className="font-semibold text-[#023784]">{activeRegion}</span></>}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <article
                key={c.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card top bar */}
                <div className="flex items-center justify-between px-5 pt-5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {c.region}
                    </span>
                    {c.isNew && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 animate-pulse">
                        New ✨
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="text-xs font-bold text-gray-700">4.9</span>
                  </div>
                </div>

                {/* Clinic name */}
                <div className="px-5">
                  <Link href={`/our-clinic/${c.id}`}>
                    <h2 className="font-bold text-gray-900 text-[15px] leading-snug group-hover:text-[#023784] transition-colors">
                      {c.name}
                    </h2>
                  </Link>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">{c.locationLine}</p>
                </div>

                {/* Address + hours */}
                <div className="px-5 pt-4 flex-1 space-y-2.5">
                  <div className="flex gap-2.5">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{c.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-green-600">Open</span>
                    <span className="text-sm text-gray-400">· Mon–Sun, 10 AM – 7 PM</span>
                  </div>
                </div>

                {/* Links row */}
                <div className="px-5 pt-3 flex items-center gap-4 text-xs">
                  <a
                    href={
                      c.placeId
                        ? `https://www.google.com/maps/place/?q=place_id:${c.placeId}`
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" /> Get Directions
                  </a>
                  {c.placeId && (
                    <>
                      <span className="text-gray-200">|</span>
                      <a
                        href={`https://search.google.com/local/writereview?placeid=${c.placeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                      >
                        <Star className="w-3 h-3" /> Write Review
                      </a>
                    </>
                  )}
                </div>

                {/* CTA row */}
                <div className="px-5 py-4 mt-4 border-t border-gray-100 flex gap-2">
                  <Link
                    href={`/appointment?cat=${encodeURIComponent(c.catSlug || c.id)}&slug=${encodeURIComponent(c.id)}`}
                    className="flex-1 text-center bg-[#023784] text-white py-2.5 rounded-xl text-sm font-bold hover:bg-[#012d66] transition inline-flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Book Appointment
                  </Link>
                  <a
                    href={`https://wa.me/916204260510?text=${encodeURIComponent(`Hi, I want to book an appointment at ${c.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="flex-shrink-0 p-2.5 border border-gray-200 rounded-xl text-gray-400 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <Link
                    href={`/our-clinic/${c.id}`}
                    title="View clinic details"
                    className="flex-shrink-0 p-2.5 border border-gray-200 rounded-xl text-gray-400 hover:border-[#023784] hover:text-[#023784] hover:bg-blue-50 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid CTA Banner ── */}
      <section className="my-6 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#023784] to-[#1a56b0] rounded-2xl px-6 py-8 sm:py-10 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-2">
            Not sure which clinic is closest to you?
          </h2>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
            Call us or WhatsApp — we'll help you find the nearest Insono clinic and book your free hearing test in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+916204260510"
              className="bg-white text-[#023784] font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition inline-flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/916204260510?text=Hi%2C%20I%20want%20to%20find%20the%20nearest%20Insono%20clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-green-600 transition inline-flex items-center gap-2 shadow"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#4b72b5] to-[#023784]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Why Choose Insono?
            </h2>
            <p className="text-blue-200 text-sm">
              See how we compare to other hearing aid providers
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl">
            <table className="min-w-full bg-white overflow-hidden">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-5 text-left text-sm font-semibold text-gray-500 w-1/2">Feature</th>
                  <th className="p-5 text-center bg-[#eaf2ff] w-1/4">
                    <Image src="/logo.webp" alt="Insono Hearing" width={120} height={48} className="mx-auto" />
                  </th>
                  <th className="p-5 text-center text-sm font-bold text-gray-500 w-1/4">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={`border-b border-gray-50 ${idx % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                    <td className="p-4 text-sm text-gray-700">{row.text}</td>
                    <td className="p-4 text-center bg-[#eaf2ff]/60">
                      {row.insono ? (
                        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                          <XCircle className="w-4 h-4 text-red-400" strokeWidth={2.5} />
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.others ? (
                        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                          <XCircle className="w-4 h-4 text-red-400" strokeWidth={2.5} />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-4 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Ready to Hear Better?
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Book a free hearing test at any Insono clinic. No obligation, no cost. Our audiologists will guide you to the best solution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/appointment"
              className="bg-[#023784] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#012d66] transition shadow-md text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Free Hearing Test
            </Link>
            <Link
              href="/hearing-aid-price"
              className="border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:border-[#023784] hover:text-[#023784] transition text-sm sm:text-base"
            >
              View Price List →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile Sticky Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
        <a
          href="tel:+916204260510"
          className="flex-1 text-center border border-[#023784] text-[#023784] font-bold py-3 rounded-xl text-sm inline-flex items-center justify-center gap-1.5"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link
          href="/appointment"
          className="flex-1 text-center bg-[#023784] text-white font-bold py-3 rounded-xl text-sm inline-flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-4 h-4" /> Book Free Test
        </Link>
      </div>
      {/* Bottom padding for mobile sticky bar */}
      <div className="sm:hidden h-20" />
    </>
  );
}
