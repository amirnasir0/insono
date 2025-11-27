import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Headphones, MapPin, Phone, Ear, Waves } from "lucide-react";
import { Metadata } from "next";
import Repair from "@/components/landingHero/repair";
import FAQ from "@/components/FAQ";
import ProductSection from "@/components/ProductSection";
import HearingaidType from "@/components/HearingaidType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Best Hearing Aid in Lucknow | Prices, Models & Free Hearing Test",
  description:
    "Looking for the best hearing aid in Lucknow? Explore digital, Bluetooth & rechargeable hearing aids. Book free hearing test with certified audiologists today.",
  alternates: {
    canonical: "https://www.yoursite.com/hearing-aid-lucknow",
  },
  openGraph: {
    title: "Best Hearing Aid in Lucknow - Free Hearing Test & Consultation",
    description:
      "Discover affordable and advanced hearing aids in Lucknow with expert consultation and same-day fitting.",
    url: "https://www.yoursite.com/hearing-aid-lucknow",
    type: "website",
  },
};

const lucknowRepairFaqs = [
  {
    q: "Do you provide hearing aid repair services in Lucknow?",
    a: "Yes, we offer professional hearing aid repair services in Lucknow for all major brands including Signia, Phonak, Widex, Oticon, ReSound, and Starkey. Our technicians handle both minor and major repairs.",
  },
  {
    q: "What types of hearing aid problems do you repair?",
    a: "We repair common issues like no sound, low volume, distorted sound, microphone failure, receiver problems, battery compartment damage, moisture issues, and broken hearing aid parts.",
  },
  {
    q: "Do you repair Signia and Phonak hearing aids?",
    a: "Yes, we specialise in Signia hearing aid repair and Phonak hearing aid repair including programming, part replacement, and performance optimisation.",
  },
  {
    q: "How much does hearing aid repair cost in Lucknow?",
    a: "Hearing aid repair cost depends on the issue and model. Basic repairs start from ₹499 and detailed repairs are quoted after free device inspection.",
  },
  {
    q: "How long does hearing aid repair take?",
    a: "Most hearing aid repairs are completed within 24 to 48 hours. Some minor issues can be fixed on the same day depending on spare part availability.",
  },
  {
    q: "Do you use original spare parts for repair?",
    a: "Yes, we use genuine and manufacturer-approved spare parts to ensure the performance and durability of your hearing aid.",
  },
  {
    q: "Can old or out-of-warranty hearing aids be repaired?",
    a: "Yes, we repair old and out-of-warranty hearing aids after proper diagnosis and compatibility check.",
  },
  {
    q: "Do you provide doorstep pickup for hearing aid repair in Lucknow?",
    a: "Yes, we offer doorstep pickup and delivery service for hearing aid repair across Lucknow for your convenience.",
  },
  {
    q: "How can I book a hearing aid repair appointment?",
    a: "You can book your repair appointment online, via phone, or by visiting our Lucknow repair centre. Our team will guide you through the repair process.",
  },
];

export default function HearingAidLucknowPage() {
  return (
    <>
      {/* 🟦 HERO SECTION */}
      <Repair />
      <ProductSection heading="Hearing Aid Repair Services in Lucknow" />
      <Whychoose />
      <HearingaidType />
      <Testomonial />

      {/* 🟨 SERVICES */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
            Our Hearing Aid Services in Lucknow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<Ear className="w-7 h-7 text-[#184A99]" />}
              title="Free Hearing Test"
            />
            <ServiceCard
              icon={<Headphones className="w-7 h-7 text-[#184A99]" />}
              title="Digital Hearing Aids"
            />
            <ServiceCard
              icon={<Waves className="w-7 h-7 text-[#184A99]" />}
              title="Invisible Models"
            />
            <ServiceCard
              icon={<Phone className="w-7 h-7 text-[#184A99]" />}
              title="Home Visit"
            />
          </div>
        </div>
      </section> */}
      {/* 🟧 FAQ */}
      <FAQ
        faqs={lucknowRepairFaqs}
        heading="Hearing Aid Repair in Lucknow – Signia & Phonak Repair FAQs"
      />

      {/* 🟤 CONTACT */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 🌟 Bottom Bar */}
          <div className="  border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@insonohearing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.instagram.com/insono_hearing_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/insonohearingsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/insonohearing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* ✅ Google & Trustpilot Reviews Badges */}
            <div className="flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/RvRyJE8vQqNQnhNF8"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105"
              >
                <Image
                  src="/badge/google.webp" // place your PNG/SVG in /public/badges/
                  alt="Google Reviews"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
              <a
                href="https://www.trustpilot.com/review/insonohearing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105"
              >
                <Image
                  src="/badge/trustpilot.webp" // place your PNG/SVG in /public/badges/
                  alt="Trustpilot Reviews"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <a href="/policy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
              <a href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function ServiceCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
      <div className="mb-4 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}
