"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  category: string[];
  featuredImage?: {
    node?: { sourceUrl?: string | null };
  };
  mrp?: number | null;
}

type ProductSectionProps = {
  heading?: string;
};

const categories = ["All", "Signia", "Phonak", "Widex", "Oticon", "Starkey", "Bluetooth"];

import { STATIC_PRODUCTS } from "@/lib/staticProducts";

export default function ProductSection({ heading }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  let filteredProducts: Product[] = [];

  if (activeCategory === "All") {
    // Show the first product of each brand
    const picks = [
      STATIC_PRODUCTS.find((p) => p.category.includes("signia")),
      STATIC_PRODUCTS.find((p) => p.category.includes("phonak")),
      STATIC_PRODUCTS.find((p) => p.category.includes("widex")),
      STATIC_PRODUCTS.find((p) => p.category.includes("oticon")),
      STATIC_PRODUCTS.find((p) => p.category.includes("starkey")),
    ].filter(Boolean) as Product[];
    filteredProducts = picks.slice(0, 4);
  } else {
    filteredProducts = STATIC_PRODUCTS.filter((p) =>
      p.category.includes(activeCategory.toLowerCase())
    ).slice(0, 4);
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
            {heading || "Explore Our Range of Digital Hearing Aids"}
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Discover the latest models — from powerful BTE to discreet CIC.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 bg-[#184A99] p-1 rounded-full overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full transition whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#0E1015] text-white"
                  : "text-[#C7BCE0] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            slug={p.slug}
            imageUrl={p.featuredImage?.node?.sourceUrl || "/placeholder.png"}
            mrp={p.mrp}
            feature={p.description}
          />
        ))}
      </div>
    </section>
  );
}
