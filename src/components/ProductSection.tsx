// "use client";

// import { useEffect, useState } from "react";
// import { GET_PRODUCTS, graphQLClient } from "@/lib/graphql";
// import ProductCard from "./ProductCard"; // import your redesigned card

// interface Product {
//   id: string;
//   title: string;
//   slug: string;
//   description?: string;
//   price?: string;
//   category: string[];
//   featuredImage?: {
//     node?: {
//       sourceUrl: string;
//     };
//   };
// }

// // Add "All" as first category
// const categories = [
//   "All",
//   "Signia",
//   "Phonak",
//   "Rechargeable",
//   "Bluetooth",
//   "Invisible",
//   "Affordable",
// ];

// export default function ProductSection() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("All");

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const data = await graphQLClient.request<{
//           products: { nodes: any[] };
//         }>(GET_PRODUCTS);

//         const mappedProducts: Product[] = data.products.nodes.map(
//           (product) => ({
//             ...product,
//             category: product.categories?.nodes?.map((c: any) => c.name) || [],
//             description: product.description || "No description available",
//             price: product.price || "Contact for price",
//           })
//         );

//         setProducts(mappedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center py-10">Loading products...</p>;
//   if (!products.length)
//     return <p className="text-center py-10">No products found.</p>;

//   // Filter products based on category and limit to 4
//   const filteredProducts =
//     activeCategory === "All"
//       ? products.slice(0, 4)
//       : products
//           .filter(
//             (product) =>
//               Array.isArray(product.category) &&
//               product.category.some((cat) =>
//                 cat.toLowerCase().includes(activeCategory.toLowerCase())
//               )
//           )
//           .slice(0, 4);

//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-20 sm:-mt-16">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Explore Our Products
//       </h2>

//       {/* Category buttons */}
//       <div className="flex gap-3 justify-center mb-10 flex-wrap">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//               activeCategory === category
//                 ? "bg-[#184A99] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Products grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             // description={product.description || "No description available"}
//             // price={product.price || "Contact for price"}
//             imageUrl={
//               product.featuredImage?.node?.sourceUrl || "/placeholder.png"
//             }
//             slug={product.slug}
//             // size={product.category[0]} // optionally show first category as size
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
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

// Add "All" as first category
const categories = [
  "All",
  "Signia",
  "Phonak",
  "Rechargeable",
  "Bluetooth",
  "Invisible",
  "Affordable",
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
          .filter(
            (product) =>
              Array.isArray(product.category) &&
              product.category.some((cat) =>
                cat.toLowerCase().includes(activeCategory.toLowerCase())
              )
          )
          .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 sm:-mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Explore Our Products
      </h2>

      {/* Category buttons */}
      <div className="flex gap-3 justify-center mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeCategory === category
                ? "bg-[#184A99] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
