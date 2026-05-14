"use client";

import { useState, useEffect } from "react";
import { User, MessageSquare, ChevronRight, ShieldCheck } from "lucide-react";

export default function LeadForm({
  compact = false,
  isMobile = false
}: {
  compact?: boolean;
  isMobile?: boolean;
}) {
  const [gclid, setGclid] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const val = params.get("gclid") || "";
    setGclid(val);
  }, []);

  return (
    <form
      acceptCharset="UTF-8"
      className="flex flex-col gap-4"
      action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PriceDownload/formperma/qfkYUAVnrssJTN0i8hL85lHEcznbGWdv2NwcvKmbCno/htmlRecords/submit"
      encType="multipart/form-data"
      method="POST"
    >
      {/* Zoho hidden fields */}
      <input type="hidden" name="zf_referrer_name" value="" />
      <input type="hidden" name="zf_redirect_url" value="https://www.insonohearing.com/thankyou" />
      <input type="hidden" id="zc_gad" name="zc_gad" value={gclid} />
      
      {/* UTM tracking */}
      <input type="hidden" name="utm_source" value={isMobile ? "signia-mumbai-mobile" : "signia-mumbai-landing"} />
      <input type="hidden" name="utm_medium" value={isMobile ? "Mobile" : "google-ads"} />
      <input type="hidden" name="utm_campaign" value="signia-mumbai-hearing-aids" />
      <input type="hidden" name="utm_term" value="" />
      <input type="hidden" name="utm_content" value={isMobile ? "mumbai-mobile" : "mumbai-landing"} />


      {/* Name Field */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#184A99] transition-colors">
          <User className="w-5 h-5" />
        </div>
        <input
          type="text"
          id="zf_name"
          maxLength={255}
          placeholder="Full Name"
          required
          name="SingleLine"
          autoComplete="name"
          className={`w-full bg-slate-50 border border-slate-200 text-slate-900 pl-12 pr-4 focus:ring-2 focus:ring-[#184A99]/20 focus:border-[#184A99] focus:outline-none placeholder-slate-400 transition-all ${
            isMobile ? "h-14 rounded-xl text-base" : "h-12 rounded-xl text-sm"
          }`}
        />
      </div>

      {/* Phone Field */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <MessageSquare className="w-5 h-5" />
        </div>
        <input
          type="tel"
          data-compname="PhoneNumber"
          id="international_PhoneNumber_countrycode"
          maxLength={10}
          minLength={10}
          placeholder="WhatsApp Number"
          required
          name="PhoneNumber_countrycode"
          autoComplete="tel"
          pattern="[6-9][0-9]{9}"
          className={`w-full bg-slate-50 border border-slate-200 text-slate-900 pl-12 pr-4 focus:ring-2 focus:ring-[#184A99]/20 focus:border-[#184A99] focus:outline-none placeholder-slate-400 transition-all ${
            isMobile ? "h-14 rounded-xl text-base" : "h-12 rounded-xl text-sm"
          }`}
        />
      </div>

      <button
        type="submit"
        className={`w-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] group overflow-hidden relative shadow-lg ${
          isMobile 
            ? "h-16 bg-[#25D366] text-white text-lg rounded-xl shadow-green-200" 
            : "h-14 bg-[#184A99] text-white text-base rounded-xl hover:bg-[#13366e] shadow-blue-100"
        }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isMobile ? "Get Price List on WhatsApp" : (compact ? "Get Brand Price List" : "Download Prices & Claim Free Trial")}
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>

      <div className="flex items-center justify-center gap-2 opacity-60">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Privacy Secured · No Spam
        </p>
      </div>
    </form>
  );
}
