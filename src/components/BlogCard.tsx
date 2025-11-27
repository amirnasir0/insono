"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  category?: string;
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
  image?: string;
  slug?: string; // slug prop
}

// Helper to decode HTML entities
function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function BlogCard({
  category = "General",
  title,
  excerpt,
  author = "Author Name",
  date,
  image = "/blog/placeholder.png",
  slug,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl mb-4 shadow-md overflow-hidden min-w-[280px] max-w-xs flex-shrink-0 flex flex-col">
      {/* Image */}
      <Link href={`/blog/${slug}`}>
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      </Link>
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <div className="w-fit">
          <span className="text-xs font-medium bg-gray-200 px-2 py-1 mb-2 rounded-md">
            {category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className="font-bold text-base text-gray-800 mb-2 mt-2 line-clamp-2">
            {decodeHtml(title)}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {decodeHtml(excerpt.replace(/<[^>]+>/g, ""))}
        </p>

        {/* Author + Date */}
        <p className="text-xs text-gray-400 mb-2">
          {author} • {date}
        </p>

        {/* Read More */}

        <div className="mt-auto text-right">
          <Link
            href={`/blog/${slug}`}
            className="text-xs font-medium bg-gray-200 px-2 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
