"use client";

import { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQS = [
    {
      q: "लखनऊ में कान की मशीन (Hearing Aid) की कीमत क्या है?",
      a: "लखनऊ में डिजिटल कान की मशीन की शुरुआती कीमत ₹15,000 से होती है। यह ब्रांड, फीचर्स (जैसे रिचार्जेबल या ब्लूटूथ) और हियरिंग लॉस के हिसाब से बदल सकती है। हमारे पास हर बजट के लिए बेहतरीन मशीनें उपलब्ध हैं और 0% EMI की सुविधा भी है।",
    },
    {
      q: "क्या कान का टेस्ट और मशीन का ट्रायल सच में मुफ्त है?",
      a: "जी हां, इन्सोनो (Insono) क्लिनिक पर कान की जांच (Audiometry Test) और मशीन पहनकर देखने का ट्रायल 100% मुफ्त है। इसका कोई भी चार्ज नहीं लिया जाता है।",
    },
    {
      q: "क्या बुजुर्गों के लिए घर पर जांच और ट्रायल की सुविधा है?",
      a: "हां! अगर कोई बुजुर्ग मरीज हमारे क्लिनिक तक आने में असमर्थ हैं, तो हमारे सर्टिफाइड ऑडियोलॉजिस्ट घर जाकर उनके कान की मुफ्त जांच और मशीन का ट्रायल (Home Visit) करते हैं।",
    },
    {
      q: "क्या आपके पास अदृश्य (Invisible) कान की मशीनें भी उपलब्ध हैं?",
      a: "हां, हमारे पास दुनिया की सबसे आधुनिक और सबसे छोटे साइज की 'अदृश्य' (Invisible) कान की मशीनें उपलब्ध हैं, जो कान के अंदर पूरी तरह छिप जाती हैं और बाहर से किसी को दिखाई नहीं देतीं।",
    },
    {
      q: "मशीन पर कितने साल की वारंटी मिलती है?",
      a: "हमारे यहां मिलने वाली सभी मशीनें 100% ओरिजिनल होती हैं। इन पर ब्रांड की तरफ से 2 से 4 साल तक की वारंटी और लाइफटाइम फ्री सर्विसिंग की सुविधा मिलती है।",
    },
    {
      q: "कौन-कौन सी ब्रांड की मशीनें आपके पास मिलेंगी?",
      a: "हम विश्व के टॉप लीडिंग ब्रांड्स जैसे Signia, Phonak, Widex, Oticon, ReSound और Starkey के आधिकारिक पार्टनर हैं। आपको ये सभी ओरिजिनल ब्रांड हमारे पास डायरेक्ट वारंटी के साथ मिलेंगे।",
    },
  ];

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-[2rem] overflow-hidden transition-all duration-300 ${
            openIndex === i ? "border-[#184A99]/20 bg-slate-50/50" : "border-slate-100 bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center text-left p-6 sm:p-8"
          >
            <span className="font-bold text-slate-900 pr-8 text-base sm:text-lg leading-snug">{faq.q}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === i ? "bg-[#184A99] text-white rotate-180" : "bg-slate-100 text-slate-400"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateRows: openIndex === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div className="px-6 sm:px-8 pb-8">
                <div className="h-[1px] bg-slate-100 mb-6 w-full" />
                <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed font-medium">{faq.a}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
