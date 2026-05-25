import HearingAidGuide from "@/components/hearingaidsguide";
import HeroSection from "@/components/landingHero/landing";
import Location from "@/components/location";
import Whychoose from "@/components/whychoose";
import ProductSection from "@/components/ProductSection";
import Testomonial from "@/components/testomonial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/landingHero/fotern";

import { brandSEO } from "@/lib/brandSeo";

export const metadata = brandSEO(
  "Phonak Paradise",
  "https://insonohearing.com/landing/phonak-paradise",
);

export default function Page() {
  const heroImages = [
    "/lp/phonak1.png",
    "/lp/phonak2.png",
    "/lp/phonak3.png",
    "/lp/phonak4.png",
  ];

  const statsList = [
    { label: "Happy Paradise Users", value: "2 Lakh+", icon: "users" as const },
    { label: "Authorized Clinics", value: "15+", icon: "map" as const },
    {
      label: "Certified Audiologists",
      value: "100+",
      icon: "stethoscope" as const,
    },
  ];

  const featuresList = [
    {
      icon: "💰",
      text: "Save <b class='text-red-600'>UPTO ₹25,000</b> on Phonak Paradise",
    },
    {
      icon: "🔋",
      text: "Rechargeable with <b>AutoSense OS™ 4.0</b>",
    },
    {
      icon: "📱",
      text: "Control via <b>myPhonak App</b>",
    },
    {
      icon: "🎧",
      text: "Motion Sensor Hearing + <b>Bluetooth Streaming</b>",
    },
    {
      icon: "💧",
      text: "<b>IP68 Water & Dust Resistance</b>",
    },
  ];

  const paradiseFaqs = [
    {
      q: "What is the price of Phonak Paradise in India?",
      a: "Starts from ₹19,000, varies by model and features.",
    },
    {
      q: "Is Phonak Paradise rechargeable?",
      a: "Yes, rechargeable with full day battery backup.",
    },
    {
      q: "Does Phonak Paradise support Bluetooth?",
      a: "Yes, direct streaming from iPhone and Android.",
    },
    {
      q: "What is AutoSense OS in Paradise?",
      a: "Auto-adjusts sound in 200+ environments intelligently.",
    },
    {
      q: "Is free trial available for Phonak Paradise?",
      a: "Yes, free hearing test + trial at our clinics.",
    },
    {
      q: "Does Phonak Paradise work with myPhonak App?",
      a: "Yes, full volume & program control via app.",
    },
    {
      q: "What is IP68 rating in Paradise?",
      a: "Waterproof & dustproof — sweat and rain resistant.",
    },
    {
      q: "EMI available on Phonak Paradise?",
      a: "Yes, 0% EMI on selected models.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Phonak Paradise Hearing Aids for Crystal Clear Sound"
        subtitle="Get original Phonak Paradise hearing aids with best price, warranty & free hearing test."
        ctaText="Download Phonak Paradise Price List"
        partnerLabel="Official Phonak Partner Clinics"
        stats={statsList}
        heroImages={heroImages}
        features={featuresList}
      />

      <ProductSection heading="Latest Phonak Digital Hearing Aids" />

      <Whychoose />

      <HearingAidGuide />

      <Location />

      <Testomonial />

      <FAQ faqs={paradiseFaqs} heading="Phonak Paradise Hearing Aids – FAQs" />

      <Footer />
    </>
  );
}
