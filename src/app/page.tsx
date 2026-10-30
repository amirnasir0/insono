import BlogSection from "@/components/BlogSection";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HearingaidType from "@/components/HearingaidType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";

// ✅ Structured Data (JSON-LD for Homepage)
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.insonohearing.com/#organization",
      name: "Insono Hearing Solutions",
      url: "https://www.insonohearing.com",
      logo: "https://www.insonohearing.com/logo.webp",
      image: "https://www.insonohearing.com/logo.webp",
      telephone: "+916204260510",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ground Floor, E-142, next to Kerala Ayurveda, E Block, Pocket E",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      sameAs: [
        "https://youtube.com/@insonohearing",
        "https://www.instagram.com/insono_hearing_solutions",
        "https://www.facebook.com/insonohearingsolution",
        "https://www.linkedin.com/company/insonohearing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.insonohearing.com/#website",
      url: "https://www.insonohearing.com",
      name: "Insono Hearing Solutions",
      publisher: { "@id": "https://www.insonohearing.com/#organization" },
    },
  ],
};

export async function generateMetadata() {
  return {
    title: "Hearing Aids in India — Signia, Phonak, Widex, Oticon | Insono Hearing",
    description:
      "India's trusted hearing aid clinic — free hearing test, 3-day home trial & top brands like Signia, Phonak, Widex & Oticon. 100+ cities, 2,00,000+ patients served. Open daily 10 AM–7 PM.",
    alternates: {
      canonical: "https://www.insonohearing.com",
    },
    openGraph: {
      title: "Hearing Aids in India | Insono Hearing Solutions",
      description:
        "India's trusted hearing aid clinic — free hearing test, 3-day home trial & top brands like Signia, Phonak, Widex & Oticon. 100+ cities, 2,00,000+ patients served.",
      url: "https://www.insonohearing.com",
      siteName: "Insono Hearing Solutions",
      type: "website",
      images: [{ url: "https://www.insonohearing.com/logo.webp", width: 1200, height: 630 }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hearing Aids in India | Insono Hearing Solutions",
      description:
        "Free hearing test, 3-day home trial, Signia, Phonak & Widex. 100+ cities, 2,00,000+ patients served.",
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <HeroSection />
         <ProductSection />
        <Whychoose />
        
      </section>
     
      <HearingaidType />
      
      
      <Testomonial />
      <BlogSection />
      <FAQ />
     
    </main>
  );
}
