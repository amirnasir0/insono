"use client";
import { useState, useEffect, useRef } from "react";

interface UtmDefaults {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function useUtmParams(defaults: UtmDefaults) {
  const defaultsRef = useRef(defaults);
  const [gclid, setGclid] = useState("");
  const [utm, setUtm] = useState<Required<UtmDefaults>>({
    utm_source: defaults.utm_source || "",
    utm_medium: defaults.utm_medium || "",
    utm_campaign: defaults.utm_campaign || "",
    utm_term: defaults.utm_term || "",
    utm_content: defaults.utm_content || "",
  });

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const d = defaultsRef.current;
    setGclid(p.get("gclid") || "");
    setUtm({
      utm_source: p.get("utm_source") || d.utm_source || "",
      utm_medium: p.get("utm_medium") || d.utm_medium || "",
      utm_campaign: p.get("utm_campaign") || d.utm_campaign || "",
      utm_term: p.get("utm_term") || d.utm_term || "",
      utm_content: p.get("utm_content") || d.utm_content || "",
    });
  }, []);

  return { gclid, ...utm };
}
