"use client";

import { useState } from "react";

export default function ProductContent({ content }: { content?: string }) {
  const [expanded, setExpanded] = useState(false);
  if (!content) return null;

  return (
    <>
      <div
        className={`prose max-w-none transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-[10000px]" : "max-h-[300px]"
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {!expanded && (
        <div className="text-center mt-3">
          <button
            onClick={() => setExpanded(true)}
            className="text-[#023784] text-sm font-medium hover:underline transition"
          >
            View More
          </button>
        </div>
      )}
    </>
  );
}
