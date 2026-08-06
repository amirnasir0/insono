"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, Pencil, Trash2, UserCheck, Eye, EyeOff, Loader2, Youtube, ExternalLink } from "lucide-react";

interface AudiologistRow {
  id: string;
  name: string;
  designation: string;
  experience?: string;
  photo: string;
  testimonial: string;
  youtubeUrl?: string | null;
  isActive: boolean;
  orderIndex: number;
}

export default function AdminAudiologistsPage() {
  const [experts, setExperts] = useState<AudiologistRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/audiologists")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setExperts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete expert "${name}"? This cannot be undone.`)) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/audiologists/${id}`, { method: "DELETE" });
    if (res.ok) setExperts((prev) => prev.filter((e) => e.id !== id));
    setDeleting(null);
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Audiologists &amp; Experts</h1>
          <p className="text-gray-500 text-sm mt-1">Manage hearing specialists shown on /our-experts page</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/our-experts"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
          >
            <ExternalLink size={15} /> View on Site
          </Link>
          <Link
            href="/admin/audiologists/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-medium hover:bg-[#012d66] transition shadow-md"
          >
            <PlusCircle size={16} /> Add Audiologist
          </Link>
        </div>
      </div>

      {/* Main Content */}
      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-gray-400" size={28} />
        </div>
      ) : experts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <UserCheck size={40} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-600 font-semibold text-base">No audiologists added yet</p>
          <p className="text-gray-400 text-sm mt-1 max-w-md mx-auto">
            Add experts like Mr. Piyush Kumar with photo, testimonial, and YouTube link to display them on /our-experts.
          </p>
          <Link
            href="/admin/audiologists/new"
            className="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-medium hover:bg-[#012d66] transition shadow"
          >
            <PlusCircle size={15} /> Add First Audiologist
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-gray-500 bg-gray-50/50">
                <th className="px-6 py-4 font-medium">Expert</th>
                <th className="px-6 py-4 font-medium hidden sm:table-cell">Designation</th>
                <th className="px-6 py-4 font-medium hidden md:table-cell">Testimonial</th>
                <th className="px-6 py-4 font-medium hidden lg:table-cell">Video</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {experts.map((exp) => (
                <tr key={exp.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition">
                  {/* Expert Name + Photo */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 relative border border-gray-200">
                        {exp.photo ? (
                          <Image src={exp.photo} alt={exp.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full bg-blue-50 flex items-center justify-center text-[#023784] font-bold">
                            {exp.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 leading-snug">{exp.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5 sm:hidden">{exp.designation}</p>
                      </div>
                    </div>
                  </td>

                  {/* Designation */}
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                      {exp.designation}
                    </span>
                  </td>

                  {/* Testimonial Snippet */}
                  <td className="px-6 py-4 hidden md:table-cell max-w-xs">
                    <p className="text-xs text-gray-600 line-clamp-2 italic">
                      "{exp.testimonial}"
                    </p>
                  </td>

                  {/* YouTube Link */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {exp.youtubeUrl ? (
                      <a
                        href={exp.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold hover:underline bg-red-50 px-2.5 py-1 rounded-full border border-red-100"
                      >
                        <Youtube size={13} /> Video Link
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400">None</span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    {exp.isActive ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                        <Eye size={12} /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-gray-400 text-xs font-semibold">
                        <EyeOff size={12} /> Hidden
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/audiologists/${exp.id}/edit`}
                        className="p-2 rounded-lg text-gray-400 hover:text-[#023784] hover:bg-blue-50 transition"
                        title="Edit"
                      >
                        <Pencil size={15} />
                      </Link>
                      <button
                        onClick={() => handleDelete(exp.id, exp.name)}
                        disabled={deleting === exp.id}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition disabled:opacity-40"
                        title="Delete"
                      >
                        {deleting === exp.id ? (
                          <Loader2 size={15} className="animate-spin" />
                        ) : (
                          <Trash2 size={15} />
                        )}
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
