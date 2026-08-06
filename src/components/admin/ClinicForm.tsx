"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, Upload, X, Plus, Trash2 } from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const CLINIC_TAGS = ["Clinic", "Service Center", "Partner Clinic", "Online"];

export interface ClinicFormData {
  customId: string;
  name: string;
  city: string;
  state: string;
  locationLine: string;
  address: string;
  hours: string;
  tag: string;
  isNew: boolean;
  placeId: string;
  images: string[];
  faqs: { question: string; answer: string }[];
  isActive: boolean;
}

interface Props {
  initial?: Partial<ClinicFormData>;
  onSubmit: (data: ClinicFormData) => Promise<void>;
  submitLabel: string;
  isEdit?: boolean;
}

export default function ClinicForm({ initial, onSubmit, submitLabel, isEdit }: Props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<ClinicFormData>({
    customId: initial?.customId ?? "",
    name: initial?.name ?? "",
    city: initial?.city ?? "",
    state: initial?.state ?? "",
    locationLine: initial?.locationLine ?? "",
    address: initial?.address ?? "",
    hours: initial?.hours ?? "Open, Closes by 7 pm",
    tag: initial?.tag ?? "Clinic",
    isNew: initial?.isNew ?? false,
    placeId: initial?.placeId ?? "",
    images: initial?.images ?? [],
    faqs: initial?.faqs ?? [],
    isActive: initial?.isActive ?? true,
  });

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof ClinicFormData>(key: K, value: ClinicFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function autoLocationLine(city: string, state: string) {
    if (city && state) set("locationLine", `${city} — ${state}`);
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of files) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/admin/clinics/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (data.url) urls.push(data.url);
        else throw new Error(data.error || "Upload failed");
      }
      set("images", [...form.images, ...urls]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  function removeImage(idx: number) {
    set("images", form.images.filter((_, i) => i !== idx));
  }

  function addFaq() {
    set("faqs", [...form.faqs, { question: "", answer: "" }]);
  }

  function updateFaq(idx: number, field: "question" | "answer", value: string) {
    const updated = form.faqs.map((f, i) => (i === idx ? { ...f, [field]: value } : f));
    set("faqs", updated);
  }

  function removeFaq(idx: number) {
    set("faqs", form.faqs.filter((_, i) => i !== idx));
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{error}</div>
      )}

      {/* Basic Info */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-semibold text-gray-800 text-base">Basic Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelCls}>Clinic Name <span className="text-red-500">*</span></label>
            <input
              className={inputCls}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Hearing Aid Clinic in Andheri Mumbai"
              required
            />
          </div>

          <div>
            <label className={labelCls}>City <span className="text-red-500">*</span></label>
            <input
              className={inputCls}
              value={form.city}
              onChange={(e) => {
                set("city", e.target.value);
                autoLocationLine(e.target.value, form.state);
              }}
              placeholder="Andheri"
              required
            />
          </div>

          <div>
            <label className={labelCls}>State <span className="text-red-500">*</span></label>
            <select
              className={inputCls}
              value={form.state}
              onChange={(e) => {
                set("state", e.target.value);
                autoLocationLine(form.city, e.target.value);
              }}
              required
            >
              <option value="">Select state…</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Type</label>
            <select className={inputCls} value={form.tag} onChange={(e) => set("tag", e.target.value)}>
              {CLINIC_TAGS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className={labelCls}>Hours</label>
            <input
              className={inputCls}
              value={form.hours}
              onChange={(e) => set("hours", e.target.value)}
              placeholder="Open, Closes by 7 pm"
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Location Line <span className="text-gray-400 text-xs">(shown under clinic name)</span></label>
          <input
            className={inputCls}
            value={form.locationLine}
            onChange={(e) => set("locationLine", e.target.value)}
            placeholder="Andheri West — Mumbai, Maharashtra"
          />
        </div>

        <div>
          <label className={labelCls}>Full Address <span className="text-red-500">*</span></label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={3}
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
            placeholder="Unit No: 111, Palmspring Apartment, Lokhandwala Complex, Andheri West, Mumbai - 400053"
            required
          />
        </div>

        <div>
          <label className={labelCls}>
            Google Maps Place ID
            <span className="text-gray-400 text-xs ml-1">(find it at Google Maps → Share → embed a map → extract placeid=…)</span>
          </label>
          <input
            className={inputCls}
            value={form.placeId}
            onChange={(e) => set("placeId", e.target.value)}
            placeholder="ChIJAfTkBADlDDkRAO95N7UQRFQ"
          />
          {form.placeId && (
            <a
              href={`https://www.google.com/maps/place/?q=place_id:${form.placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline mt-1 inline-block"
            >
              Preview on Google Maps →
            </a>
          )}
        </div>

        {!isEdit && (
          <div>
            <label className={labelCls}>
              URL Slug <span className="text-gray-400 text-xs">(auto-generated from city + state, editable)</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">/our-clinic/</span>
              <input
                className={`${inputCls} flex-1`}
                value={form.customId}
                onChange={(e) => set("customId", e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""))}
                placeholder={form.city && form.state ? `${form.city}-${form.state}`.toLowerCase().replace(/\s+/g, "-") : "city-state"}
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-6 pt-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("isNew", !form.isNew)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.isNew ? "bg-emerald-600" : "bg-gray-200"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.isNew ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className="text-sm font-medium text-gray-700">
              {form.isNew ? "New Clinic (Shows 'New ✨' Badge)" : "Standard Clinic (No 'New' Badge)"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("isActive", !form.isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.isActive ? "bg-[#023784]" : "bg-gray-200"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.isActive ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className="text-sm font-medium text-gray-700">{form.isActive ? "Active (visible on site)" : "Inactive (hidden from site)"}</span>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 className="font-semibold text-gray-800 text-base">Photos</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {form.images.map((url, i) => (
            <div key={i} className="relative group aspect-video rounded-lg overflow-hidden border border-gray-200">
              <Image src={url} alt={`Clinic photo ${i + 1}`} fill className="object-cover" />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition"
              >
                <X size={12} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="aspect-video rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-[#023784] hover:text-[#023784] transition disabled:opacity-50"
          >
            {uploading ? <Loader2 size={20} className="animate-spin" /> : <Upload size={20} />}
            <span className="text-xs">{uploading ? "Uploading…" : "Add Photo"}</span>
          </button>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
          onChange={handleImageUpload}
        />
        <p className="text-xs text-gray-400">Max 5MB per image. JPEG, PNG, WebP supported.</p>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-800 text-base">Custom FAQs <span className="text-gray-400 text-xs font-normal">(optional — default FAQs are auto-added)</span></h2>
          <button
            type="button"
            onClick={addFaq}
            className="inline-flex items-center gap-1.5 text-sm text-[#023784] font-medium hover:underline"
          >
            <Plus size={15} /> Add FAQ
          </button>
        </div>

        {form.faqs.length === 0 && (
          <p className="text-sm text-gray-400">No custom FAQs. Default FAQs will be shown automatically.</p>
        )}

        <div className="space-y-4">
          {form.faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">FAQ {i + 1}</span>
                <button type="button" onClick={() => removeFaq(i)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={14} />
                </button>
              </div>
              <input
                className={inputCls}
                value={faq.question}
                onChange={(e) => updateFaq(i, "question", e.target.value)}
                placeholder="Question"
              />
              <textarea
                className={`${inputCls} resize-none`}
                rows={2}
                value={faq.answer}
                onChange={(e) => updateFaq(i, "answer", e.target.value)}
                placeholder="Answer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="flex items-center gap-3">
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
          onClick={() => router.push("/admin/clinics")}
          className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
