"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, Upload, X, ImagePlus, Eye, EyeOff } from "lucide-react";

export const POST_CATEGORIES = [
  "Patient Story",
  "Audiologist Diary",
  "Company Update",
  "Event",
];

export interface PostFormData {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  images: string[];
  location: string;
  isPublished: boolean;
}

interface Props {
  initial?: Partial<PostFormData>;
  onSubmit: (data: PostFormData) => Promise<void>;
  submitLabel: string;
}

export default function PostForm({ initial, onSubmit, submitLabel }: Props) {
  const router = useRouter();
  const coverRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<PostFormData>({
    title: initial?.title ?? "",
    category: initial?.category ?? "Company Update",
    excerpt: initial?.excerpt ?? "",
    content: initial?.content ?? "",
    coverImage: initial?.coverImage ?? "",
    images: initial?.images ?? [],
    location: initial?.location ?? "",
    isPublished: initial?.isPublished ?? false,
  });

  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof PostFormData>(key: K, value: PostFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function uploadFile(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/posts/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data.url as string;
  }

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingCover(true);
    try {
      const url = await uploadFile(file);
      set("coverImage", url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Cover upload failed");
    } finally {
      setUploadingCover(false);
      if (coverRef.current) coverRef.current.value = "";
    }
  }

  async function handleGalleryUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploadingGallery(true);
    try {
      const urls = await Promise.all(files.map(uploadFile));
      set("images", [...form.images, ...urls]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Gallery upload failed");
    } finally {
      setUploadingGallery(false);
      if (galleryRef.current) galleryRef.current.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await onSubmit(form);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  const inputCls = "w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784]";
  const labelCls = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{error}</div>
      )}

      {/* Cover Image */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-semibold text-gray-800 text-base mb-4">Cover Photo</h2>
        {form.coverImage ? (
          <div className="relative rounded-xl overflow-hidden aspect-video max-w-lg">
            <Image src={form.coverImage} alt="Cover" fill className="object-cover" />
            <button
              type="button"
              onClick={() => set("coverImage", "")}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => coverRef.current?.click()}
            disabled={uploadingCover}
            className="w-full max-w-lg aspect-video rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-[#023784] hover:text-[#023784] transition disabled:opacity-50"
          >
            {uploadingCover ? <Loader2 size={24} className="animate-spin" /> : <Upload size={24} />}
            <span className="text-sm font-medium">{uploadingCover ? "Uploading…" : "Upload Cover Photo"}</span>
            <span className="text-xs text-gray-400">JPEG, PNG, WebP · Max 8MB</span>
          </button>
        )}
        <input ref={coverRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
      </section>

      {/* Core Details */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-semibold text-gray-800 text-base">Details</h2>

        <div>
          <label className={labelCls}>Title <span className="text-red-500">*</span></label>
          <input
            className={inputCls}
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder="Kundan meets a patient in Noida who hadn't heard clearly in 10 years"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Category</label>
            <select className={inputCls} value={form.category} onChange={(e) => set("category", e.target.value)}>
              {POST_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Location <span className="text-gray-400 text-xs">(optional)</span></label>
            <input
              className={inputCls}
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
              placeholder="Noida, Uttar Pradesh"
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Short Excerpt <span className="text-gray-400 text-xs">(shown on cards — 1–2 lines)</span></label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            placeholder="A patient from Sector 18, Noida, came in after 8 years of struggling with hearing loss…"
          />
        </div>

        <div>
          <label className={labelCls}>Content <span className="text-red-500">*</span></label>
          <p className="text-xs text-gray-400 mb-2">Write naturally. Leave a blank line between paragraphs — each becomes its own block on the website.</p>
          <textarea
            className={`${inputCls} resize-y`}
            rows={12}
            value={form.content}
            onChange={(e) => set("content", e.target.value)}
            placeholder={`Write your full story here…\n\nStart a new paragraph by leaving a blank line between sections.\n\nYou can describe what happened, who was involved, what the outcome was, and any special moments from the visit or event.`}
            required
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 className="font-semibold text-gray-800 text-base">Photo Gallery <span className="text-gray-400 text-sm font-normal">(optional extra photos)</span></h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {form.images.map((url, i) => (
            <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200">
              <Image src={url} alt={`Photo ${i + 1}`} fill className="object-cover" />
              <button
                type="button"
                onClick={() => set("images", form.images.filter((_, j) => j !== i))}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => galleryRef.current?.click()}
            disabled={uploadingGallery}
            className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-[#023784] hover:text-[#023784] transition disabled:opacity-50"
          >
            {uploadingGallery ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} />}
            <span className="text-xs">{uploadingGallery ? "Uploading…" : "Add Photos"}</span>
          </button>
        </div>
        <input ref={galleryRef} type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
      </section>

      {/* Publish */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-800 text-sm">
              {form.isPublished ? "Published" : "Draft"}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {form.isPublished ? "Visible on /stories for everyone." : "Only visible to you in admin."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => set("isPublished", !form.isPublished)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${form.isPublished ? "bg-green-500" : "bg-gray-200"}`}
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${form.isPublished ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
      </section>

      {/* Actions */}
      <div className="flex items-center gap-3 pb-8">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#023784] text-white rounded-xl font-semibold text-sm hover:bg-[#012d66] transition disabled:opacity-60 shadow-md"
        >
          {saving && <Loader2 size={15} className="animate-spin" />}
          {saving ? "Saving…" : submitLabel}
        </button>

        <button
          type="button"
          onClick={() => {
            if (!form.isPublished) {
              set("isPublished", true);
              setTimeout(() => {
                (document.querySelector('form') as HTMLFormElement)?.requestSubmit();
              }, 100);
            } else {
              (document.querySelector('form') as HTMLFormElement)?.requestSubmit();
            }
          }}
          disabled={saving || form.isPublished}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-xl font-semibold text-sm hover:bg-green-700 transition disabled:opacity-40 shadow-md"
        >
          <Eye size={15} /> Publish Now
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin/latest")}
          className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
