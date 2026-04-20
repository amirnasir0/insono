"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Loader2, ExternalLink, ChevronDown } from "lucide-react";

interface Order {
    id: string;
    productSlug: string;
    productTitle: string;
    name: string;
    phone: string;
    email: string | null;
    address: string;
    city: string;
    state: string;
    pincode: string;
    comments: string | null;
    paymentMethod: string;
    status: string;
    createdAt: string;
}

const STATUS_OPTIONS = ["pending", "confirmed", "dispatched", "delivered", "cancelled"];

const STATUS_STYLES: Record<string, string> = {
    pending:    "bg-yellow-50 text-yellow-700 border-yellow-200",
    confirmed:  "bg-blue-50 text-blue-700 border-blue-200",
    dispatched: "bg-purple-50 text-purple-700 border-purple-200",
    delivered:  "bg-green-50 text-green-700 border-green-200",
    cancelled:  "bg-red-50 text-red-700 border-red-200",
};

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [updating, setUpdating] = useState<string | null>(null);
    const [expanded, setExpanded] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/admin/orders")
            .then((r) => r.json())
            .then(setOrders)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    async function updateStatus(id: string, status: string) {
        setUpdating(id);
        try {
            const res = await fetch("/api/admin/orders", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status }),
            });
            if (res.ok) {
                setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o));
            }
        } finally {
            setUpdating(null);
        }
    }

    const filtered = orders.filter((o) => {
        const matchSearch =
            o.name.toLowerCase().includes(search.toLowerCase()) ||
            o.phone.includes(search) ||
            o.productTitle.toLowerCase().includes(search.toLowerCase()) ||
            o.city.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "all" || o.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const counts = STATUS_OPTIONS.reduce<Record<string, number>>((acc, s) => {
        acc[s] = orders.filter((o) => o.status === s).length;
        return acc;
    }, {});

    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
                <p className="text-sm text-gray-500 mt-0.5">{orders.length} total orders · Cash on Delivery</p>
            </div>

            {/* Status summary chips */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${statusFilter === "all" ? "bg-[#023784] text-white border-[#023784]" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"}`}
                >
                    All ({orders.length})
                </button>
                {STATUS_OPTIONS.map((s) => (
                    <button
                        key={s}
                        onClick={() => setStatusFilter(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition capitalize ${statusFilter === s ? STATUS_STYLES[s] + " border-current" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"}`}
                    >
                        {s} ({counts[s] ?? 0})
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative mb-5">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by name, phone, product or city..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
                />
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex justify-center py-16">
                    <Loader2 size={32} className="animate-spin text-[#023784]" />
                </div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="font-medium">No orders found</p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr className="text-left text-gray-500 text-xs uppercase tracking-wider">
                                    <th className="px-5 py-3.5 font-medium">Customer</th>
                                    <th className="px-5 py-3.5 font-medium">Product</th>
                                    <th className="px-5 py-3.5 font-medium">Location</th>
                                    <th className="px-5 py-3.5 font-medium">Date</th>
                                    <th className="px-5 py-3.5 font-medium">Status</th>
                                    <th className="px-5 py-3.5 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.map((o) => (
                                    <>
                                        <tr
                                            key={o.id}
                                            className="hover:bg-gray-50 transition cursor-pointer"
                                            onClick={() => setExpanded(expanded === o.id ? null : o.id)}
                                        >
                                            <td className="px-5 py-4">
                                                <p className="font-semibold text-gray-800">{o.name}</p>
                                                <a
                                                    href={`tel:+91${o.phone}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-xs text-[#023784] hover:underline"
                                                >
                                                    {o.phone}
                                                </a>
                                                {o.email && <p className="text-xs text-gray-400 truncate max-w-[160px]">{o.email}</p>}
                                            </td>
                                            <td className="px-5 py-4">
                                                <p className="font-medium text-gray-700 line-clamp-2 max-w-[200px]">{o.productTitle}</p>
                                                <Link
                                                    href={`/product/${o.productSlug}`}
                                                    target="_blank"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#023784] mt-0.5"
                                                >
                                                    <ExternalLink size={11} /> View product
                                                </Link>
                                            </td>
                                            <td className="px-5 py-4 text-gray-600">
                                                <p>{o.city}</p>
                                                <p className="text-xs text-gray-400">{o.state} — {o.pincode}</p>
                                            </td>
                                            <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">
                                                {new Date(o.createdAt).toLocaleDateString("en-IN", {
                                                    day: "numeric", month: "short", year: "numeric"
                                                })}
                                                <br />
                                                {new Date(o.createdAt).toLocaleTimeString("en-IN", {
                                                    hour: "2-digit", minute: "2-digit"
                                                })}
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border capitalize ${STATUS_STYLES[o.status] ?? "bg-gray-50 text-gray-600 border-gray-200"}`}>
                                                    {o.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                                    <div className="relative">
                                                        <select
                                                            value={o.status}
                                                            disabled={updating === o.id}
                                                            onChange={(e) => updateStatus(o.id, e.target.value)}
                                                            className="appearance-none pl-3 pr-7 py-1.5 rounded-lg border border-gray-200 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#023784]/30 cursor-pointer disabled:opacity-50"
                                                        >
                                                            {STATUS_OPTIONS.map((s) => (
                                                                <option key={s} value={s} className="capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                                                            ))}
                                                        </select>
                                                        {updating === o.id
                                                            ? <Loader2 size={12} className="animate-spin absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                                                            : <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                        }
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Expanded row */}
                                        {expanded === o.id && (
                                            <tr key={`${o.id}-expanded`} className="bg-blue-50/40">
                                                <td colSpan={6} className="px-5 py-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Full Address</p>
                                                            <p className="text-gray-700">{o.address}</p>
                                                            <p className="text-gray-700">{o.city}, {o.state} — {o.pincode}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Payment</p>
                                                            <p className="text-gray-700">{o.paymentMethod}</p>
                                                        </div>
                                                        {o.comments && (
                                                            <div>
                                                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Customer Notes</p>
                                                                <p className="text-gray-700">{o.comments}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-gray-400 mt-3">Order ID: {o.id}</p>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
