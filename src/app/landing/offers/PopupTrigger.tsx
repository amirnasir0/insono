"use client";

import { ReactNode } from "react";

export function PopupTrigger({ className, children }: { className: string; children: ReactNode }) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("insono:open-popup"))}
    >
      {children}
    </button>
  );
}
