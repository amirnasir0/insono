"use client";

import { useRouter } from "next/navigation";
import ClinicForm, { ClinicFormData } from "@/components/admin/ClinicForm";

export default function NewClinicPage() {
  const router = useRouter();

  async function handleSubmit(data: ClinicFormData) {
    const res = await fetch("/api/admin/clinics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to create clinic");
    }
    router.push("/admin/clinics");
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Add New Clinic</h1>
        <p className="text-gray-500 text-sm mt-1">This clinic will appear on the <strong>/our-clinic</strong> page once active.</p>
      </div>
      <ClinicForm onSubmit={handleSubmit} submitLabel="Create Clinic" />
    </div>
  );
}
