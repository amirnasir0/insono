"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Trash2, Plus, RefreshCw } from "lucide-react";

interface BlogRedirect {
  id: string;
  oldSlug: string;
  newSlug: string;
  createdAt: string;
}

export default function BlogRedirectsPage() {
  const [redirects, setRedirects] = useState<BlogRedirect[]>([]);
  const [loading, setLoading] = useState(true);
  const [oldSlug, setOldSlug] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/blog-redirects");
    const data = await res.json();
    setRedirects(data);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!oldSlug.trim() || !newSlug.trim()) return;
    setSaving(true);
    const res = await fetch("/api/admin/blog-redirects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldSlug: oldSlug.trim(), newSlug: newSlug.trim() }),
    });
    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Failed to save");
    } else {
      setOldSlug("");
      setNewSlug("");
      await load();
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this redirect?")) return;
    await fetch(`/api/admin/blog-redirects/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0D2240]">Blog Redirects</h1>
          <p className="text-sm text-slate-500 mt-1">
            When a WordPress post slug changes, the old URL auto-redirects to the new one.
          </p>
        </div>
        <button onClick={load} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Add form */}
      <form onSubmit={handleAdd} className="bg-white border border-slate-200 rounded-2xl p-5 mb-6 shadow-sm">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Add Redirect</p>
        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-500 mb-1 block">Old Slug</label>
            <input
              type="text"
              value={oldSlug}
              onChange={e => setOldSlug(e.target.value)}
              placeholder="old-post-slug"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#184A99]/20 focus:border-[#184A99]"
            />
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 flex-shrink-0 mb-3 hidden sm:block" />
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-500 mb-1 block">New Slug</label>
            <input
              type="text"
              value={newSlug}
              onChange={e => setNewSlug(e.target.value)}
              placeholder="new-post-slug"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#184A99]/20 focus:border-[#184A99]"
            />
          </div>
          <button
            type="submit"
            disabled={saving || !oldSlug.trim() || !newSlug.trim()}
            className="flex items-center gap-2 bg-[#184A99] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#13366e] transition-colors disabled:opacity-50 flex-shrink-0"
          >
            <Plus className="w-4 h-4" />
            {saving ? "Saving…" : "Add"}
          </button>
        </div>
        {error && <p className="text-rose-500 text-sm mt-2">{error}</p>}
      </form>

      {/* List */}
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-14 bg-slate-100 animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : redirects.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm">
          No redirects yet. Add one above or they&apos;ll appear automatically when WordPress sends a slug-change webhook.
        </div>
      ) : (
        <div className="space-y-2">
          {redirects.map(r => (
            <div
              key={r.id}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-sm"
            >
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <span className="font-mono text-sm text-rose-600 truncate">/blog/{r.oldSlug}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                <span className="font-mono text-sm text-emerald-600 truncate">/blog/{r.newSlug}</span>
              </div>
              <span className="text-[10px] text-slate-400 flex-shrink-0 hidden sm:block">
                {new Date(r.createdAt).toLocaleDateString()}
              </span>
              <button
                onClick={() => handleDelete(r.id)}
                className="p-2 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-colors flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* WordPress setup note */}
      <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-5">
        <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">WordPress Auto-Sync</p>
        <p className="text-sm text-amber-800 leading-relaxed">
          Redirects are added automatically when WordPress fires the slug-change webhook.
          Add the following snippet to your WordPress <strong>functions.php</strong> to enable this:
        </p>
        <pre className="mt-3 bg-white border border-amber-100 rounded-xl p-4 text-xs text-slate-700 overflow-x-auto leading-relaxed">{`add_action('post_updated', function($post_ID, $post_after, $post_before) {
  if (
    $post_before->post_name !== $post_after->post_name &&
    $post_after->post_status === 'publish' &&
    $post_after->post_type === 'post'
  ) {
    wp_remote_post('https://www.insonohearing.com/api/webhooks/blog-redirect', [
      'body'    => json_encode([
        'oldSlug' => $post_before->post_name,
        'newSlug' => $post_after->post_name,
        'secret'  => 'YOUR_BLOG_WEBHOOK_SECRET',
      ]),
      'headers' => ['Content-Type' => 'application/json'],
      'timeout' => 10,
    ]);
  }
}, 10, 3);`}</pre>
        <p className="text-xs text-amber-600 mt-2">
          Replace <code className="bg-white px-1 py-0.5 rounded">YOUR_BLOG_WEBHOOK_SECRET</code> with the value of <code className="bg-white px-1 py-0.5 rounded">BLOG_WEBHOOK_SECRET</code> in your .env file.
        </p>
      </div>
    </div>
  );
}
