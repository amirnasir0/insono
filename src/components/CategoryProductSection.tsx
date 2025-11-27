import ProductCard from "./ProductCard";
import { graphQLClient, GET_PRODUCTS } from "@/lib/graphql";

// Types
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

interface CategoryProductSectionProps {
  category: string;        // e.g. "Signia,Invisible"
  title?: string;          // Optional custom title
  description?: string;    // Optional description/subheading
  limit?: number;
}

export default async function CategoryProductSection({
  category,
  title,
  description,
  limit = 4,
}: CategoryProductSectionProps) {
  // ✅ Fetch products server-side (SEO friendly)
  const data = await graphQLClient.request<GraphQLResponse>(GET_PRODUCTS);

  const products: Product[] = data.products.nodes.map((product) => ({
    id: product.id,
    title: product.title,
    slug: product.slug,
    category: product.categories?.nodes.map((c) => c.name) || [],
    description: product.description || "No description available",
    price: product.price || "Contact for price",
    featuredImage: product.featuredImage,
  }));

  // ✅ Multiple keyword support
  const keywords = category
    .split(",")
    .map((kw) => kw.trim().toLowerCase())
    .filter(Boolean);

  // ✅ Product filter logic (AND matching for all keywords)
  const filteredProducts = products.filter((product) =>
    keywords.every((kw) => {
      const titleMatch = product.title.toLowerCase().includes(kw);
      const categoryMatch = product.category.some((cat) =>
        cat.toLowerCase().includes(kw)
      );
      return titleMatch || categoryMatch;
    })
  );

  // ✅ Apply limit
  const limitedProducts = filteredProducts.slice(0, limit);

  if (!limitedProducts.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-20 py-10">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mb-3">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
            {title || `${category.split(",").join(" + ")} Hearing Aids`}
          </span>
        </h2>
        {description && (
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-4 ${
          limit <= 2
            ? "grid-cols-1 sm:grid-cols-2"
            : limit <= 4
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
            : limit <= 6
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        }`}
      >
        {limitedProducts.map((product) => (
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
