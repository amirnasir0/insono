import BlogSection from "@/components/BlogSection";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HearingaidType from "@/components/HearingaidType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";
import StickyVideo from "@/components/StickyVideo";


// ✅ Dynamic Metadata works now
export async function generateMetadata() {
  const siteName = "Insono Hearing Aids";
  const heroKeyword = "Digital, Rechargeable & Invisible Hearing Aids";

  return {
    title: `Best Hearing Aids in India | ${siteName}`,
    description: `Explore ${heroKeyword}. Discover the latest models with expert reviews and trusted recommendations from ${siteName}.`,
    keywords: [
      "hearing aids",
      "digital hearing aids",
      "rechargeable hearing aids",
      "invisible hearing aids",
      "best hearing aids in India",
    ],
    openGraph: {
      title: `Best Digital Hearing Aids | ${siteName}`,
      description: `Compare and buy ${heroKeyword} at ${siteName}.`,
      url: "https://insonohearing.com",
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Digital Hearing Aids in India | ${siteName}`,
      description: `Discover ${heroKeyword} and choose the best fit for your hearing needs.`,
    },
  };
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <HeroSection />
        <Whychoose />
        
      </section>
      <ProductSection />
      <HearingaidType />
      
      
      <Testomonial />
      <BlogSection />
      <FAQ />
     
    </main>
  );
}
