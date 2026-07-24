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
  "Phonak Infinio",
  "https://insonohearing.com/landing/phonak-infinio",
);

export default function Page() {
  const heroImages = [
    "/lp/phonak3.png",
    "/lp/phonak1.png",
    "/lp/phonak2.png",
    "/lp/phonak4.png",
  ];

  const statsList = [
    { label: "Happy Infinio Users", value: "2 Lakh+", icon: "users" as const },
    { label: "Pan-India Cities", value: "100+", icon: "map" as const },
    {
      label: "Certified Audiologists",
      value: "100+",
      icon: "stethoscope" as const,
    },
  ];

  const featuresList = [
    {
      icon: "💰",
      text: "Save <b class='text-red-600'>UPTO ₹35,000</b> on Phonak Infinio",
    },
    {
      icon: "🤖",
      text: "Real-Time <b>AI Sound Processing</b>",
    },
    {
      icon: "🔊",
      text: "Tinnitus Balance + <b>EchoBlock™</b>",
    },
    {
      icon: "📱",
      text: "Smart <b>myPhonak App Control</b>",
    },
    {
      icon: "🎧",
      text: "Universal <b>Bluetooth Streaming</b>",
    },
  ];

  const infinioFaqs = [
    {
      q: "What is the price of Phonak Infinio in India?",
      a: "Starts from ₹35,000, varies by model.",
    },
    {
      q: "What is Real-Time AI in Phonak Infinio?",
      a: "Processes 11 million sounds per second instantly.",
    },
    {
      q: "What is EchoBlock in Infinio?",
      a: "Reduces echo in large rooms for clearer hearing.",
    },
    {
      q: "Is Phonak Infinio rechargeable?",
      a: "Yes, premium rechargeable with wireless charging.",
    },
    {
      q: "Does Infinio support Tinnitus Balance?",
      a: "Yes, built-in tinnitus therapy programs.",
    },
    {
      q: "Free trial for Phonak Infinio?",
      a: "Yes, free audiologist demo at Insono clinics.",
    },
    {
      q: "What warranty on Phonak Infinio?",
      a: "Up to 4 years extended warranty.",
    },
    {
      q: "EMI for Phonak Infinio?",
      a: "Yes, flexible 0% EMI plans available.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Phonak Infinio – Real-Time AI Hearing, Redefined"
        subtitle="Get original Phonak Infinio hearing aids with best price, warranty & free hearing test."
        ctaText="Download Phonak Infinio Price List"
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

      <FAQ faqs={infinioFaqs} heading="Phonak Infinio Hearing Aids – FAQs" />

      <Footer />
    </>
  );
}
