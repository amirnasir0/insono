"use client";

import { useState, useEffect } from "react";

export default function LeadForm({ 
  compact = false, 
  isMobile = false 
}: { 
  compact?: boolean; 
  isMobile?: boolean;
}) {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  return (
    <form
      acceptCharset="UTF-8"
      className="flex flex-col gap-3"
      action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PriceDownload/formperma/qfkYUAVnrssJTN0i8hL85lHEcznbGWdv2NwcvKmbCno/htmlRecords/submit"
      encType="multipart/form-data"
      method="POST"
    >
      {/* Zoho hidden fields - REQUIRED FOR SYSTEM */}
      <input type="hidden" name="zf_referrer_name" value="" />
      <input type="hidden" name="zf_redirect_url" value="https://wa.me/916204260510?text=Hi,%20I%20want%20to%20compare%20hearing%20aids%20in%20Chandigarh%20and%20get%20the%20best%20price." />
      <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      
      {/* Existing UTM tracking fields */}
      <input type="hidden" name="utm_source" value={isMobile ? "chandigarh-mobile-first" : "chandigarh-landing"} />
      <input type="hidden" name="utm_medium" value={isMobile ? "Mobile" : "google-ads"} />
      <input type="hidden" name="utm_campaign" value="chandigarh-hearing-aids" />
      <input type="hidden" name="utm_term" value="" />
      <input type="hidden" name="utm_content" value={isMobile ? "mobile rebuild" : "chandigarh rebuild"} />

      {/* NEW HIDDEN FIELDS FOR CRM INTEGRATION (Requested by USER) */}
      <input type="hidden" name="source" value="Chandigarh Landing Page" />
      <input type="hidden" name="medium" value={isMobile ? "Mobile" : "Desktop"} />
      <input type="hidden" name="city" value="Chandigarh" />
      <input type="hidden" name="page_url" value={pageUrl} />

      {/* Name - FIELD NAME MUST MATCH CRM (SingleLine) */}
      <input
        type="text"
        id="zf_name"
        maxLength={255}
        placeholder="Your Full Name"
        required
        name="SingleLine"
        autoComplete="name"
        className={`w-full border border-gray-300 text-black focus:ring-2 focus:ring-[#003087]/30 focus:border-[#003087] focus:outline-none placeholder-gray-400 ${
          isMobile ? "h-[48px] rounded-lg p-4 text-base" : "rounded-xl p-3.5 text-sm"
        }`}
      />

      {/* Phone - FIELD NAME MUST MATCH CRM (PhoneNumber_countrycode) */}
      <input
        type="tel"
        data-compname="PhoneNumber"
        id="international_PhoneNumber_countrycode"
        maxLength={10}
        minLength={10}
        placeholder="Your WhatsApp Number"
        required
        name="PhoneNumber_countrycode"
        autoComplete="tel"
        pattern="[6-9][0-9]{9}"
        className={`w-full border border-gray-300 text-black focus:ring-2 focus:ring-[#003087]/30 focus:border-[#003087] focus:outline-none placeholder-gray-400 ${
          isMobile ? "h-[48px] rounded-lg p-4 text-base" : "rounded-xl p-3.5 text-sm"
        }`}
      />

      <button
        type="submit"
        className={`w-full font-bold transition active:scale-[0.98] ${
          isMobile 
            ? "h-[56px] bg-[#25D366] text-white text-lg rounded-lg shadow-lg shadow-green-100" 
            : "bg-[#023784] text-white text-base py-3.5 rounded-xl hover:bg-[#012d66]"
        }`}
      >
        {isMobile ? "✅ Send Me the Price List on WhatsApp" : (compact ? "Get Full Brand Price List" : "Download Full Price List")}
      </button>

      <p className={`text-center ${isMobile ? "text-sm text-gray-500 mt-2" : "text-xs text-gray-400"}`}>
        {isMobile 
          ? "🔒 Your number is 100% safe. We never share or spam."
          : "You'll instantly receive the full price list on WhatsApp — 100% free, no obligation."
        }
      </p>
    </form>
  );
}
