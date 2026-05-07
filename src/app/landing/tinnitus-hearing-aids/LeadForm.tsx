"use client";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      acceptCharset="UTF-8"
      className="flex flex-col gap-3"
      action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PriceDownload/formperma/qfkYUAVnrssJTN0i8hL85lHEcznbGWdv2NwcvKmbCno/htmlRecords/submit"
      encType="multipart/form-data"
      method="POST"
    >
      {/* Zoho hidden fields */}
      <input type="hidden" name="zf_referrer_name" value="" />
      <input type="hidden" name="zf_redirect_url" value="https://www.insonohearing.com/thankyou" />
      <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      <input type="hidden" name="utm_source" value="tinnitus-ads" />
      <input type="hidden" name="utm_medium" value="google-ads" />
      <input type="hidden" name="utm_campaign" value="tinnitus-relief" />
      <input type="hidden" name="utm_term" value="" />
      <input type="hidden" name="utm_content" value="tinnitus landing page" />

      {/* Name */}
      <input
        type="text"
        id="zf_name"
        maxLength={255}
        placeholder="Your Full Name"
        required
        name="SingleLine"
        autoComplete="name"
        className="w-full border border-gray-300 rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] focus:outline-none placeholder-gray-400"
      />

      {/* Phone */}
      <input
        type="text"
        data-compname="PhoneNumber"
        id="international_PhoneNumber_countrycode"
        maxLength={20}
        placeholder="Your WhatsApp Number"
        required
        name="PhoneNumber_countrycode"
        autoComplete="tel"
        className="w-full border border-gray-300 rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] focus:outline-none placeholder-gray-400"
      />

      <button
        type="submit"
        className="w-full bg-[#023784] text-white text-base font-bold py-3.5 rounded-xl hover:bg-[#012d66] transition active:scale-[0.98]"
      >
        {compact ? "Get Full Brand Price List" : "Download Full Price List"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        You'll instantly receive a Tinnitus management guide & price list on WhatsApp — 100% free, no obligation.
      </p>
    </form>
  );
}
