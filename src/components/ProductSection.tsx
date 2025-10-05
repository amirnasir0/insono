"use client";

import { useEffect, useState } from "react";
import { GET_PRODUCTS, graphQLClient } from "@/lib/graphql";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

// Add "All" as first category
const categories = [
  "All",
  "Signia",
  "Phonak",
  "Widex",
  "Bluetooth",
  "ITC Hearing Aids",
  "Bluetooth Hearing Aids",
];

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await graphQLClient.request<GraphQLResponse>(GET_PRODUCTS);

        const mappedProducts: Product[] = data.products.nodes.map(
          (product) => ({
            id: product.id,
            title: product.title,
            slug: product.slug,
            category: product.categories?.nodes.map((c) => c.name) || [],
            description: product.description || "No description available",
            price: product.price || "Contact for price",
            featuredImage: product.featuredImage,
          })
        );

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

  // Filter products based on category and limit to 4
const filteredProducts =
  activeCategory === "All"
    ? products.slice(0, 4)
    : products
        .filter((product) => {
          const categoryLower = activeCategory.toLowerCase();

          // Check if product title contains the active category
          const titleMatch = product.title.toLowerCase().includes(categoryLower);

          // Check if any of the product's category names contain the active category
          const categoryMatch = product.category.some((cat) =>
            cat.toLowerCase().includes(categoryLower)
          );

          return titleMatch || categoryMatch;
        })
        .slice(0, 4);



  return (
    <section className="max-w-7xl mx-auto px-6 py-6 md:px-20 mt-6">
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
