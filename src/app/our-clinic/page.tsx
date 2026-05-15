import ClinicsList from "./ClinicsList";

export const metadata = {
  title: "Hearing Aid Clinics Across India | Insono Hearing Solutions",
  description:
    "Find Insono hearing aid clinics in Mumbai, Delhi, Noida, Gurgaon, Lucknow, Kolkata, Patna & more. Free hearing test, certified audiologists, premium brands. Open Mon–Sun, 10 AM–7 PM.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HearingImpairedClinic",
  name: "Insono Hearing Solutions",
  url: "https://www.insonohearing.com",
  logo: "https://www.insonohearing.com/logo.webp",
  image: "https://www.insonohearing.com/logo.webp",
  telephone: "+916204260510",
  priceRange: "₹₹",
  openingHours: "Mo-Su 10:00-19:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, E-142, next to Kerala Ayurveda, E Block, Pocket E",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5745,
    longitude: 77.3216,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://youtube.com/@insonohearing",
    "https://www.instagram.com/insono_hearing_solutions",
    "https://www.facebook.com/insonohearingsolution",
    "https://www.linkedin.com/company/insonohearing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916204260510",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function ClinicPage() {
  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ClinicsList />
    </main>
  );
}
