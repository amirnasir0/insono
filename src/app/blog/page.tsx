import Image from "next/image";
import Link from "next/link";
import { graphQLClient, GET_POSTS } from "@/lib/graphql";
import { Post } from "@/lib/types/post";

export const revalidate = 60;

// Fetched on the server so the post grid, and its first images, are in the
// initial HTML instead of appearing after a client-side request.
async function getPosts(): Promise<Post[]> {
  try {
    const data = await graphQLClient.request<{ posts: { nodes: Post[] } }>(GET_POSTS);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#023784] mb-12">
        Our Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No blogs found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
                <div className="relative w-full h-48">
                  {post.featuredImage?.node?.sourceUrl && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      fill
                      priority={index < 3}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p
                    className="text-sm text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author?.node?.name}</span>
                    <span>{new Date(post.date).toDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
