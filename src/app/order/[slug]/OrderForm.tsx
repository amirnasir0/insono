"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  slug: string;
  mrp: number | null;
  images: string[];
  category: string;
};

const INPUT_CLASS =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-[#023784]/25 focus:border-[#023784] transition bg-white";

const LABEL_CLASS = "block text-sm font-semibold text-gray-700 mb-1.5";

export default function OrderForm({ product }: { product: Product }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const brandName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const imageSrc = product.images[0] || "/default-og.jpg";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug: product.slug, productTitle: product.title, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-md p-8 sm:p-12 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h2>
          <p className="text-gray-500 mb-1 text-sm">
            Thank you, <span className="font-semibold text-gray-700">{form.name}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-5">
            Your order for <span className="font-semibold text-[#023784]">{product.title}</span> is confirmed.
            Our team will call <span className="font-semibold text-gray-700">{form.phone}</span> to coordinate delivery.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 9h14l1 11H4L5 9z" />
            </svg>
            Payment: Cash on Delivery
          </div>
          <Link
            href={`/product/${product.slug}`}
            className="block text-sm text-[#023784] hover:underline"
          >
            ← Back to product
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile product banner */}
      <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 mt-16">
        <div className="flex items-center gap-4 max-w-lg mx-auto">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
            <Image src={imageSrc} alt={product.title} fill className="object-contain p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-[#023784] uppercase tracking-wide">{brandName}</span>
            <p className="text-sm font-bold text-gray-800 leading-tight line-clamp-2">{product.title}</p>
            {product.mrp && (
              <p className="text-base font-black text-gray-800 mt-0.5">₹{product.mrp.toLocaleString()}</p>
            )}
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              COD
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Desktop sidebar */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                <Image src={imageSrc} alt={product.title} fill className="object-contain p-4" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#023784]/10 text-[#023784] capitalize">
                {brandName}
              </span>
              <h2 className="text-base font-bold text-gray-800 mt-2 mb-1 leading-snug">{product.title}</h2>
              {product.mrp && (
                <p className="text-xl font-black text-gray-800">
                  ₹{product.mrp.toLocaleString()}
                  <span className="text-sm font-normal text-gray-400 ml-1">MRP</span>
                </p>
              )}
              <div className="mt-4 border border-green-200 bg-green-50 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 9h14l1 11H4L5 9z" />
                  </svg>
                  <p className="text-sm font-semibold text-green-800">Cash on Delivery</p>
                </div>
                <p className="text-xs text-green-700">Pay when the product arrives at your door. No advance payment needed.</p>
              </div>
              <Link
                href={`/product/${product.slug}`}
                className="mt-4 block text-xs text-center text-gray-400 hover:text-[#023784] transition"
              >
                ← Back to product
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#023784]">Complete Your Order</h1>
              <p className="text-gray-500 text-sm mt-1">Enter your delivery details below. We&apos;ll call to confirm before dispatch.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* Section: Contact */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-4">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_CLASS}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="10-digit mobile number"
                      pattern="[6-9][0-9]{9}"
                      inputMode="numeric"
                      autoComplete="tel"
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className={LABEL_CLASS}>
                    Email Address <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="For order confirmation email"
                    autoComplete="email"
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              {/* Section: Delivery Address */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-4">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Delivery Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className={LABEL_CLASS}>
                      Street / House Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="Flat / House no., Street, Area, Landmark"
                      autoComplete="street-address"
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className={LABEL_CLASS}>
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        placeholder="City"
                        autoComplete="address-level2"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label className={LABEL_CLASS}>
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        required
                        placeholder="State"
                        autoComplete="address-level1"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label className={LABEL_CLASS}>
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        required
                        placeholder="6 digits"
                        pattern="[0-9]{6}"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Comments */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-5">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                  Additional Notes <span className="text-gray-400 font-normal normal-case">(optional)</span>
                </h2>
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g. best time to call, specific delivery instructions..."
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#023784] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#012d66] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Placing Order...
                  </span>
                ) : (
                  "Place Order — Cash on Delivery"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                By placing this order you agree to be contacted by our team to confirm delivery.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
