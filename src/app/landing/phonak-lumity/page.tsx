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
  "Phonak Lumity",
  "https://insonohearing.com/landing/phonak-lumity",
);

export default function Page() {
  const heroImages = [
    "/lp/phonak2.png",
    "/lp/phonak1.png",
    "/lp/phonak3.png",
    "/lp/phonak4.png",
  ];

  const statsList = [
    { label: "Happy Lumity Users", value: "2 Lakh+", icon: "users" as const },
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
      text: "Save <b class='text-red-600'>UPTO ₹28,000</b> on Phonak Lumity",
    },
    {
      icon: "🧠",
      text: "Advanced <b>SmartSpeech™ Technology</b>",
    },
    {
      icon: "📱",
      text: "Adaptable <b>AutoSense OS™ 5.0</b>",
    },
    {
      icon: "🎧",
      text: "Dynamic Noise Cancellation + <b>Bluetooth</b>",
    },
    {
      icon: "🔋",
      text: "Rechargeable <b>All-Day Battery</b>",
    },
  ];

  const lumityFaqs = [
    {
      q: "What is the price of Phonak Lumity in India?",
      a: "Starts from ₹22,000, varies by model.",
    },
    {
      q: "What is SmartSpeech Technology in Lumity?",
      a: "Enhances speech understanding by 15% in noise.",
    },
    {
      q: "Is Phonak Lumity rechargeable?",
      a: "Yes, with all-day battery and fast charging.",
    },
    {
      q: "Does Lumity support Bluetooth?",
      a: "Yes, universal Bluetooth for all smartphones.",
    },
    {
      q: "What is AutoSense OS 5.0?",
      a: "Latest AI that adapts to 200+ listening situations.",
    },
    {
      q: "Free trial available for Phonak Lumity?",
      a: "Yes, free demo at Insono clinics near you.",
    },
    {
      q: "What warranty comes with Phonak Lumity?",
      a: "2 to 4 years manufacturer warranty.",
    },
    {
      q: "EMI on Phonak Lumity?",
      a: "Yes, 0% interest EMI options available.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Phonak Lumity – Unlock the Power of Clear Conversations"
        subtitle="Get original Phonak Lumity hearing aids with best price, warranty & free hearing test."
        ctaText="Download Phonak Lumity Price List"
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

      <FAQ faqs={lumityFaqs} heading="Phonak Lumity Hearing Aids – FAQs" />

      <Footer />
    </>
  );
}
