import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

const CATEGORY_STYLES: Record<string, string> = {
  "Patient Story": "bg-emerald-50 text-emerald-700",
  "Audiologist Diary": "bg-purple-50 text-purple-700",
  "Company Update": "bg-blue-50 text-blue-700",
  "Event": "bg-amber-50 text-amber-700",
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug, isPublished: true } });
  if (!post) return {};

  const description = post.excerpt || post.content.slice(0, 160);
  const url = `https://www.insonohearing.com/stories/${slug}`;

  return {
    title: `${post.title} | Insono Stories`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: "Insono Hearing Solutions",
      locale: "en_IN",
      type: "article",
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function StoryPage({ params }: Params) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug, isPublished: true } });

  if (!post) return notFound();

  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);
  const date = post.publishedAt ?? post.createdAt;
  const catStyle = CATEGORY_STYLES[post.category] ?? "bg-gray-100 text-gray-600";

  return (
    <main className="bg-white min-h-screen">
      {/* Cover */}
      {post.coverImage && (
        <div className="relative w-full aspect-[21/9] max-h-[500px] bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Back */}
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#023784] mb-8 transition"
        >
          <ArrowLeft size={15} /> Back to Stories
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catStyle}`}>
            {post.category}
          </span>
          {post.location && (
            <span className="text-sm text-gray-500 inline-flex items-center gap-1">
              <MapPin size={13} /> {post.location}
            </span>
          )}
          <span className="text-sm text-gray-400 inline-flex items-center gap-1">
            <Calendar size={13} /> {formatDate(date)}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt lead */}
        {post.excerpt && (
          <p className="text-lg text-gray-600 font-medium leading-relaxed border-l-4 border-[#023784] pl-4 mb-8">
            {post.excerpt}
          </p>
        )}

        {/* Body */}
        <div className="prose prose-gray max-w-none space-y-5">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Photo gallery */}
        {post.images.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Photos</h2>
            <div className={`grid gap-3 ${post.images.length === 1 ? "grid-cols-1" : post.images.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
              {post.images.map((url, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image src={url} alt={`Photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div className="mt-14 bg-gradient-to-r from-[#023784] to-[#1a56b0] rounded-2xl p-6 sm:p-8 text-center text-white">
          <p className="font-bold text-lg mb-1">Experience better hearing with Insono</p>
          <p className="text-blue-100 text-sm mb-5">Free hearing test · Certified audiologists · 15+ clinics across India</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-[#023784] font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition shadow"
            >
              Book Free Appointment
            </Link>
            <Link
              href="/stories"
              className="border border-white/40 text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-white/10 transition"
            >
              More Stories →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
