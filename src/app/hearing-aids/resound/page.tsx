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
  title: "ReSound Hearing Aids – Prices, Models & Features in India | Insono Hearing Solutions",
  description:
    "Explore ReSound hearing aids engineered for natural sound clarity, Organic Hearing design, rechargeable convenience, and seamless Bluetooth streaming. Compare models & prices.",
  alternates: {
    canonical: "https://www.insonohearing.com/hearing-aids/resound",
  },
  openGraph: {
    title: "ReSound Hearing Aids – Prices, Models & Features in India",
    description:
      "Discover ReSound hearing aids — featuring natural sound processing, Organic Hearing, and custom rechargeable models. Compare models & check prices.",
    url: "https://www.insonohearing.com/hearing-aids/resound",
    type: "website",
  },
};

// ✅ ReSound FAQ Data
const resoundFaqs = [
  {
    q: "What is the price of ReSound hearing aids in India?",
    a: "ReSound hearing aids start from ₹19,990 and vary based on technology level and specific model requirements. Contact us or download the price list for current offers.",
  },
  {
    q: "What is Organic Hearing by ReSound?",
    a: "Organic Hearing is ReSound's design philosophy that mimics the natural path of sound through the ear canal, preserving spatial awareness and rendering natural voice details.",
  },
  {
    q: "Are ReSound hearing aids rechargeable?",
    a: "Yes, ReSound offers industry-leading rechargeable batteries that deliver up to 30 hours of continuous use on a single charge.",
  },
  {
    q: "Do ReSound hearing aids support direct audio streaming?",
    a: "Yes, ReSound supports direct high-quality streaming from Apple (MFi) and Android smartphones, as well as dedicated TV and remote microphone accessories.",
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
      name: "ReSound",
      item: "https://www.insonohearing.com/hearing-aids/resound",
    },
  ],
};

export default function ResoundPage() {
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
            ReSound Hearing Aids – Models, Prices & Features in India
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Discover the remarkable innovation of <strong>ReSound hearing aids</strong> — the pioneers of 
            Organic Hearing, premium natural sound quality, and seamless connectivity. 
            Check specifications, download pricing, and request your free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=resound-page&utm_medium=hero"
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
            src="/video/resound.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* 🟨 PRODUCT SECTION */}
      <CategoryProductSection
        category="Resound"
        title="Top ReSound Digital Hearing Aids"
        description="Explore best-selling ReSound hearing aids engineered for crystal-clear natural listening, comfort, and advanced features."
        limit={4}
      />

      {/* 🟩 WHY CHOOSE SECTION */}
      <section className="relative overflow-hidden py-14 px-4">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Why Choose <span className="text-[#184A99]">ReSound Hearing Aids?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            <strong>ReSound</strong> combines premium Danish engineering with advanced Organic Hearing solutions 
            to offer a pure, effortless, and highly personalized hearing experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard icon={<Waves className="w-8 h-8 text-[#184A99]" />} title="Organic Hearing" desc="Designed to deliver sound exactly how the ear naturally receives it." />
            <FeatureCard icon={<Bluetooth className="w-8 h-8 text-[#184A99]" />} title="High-Speed Audio Streaming" desc="Seamless high-quality audio streaming from your favorite iOS and Android devices." />
            <FeatureCard icon={<BatteryCharging className="w-8 h-8 text-[#184A99]" />} title="Superior Rechargeability" desc="Enjoy up to 30 hours of hearing support on a single smart charger cycles." />
            <FeatureCard icon={<Headphones className="w-8 h-8 text-[#184A99]" />} title="Ultra Discreet Styles" desc="Extremely lightweight designs with practically invisible in-ear profiles." />
          </div>
        </div>
      </section>
      <Whychoose />

      {/* 🟪 CERTIFICATIONS */}
      <ImageShowcaseSection
        title="Official Certifications from ReSound, Signia & Widex"
        description="Insono Hearing Solutions is an authorized partner for global hearing aid manufacturers. Our official certifications reflect our trusted expertise and commitment to world-class hearing care across India."
        images={[
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak & ReSound Partner Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Authorized Partner" },
          { src: "/images/certifications/widex.png", alt: "Widex Partner Certification" },
        ]}
      />

      {/* 🟧 FAQ SECTION */}
      <FAQ faqs={resoundFaqs} heading="ReSound Hearing Aids : FAQs" />

      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More Hearing Solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Discover advanced hearing aid technologies and top global brands trusted in India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <LinkCard href="/hearing-aids/signia" title="Signia Hearing Aids" desc="German innovations and quality." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/phonak" title="Phonak Hearing Aids" desc="Swiss precision for premium hearing." icon={<Headphones className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/widex" title="Widex Hearing Aids" desc="Natural Danish sound engineering." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/starkey" title="Starkey Hearing Aids" desc="Smart AI features & health tracking." icon={<Bluetooth className="w-7 h-7 text-[#184A99]" />} />
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
