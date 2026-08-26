import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insono Stories — Patient Stories, Team Updates & More",
  description:
    "Real stories from Insono Hearing — patient journeys, audiologist diaries, clinic visits, and company updates from across India.",
  alternates: { canonical: "https://www.insonohearing.com/stories" },
  openGraph: {
    title: "Insono Stories",
    description: "Real stories from Insono Hearing — patient journeys, audiologist diaries, and company updates.",
    url: "https://www.insonohearing.com/stories",
    siteName: "Insono Hearing Solutions",
    locale: "en_IN",
    type: "website",
  },
};

const CATEGORY_STYLES: Record<string, string> = {
  "Patient Story": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Audiologist Diary": "bg-purple-50 text-purple-700 border-purple-100",
  "Company Update": "bg-blue-50 text-blue-700 border-blue-100",
  "Event": "bg-amber-50 text-amber-700 border-amber-100",
};

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function StoriesPage() {
  const posts = await prisma.post.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      excerpt: true,
      coverImage: true,
      location: true,
      publishedAt: true,
      createdAt: true,
    },
  });

  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#012d66] via-[#023784] to-[#1a56b0] text-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/15 border border-white/20 px-3 py-1 rounded-full mb-4">
            Insono Stories
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            What&apos;s Happening<br className="hidden sm:block" /> at Insono
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
            Real patient journeys, moments from our audiologists, company milestones, and everything in between.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No stories yet.</p>
            <p className="text-sm mt-1">Check back soon — we&apos;re documenting every step of our journey.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const catStyle = CATEGORY_STYLES[post.category] ?? "bg-gray-100 text-gray-600 border-gray-200";
              const date = post.publishedAt ?? post.createdAt;
              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Cover */}
                  <Link href={`/stories/${post.slug}`} className="block">
                    <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#023784]/10 to-[#023784]/20 flex items-center justify-center">
                          <span className="text-4xl">🎧</span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${catStyle}`}>
                        {post.category}
                      </span>
                      {post.location && (
                        <span className="text-xs text-gray-400 inline-flex items-center gap-1">
                          <MapPin size={10} /> {post.location}
                        </span>
                      )}
                    </div>

                    <Link href={`/stories/${post.slug}`}>
                      <h2 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#023784] transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                    </Link>

                    {post.excerpt && (
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed flex-1">{post.excerpt}</p>
                    )}

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                      <span className="text-xs text-gray-400 inline-flex items-center gap-1.5">
                        <Calendar size={11} /> {formatDate(date)}
                      </span>
                      <Link
                        href={`/stories/${post.slug}`}
                        className="text-xs font-semibold text-[#023784] hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
