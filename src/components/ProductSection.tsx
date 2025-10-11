"use client";

import { useEffect, useState } from "react";
import { GET_PRODUCTS, graphQLClient } from "@/lib/graphql";
import ProductCard from "./ProductCard";

// Product type used across app
interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  category: string[];
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
}

// GraphQL API response type
interface GraphQLProductNode {
  id: string;
  title: string;
  slug: string;
  description?: string;
  price?: string;
  categories?: {
    nodes: { name: string }[];
  };
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
}

interface GraphQLResponse {
  products: {
    nodes: GraphQLProductNode[];
  };
}

// Categories shown in UI
const categories = [
  "All",
  "Signia",
  "Phonak",
  "Widex",
  "Oticon",
  "Rechargeable",
  "Bluetooth",
];

// ✅ Optional: Keyword aliases for cleaner matching
const categoryKeywords: Record<string, string[]> = {
  All: [],
  Signia: ["signia"],
  Phonak: ["phonak"],
  Widex: ["widex"],
  Oticon: ["oticon"],
  "ITC Hearing Aids": ["itc", "in the canal", "in-the-canal"],
  Bluetooth: ["bluetooth", "bt"],
};

// Helper function to normalize text
const normalize = (text: string) =>
  text.toLowerCase().replace(/\s+/g, " ").trim();

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch products from GraphQL API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await graphQLClient.request<GraphQLResponse>(GET_PRODUCTS);

        const mappedProducts: Product[] = data.products.nodes.map((product) => ({
          id: product.id,
          title: product.title,
          slug: product.slug,
          category: product.categories?.nodes.map((c) => c.name) || [],
          description: product.description || "No description available",
          price: product.price || "Contact for price",
          featuredImage: product.featuredImage,
        }));

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (!products.length)
    return <p className="text-center py-10">No products found.</p>;

  // ✅ Clean, robust filtering logic
  const filteredProducts =
    activeCategory === "All"
      ? products.slice(0, 4)
      : products
          .filter((product) => {
            const keywords =
              categoryKeywords[activeCategory] || [activeCategory];
            const normalizedTitle = normalize(product.title);
            const normalizedCategories = product.category.map(normalize);

            // Match if any keyword exists in title or categories
            return keywords.some((kw) => {
              const query = normalize(kw);
              return (
                normalizedTitle.includes(query) ||
                normalizedCategories.some((cat) => cat.includes(query))
              );
            });
          })
          .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-6 md:px-20 mt-6">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mb-3">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
            Explore Our Range of Digital Hearing Aids
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest <strong>hearing aid models</strong> designed for every need — 
          from powerful <strong>behind-the-ear (BTE)</strong> devices to discreet{" "}
          <strong>completely-in-canal (CIC)</strong> options.
        </p>
      </div>

      {/* Category Segmented Toggle */}
      <div className="w-full flex justify-center mb-10 px-4">
        <div className="flex bg-[#184A99] rounded-full p-1 overflow-x-auto sm:overflow-visible no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 mx-1 whitespace-nowrap text-sm sm:text-base rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#0E1015] text-white shadow-md"
                  : "text-[#C7BCE0] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            imageUrl={
              product.featuredImage?.node?.sourceUrl || "/placeholder.png"
            }
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
}
