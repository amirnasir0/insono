import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { gql } from "graphql-request";
import { graphQLClient } from "@/lib/graphql";
import ProductContent from "./ProductContent";
import HearingAidTypes from "@/components/HearingaidType";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";

// ✅ Revalidate every hour (ISR)
export const revalidate = 3600;
export const dynamicParams = true;

// 🧠 GraphQL Queries
const GET_PRODUCT_BY_URI = gql`
  query GetProductByURI($uri: ID!) {
    post(id: $uri, idType: URI) {
      id
      slug
      title
      content
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

const GET_RELATED_PRODUCTS = gql`
  query GetRelatedProducts($categoryName: String!) {
    products(first: 10, where: { categoryName: $categoryName }) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const GET_FALLBACK_PRODUCTS = gql`
  query GetFallbackProducts {
    products(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

type Product = {
  id: string;
  slug: string;
  title: string;
  content?: string;
  uri?: string;
  featuredImage?: { node?: { sourceUrl: string } };
  categories?: { nodes: { name: string }[] };
};

// 🧠 Normalize slug to remove weird hyphens
function normalizeSlug(slug: string) {
  return slug.replace(/\u2010|\u2011|\u2012|\u2013|\u2014/g, "-");
}

// ✅ Generate SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const decoded = decodeURIComponent(rawSlug);
  const normalizedSlug = normalizeSlug(decoded);
  const uri = `product/${normalizedSlug}/`;

  try {
    const { post } = await graphQLClient.request<{ post: Product }>(GET_PRODUCT_BY_URI, { uri });
    if (!post) {
      return {
        title: "Product Not Found | Insono Hearing",
        description: "This product could not be found.",
      };
    }

    const image =
      post.featuredImage?.node?.sourceUrl ||
      "https://mediumslateblue-seahorse-306408.hostingersite.com/default-og.jpg";

    return {
      title: `${post.title} | Insono Hearing`,
      description: post.content?.replace(/<[^>]+>/g, "").slice(0, 150) || post.title,
      openGraph: {
        title: post.title,
        description: post.content?.replace(/<[^>]+>/g, "").slice(0, 150),
        url: `https://insonohearing.com/product/${post.slug}`,
        type: "website",
        siteName: "Insono Hearing",
        images: [{ url: image }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.content?.replace(/<[^>]+>/g, "").slice(0, 150),
        images: [image],
      },
    };
  } catch (err) {
    console.error("generateMetadata error", err);
    return {
      title: "Product | Insono Hearing",
      description: "Discover premium hearing solutions at Insono Hearing.",
    };
  }
}

// ✅ Main Server Component
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const decoded = decodeURIComponent(rawSlug);
  const normalizedSlug = normalizeSlug(decoded);

  if (normalizedSlug !== decoded) {
    permanentRedirect(`/product/${normalizedSlug}`);
  }

  const uri = `product/${normalizedSlug}/`;

  // 🧠 Fetch product
  const { post } = await graphQLClient.request<{ post: Product }>(GET_PRODUCT_BY_URI, { uri });
  if (!post) return notFound();

  // 🧠 Fetch related products
  const categoryNames = post.categories?.nodes.map((c) => c.name) ?? [];
  let related: Product[] = [];

  for (const name of categoryNames) {
    const { products } = await graphQLClient.request<{ products: { nodes: Product[] } }>(
      GET_RELATED_PRODUCTS,
      { categoryName: name }
    );
    related = related.concat(products.nodes);
  }

  // Deduplicate + fallback
  const deduped = related
    .filter((p) => p.slug !== normalizedSlug)
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i);

  let finalRelated = deduped;

  if (finalRelated.length < 6) {
    const { products: fallback } = await graphQLClient.request<{ products: { nodes: Product[] } }>(
      GET_FALLBACK_PRODUCTS
    );
    const fallbackClean = fallback.nodes
      .filter((p) => p.slug !== normalizedSlug)
      .filter((p) => !finalRelated.some((r) => r.id === p.id));
    finalRelated = finalRelated.concat(fallbackClean);
  }

  finalRelated = finalRelated.slice(0, 6);

  const imageSrc =
    post.featuredImage?.node?.sourceUrl ||
    "https://mediumslateblue-seahorse-306408.hostingersite.com/default-og.jpg";

  return (
    <main className="max-w-7xl mx-auto px-6 py-30">
      {/* ✅ JSON-LD Schema for SEO */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: post.title,
            description: post.content,
            url: `https://insonohearing.com/product/${post.slug}`,
          }),
        }}
        strategy="afterInteractive"
      />

      {/* ========================== */}
      {/* Product Section */}
      {/* ========================== */}
      <div className="flex flex-col lg:flex-row gap-10 mb-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full relative h-[400px] rounded-xl flex items-center justify-center">
          <Image src={imageSrc} alt={post.title} fill className="object-contain rounded-xl" />
        </div>

        {/* Title + Content + Buttons */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-[#023784] mb-3">{post.title}</h1>
          <ProductContent content={post.content} />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
  <Link
  href={`/price-download?utm_source=website&utm_medium=single_product&utm_campaign=${encodeURIComponent(post.title)}`}
  className="bg-[#023784] text-white px-8 py-3 rounded-md font-medium hover:bg-[#012d66] transition w-full sm:w-auto text-center"
>
  View Price
</Link>

  <Link
  href={`/appointment?utm_source=website&utm_medium=single_product&utm_campaign=${encodeURIComponent(post.title)}`}
  className="border border-[#023784] text-[#023784] px-8 py-3 rounded-md font-medium hover:bg-[#023784] hover:text-white transition w-full sm:w-auto text-center"
>
  Get Free Trial
</Link>

</div>
        </div>
      </div>

      {/* ========================== */}
      {/* Related Products */}
      {/* ========================== */}
      {finalRelated.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-[#023784] mb-6 text-center">
            Related Products
          </h2>

          {/* Desktop grid */}
          <div className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-4">
            {finalRelated.map((p) => (
              <a
                key={p.id}
                href={`/product/${p.slug}`}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300 block"
              >
                <div className="relative h-40 flex items-center justify-center bg-white">
                  {p.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={p.featuredImage.node.sourceUrl}
                      alt={p.title}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-2 text-sm font-medium text-center line-clamp-2">{p.title}</div>
              </a>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="flex sm:hidden overflow-x-auto gap-4 pb-2 -mx-6 px-6 scrollbar-hide">
            {finalRelated.map((p) => (
              <a
                key={p.id}
                href={`/product/${p.slug}`}
                className="min-w-[180px] bg-white border rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300 block flex-shrink-0"
              >
                <div className="relative h-40 bg-white">
                  {p.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={p.featuredImage.node.sourceUrl}
                      alt={p.title}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-2 text-sm font-medium text-center line-clamp-2">{p.title}</div>
              </a>
            ))}
          </div>
        </div>
      )}

      <HearingAidTypes />
      <ImageShowcaseSection
        title="Official Certifications from Widex, Signia & Phonak"
        description="Insono Hearing Solutions is an authorized partner for leading global hearing aid brands including Widex, Signia, Phonak, and Oticon. These certifications reflect our trusted expertise and commitment to world-class hearing care in India."
        images={[
          { src: "/images/certifications/widex.png", alt: "Widex Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Certification" },
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
        ]}
      />
    </main>
  );
}
