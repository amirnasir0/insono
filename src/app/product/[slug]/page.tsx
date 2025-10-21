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

// Normalize slug for WordPress inconsistencies
function normalizeSlug(slug: string) {
  return slug.replace(/\u2010|\u2011|\u2012|\u2013|\u2014/g, "-");
}

// ✅ SEO Metadata
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
      "https://insonohearing.com/default-og.jpg";

    const cleanDesc = post.content?.replace(/<[^>]+>/g, "").slice(0, 150) || post.title;

    return {
      title: `${post.title} | Insono Hearing`,
      description: cleanDesc,
      openGraph: {
        title: post.title,
        description: cleanDesc,
        url: `https://insonohearing.com/product/${post.slug}`,
        type: "website",
        siteName: "Insono Hearing",
        images: [{ url: image }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: cleanDesc,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Product | Insono Hearing",
      description: "Explore premium hearing solutions at Insono Hearing.",
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

  // Fetch product
  const { post } = await graphQLClient.request<{ post: Product }>(GET_PRODUCT_BY_URI, { uri });
  if (!post) return notFound();

  // Fetch related products (parallelized)
  const categoryNames = post.categories?.nodes.map((c) => c.name) ?? [];

  let related: Product[] = [];
  if (categoryNames.length > 0) {
    const relatedResponses = await Promise.all(
      categoryNames.map((name) =>
        graphQLClient.request<{ products: { nodes: Product[] } }>(
          GET_RELATED_PRODUCTS,
          { categoryName: name }
        )
      )
    );
    related = relatedResponses.flatMap((res) => res.products.nodes);
  }

  // Deduplicate & fallback
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
    "https://insonohearing.com/default-og.jpg";

  const cleanDescription = post.content?.replace(/<[^>]+>/g, "").slice(0, 160);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
      {/* ✅ JSON-LD Schema */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: post.title,
            description: cleanDescription,
            url: `https://insonohearing.com/product/${post.slug}`,
          }),
        }}
        strategy="afterInteractive"
      />

      {/* Product Section */}
      <section className="flex flex-col lg:flex-row items-start gap-10 mb-16">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start mt-6 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#023784] mb-4 leading-snug">
            {post.title}
          </h1>

          <ProductContent content={post.content} />

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href={`/price-download?utm_source=website&utm_medium=single_product&utm_campaign=${encodeURIComponent(
                post.title
              )}`}
              className="bg-[#023784] text-white px-6 py-3 rounded-md font-medium hover:bg-[#012d66] transition text-center sm:w-auto"
            >
              View Price
            </Link>
            <Link
              href={`/appointment?utm_source=website&utm_medium=single_product&utm_campaign=${encodeURIComponent(
                post.title
              )}`}
              className="border border-[#023784] text-[#023784] px-6 py-3 rounded-md font-medium hover:bg-[#023784] hover:text-white transition text-center sm:w-auto"
            >
              Get Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {finalRelated.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-[#023784] mb-6 text-center">
            Related Products
          </h2>

          {/* Desktop grid */}
          <div className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-4">
            {finalRelated.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 block"
              >
                <div className="relative h-40 flex items-center justify-center bg-white">
                  {p.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={p.featuredImage.node.sourceUrl}
                      alt={p.title}
                      fill
                      loading="lazy"
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-2 text-sm font-medium text-center line-clamp-2">
                  {p.title}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile scroll */}
          <div className="flex sm:hidden overflow-x-auto gap-4 pb-2 -mx-4 px-4 scrollbar-hide">
            {finalRelated.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="min-w-[180px] bg-white border rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 block flex-shrink-0"
              >
                <div className="relative h-40 bg-white">
                  {p.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={p.featuredImage.node.sourceUrl}
                      alt={p.title}
                      fill
                      loading="lazy"
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-2 text-sm font-medium text-center line-clamp-2">
                  {p.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Brand Certifications */}
      <ImageShowcaseSection
        title="Official Certifications from Widex, Signia & Phonak"
        description="Insono Hearing Solutions is an authorized partner for leading global hearing aid brands including Widex, Signia, Phonak, and Oticon. These certifications reflect our trusted expertise and commitment to world-class hearing care in India."
        images={[
          { src: "/images/certifications/widex.png", alt: "Widex Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Certification" },
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
        ]}
      />

      <HearingAidTypes />
    </main>
  );
}
