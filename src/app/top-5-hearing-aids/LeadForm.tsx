"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://hkdk.events/98onfupn6vioe0";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          mobile: form.phone,
          source: "top-5-hearing-aids",
          submittedAt: new Date().toISOString(),
        }),
      });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-bold text-gray-800 text-lg">Thank you, {form.name}!</p>
        <p className="text-gray-500 text-sm mt-1">Our expert will call you within 30 minutes.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        required
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#023784]/25 focus:border-[#023784]"
      />
      <input
        type="tel"
        required
        placeholder="Mobile Number"
        inputMode="numeric"
        maxLength={10}
        value={form.phone}
        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value.replace(/\D/g, "") }))}
        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#023784]/25 focus:border-[#023784]"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#023784] text-white py-4 rounded-xl font-bold text-base hover:bg-[#012d66] transition disabled:opacity-60"
      >
        {loading ? "Please wait..." : compact ? "Get Free Callback" : "Get Price List on WhatsApp — Free"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        No spam · Expert calls back within 30 minutes
      </p>
    </form>
  );
}
