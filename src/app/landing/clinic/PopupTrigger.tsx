"use client";

import { ReactNode } from "react";

export function PopupTrigger({
  className,
  children,
  isPriceHook = false,
}: {
  className: string;
  children: ReactNode;
  isPriceHook?: boolean;
}) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("insono:open-popup", { detail: { isPriceHook } }))}
    >
      {children}
    </button>
  );
}
