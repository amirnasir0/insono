"use client";

import { useRouter } from "next/navigation";
import AudiologistForm, { AudiologistFormData } from "@/components/admin/AudiologistForm";

export default function NewAudiologistPage() {
  const router = useRouter();

  async function handleSubmit(data: AudiologistFormData) {
    const res = await fetch("/api/admin/audiologists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to create expert");
    }
    router.push("/admin/audiologists");
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Add New Audiologist / Expert</h1>
        <p className="text-gray-500 text-sm mt-1">
          This specialist will be showcased on the <strong>/our-experts</strong> page.
        </p>
      </div>
      <AudiologistForm onSubmit={handleSubmit} submitLabel="Create Expert" />
    </div>
  );
}
