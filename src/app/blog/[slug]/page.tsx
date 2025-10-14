import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { cache } from "react";
import { gql } from "graphql-request";
import { graphQLClient, GET_POST_BY_SLUG } from "@/lib/graphql";

// ✅ Revalidate every 60 seconds (ISR)
export const revalidate = 60;

interface BlogPageProps {
  params: { slug: string };
}

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
  author?: { node: { name: string } };
  categories?: { nodes: { name: string }[] };
  excerpt?: string;
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  featuredImage?: { node?: { sourceUrl: string } };
}

interface Product {
  id: string;
  slug: string;
  title: string;
  featuredImage?: { node?: { sourceUrl: string } };
}

// ✅ Cached Post Fetch
const getPostCached = cache(async (slug: string): Promise<Post | null> => {
  try {
    const data = await graphQLClient.request<{ post: Post }>(GET_POST_BY_SLUG, { id: slug });
    return data.post || null;
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
});

// ✅ Related Posts
const GET_RELATED_POSTS = gql`
  query RelatedPosts($categoryName: String!) {
    posts(first: 6, where: { categoryName: $categoryName }) {
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

async function getRelatedPosts(categories: string[], currentSlug: string): Promise<RelatedPost[]> {
  if (!categories.length) return [];

  const promises = categories.map((name) =>
    graphQLClient.request<{ posts: { nodes: RelatedPost[] } }>(GET_RELATED_POSTS, { categoryName: name })
  );

  const results = await Promise.all(promises);
  const allRelated = results.flatMap((r) => r.posts.nodes);

  const deduped = allRelated
    .filter((p) => p.slug !== currentSlug)
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i);

  return deduped.slice(0, 6);
}

// ✅ Best Seller Products
const GET_BEST_SELLER_PRODUCTS = gql`
  query BestSellerProducts($categoryName: String!) {
    products(first: 6, where: { categoryName: $categoryName }) {
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

async function getBestSellerProducts(): Promise<Product[]> {
  const highlightedCategory = "highlighted";
  try {
    const { products } = await graphQLClient.request<{ products: { nodes: Product[] } }>(
      GET_BEST_SELLER_PRODUCTS,
      { categoryName: highlightedCategory }
    );
    return products.nodes;
  } catch (err) {
    console.error("Error fetching best seller products:", err);
    return [];
  }
}

// ✅ Metadata
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPostCached(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `https://insonohearing.com/blog/${params.slug}`,
      type: "article",
    },
  };
}

// 🦴 Skeletons
function BlogSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-24 bg-gray-200 rounded"></div>
      ))}
    </div>
  );
}

// 🧱 Async Content Sections
async function BlogContent({ slug }: { slug: string }) {
  const post = await getPostCached(slug);
  if (!post) return null;

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.author?.node?.name} • {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
}

async function RelatedPosts({ slug }: { slug: string }) {
  const post = await getPostCached(slug);
  const categories = post?.categories?.nodes.map((c) => c.name) ?? [];
  const relatedPosts = await getRelatedPosts(categories, slug);

  if (!relatedPosts.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-[#023784] mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((related) => (
          <a
            key={related.id}
            href={`/blog/${related.slug}`}
            className="bg-white border rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-300 block"
          >
            <div className="relative h-40 bg-gray-100">
              {related.featuredImage?.node?.sourceUrl ? (
                <Image
                  src={related.featuredImage.node.sourceUrl}
                  alt={related.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>
            <div className="p-3 text-sm font-medium text-center line-clamp-2">
              {related.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

async function SidebarContent() {
  const products = await getBestSellerProducts();
  if (!products.length) return null;

  return (
    <>
      <h2 className="text-xl font-bold text-[#023784] mb-4">Best Seller Hearing Aids</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {products.map((product) => (
          <a
            key={product.id}
            href={`/product/${product.slug}`}
            className="bg-white border rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 block"
          >
            <div className="relative h-32 bg-white flex items-center justify-center">
              {product.featuredImage?.node?.sourceUrl ? (
                <Image
                  src={product.featuredImage.node.sourceUrl}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>
            <div className="p-2 text-sm font-medium text-center line-clamp-2">
              {product.title}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

// 🧠 Main Page
export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getPostCached(params.slug);
  if (!post) return <p className="text-center py-10">Post not found</p>;

  return (
    <div className="max-w-7xl mx-auto pt-24 px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 w-full">
          <Suspense fallback={<BlogSkeleton />}>
            <BlogContent slug={params.slug} />
          </Suspense>

          <Suspense fallback={<div className="mt-12"><BlogSkeleton /></div>}>
            <RelatedPosts slug={params.slug} />
          </Suspense>
        </div>

        <aside className="lg:w-1/3 w-full h-max">
          <Suspense fallback={<SidebarSkeleton />}>
            <SidebarContent />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
