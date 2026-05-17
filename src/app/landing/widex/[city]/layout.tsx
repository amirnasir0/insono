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
    title: `Widex Hearing Aids in ${city} | Natural Sound Tech | Insono Hearing`,
    description: `Experience the world's most natural-sounding Widex hearing aids in ${city}. Authorized Widex partner. Free trial, expert fitting & EMI starts at ₹999.`,
    keywords: [
      `widex hearing aids ${city.toLowerCase()}`,
      `hearing test ${city.toLowerCase()}`,
      `audiologist ${city.toLowerCase()}`,
      "invisible hearing aids india",
    ],
  };
}

export default function WidexCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
