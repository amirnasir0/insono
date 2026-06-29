"use client";

import { useRouter } from "next/navigation";
import PostForm, { PostFormData } from "@/components/admin/PostForm";

export default function NewPostPage() {
  const router = useRouter();

  async function handleSubmit(data: PostFormData) {
    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to create story");
    }
    router.push("/admin/latest");
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">New Story</h1>
        <p className="text-gray-500 text-sm mt-1">Share a patient story, team update, or event from Insono.</p>
      </div>
      <PostForm onSubmit={handleSubmit} submitLabel="Save as Draft" />
    </div>
  );
}
