"use client";

import { useState } from "react";
import { Metadata } from "next";

// ✅ 1. SEO Metadata
export const metadata: Metadata = {
  title: "Hearing Aid Price in India 2025 | Signia, Phonak, Widex, Oticon Price List",
  description:
    "Compare the latest hearing aid prices in India for 2025. Explore Signia prices, Phonak price list, Oticon & Widex models. Transparent pricing, no hidden charges, and free consultation.",
  alternates: {
    canonical: "https://www.insonohearing.com/hearing-aid-prices",
  },
  openGraph: {
    title: "Latest Hearing Aid Price in India 2025 | Signia, Phonak, Widex",
    description:
      "Discover the updated 2025 price list for Signia, Phonak, Widex, and Oticon hearing aids. Compare basic, advanced & premium models. Free trials & consultation available.",
    url: "https://www.insonohearing.com/hearing-aid-prices",
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

// ✅ 2. Structured Data for Hearing Aid Product Listing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hearing Aid Price List 2025 - Signia, Phonak, Oticon, Widex",
  description:
    "Latest hearing aid prices in India for 2025, including Signia, Phonak, Widex, and Oticon models with basic, advanced, and premium options.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Signia Hearing Aids",
      brand: "Signia",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "15000",
        highPrice: "800000",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Phonak Hearing Aids",
      brand: "Phonak",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "15000",
        highPrice: "800000",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Product",
      position: 3,
      name: "Oticon Hearing Aids",
      brand: "Oticon",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "15000",
        highPrice: "800000",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Product",
      position: 4,
      name: "Widex Hearing Aids",
      brand: "Widex",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "15000",
        highPrice: "800000",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function HearingAidPricesPage() {
  const [brand, setBrand] = useState("");
  const [budget, setBudget] = useState("");
  const [showPrice, setShowPrice] = useState(false);

  return (
    <>
      {/* ✅ Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 py-24">
        {/* 🧠 Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Hearing Aid Price in India 2025 – Signia, Phonak, Widex, Oticon Price List
          </h1>
          <p className="text-gray-600 mb-6">
            Transparent pricing. No hidden charges. Compare Signia prices, Phonak price list, and the latest 2025 hearing aid prices in India.
          </p>
          <a
            href="#price-ranges"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            See Price Ranges
          </a>
        </section>

        {/* 💰 Price Ranges */}
        <section id="price-ranges" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Latest Hearing Aid Price Ranges in India
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-gray-500 mb-4">₹15,000 – ₹50,000</p>
              <p className="text-sm text-gray-600">
                Basic amplification and everyday support.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-xl font-bold mb-2">Advance</h3>
              <p className="text-gray-500 mb-4">₹50,000 – ₹1,50,000</p>
              <p className="text-sm text-gray-600">
                Rechargeable, Bluetooth connectivity, better clarity.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-gray-500 mb-4">₹1,50,000 – ₹8,00,000</p>
              <p className="text-sm text-gray-600">
                AI-powered noise cancellation, sleek design, maximum comfort.
              </p>
            </div>
          </div>
        </section>

        {/* 🧰 Interactive Price Unlocker */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Unlock Exact Hearing Aid Prices by Brand
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Select Brand</label>
              <select
                className="w-full border rounded-lg px-4 py-2"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">-- Choose --</option>
                <option value="signia">Signia</option>
                <option value="phonak">Phonak</option>
                <option value="widex">Widex</option>
                <option value="oticon">Oticon</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Budget</label>
              <select
                className="w-full border rounded-lg px-4 py-2"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">-- Choose --</option>
                <option value="economy">Basic</option>
                <option value="mid">Advance</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              onClick={() => setShowPrice(true)}
              disabled={!brand || !budget}
            >
              Get Price Now
            </button>
          </div>

          {showPrice && (
            <div className="mt-6 text-center p-6 border rounded-lg bg-white shadow-sm">
              <p className="text-lg font-semibold mb-2">
                Estimated Price for{" "}
                {brand.charAt(0).toUpperCase() + brand.slice(1)} ({budget}):
              </p>
              <p className="text-blue-600 font-bold text-2xl">
                ₹{" "}
                {budget === "economy"
                  ? "20,000 – 30,000"
                  : budget === "mid"
                  ? "40,000 – 70,000"
                  : "80,000 – 1,50,000"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Exact pricing depends on model & features. Contact us for the best offer.
              </p>
            </div>
          )}
        </section>

        {/* 🏆 Price Guarantee */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg bg-green-50">
              <p className="font-semibold">🏠 Home Visit Options</p>
            </div>
            <div className="p-6 border rounded-lg bg-blue-50">
              <p className="font-semibold">💰 Price Match Guarantee</p>
            </div>
            <div className="p-6 border rounded-lg bg-yellow-50">
              <p className="font-semibold">🆓 Free Consultation & Trial</p>
            </div>
          </div>
        </section>

        {/* 📢 Final CTA */}
        <section className="text-center bg-blue-600 text-white rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-4">
            Compare Prices. Choose Smarter. Hear Better.
          </h2>
          <p className="mb-6">
            Book your free consultation today and unlock the best hearing aid deals in India.
          </p>
          <a
            href="/appointment"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </a>
        </section>
      </div>
    </>
  );
}
