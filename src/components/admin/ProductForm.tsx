"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, Upload, Loader2, Star } from "lucide-react";
import { COLOR_SWATCH, getSwatchColor, findHexForName, findNameForHex } from "@/lib/colors";

const CATEGORIES = ["signia", "phonak", "widex", "oticon", "starkey", "resound"];

interface Setting { id: string; value: string; }
interface Settings { technology?: Setting[]; shape?: Setting[]; suitableFor?: Setting[]; }

const COLOR_OPTIONS = [
    "Black", "Graphite", "Grey", "Silver", "Dark Champagne", "Pearl White",
    "Fine Gold", "Deep Brown", "Sandy Brown", "Rose Gold", "Beige",
    "Cosmic Blue", "Snow White", "Snow White Gloss", "Black Gloss", "Mocha", "Brown",
];

export interface ProductFormData {
    title: string;
    category: string;
    mrp: string;
    description: string;
    isFeatured: boolean;
    suitableFor: string[];
    technology: string[];
    shape: string[];
    colors: string[];
    youtubeUrl: string;
    images: string[];
}

interface Props {
    initialData?: Partial<ProductFormData>;
    onSubmit: (data: ProductFormData) => Promise<void>;
    submitLabel: string;
    loading: boolean;
}

export default function ProductForm({ initialData, onSubmit, submitLabel, loading }: Props) {
    const [settings, setSettings] = useState<Settings>({});
    const [customInputText, setCustomInputText] = useState("");
    const [customHex, setCustomHex] = useState("#cccccc");

    const [form, setForm] = useState<ProductFormData>({
        title: initialData?.title ?? "",
        category: initialData?.category ?? "",
        mrp: initialData?.mrp ?? "",
        description: initialData?.description ?? "",
        isFeatured: initialData?.isFeatured ?? false,
        suitableFor: initialData?.suitableFor ?? [],
        technology: initialData?.technology ?? [],
        shape: initialData?.shape ?? [],
        colors: initialData?.colors ?? [],
        youtubeUrl: initialData?.youtubeUrl ?? "",
        images: initialData?.images ?? [],
    });
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");

    useEffect(() => {
        if (initialData) {
            setForm({
                title: initialData.title ?? "",
                category: initialData.category ?? "",
                mrp: initialData.mrp ?? "",
                description: initialData.description ?? "",
                isFeatured: initialData.isFeatured ?? false,
                suitableFor: initialData.suitableFor ?? [],
                technology: initialData.technology ?? [],
                shape: initialData.shape ?? [],
                colors: initialData.colors ?? [],
                youtubeUrl: initialData.youtubeUrl ?? "",
                images: initialData.images ?? [],
            });
        }
    }, [initialData]);

    useEffect(() => {
        fetch("/api/admin/settings")
            .then((r) => r.json())
            .then(setSettings)
            .catch(console.error);
    }, []);

    const toggleMulti = (field: "suitableFor" | "technology" | "shape" | "colors", value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter((v) => v !== value)
                : [...prev[field], value],
        }));
    };

    const handleImageUpload = useCallback(async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        setUploadError("");

        const uploads = Array.from(files).slice(0, 5); // max 5 images
        try {
            const urls = await Promise.all(
                uploads.map(async (file) => {
                    const fd = new FormData();
                    fd.append("file", file);
                    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
                    if (!res.ok) throw new Error("Upload failed");
                    const { url } = await res.json();
                    return url as string;
                })
            );
            setForm((prev) => ({ ...prev, images: [...prev.images, ...urls].slice(0, 10) }));
        } catch {
            setUploadError("One or more uploads failed. Please try again.");
        } finally {
            setUploading(false);
        }
    }, []);

    const removeImage = (url: string) => {
        setForm((prev) => ({ ...prev, images: prev.images.filter((i) => i !== url) }));
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        handleImageUpload(e.dataTransfer.files);
    };

    const addCustomColors = useCallback((input: string, hex: string): string[] => {
        if (!input.trim()) return form.colors;
        const items = input
            .split(",")
            .map((c) => c.trim())
            .filter(Boolean);

        const newColors = [...form.colors];
        items.forEach((item) => {
            if (!newColors.includes(item)) {
                newColors.push(item);
            }
            if (hex) {
                COLOR_SWATCH[item] = hex;
            }
        });
        return newColors;
    }, [form.colors]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let finalColors = form.colors;
        if (customInputText.trim()) {
            finalColors = addCustomColors(customInputText, customHex);
            setCustomInputText("");
        }
        const finalForm = { ...form, colors: finalColors };
        setForm(finalForm);
        await onSubmit(finalForm);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-gray-700 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Title *</label>
                        <input
                            type="text"
                            required
                            value={form.title}
                            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                            placeholder="e.g. Signia Silk Charge&Go IX"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] text-sm transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label>
                        <select
                            required
                            value={form.category}
                            onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] text-sm transition capitalize bg-white"
                        >
                            <option value="">Select brand...</option>
                            {CATEGORIES.map((c) => (
                                <option key={c} value={c} className="capitalize">{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">MRP (₹)</label>
                        <input
                            type="number"
                            value={form.mrp}
                            onChange={(e) => setForm((p) => ({ ...p, mrp: e.target.value }))}
                            placeholder="e.g. 85000"
                            min={0}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] text-sm transition"
                        />
                    </div>

                    <div className="flex items-center gap-3 pt-6">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={form.isFeatured}
                                onChange={(e) => setForm((p) => ({ ...p, isFeatured: e.target.checked }))}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#023784]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#023784]" />
                        </label>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                            <Star size={14} className={form.isFeatured ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} />
                            Mark as Featured
                        </span>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea
                        value={form.description}
                        onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                        rows={5}
                        placeholder="Describe the product's features, benefits, and use cases..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] text-sm transition resize-y"
                    />
                </div>
            </div>

            {/* Multi-select attributes */}
            {(
                [
                    { label: "Suitable For", field: "suitableFor", items: settings.suitableFor },
                    { label: "Technology", field: "technology", items: settings.technology },
                    { label: "Shape / Style", field: "shape", items: settings.shape },
                ] as const
            ).map(({ label, field, items }) => (
                <div key={field} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h2 className="font-semibold text-gray-700 mb-4">{label}</h2>
                    {!items || items.length === 0 ? (
                        <p className="text-sm text-gray-400">No options yet. <a href="/admin/settings" className="text-[#023784] underline">Add in Settings →</a></p>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => {
                                const selected = form[field].includes(item.value);
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => toggleMulti(field, item.value)}
                                        className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all
                      ${selected
                                                ? "bg-[#023784] text-white border-[#023784] shadow-md"
                                                : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#023784] hover:text-[#023784]"
                                            }`}
                                    >
                                        {item.value}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            ))}

            {/* Colors */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-gray-700 mb-1">Available Colors</h2>
                <p className="text-xs text-gray-400 mb-4">Select from presets or add custom colors below.</p>

                {/* Preset color chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {COLOR_OPTIONS.map((color) => {
                        const selected = form.colors.includes(color);
                        return (
                            <button
                                key={color}
                                type="button"
                                onClick={() => toggleMulti("colors", color)}
                                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all ${
                                    selected
                                        ? "bg-[#023784] text-white border-[#023784] shadow-md"
                                        : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#023784] hover:text-[#023784]"
                                }`}
                            >
                                <span
                                    className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0"
                                    style={{ backgroundColor: getSwatchColor(color) }}
                                />
                                {color}
                            </button>
                        );
                    })}
                </div>

                {/* Custom color input */}
                <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Add Custom Color</p>
                    <CustomColorInput
                        value={customInputText}
                        onChangeText={(val) => {
                            setCustomInputText(val);
                            const matchedHex = findHexForName(val);
                            if (matchedHex) {
                                setCustomHex(matchedHex);
                            }
                        }}
                        hex={customHex}
                        onChangeHex={(hexVal) => {
                            setCustomHex(hexVal);
                            const matchedName = findNameForHex(hexVal);
                            if (matchedName) {
                                setCustomInputText(matchedName);
                            } else if (!customInputText.trim() || customInputText.startsWith("#")) {
                                setCustomInputText(hexVal.toUpperCase());
                            }
                        }}
                        onAdd={() => {
                            if (customInputText.trim()) {
                                const updated = addCustomColors(customInputText, customHex);
                                setForm((p) => ({ ...p, colors: updated }));
                                setCustomInputText("");
                            }
                        }}
                    />
                    {/* Show custom colors (not in preset list) as removable tags */}
                    {form.colors.filter(c => !COLOR_OPTIONS.includes(c)).length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {form.colors.filter(c => !COLOR_OPTIONS.includes(c)).map((color) => (
                                <span key={color} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-[#023784] text-white border border-[#023784]">
                                    <span
                                        className="w-3 h-3 rounded-full border border-white/40 flex-shrink-0"
                                        style={{ backgroundColor: getSwatchColor(color) }}
                                    />
                                    {color}
                                    <button
                                        type="button"
                                        onClick={() => setForm((p) => ({ ...p, colors: p.colors.filter(c => c !== color) }))}
                                        className="ml-1 hover:text-red-300 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>


            {/* Image Upload */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-gray-700 mb-4">Product Images</h2>

                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#023784] transition-colors cursor-pointer group relative"
                    onClick={() => document.getElementById("image-input")?.click()}
                >
                    <input
                        id="image-input"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e.target.files)}
                    />
                    <Upload size={32} className="mx-auto mb-3 text-gray-400 group-hover:text-[#023784] transition-colors" />
                    <p className="text-sm font-medium text-gray-600 group-hover:text-[#023784] transition-colors">
                        {uploading ? "Uploading..." : "Click or drag images here"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">JPEG, PNG, WebP · Max 5MB each · Up to 10 images</p>
                    {uploading && <Loader2 size={20} className="animate-spin mx-auto mt-3 text-[#023784]" />}
                </div>

                {uploadError && <p className="text-red-500 text-sm mt-2">{uploadError}</p>}

                {form.images.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-4">
                        {form.images.map((url) => (
                            <div key={url} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 group shadow-sm">
                                <Image src={url} alt="Product" fill className="object-cover" />
                                <button
                                    type="button"
                                    onClick={() => removeImage(url)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* YouTube URL */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-gray-700 mb-1">YouTube Video <span className="text-gray-400 font-normal text-xs">(optional)</span></h2>
                <p className="text-xs text-gray-400 mb-4">Paste a YouTube link — a "View on YouTube" button will appear on the product page.</p>
                <input
                    type="url"
                    value={form.youtubeUrl}
                    onChange={(e) => setForm((p) => ({ ...p, youtubeUrl: e.target.value }))}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] text-sm transition"
                />
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3">
                <a href="/admin/products" className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition">
                    Cancel
                </a>
                <button
                    type="submit"
                    disabled={loading || uploading}
                    className="px-6 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-bold hover:bg-[#012d66] transition disabled:opacity-60 flex items-center gap-2 shadow-md"
                >
                    {loading && <Loader2 size={16} className="animate-spin" />}
                    {loading ? "Saving..." : submitLabel}
                </button>
            </div>
        </form>
    );
}

// ── CustomColorInput ─────────────────────────────────────────────────────────
interface CustomColorInputProps {
    value: string;
    onChangeText: (val: string) => void;
    hex: string;
    onChangeHex: (val: string) => void;
    onAdd: () => void;
}

function CustomColorInput({ value, onChangeText, hex, onChangeHex, onAdd }: CustomColorInputProps) {
    return (
        <div className="flex items-center gap-2 flex-wrap">
            {/* Color picker */}
            <label className="relative flex items-center gap-1.5 cursor-pointer group">
                <span
                    className="w-9 h-9 rounded-lg border-2 border-gray-200 group-hover:border-[#023784] transition-colors flex-shrink-0"
                    style={{ backgroundColor: hex }}
                />
                <input
                    type="color"
                    value={hex}
                    onChange={(e) => onChangeHex(e.target.value)}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    title="Pick a color"
                />
            </label>

            {/* Color name input */}
            <input
                type="text"
                value={value}
                onChange={(e) => onChangeText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        onAdd();
                    }
                }}
                placeholder="e.g. Midnight Blue, Champagne Silver"
                className="flex-1 min-w-[200px] px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] text-sm transition"
            />

            {/* Add button */}
            <button
                type="button"
                onClick={onAdd}
                disabled={!value.trim()}
                className="px-4 py-2 rounded-xl bg-[#023784] text-white text-sm font-semibold hover:bg-[#012d66] transition disabled:opacity-40"
            >
                + Add
            </button>
        </div>
    );
}
