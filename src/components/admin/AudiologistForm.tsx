"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, Upload, X, Youtube, UserCheck, Star } from "lucide-react";

export interface AudiologistFormData {
  name: string;
  designation: string;
  experience: string;
  photo: string;
  testimonial: string;
  youtubeUrl: string;
  isActive: boolean;
  orderIndex: number;
}

interface Props {
  initial?: Partial<AudiologistFormData>;
  onSubmit: (data: AudiologistFormData) => Promise<void>;
  submitLabel: string;
  isEdit?: boolean;
}

export default function AudiologistForm({ initial, onSubmit, submitLabel, isEdit }: Props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<AudiologistFormData>({
    name: initial?.name ?? "",
    designation: initial?.designation ?? "Hearing Care Specialist",
    experience: initial?.experience ?? "5+ Years Experience",
    photo: initial?.photo ?? "",
    testimonial: initial?.testimonial ?? "",
    youtubeUrl: initial?.youtubeUrl ?? "",
    isActive: initial?.isActive ?? true,
    orderIndex: initial?.orderIndex ?? 0,
  });

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof AudiologistFormData>(key: K, value: AudiologistFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/audiologists/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) {
        set("photo", data.url);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Photo upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.photo) {
      setError("Please upload an expert photo.");
      return;
    }

    setSaving(true);
    try {
      await onSubmit(form);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  const inputCls =
    "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition";
  const labelCls = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Main Info */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-gray-800 text-base flex items-center gap-2">
          <UserCheck size={18} className="text-[#023784]" /> Expert Basic Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className={inputCls}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. Mr. Shubham Kumar"
              required
            />
          </div>

          <div>
            <label className={labelCls}>
              Designation / Role <span className="text-red-500">*</span>
            </label>
            <input
              className={inputCls}
              value={form.designation}
              onChange={(e) => set("designation", e.target.value)}
              placeholder="e.g. Hearing Care Specialist"
              required
            />
          </div>

          <div>
            <label className={labelCls}>Experience (Years)</label>
            <select
              className={inputCls}
              value={form.experience}
              onChange={(e) => set("experience", e.target.value)}
            >
              <option value="1 Year Experience">1 Year Experience</option>
              <option value="2 Years Experience">2 Years Experience</option>
              <option value="3 Years Experience">3 Years Experience</option>
              <option value="4 Years Experience">4 Years Experience</option>
              <option value="5 Years Experience">5 Years Experience</option>
              <option value="6 Years Experience">6 Years Experience</option>
              <option value="7 Years Experience">7 Years Experience</option>
              <option value="8 Years Experience">8 Years Experience</option>
              <option value="9 Years Experience">9 Years Experience</option>
              <option value="10 Years Experience">10 Years Experience</option>
              <option value="12 Years Experience">12 Years Experience</option>
              <option value="15+ Years Experience">15+ Years Experience</option>
              <option value="20+ Years Experience">20+ Years Experience</option>
            </select>
          </div>

          <div>
            <label className={labelCls}>Display Order Index</label>
            <input
              type="number"
              min="0"
              className={inputCls}
              value={form.orderIndex}
              onChange={(e) => set("orderIndex", Math.max(0, parseInt(e.target.value) || 0))}
              placeholder="0 (Positive numbers only: 0, 1, 2...)"
            />
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-gray-800 text-base">Expert Photo <span className="text-red-500">*</span></h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {form.photo ? (
            <div className="relative w-32 h-40 rounded-2xl overflow-hidden border border-gray-200 shadow-md group flex-shrink-0">
              <Image src={form.photo} alt="Audiologist photo" fill className="object-cover" />
              <button
                type="button"
                onClick={() => set("photo", "")}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition"
                title="Remove photo"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="w-36 h-36 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-[#023784] hover:text-[#023784] hover:bg-blue-50/50 transition disabled:opacity-50 flex-shrink-0"
            >
              {uploading ? <Loader2 size={24} className="animate-spin text-[#023784]" /> : <Upload size={24} />}
              <span className="text-xs font-semibold text-gray-600">{uploading ? "Uploading..." : "Upload Photo"}</span>
            </button>
          )}

          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium text-gray-700">Upload Image File</p>
            <p className="text-xs text-gray-400">
              Select JPG, PNG, or WebP file from your computer. Max file size: 5MB.
            </p>
          </div>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handlePhotoUpload}
        />
      </section>

      {/* Testimonial & Video Section */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-gray-800 text-base flex items-center gap-2">
          <Star size={18} className="text-amber-500 fill-amber-400" /> Short Testimonial &amp; Video
        </h2>

        <div>
          <label className={labelCls}>
            Short Testimonial <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={4}
            value={form.testimonial}
            onChange={(e) => set("testimonial", e.target.value)}
            placeholder={`"Mr. Shubham Kumar provided excellent guidance and patiently addressed every concern. His support and professionalism made the overall experience reassuring and satisfying."`}
            required
          />
          <p className="text-xs text-gray-400 mt-1">
            This quote will be displayed prominently inside a quote card on the /our-experts page.
          </p>
        </div>

        <div>
          <label className={labelCls}>
            YouTube Video Link <span className="text-gray-400 text-xs font-normal">(Optional — adds "Watch Video on YouTube" button)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-red-500">
              <Youtube size={18} />
            </div>
            <input
              className={`${inputCls} pl-10`}
              value={form.youtubeUrl}
              onChange={(e) => set("youtubeUrl", e.target.value)}
              placeholder="https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID"
            />
          </div>
          {form.youtubeUrl && (
            <p className="text-xs text-emerald-600 mt-1 font-medium">
              ✓ YouTube button will be rendered on the card!
            </p>
          )}
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("isActive", !form.isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                form.isActive ? "bg-[#023784]" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  form.isActive ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm font-medium text-gray-700">
              {form.isActive ? "Active (visible on website)" : "Inactive (hidden from website)"}
            </span>
          </div>
        </div>
      </section>

      {/* Submit Controls */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#023784] text-white rounded-xl font-semibold text-sm hover:bg-[#012d66] transition disabled:opacity-60 shadow-md"
        >
          {saving && <Loader2 size={16} className="animate-spin" />}
          {saving ? "Saving..." : submitLabel}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/audiologists")}
          className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
