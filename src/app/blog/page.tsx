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
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-16 mt-6 text-center">
        <p className="text-lg font-medium text-gray-600">Loading blogs...</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#023784] mb-12">
        Our Blog
      </h1>

      {posts.length === 0 ? (
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
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p
                    className="text-sm text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author.node.name}</span>
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
