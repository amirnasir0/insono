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
    title: `Signia Hearing Aids in ${city} | Latest Models & Best Prices`,
    description: `Experience the latest Signia IX Platform and Silk hearing aids in ${city}. Get free trials, expert fitting, and best prices on all Signia models at Insono.`,
    keywords: [
      `signia hearing aids ${city.toLowerCase()}`,
      `hearing test ${city.toLowerCase()}`,
      `audiologist ${city.toLowerCase()}`,
      "invisible hearing aids india",
    ],
  };
}

export default function SigniaCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
