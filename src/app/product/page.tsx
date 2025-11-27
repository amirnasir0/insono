"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { graphQLClient, GET_PRODUCTS } from "@/lib/graphql";

// Define product type
interface Product {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
  categories?: {
    nodes: { name: string }[];
  };
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await graphQLClient.request<{
          products: { nodes: Product[] };
        }>(GET_PRODUCTS);
        setProducts(data.products.nodes);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-lg font-medium text-gray-600">Loading products...</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 mt-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#023784] mb-12">
        Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full h-52">
                {product.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={product.featuredImage.node.sourceUrl}
                    alt={product.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h2>

                {product.categories && product.categories.nodes.length > 0 && (
                  <p className="text-sm text-gray-500 mb-4">
                    {product.categories.nodes.map((cat) => cat.name).join(", ")}
                  </p>
                )}

                <button className="mt-auto inline-block bg-[#023784] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#012d66] transition">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
