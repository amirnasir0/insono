import { graphQLClient, GET_POST_BY_SLUG } from "@/lib/graphql";
import Image from "next/image";
import type { Metadata } from "next";
import { gql } from "graphql-request";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Blog Post Response
interface PostResponse {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    slug: string;
    author?: { node: { name: string } };
    categories?: { nodes: { name: string }[] };
    excerpt?: string;
  } | null;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  featuredImage?: { node?: { sourceUrl: string } };
}

// Fetch Single Blog Post
async function getPost(slug: string): Promise<PostResponse["post"] | null> {
  try {
    const data = await graphQLClient.request<PostResponse>(GET_POST_BY_SLUG, { id: slug });
    return data.post;
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
}

// Related Blog Posts by Category
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

// Best Seller Products (sidebar)
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

// Helper: Get related blog posts
async function getRelatedPosts(categories: string[], currentSlug: string) {
  let allRelated: any[] = [];

  for (const name of categories) {
    const { posts } = await graphQLClient.request<{ posts: { nodes: any[] } }>(
      GET_RELATED_POSTS,
      { categoryName: name }
    );
    allRelated = allRelated.concat(posts.nodes);
  }

  const deduped = allRelated
    .filter((p) => p.slug !== currentSlug)
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i);

  return deduped.slice(0, 6);
}

// Helper: Get best seller products
async function getBestSellerProducts(): Promise<Product[]> {
  const highlightedCategory = "highlighted"; // 👈 Update if needed
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

// ✅ Dynamic SEO metadata
export async function generateMetadata(props: BlogPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found | Insono Hearing",
      description: "This blog post could not be found.",
    };
  }

  const title = post.title;
  const description =
    post.excerpt ||
    `Read ${post.title} by ${post.author?.node?.name ?? "Insono Hearing"}`;
  const url = `https://insonohearing.com/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Insono Hearing",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@yourtwitterhandle",
    },
  };
}

// ✅ Page Component
export default async function BlogPage(props: BlogPageProps) {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return <p className="text-center py-10">Post not found</p>;

  // Related posts
  const categories = post.categories?.nodes.map((c) => c.name) ?? [];
  const relatedPosts = await getRelatedPosts(categories, post.slug);

  // Best seller products (sidebar)
  const bestSellerProducts = await getBestSellerProducts();

  return (
    <div className="max-w-7xl mx-auto pt-24 px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="lg:w-2/3 w-full">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {post.author?.node?.name} • {new Date(post.date).toLocaleDateString()}
          </p>

          <div
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#023784] mb-6">
                Related Posts
              </h2>
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
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 w-full h-max">
          {bestSellerProducts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#023784] mb-4">
                Best Seller Hearing Aids
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {bestSellerProducts.map((product) => (
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
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
