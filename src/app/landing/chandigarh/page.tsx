import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Headphones, MapPin, Phone, Ear, Waves } from "lucide-react";
import { Metadata } from "next";
import Chandigarh from "@/components/landingHero/chandigarh";
import FAQ from "@/components/FAQ";
import ProductSection from "@/components/ProductSection";
import HearingaidType from "@/components/HearingaidType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";
import HearingAidGuide from "@/components/hearingaidsguide";
import Location from "@/components/location";

import Footer from "@/components/landingHero/fotern";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Best Hearing Aid in Chandigarh | Prices, Models & Free Hearing Test",
  description:
    "Looking for the best hearing aid in Chandigarh? Explore digital, Bluetooth & rechargeable hearing aids. Book free hearing test with certified audiologists today.",
  alternates: {
    canonical: "https://insonohearing.com/landing/chandigarh",
  },
  openGraph: {
    title: "Best Hearing Aid in Chandigarh - Free Hearing Test & Consultation",
    description:
      "Discover affordable and advanced hearing aids in Chandigarh with expert consultation and same-day fitting.",
    url: "https://insonohearing.com/landing/chandigarh",
    type: "website",
  },
};

const chandigarhFaqs = [
  {
    q: "What is the price of hearing aids in Chandigarh?",
    a: "The price of hearing aids in Chandigarh starts from ₹9,999 and can go up depending on brand, technology, and features like Bluetooth or rechargeability. We offer options for every budget with EMI facilities available.",
  },
  {
    q: "Do you provide free hearing tests in Chandigarh?",
    a: "Yes, we provide 100% free hearing tests and professional consultation at our Chandigarh clinic conducted by certified audiologists using advanced diagnostic equipment.",
  },
  {
    q: "Where is your hearing aid clinic located in Chandigarh?",
    a: "Our hearing aid clinic in Chandigarh is centrally located and easily accessible. You can book an appointment to get the exact location and directions.",
  },
  {
    q: "Which brands of hearing aids are available in your Chandigarh clinic?",
    a: "We provide all premium brands including Signia, Phonak, Widex, Oticon, ReSound, and Starkey at competitive prices in Chandigarh.",
  },
  {
    q: "Are rechargeable hearing aids available in Chandigarh?",
    a: "Yes, we offer advanced rechargeable hearing aids that provide up to 24 hours of usage on a single charge with fast charging support.",
  },
  {
    q: "Do you offer home visits in Chandigarh?",
    a: "Yes, we provide home hearing tests and hearing aid trials across Chandigarh for senior citizens and patients who prefer in-home consultation.",
  },
  {
    q: "Is there a warranty and after-sales support?",
    a: "All hearing aids come with manufacturer warranty along with dedicated after-sales support, servicing and programming assistance at our Chandigarh clinic.",
  },
  {
    q: "How do I book an appointment in Chandigarh?",
    a: "You can book your appointment online, call us directly, or visit our Chandigarh clinic. Our team will assist you with slot availability and consultation details.",
  },
];

export default function HearingAidChandigarhPage() {
  return (
    <>
      {/* 🟦 HERO SECTION */}
      <Chandigarh />
      <ProductSection heading="Premium Digital Hearing Aids Available in Chandigarh" />
      <Whychoose />
      {/* <HearingaidType /> */}
      <HearingAidGuide />
      <Location />
      <Testomonial />

      {/* 🟧 FAQ */}
      <FAQ faqs={chandigarhFaqs} heading="Hearing Aid in Chandigarh - FAQs" />

      {/* 🟤 FOOTER */}
      <Footer />

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
