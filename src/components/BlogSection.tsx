"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { graphQLClient, GET_POSTS } from "@/lib/graphql";

// Helper to decode HTML entities
function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Type for GraphQL response
interface PostNode {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author?: { node: { name: string } };
  featuredImage?: { node: { sourceUrl: string } };
  categories?: { nodes: { name: string }[] };
}

interface PostsResponse {
  posts: {
    nodes: PostNode[];
  };
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<PostNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await graphQLClient.request<PostsResponse>(GET_POSTS);
        setBlogs(data.posts.nodes);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-10">Loading blogs...</p>;
  if (!blogs.length)
    return <p className="text-center py-10">No blogs found.</p>;

  return (
    <section className="py-10 max-w-7xl mx-auto px-6 md:px-20">
      <div className="text-center mb-10">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mb-3">
    <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
      Latest Articles on Hearing Aids & Hearing Health
    </span>
  </h2>

  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
    Stay informed with expert tips, guides, and the newest updates on{" "}
    <strong>digital hearing aids</strong>, <strong>hearing health care</strong>, 
    and <strong>technology trends</strong> that help you hear better every day.
  </p>
</div>


      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            slug={blog.slug}
            title={decodeHtml(blog.title)}
            excerpt={decodeHtml(blog.excerpt.replace(/<[^>]+>/g, ""))}
            image={
              blog.featuredImage?.node?.sourceUrl || "/blog/placeholder.png"
            }
            category={blog.categories?.nodes?.[0]?.name || "General"}
            author={blog.author?.node?.name || "Author Name"}
            date={new Date(blog.date).toLocaleDateString()}
          />
        ))}
      </div>
    </section>
  );
}
