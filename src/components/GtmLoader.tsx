"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GTM_ID = "GTM-T3FWLWC8";

declare global {
  interface Window {
    dataLayer?: unknown[];
    __gtmLoaded?: boolean;
  }
}

function loadGtm() {
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

// First real interaction from the visitor. Lighthouse/PageSpeed never fires
// these, and every visitor who submits a form fires at least one.
const INTERACTION_EVENTS = ["scroll", "touchstart", "pointerdown", "keydown", "mousemove"] as const;

/**
 * Loads Google Tag Manager.
 * - /landing/* pages: on the visitor's first interaction (keeps GTM, Google Ads,
 *   GA4 and the Meta pixel off the critical path for mobile PageSpeed).
 * - Every other page (incl. /thankyou, where the Ads conversion fires): after the
 *   page has loaded and the browser is idle — same as the previous lazyOnload.
 * GTM is injected at most once per visit, including across client-side navigations.
 */
export default function GtmLoader() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing" || pathname.startsWith("/landing/");

  useEffect(() => {
    if (window.__gtmLoaded) return;

    if (isLandingPage) {
      const onInteract = () => {
        INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, onInteract));
        loadGtm();
      };
      INTERACTION_EVENTS.forEach((e) =>
        window.addEventListener(e, onInteract, { once: true, passive: true })
      );
      return () => INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, onInteract));
    }

    // Non-landing pages: wait for load + idle (equivalent to next/script lazyOnload).
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(loadGtm, { timeout: 2000 });
      } else {
        timeoutId = setTimeout(loadGtm, 1);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [isLandingPage]);

  return null;
}
