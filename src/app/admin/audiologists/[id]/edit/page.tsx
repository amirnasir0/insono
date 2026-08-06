"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import AudiologistForm, { AudiologistFormData } from "@/components/admin/AudiologistForm";
import { Loader2 } from "lucide-react";

export default function EditAudiologistPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [initial, setInitial] = useState<AudiologistFormData | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/audiologists/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((data) =>
        setInitial({
          name: data.name,
          designation: data.designation,
          experience: data.experience ?? "Hearing Care Specialist",
          photo: data.photo,
          testimonial: data.testimonial,
          youtubeUrl: data.youtubeUrl ?? "",
          isActive: data.isActive,
          orderIndex: data.orderIndex ?? 0,
        })
      )
      .catch(() => setNotFound(true));
  }, [id]);

  async function handleSubmit(data: AudiologistFormData) {
    const res = await fetch(`/api/admin/audiologists/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to update expert");
    }
    router.push("/admin/audiologists");
    router.refresh();
  }

  if (notFound) return <div className="p-8 text-gray-500 text-sm">Expert not found.</div>;

  if (!initial)
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="animate-spin text-gray-400" size={28} />
      </div>
    );

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Edit Audiologist / Expert</h1>
        <p className="text-gray-500 text-sm mt-1">
          Editing details for <strong>{initial.name}</strong>
        </p>
      </div>
      <AudiologistForm initial={initial} onSubmit={handleSubmit} submitLabel="Save Changes" isEdit />
    </div>
  );
}
