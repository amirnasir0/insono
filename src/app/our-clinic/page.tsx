import ClinicsList from "./ClinicsList";
import { clinics as staticClinics, type Clinic } from "./clinics-data";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Hearing Aid Clinics Across India | Insono Hearing Solutions",
  description:
    "Find Insono hearing aid clinics in Mumbai, Delhi, Noida, Gurgaon, Lucknow, Kolkata, Patna & more. Free hearing test, certified audiologists, premium brands. Open Mon–Sun, 10 AM–7 PM.",
  alternates: {
    canonical: "https://www.insonohearing.com/our-clinic",
  },
  openGraph: {
    title: "Hearing Aid Clinics Near You | Insono Hearing Solutions",
    description:
      "15+ Insono hearing aid clinics across India — Mumbai, Delhi NCR, Kolkata, Lucknow & more. Free hearing test, top brands, open daily.",
    url: "https://www.insonohearing.com/our-clinic",
    siteName: "Insono Hearing Solutions",
    locale: "en_IN",
    type: "website",
  },
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

export default async function ClinicPage() {
  let dbClinics: Clinic[] = [];
  try {
    const rows = await prisma.clinic.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
    dbClinics = rows.map((c) => ({
      id: c.id,
      name: c.name,
      locationLine: c.locationLine,
      address: c.address,
      hours: c.hours,
      tag: c.tag,
      placeId: c.placeId ?? undefined,
      images: c.images,
      faqs: (c.faqs as { question: string; answer: string }[]) ?? [],
      city: c.city,
      state: c.state,
    }));
  } catch {
    // DB unavailable — fall back to static only
  }

  const dbIds = new Set(dbClinics.map((c) => c.id));
  const allClinics = [
    ...dbClinics,
    ...staticClinics.filter((c) => !dbIds.has(c.id)),
  ];

  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ClinicsList clinics={allClinics} />
    </main>
  );
}
