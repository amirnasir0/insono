"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import PostForm, { PostFormData } from "@/components/admin/PostForm";
import { Loader2 } from "lucide-react";

export default function EditPostPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [initial, setInitial] = useState<PostFormData | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/posts/${id}`)
      .then((r) => { if (!r.ok) throw new Error("not found"); return r.json(); })
      .then((data) => setInitial({
        title: data.title,
        category: data.category,
        excerpt: data.excerpt ?? "",
        content: data.content,
        coverImage: data.coverImage ?? "",
        images: data.images ?? [],
        location: data.location ?? "",
        isPublished: data.isPublished,
      }))
      .catch(() => setNotFound(true));
  }, [id]);

  async function handleSubmit(data: PostFormData) {
    const res = await fetch(`/api/admin/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to update story");
    }
    router.push("/admin/latest");
    router.refresh();
  }

  if (notFound) return <div className="p-8 text-gray-500 text-sm">Story not found.</div>;

  if (!initial) return (
    <div className="flex justify-center py-24">
      <Loader2 className="animate-spin text-gray-400" size={28} />
    </div>
  );

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Story</h1>
        <p className="text-gray-500 text-sm mt-1 truncate">{initial.title}</p>
      </div>
      <PostForm initial={initial} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </div>
  );
}
