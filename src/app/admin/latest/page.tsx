"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, Pencil, Trash2, Eye, EyeOff, Loader2, BookOpen } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  "Patient Story": "bg-emerald-50 text-emerald-700",
  "Audiologist Diary": "bg-purple-50 text-purple-700",
  "Company Update": "bg-blue-50 text-blue-700",
  "Event": "bg-amber-50 text-amber-700",
};

interface PostRow {
  id: string;
  title: string;
  slug: string;
  category: string;
  isPublished: boolean;
  coverImage: string | null;
  location: string | null;
  createdAt: string;
}

export default function AdminLatestPage() {
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) setPosts((prev) => prev.filter((p) => p.id !== id));
    setDeleting(null);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Insono Stories</h1>
          <p className="text-gray-500 text-sm mt-1">Patient stories, audiologist diaries, company updates &amp; events</p>
        </div>
        <Link
          href="/admin/latest/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-medium hover:bg-[#012d66] transition shadow-md"
        >
          <PlusCircle size={16} /> New Story
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total", value: posts.length },
          { label: "Published", value: posts.filter((p) => p.isPublished).length },
          { label: "Drafts", value: posts.filter((p) => !p.isPublished).length },
          { label: "Patient Stories", value: posts.filter((p) => p.category === "Patient Story").length },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-gray-800">{loading ? "—" : value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-gray-400" size={28} />
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <BookOpen size={36} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No stories yet. Share what&apos;s happening at Insono.</p>
          <Link href="/admin/latest/new" className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#023784] font-medium hover:underline">
            <PlusCircle size={14} /> Create your first story
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-center gap-4 p-4">
              {/* Cover thumbnail */}
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative bg-gray-100">
                {p.coverImage ? (
                  <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen size={20} className="text-gray-300" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[p.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {p.category}
                  </span>
                  {p.location && <span className="text-xs text-gray-400">📍 {p.location}</span>}
                </div>
                <p className="font-semibold text-gray-800 text-sm truncate">{p.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {new Date(p.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  {" · "}/stories/{p.slug}
                </p>
              </div>

              {/* Status */}
              <div className="flex-shrink-0">
                {p.isPublished ? (
                  <span className="inline-flex items-center gap-1 text-green-600 text-xs font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                    <Eye size={11} /> Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-gray-400 text-xs font-semibold bg-gray-50 px-2.5 py-1 rounded-full">
                    <EyeOff size={11} /> Draft
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 flex-shrink-0">
                {p.isPublished && (
                  <Link
                    href={`/stories/${p.slug}`}
                    target="_blank"
                    className="p-2 rounded-lg text-gray-400 hover:text-[#023784] hover:bg-blue-50 transition"
                    title="View on site"
                  >
                    <Eye size={15} />
                  </Link>
                )}
                <Link
                  href={`/admin/latest/${p.id}/edit`}
                  className="p-2 rounded-lg text-gray-400 hover:text-[#023784] hover:bg-blue-50 transition"
                  title="Edit"
                >
                  <Pencil size={15} />
                </Link>
                <button
                  onClick={() => handleDelete(p.id, p.title)}
                  disabled={deleting === p.id}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition disabled:opacity-40"
                  title="Delete"
                >
                  {deleting === p.id ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
