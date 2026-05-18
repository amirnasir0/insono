"use client";

import { useEffect, useState } from "react";
import {
  Plus, Trash2, Pencil, Loader2, Tag, CheckCircle, Circle,
  X, ExternalLink, Clock,
} from "lucide-react";

interface Offer {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  discount: string;
  endsAt: string;
  isActive: boolean;
  createdAt: string;
}

const EMPTY_FORM = {
  name: "",
  badge: "",
  tagline: "",
  discount: "",
  endsAt: "",
};

function toLocalDatetimeValue(iso: string) {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function AdminOffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  const fetchOffers = async () => {
    try {
      const res = await fetch("/api/admin/offers");
      const data = await res.json();
      setOffers(data);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOffers(); }, []);

  const openCreate = () => {
    setEditId(null);
    setForm(EMPTY_FORM);
    setError("");
    setShowForm(true);
  };

  const openEdit = (o: Offer) => {
    setEditId(o.id);
    setForm({
      name: o.name,
      badge: o.badge,
      tagline: o.tagline,
      discount: o.discount,
      endsAt: toLocalDatetimeValue(o.endsAt),
    });
    setError("");
    setShowForm(true);
  };

  const closeForm = () => { setShowForm(false); setEditId(null); setForm(EMPTY_FORM); setError(""); };

  const handleSave = async () => {
    if (!form.name || !form.badge || !form.tagline || !form.discount || !form.endsAt) {
      setError("All fields are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/admin/offers/${editId}` : "/api/admin/offers";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, endsAt: new Date(form.endsAt).toISOString() }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.error || "Failed to save."); return; }
      await fetchOffers();
      closeForm();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (offer: Offer) => {
    setToggling(offer.id);
    try {
      await fetch(`/api/admin/offers/${offer.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !offer.isActive }),
      });
      await fetchOffers();
    } finally {
      setToggling(null);
    }
  };

  const handleDelete = async (offer: Offer) => {
    if (!confirm(`Delete "${offer.name}"? This cannot be undone.`)) return;
    setDeleting(offer.id);
    try {
      await fetch(`/api/admin/offers/${offer.id}`, { method: "DELETE" });
      setOffers((prev) => prev.filter((o) => o.id !== offer.id));
    } finally {
      setDeleting(null);
    }
  };

  const activeOffer = offers.find((o) => o.isActive);

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Offers</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {activeOffer
              ? <span className="text-emerald-600 font-medium">Active: {activeOffer.name}</span>
              : "No active offer — landing page shows generic CTA"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/landing/offers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition"
          >
            <ExternalLink size={15} /> Preview Page
          </a>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-bold hover:bg-[#012d66] transition shadow-md"
          >
            <Plus size={16} /> New Offer
          </button>
        </div>
      </div>

      {/* Create / Edit Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-gray-800 text-sm">
              {editId ? "Edit Offer" : "Create New Offer"}
            </h2>
            <button onClick={closeForm} className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 transition">
              <X size={16} />
            </button>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Offer Name */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Offer Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Mother's Day Special"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
              />
              <p className="text-xs text-gray-400 mt-1">Main heading shown on the landing page hero.</p>
            </div>

            {/* Badge */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Badge Text <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Mother's Day"
                value={form.badge}
                onChange={(e) => setForm({ ...form, badge: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
              />
              <p className="text-xs text-gray-400 mt-1">Short tag shown on the urgency bar & badge.</p>
            </div>

            {/* Discount */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Discount Text <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Save up to ₹31,500"
                value={form.discount}
                onChange={(e) => setForm({ ...form, discount: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
              />
              <p className="text-xs text-gray-400 mt-1">Shown as the key saving on the page.</p>
            </div>

            {/* Tagline */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Tagline <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Celebrate Mom with the gift of clear hearing"
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
              />
              <p className="text-xs text-gray-400 mt-1">Subtitle shown under the hero heading.</p>
            </div>

            {/* Ends At */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Offer Ends At <span className="text-red-400">*</span>
              </label>
              <input
                type="datetime-local"
                value={form.endsAt}
                onChange={(e) => setForm({ ...form, endsAt: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
              />
              <p className="text-xs text-gray-400 mt-1">Countdown timer on the landing page counts down to this date & time.</p>
            </div>

            {error && (
              <div className="sm:col-span-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
              <button
                onClick={closeForm}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-bold hover:bg-[#012d66] transition disabled:opacity-60"
              >
                {saving ? <Loader2 size={15} className="animate-spin" /> : null}
                {editId ? "Save Changes" : "Create Offer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Offers List */}
      {loading ? (
        <div className="flex justify-center py-20"><Loader2 size={32} className="animate-spin text-[#023784]" /></div>
      ) : offers.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Tag size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-medium">No offers yet</p>
          <button onClick={openCreate} className="mt-3 text-[#023784] text-sm underline">Create your first offer</button>
        </div>
      ) : (
        <div className="space-y-3">
          {offers.map((offer) => {
            const expired = new Date(offer.endsAt) < new Date();
            return (
              <div
                key={offer.id}
                className={`bg-white rounded-2xl border shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition ${
                  offer.isActive ? "border-emerald-200 bg-emerald-50/30" : "border-gray-100"
                }`}
              >
                {/* Status dot */}
                <div className="flex-shrink-0">
                  {offer.isActive ? (
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <CheckCircle size={20} className="text-emerald-600" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Circle size={20} className="text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <p className="font-semibold text-gray-800 text-sm">{offer.name}</p>
                    <span className="px-2 py-0.5 rounded-full bg-[#023784]/10 text-[#023784] text-[10px] font-bold uppercase tracking-wide">
                      {offer.badge}
                    </span>
                    {offer.isActive && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide">
                        Live
                      </span>
                    )}
                    {expired && (
                      <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wide">
                        Expired
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 truncate">{offer.tagline}</p>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <span className="text-xs font-semibold text-[#023784]">{offer.discount}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} />
                      Ends {new Date(offer.endsAt).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleToggleActive(offer)}
                    disabled={toggling === offer.id}
                    title={offer.isActive ? "Deactivate" : "Set as Active"}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition disabled:opacity-50 ${
                      offer.isActive
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    }`}
                  >
                    {toggling === offer.id ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : offer.isActive ? (
                      "Deactivate"
                    ) : (
                      "Set Active"
                    )}
                  </button>
                  <button
                    onClick={() => openEdit(offer)}
                    className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                    title="Edit"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => handleDelete(offer)}
                    disabled={deleting === offer.id}
                    className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition disabled:opacity-50"
                    title="Delete"
                  >
                    {deleting === offer.id ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Preview note */}
      {offers.length > 0 && (
        <p className="mt-6 text-xs text-gray-400 text-center">
          Only one offer can be active at a time. Activating a new one automatically deactivates the previous one.{" "}
          <a href="/landing/offers" target="_blank" rel="noopener noreferrer" className="text-[#023784] underline">
            Preview the landing page →
          </a>
        </p>
      )}
    </div>
  );
}
