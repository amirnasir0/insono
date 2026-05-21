import CategoryProductSection from "@/components/CategoryProductSection";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Bluetooth, BatteryCharging, Heart, Shield, Activity, Waves } from "lucide-react";
import { Metadata } from "next";
import Whychoose from "@/components/whychoose";
import FAQ from "@/components/FAQ";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Starkey Hearing Aids – Prices, Models & Features in India | Insono Hearing Solutions",
  description:
    "Discover Starkey hearing aids featuring advanced health tracking, AI noise reduction, fall alerts, and crystal-clear sound. Book a free consultation, download price list, or trial a model.",
  alternates: {
    canonical: "https://www.insonohearing.com/hearing-aids/starkey",
  },
  openGraph: {
    title: "Starkey Hearing Aids – Prices, Models & Features in India",
    description:
      "Explore Starkey hearing aids — featuring AI health monitoring, direct Bluetooth streaming, and robust waterproofing. Check models & prices.",
    url: "https://www.insonohearing.com/hearing-aids/starkey",
    type: "website",
  },
};

// ✅ Starkey FAQ Data
const starkeyFaqs = [
  {
    q: "What is the price of Starkey hearing aids in India?",
    a: "Starkey hearing aids start from ₹18,500 and go up based on technology levels and custom models. Get our latest catalog for detailed pricing.",
  },
  {
    q: "What makes Starkey hearing aids unique?",
    a: "Starkey is a pioneer in integrating health sensors into hearing aids, providing health monitoring, fitness tracking, and fall alerts directly through the device.",
  },
  {
    q: "Do Starkey hearing aids have rechargeable batteries?",
    a: "Yes, Starkey rechargeable models provide up to 24-30 hours of continuous use on a single overnight charge.",
  },
  {
    q: "Do Starkey hearing aids support Bluetooth streaming?",
    a: "Yes, Starkey hearing aids support seamless Bluetooth streaming for music, calls, and TV audio on both iOS and Android via the My Starkey app.",
  },
];

// ✅ Breadcrumb structured data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.insonohearing.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hearing Aids",
      item: "https://www.insonohearing.com/hearing-aids",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Starkey",
      item: "https://www.insonohearing.com/hearing-aids/starkey",
    },
  ],
};

export default function StarkeyPage() {
  return (
    <>
      {/* ✅ Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 🟦 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-30 md:px-20 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-3">
            Starkey Hearing Aids – Models, Prices & Features in India
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Experience the next generation of <strong>Starkey hearing aids</strong> — the global leaders in 
            smart hearing tech with health monitoring, fall detection, and next-level sound processing. 
            Download the latest price catalog and schedule a free trial at our clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=starkey-page&utm_medium=hero"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0f3a7e] transition text-center"
            >
              Download Price List
            </Link>
            <Link
              href="/appointment"
              className="border border-[#184A99] text-[#184A99] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#184A99] hover:text-white transition text-center"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <video
            className="rounded-lg w-full max-w-[500px] h-auto object-cover shadow-md border border-gray-200"
            src="/video/starkey.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* 🟨 PRODUCT SECTION */}
      <CategoryProductSection
        category="Starkey"
        title="Top Starkey Digital Hearing Aids"
        description="Discover best-selling Starkey hearing aids featuring industry-first integrated health sensors and clear sound clarity."
        limit={4}
      />

      {/* 🟩 WHY CHOOSE SECTION */}
      <section className="relative overflow-hidden py-14 px-4">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Why Choose <span className="text-[#184A99]">Starkey Hearing Aids?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            <strong>Starkey</strong> stands at the forefront of digital sound engineering, integrating 
            cutting-edge AI technology with advanced health monitoring to enrich daily life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard icon={<Activity className="w-8 h-8 text-[#184A99]" />} title="Health Monitoring" desc="Track physical fitness, mental tracking, and secure fall detection alerts." />
            <FeatureCard icon={<Bluetooth className="w-8 h-8 text-[#184A99]" />} title="Thrive App Connectivity" desc="Stream calls, high-quality audio, and customize settings instantly." />
            <FeatureCard icon={<Heart className="w-8 h-8 text-[#184A99]" />} title="Genesis AI Tech" desc="Advanced sound processors adjust sound up to 80 million times per hour." />
            <FeatureCard icon={<Shield className="w-8 h-8 text-[#184A99]" />} title="Waterproof Protection" desc="ProShield protective coatings guard against sweat and water." />
          </div>
        </div>
      </section>
      <Whychoose />

      {/* 🟪 CERTIFICATIONS */}
      <ImageShowcaseSection
        title="Official Certifications from Starkey, Signia & Widex"
        description="Insono Hearing Solutions is an authorized partner for global hearing aid manufacturers. Our official partner certifications reflect our clinical excellence and technical credentials in offering authentic, warranty-backed hearing aids in India."
        images={[
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak & Starkey Partner Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Authorized Partner" },
          { src: "/images/certifications/widex.png", alt: "Widex Partner Certification" },
        ]}
      />

      {/* 🟧 FAQ SECTION */}
      <FAQ faqs={starkeyFaqs} heading="Starkey Hearing Aids : FAQs" />

      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More Hearing Solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Compare premium brands and cutting-edge hearing aids trusted all over India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <LinkCard href="/hearing-aids/signia" title="Signia Hearing Aids" desc="German engineering and clarity." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/phonak" title="Phonak Hearing Aids" desc="Swiss precision and clarity." icon={<Headphones className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/widex" title="Widex Hearing Aids" desc="Danish natural sound technology." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/resound" title="ReSound Hearing Aids" desc="Organic Hearing & robust power." icon={<Bluetooth className="w-7 h-7 text-[#184A99]" />} />
          </div>
        </div>
      </section>
    </>
  );
}

// ✅ Small reusable card components
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
      <div className="mb-4 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

function LinkCard({ href, title, desc, icon }: { href: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
    >
      <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">{title}</h3>
      <p className="text-xs text-gray-600 text-center">{desc}</p>
    </Link>
  );
}
