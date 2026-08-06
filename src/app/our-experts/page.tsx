import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Calendar, Youtube, Star, Award, ShieldCheck, HeartHandshake, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Audiology Experts & Hearing Specialists | Insono Hearing",
  description:
    "Meet Insono's certified audiology experts and hearing care specialists. Read client testimonials, watch expert videos, and book free hearing tests across India.",
  alternates: { canonical: "https://www.insonohearing.com/our-experts" },
  openGraph: {
    title: "Our Audiology Experts & Hearing Care Specialists | Insono",
    description: "Certified audiologists delivering personalized hearing care across India.",
    url: "https://www.insonohearing.com/our-experts",
    siteName: "Insono Hearing Solutions",
    locale: "en_IN",
    type: "website",
  },
};

interface ExpertItem {
  id: string;
  name: string;
  designation: string;
  experience?: string | null;
  photo: string;
  testimonial: string;
  youtubeUrl?: string | null;
}

export default async function OurExpertsPage() {
  let experts: ExpertItem[] = [];

  try {
    const rows = await (prisma as any).audiologist.findMany({
      where: { isActive: true },
      orderBy: [{ orderIndex: "asc" }, { createdAt: "desc" }],
    });

    experts = rows.map((e: any) => ({
      id: e.id,
      name: e.name,
      designation: e.designation,
      experience: e.experience,
      photo: e.photo,
      testimonial: e.testimonial,
      youtubeUrl: e.youtubeUrl,
    }));
  } catch {
    experts = [];
  }

  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] via-white to-gray-50 text-gray-900 min-h-screen">
      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-[#012d66] via-[#023784] to-[#1a56b0] text-white pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-full mb-4">
            <ShieldCheck size={14} className="text-blue-300" /> Certified Audiology Team · Pan-India
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Meet Our Audiology Experts &amp; Specialists
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Dedicated hearing care professionals delivering free diagnostic tests, digital hearing aid fittings, and compassionate aftercare across 100+ cities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/appointment"
              className="bg-white text-[#023784] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition shadow-lg text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Consultation
            </Link>
            <a
              href="tel:+916204260510"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call +91 62042 60510
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Features ── */}
      <section className="bg-white border-b border-gray-100 py-4 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 sm:gap-12 flex-wrap text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#023784]" /> Certified Audiologists
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#023784]" /> 2,00,000+ Happy Patients
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" /> 4.9/5 Google Rating
          </div>
        </div>
      </section>

      {/* ── Experts Card Grid ── */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Our Certified Hearing Care Specialists
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-xl mx-auto">
              Trusted experts providing patient-centric care, free hearing tests, and personalized digital hearing aid consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((exp) => (
              <article
                key={exp.id}
                className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col items-center text-center"
              >
                {/* Centered Circle Photo */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-blue-50 group-hover:scale-105 transition-transform duration-300 mb-4 flex-shrink-0 bg-gray-100">
                  <Image
                    src={exp.photo}
                    alt={exp.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Designation */}
                <h3 className="text-xl font-extrabold text-gray-900 leading-snug">
                  {exp.name}
                </h3>

                <div className="mt-1.5 flex flex-wrap justify-center items-center gap-2">
                  <span className="bg-blue-50 text-[#023784] text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                    {exp.designation}
                  </span>
                </div>

                {exp.experience && (
                  <p className="text-xs font-semibold text-amber-600 flex items-center justify-center gap-1 mt-2">
                    <Award size={13} className="text-amber-500 flex-shrink-0" /> {exp.experience}
                  </p>
                )}

                {/* Testimonial Quote Block */}
                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 my-5 w-full text-left relative flex-1">
                  <span className="text-3xl text-blue-300 font-serif leading-none absolute top-2 left-3">
                    “
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 italic relative z-10 pl-4 leading-relaxed">
                    "{exp.testimonial}"
                  </p>
                </div>

                {/* YouTube Text Link */}
                {exp.youtubeUrl && (
                  <div className="pt-1">
                    <a
                      href={exp.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:underline transition"
                    >
                      <Youtube size={15} className="text-red-600 flex-shrink-0" />
                      Watch Video on YouTube →
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
