"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { graphQLClient, GET_POSTS } from "@/lib/graphql";
import { Post } from "@/lib/types/post";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await graphQLClient.request<{ posts: { nodes: Post[] } }>(
          GET_POSTS
        );
        setPosts(data.posts.nodes);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    // Start fetching immediately after paint
    requestAnimationFrame(fetchPosts);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#023784] mb-12">
        Our Blog
      </h1>

      {loading ? (
        <SkeletonGrid />
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600">No blogs found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
                <div className="relative w-full h-48">
                  {post.featuredImage?.node?.sourceUrl && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      fill
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

/* ------------------------------
   💀 Skeleton Loader Components
--------------------------------*/

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200 w-full"></div>

      <div className="p-5 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

        <div className="flex items-center justify-between pt-2">
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
