import { Metadata } from "next";

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = formatCity(citySlug);

  return {
    title: `Phonak Hearing Aids in ${city} | Free Test & Trial | Insono Hearing`,
    description: `Experience the latest Phonak Audeo Sphere AI and Lumity hearing aids in ${city}. Authorized Phonak partner. Free clinical trial & expert consultation. EMI starts at ₹999.`,
    keywords: [
      `phonak hearing aids ${city.toLowerCase()}`,
      `hearing test ${city.toLowerCase()}`,
      `audiologist ${city.toLowerCase()}`,
      "invisible hearing aids india",
    ],
  };
}

export default function PhonakCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
