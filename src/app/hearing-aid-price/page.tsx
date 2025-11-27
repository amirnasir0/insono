import HearingAidPricesPage from "./HearingAidPricesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hearing Aid Price in India 2025 | Signia, Phonak, Widex, Oticon Price List",
  description:
    "Compare the latest hearing aid prices in India for 2025. Explore Signia prices, Phonak price list, Oticon & Widex models. Transparent pricing, no hidden charges, and free consultation.",
  alternates: {
    canonical: "https://www.insonohearing.com/hearing-aid-price",
  },
  openGraph: {
    title:
      "Latest Hearing Aid Price in India 2025 | Signia, Phonak, Widex, Oticon",
    description:
      "Discover the updated 2025 price list for Signia, Phonak, Widex, and Oticon hearing aids. Compare basic, advanced & premium models. Free trials & consultation available.",
    url: "https://www.insonohearing.com/hearing-aid-price",
    siteName: "Insono Hearing Solutions",
    images: [
      {
        url: "https://www.insonohearing.com/images/og-hearing-aid-prices.jpg", // ⚡ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Hearing Aid Price List 2025 - Signia, Phonak, Widex, Oticon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hearing Aid Price in India 2025 | Signia & Phonak Price List",
    description:
      "Latest hearing aid prices for 2025. Compare Signia, Phonak, Oticon, Widex models & price ranges. Free consultation.",
    images: ["https://www.insonohearing.com/images/og-hearing-aid-prices.jpg"],
  },
};

export default function Page() {
  return <HearingAidPricesPage />;
}
