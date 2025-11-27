"use client";

import { useEffect, useState } from "react";
import { GET_PRODUCTS, graphQLClient } from "@/lib/graphql";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  category: string[]; // we will store both names and slugs (if available)
  featuredImage?: {
    node?: { sourceUrl?: string | null };
  };
  createdAt?: string; // WP date string or fallback
}

<<<<<<< HEAD
=======

>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
/** Minimal shape of the GraphQL product node (only fields we use) */
interface ProductNode {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  featuredImage?: { node?: { sourceUrl?: string | null } } | null;
  date?: string | null;
<<<<<<< HEAD
  categories?: {
    nodes?: Array<{ name?: string | null; slug?: string | null }>;
  } | null;
=======
  categories?: { nodes?: Array<{ name?: string | null; slug?: string | null }> } | null;
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
}

interface GraphQLResponse {
  products: {
    nodes: ProductNode[];
  };
}
<<<<<<< HEAD
type ProductSectionProps = {
  heading?: string;
};
=======
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9

const categories = [
  "All",
  "Signia",
  "Phonak",
  "Widex",
  "Oticon",
  "Rechargeable",
  "Bluetooth",
];

const categoryKeywords: Record<string, string[]> = {
  All: [],
  Signia: ["signia"],
  Phonak: ["phonak"],
  Widex: ["widex"],
  Oticon: ["oticon"],
  Bluetooth: ["bluetooth", "bt"],
};

const BRAND_KEYWORDS: Record<string, string[]> = {
  signia: ["signia"],
  phonak: ["phonak"],
  oticon: ["oticon"],
  widex: ["widex"],
};

const normalize = (text: string) =>
  (text || "").toLowerCase().replace(/\s+/g, " ").trim();

const titleOrCatsHave = (p: Product, keywords: string[]) => {
  const title = normalize(p.title);
  const cats = p.category.map(normalize);
  return keywords.some((kw) => {
    const q = normalize(kw);
    return title.includes(q) || cats.some((c) => c.includes(q));
  });
};

const isHighlighted = (p: Product) =>
  titleOrCatsHave(p, ["highlighted", "featured"]); // covers both common tags

const ts = (p: Product) => {
  const t = p.createdAt ? new Date(p.createdAt).getTime() : 0;
  return Number.isFinite(t) ? t : 0;
};

<<<<<<< HEAD
export default function ProductSection({ heading }: ProductSectionProps) {
=======
export default function ProductSection() {
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await graphQLClient.request<GraphQLResponse>(GET_PRODUCTS);

        const mappedProducts: Product[] = data.products.nodes.map(
          (product: ProductNode, i: number) => {
            const catNodes = product.categories?.nodes ?? [];
            // collect both names and slugs if present; filter(Boolean) removes undefined/null
<<<<<<< HEAD
            const catStrings: string[] = catNodes.flatMap(
              (n) => [n?.name, n?.slug].filter(Boolean) as string[]
=======
            const catStrings: string[] = catNodes.flatMap((n) =>
              [n?.name, n?.slug].filter(Boolean) as string[]
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
            );

            return {
              id: product.id,
              title: product.title,
              slug: product.slug,
              category: catStrings, // names + slugs for robust matching
              description: product.description || "",
              price: "Contact for price",
              featuredImage: product.featuredImage ?? undefined,
              createdAt: product.date ?? String(i), // fallback index if no date
            };
          }
        );

        setProducts(mappedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (!products.length)
    return <p className="text-center py-10">No products found.</p>;

  const brands = ["signia", "phonak", "oticon", "widex"];

  // ---------- ALL TAB LOGIC ----------
  let filteredProducts: Product[] = [];
  if (activeCategory === "All") {
    const picks: Product[] = [];

    brands.forEach((brand) => {
      const brandKeywords = BRAND_KEYWORDS[brand];

      // 1) Try highlighted + brand match
      const highlightedMatches = products
        .filter((p) => isHighlighted(p) && titleOrCatsHave(p, brandKeywords))
        .sort((a, b) => ts(b) - ts(a));

      if (highlightedMatches[0]) {
        picks.push(highlightedMatches[0]);
        return;
      }

      // 2) Fallback: latest product of that brand (even if not highlighted)
      const brandLatest = products
        .filter((p) => titleOrCatsHave(p, brandKeywords))
        .sort((a, b) => ts(b) - ts(a));

      if (brandLatest[0]) picks.push(brandLatest[0]);
    });

    // 3) Final fallback: if still empty, show latest 4 overall
    filteredProducts =
      picks.length > 0
        ? picks.slice(0, 4)
        : [...products].sort((a, b) => ts(b) - ts(a)).slice(0, 4);
  } else {
    // ---------- NON-ALL TABS (brand/feature tabs) ----------
    const keywords = categoryKeywords[activeCategory] || [activeCategory];

    // First: highlighted matches
    const highlightedFirst = products
      .filter((p) => isHighlighted(p) && titleOrCatsHave(p, keywords))
      .sort((a, b) => ts(b) - ts(a));

    // If none highlighted, fallback to normal matches
    const fallbackMatches =
      highlightedFirst.length > 0
        ? []
        : products
            .filter((p) => titleOrCatsHave(p, keywords))
            .sort((a, b) => ts(b) - ts(a));

    filteredProducts = (
      highlightedFirst.length > 0 ? highlightedFirst : fallbackMatches
    ).slice(0, 4);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-6 md:px-20 mt-6">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mb-3">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
<<<<<<< HEAD
            {heading || "Explore Our Range of Digital Hearing Aids"}
=======
            Explore Our Range of Digital Hearing Aids
>>>>>>> 70dd47460916e377acae18c9b5f7293a3b1fedc9
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest models — from powerful BTE to discreet CIC.
        </p>
      </div>

      <div className="w-full flex justify-center mb-10 px-4">
        <div className="flex bg-[#184A99] rounded-full p-1 overflow-x-auto no-scrollbar">
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
