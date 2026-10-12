"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  Phone,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useUtmParams } from "@/app/landing/_hooks/useUtmParams";

const QUICK_PERKS = [
  "🎁 Up to ₹31,500 OFF",
  "🩺 Free Hearing Test",
  "👂 Multi-Brand Trial",
  "🛡️ Lifetime Service",
];

/* ── Compact & Non-Scrollable Popup Form ── */
function FestivePopup({ onClose }: { onClose: () => void }) {
  const { gclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content } =
    useUtmParams({
      utm_campaign: "festive-banner",
      utm_content: "festive-offer-popup",
    });
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4"
      style={{ background: "rgba(10,20,40,0.72)", backdropFilter: "blur(6px)" }}
    >
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-[420px] overflow-hidden animate-popup border border-orange-100">
        {/* ── Sleek Festive Header ── */}
        <div
          className="px-4 py-3 sm:px-5 sm:py-3.5 text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #a72807 0%, #d8340d 45%, #ff5722 80%, #ff8a50 100%)",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="pr-7">
            <div className="inline-flex items-center gap-1 bg-yellow-400 text-slate-900 font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5 text-red-700" />
              Limited Festive Special
            </div>
            <h2 className="text-base sm:text-lg font-black leading-tight text-white">
              Claim Up to <span className="text-yellow-300">₹31,500 OFF</span> Voucher
            </h2>
            <p className="text-white/90 text-[11px] font-medium leading-tight mt-0.5">
              Signia · Phonak · Widex · Free Hearing Test &amp; Demo
            </p>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* ── Compact Perks Strip ── */}
          <div className="grid grid-cols-2 gap-1.5 bg-orange-50/70 p-2 rounded-xl border border-orange-200/50">
            {QUICK_PERKS.map((perk, i) => (
              <div
                key={i}
                className="text-[11px] font-bold text-slate-800 flex items-center gap-1 leading-tight"
              >
                <span>{perk}</span>
              </div>
            ))}
          </div>

          {/* ── Form (Name & WhatsApp Number Only) ── */}
          <form
            acceptCharset="UTF-8"
            className="flex flex-col gap-2.5"
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PriceDownload/formperma/qfkYUAVnrssJTN0i8hL85lHEcznbGWdv2NwcvKmbCno/htmlRecords/submit"
            encType="multipart/form-data"
            method="POST"
          >
            {/* Zoho Hidden Tracking Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input
              type="hidden"
              name="zf_redirect_url"
              value="https://www.insonohearing.com/thankyou"
            />
            <input type="hidden" id="zc_gad" name="zc_gad" value={gclid} />
            <input type="hidden" name="utm_source" value={utm_source} />
            <input type="hidden" name="utm_medium" value={utm_medium} />
            <input type="hidden" name="utm_campaign" value={utm_campaign} />
            <input type="hidden" name="utm_term" value={utm_term} />
            <input type="hidden" name="utm_content" value={utm_content} />

            {/* 1. Full Name */}
            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="zf_name"
                  maxLength={255}
                  placeholder="Enter your name"
                  required
                  name="SingleLine"
                  autoComplete="name"
                  className="w-full h-10 bg-slate-50 border border-slate-200 text-slate-900 pl-9 pr-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-500 focus:outline-none placeholder-slate-400 transition-all font-medium"
                />
              </div>
            </div>

            {/* 2. WhatsApp Number */}
            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  data-compname="PhoneNumber"
                  id="international_PhoneNumber_countrycode"
                  maxLength={10}
                  minLength={10}
                  placeholder="10-digit mobile number"
                  required
                  name="PhoneNumber_countrycode"
                  autoComplete="tel"
                  pattern="[6-9][0-9]{9}"
                  className="w-full h-10 bg-slate-50 border border-slate-200 text-slate-900 pl-9 pr-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-500 focus:outline-none placeholder-slate-400 transition-all font-medium"
                />
              </div>
            </div>

            {/* Micro urgency line */}
            <div className="flex items-center justify-between text-[10px] font-semibold text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60">
              <span>⚡ Only 6 trial slots left this week!</span>
              <span className="text-red-700 font-bold">Limited Offer</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-11 py-2 font-black text-white rounded-xl flex items-center justify-center gap-1.5 text-sm transition-all active:scale-[0.98] shadow-md group cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #a72807 0%, #d8340d 45%, #ff5722 100%)",
                boxShadow: "0 4px 16px rgba(216, 52, 13, 0.35)",
              }}
            >
              <span>🎊 Claim ₹31,500 Voucher Now</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Trust and Social Proof Footer */}
            <div className="flex items-center justify-between text-[10px] pt-1 text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-0.5 font-bold text-slate-700">
                <span className="text-yellow-400 text-xs">★</span> 4.9/5 (1,200+ Reviews)
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                100% Privacy Secured
              </span>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup { animation: popup-in 0.22s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>
    </div>
  );
}

/* ── Main Banner ── */
export default function FestiveBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div
        id="festive-banner"
        className="custom-mobile-header-wrapper relative z-[9998] w-full text-white text-center text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-3 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2.5 select-none overflow-hidden flex-wrap"
        style={{
          background:
            "linear-gradient(90deg, #b5370e 0%, #e84118 25%, #ff6b35 50%, #e84118 75%, #b5370e 100%)",
          backgroundSize: "200% 100%",
          animation: "bannerShimmer 4s ease infinite",
          display: "flex",
        }}
      >
        {/* Decorative sparkles */}
        <span className="text-yellow-300 text-sm leading-none hidden sm:inline">✨</span>
        <span className="text-sm leading-none">🪔</span>

        {/* Main text */}
        <span className="tracking-wide text-[11px] sm:text-sm">
          <span className="text-yellow-300 font-black">FESTIVE OFFER:</span> Up to{" "}
          <span className="text-yellow-200 font-black underline underline-offset-2 decoration-yellow-400">
            ₹31,500 OFF
          </span>{" "}
          on Hearing Aids!{" "}
          <span className="hidden sm:inline text-white/90">Limited Time Only.</span>
        </span>

        <span className="text-sm leading-none">🎊</span>
        <span className="text-yellow-300 text-sm leading-none hidden sm:inline">✨</span>

        {/* Claim Offer button */}
        <button
          onClick={() => setPopupOpen(true)}
          className="inline-flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black text-[10px] sm:text-[11px] px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full transition-all active:scale-95 shadow-md whitespace-nowrap ml-1 cursor-pointer"
        >
          🎁 Claim Offer
        </button>

        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss festive banner"
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-0.5 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <style>{`
          @keyframes bannerShimmer {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>

      {/* Popup */}
      {popupOpen && <FestivePopup onClose={() => setPopupOpen(false)} />}
    </>
  );
}
