import Image from "next/image";
import { Metadata } from "next";
import { graphQLClient, GET_PRODUCTS } from "@/lib/graphql";

interface Product {
  id: string;
  title: string;
  slug: string;
  featuredImage?: { node?: { sourceUrl: string } };
  categories?: { nodes: { name: string }[] };
  description?: string;
}

// 🔹 Fetch all products
async function getProducts(): Promise<Product[]> {
  try {
    const data = await graphQLClient.request<{
      products: { nodes: Product[] };
    }>(GET_PRODUCTS);
    return data.products.nodes;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// 🔹 Fetch product by slug
async function getProduct(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}

// ✅ Dynamic Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | Insono Hearing",
      description: "This product could not be found.",
    };
  }

  const title = `${product.title} | Insono Hearing`;
  const description =
    product.description ||
    `Discover ${product.title} at Insono Hearing. Affordable and high-quality hearing solutions.`;

  const image =
    product.featuredImage?.node?.sourceUrl ||
    "https://mediumslateblue-seahorse-306408.hostingersite.com/default-og.jpg";
  const url = `https://insonohearing.com/products/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website", // ✅ fixed (was "product", now valid)
      siteName: "Insono Hearing",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourtwitterhandle",
    },
  };
}

// ✅ Page Component
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-lg text-gray-600">Product not found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full rounded-xl overflow-hidden shadow-md bg-gray-50 relative h-96 lg:h-[500px] flex items-center justify-center">
          {product.featuredImage?.node?.sourceUrl ? (
            <Image
              src={product.featuredImage.node.sourceUrl}
              alt={product.title}
              fill
              className="object-contain"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
              No Image Available
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#023784] mb-4">
            {product.title}
          </h1>

          {product.categories && product.categories.nodes.length > 0 && (
            <p className="text-sm text-gray-500 mb-6">
              Categories:{" "}
              {product.categories.nodes.map((c) => c.name).join(", ")}
            </p>
          )}

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
            {product.description ||
              "This is a high-quality product designed to meet your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec facilisis magna, non gravida felis."}
          </p>

          <a
            href="/form"
            className="bg-[#023784] text-white px-6 py-3 rounded-md hover:bg-[#012d66] transition w-full sm:w-auto text-center font-medium"
          >
            Buy Now
          </a>
        </div>
      </div>
    </main>
  );
}
