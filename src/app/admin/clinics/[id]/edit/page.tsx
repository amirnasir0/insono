"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ClinicForm, { ClinicFormData } from "@/components/admin/ClinicForm";
import { Loader2 } from "lucide-react";

export default function EditClinicPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [initial, setInitial] = useState<ClinicFormData | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/clinics/${id}`)
      .then((r) => { if (!r.ok) throw new Error("not found"); return r.json(); })
      .then((data) => setInitial({
        customId: data.id,
        name: data.name,
        city: data.city,
        state: data.state,
        locationLine: data.locationLine,
        address: data.address,
        hours: data.hours,
        tag: data.tag,
        isNew: data.isNew ?? false,
        placeId: data.placeId ?? "",
        images: data.images ?? [],
        faqs: data.faqs ?? [],
        isActive: data.isActive,
      }))
      .catch(() => setNotFound(true));
  }, [id]);

  async function handleSubmit(data: ClinicFormData) {
    const res = await fetch(`/api/admin/clinics/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to update clinic");
    }
    router.push("/admin/clinics");
    router.refresh();
  }

  if (notFound) return (
    <div className="p-8 text-gray-500 text-sm">Clinic not found.</div>
  );

  if (!initial) return (
    <div className="flex justify-center py-24">
      <Loader2 className="animate-spin text-gray-400" size={28} />
    </div>
  );

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Edit Clinic</h1>
        <p className="text-gray-500 text-sm mt-1">/our-clinic/<strong>{id}</strong></p>
      </div>
      <ClinicForm initial={initial} onSubmit={handleSubmit} submitLabel="Save Changes" isEdit />
    </div>
  );
}
