"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, Pencil, Trash2, MapPin, Eye, EyeOff, Loader2 } from "lucide-react";

interface ClinicRow {
  id: string;
  name: string;
  city: string;
  state: string;
  tag: string;
  isActive: boolean;
  images: string[];
  placeId: string | null;
}

export default function AdminClinicsPage() {
  const [clinics, setClinics] = useState<ClinicRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/clinics")
      .then((r) => r.json())
      .then((data) => { setClinics(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    if (!confirm(`Delete clinic "${id}"? This cannot be undone.`)) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/clinics/${id}`, { method: "DELETE" });
    if (res.ok) setClinics((prev) => prev.filter((c) => c.id !== id));
    setDeleting(null);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Clinics</h1>
          <p className="text-gray-500 text-sm mt-1">Manage clinic locations shown on the website</p>
        </div>
        <Link
          href="/admin/clinics/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-medium hover:bg-[#012d66] transition shadow-md"
        >
          <PlusCircle size={16} /> Add Clinic
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-gray-400" size={28} />
        </div>
      ) : clinics.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <MapPin size={36} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No clinics added yet.</p>
          <Link href="/admin/clinics/new" className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#023784] font-medium hover:underline">
            <PlusCircle size={14} /> Add your first clinic
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-gray-500">
                <th className="px-6 py-4 font-medium">Clinic</th>
                <th className="px-6 py-4 font-medium hidden sm:table-cell">Location</th>
                <th className="px-6 py-4 font-medium hidden md:table-cell">Type</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clinics.map((c) => (
                <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {c.images[0] ? (
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <Image src={c.images[0]} alt={c.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <MapPin size={16} className="text-[#023784]" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-800 leading-snug">{c.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">/our-clinic/{c.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell text-gray-600">
                    {c.city}, {c.state}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">{c.tag}</span>
                  </td>
                  <td className="px-6 py-4">
                    {c.isActive ? (
                      <span className="inline-flex items-center gap-1 text-green-600 text-xs font-semibold">
                        <Eye size={12} /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-gray-400 text-xs font-semibold">
                        <EyeOff size={12} /> Hidden
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/our-clinic/${c.id}`}
                        target="_blank"
                        className="p-2 rounded-lg text-gray-400 hover:text-[#023784] hover:bg-blue-50 transition"
                        title="View on site"
                      >
                        <MapPin size={15} />
                      </Link>
                      <Link
                        href={`/admin/clinics/${c.id}/edit`}
                        className="p-2 rounded-lg text-gray-400 hover:text-[#023784] hover:bg-blue-50 transition"
                        title="Edit"
                      >
                        <Pencil size={15} />
                      </Link>
                      <button
                        onClick={() => handleDelete(c.id)}
                        disabled={deleting === c.id}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition disabled:opacity-40"
                        title="Delete"
                      >
                        {deleting === c.id ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
