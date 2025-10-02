import { notFound } from "next/navigation";
import { clinics, defaultFaqs } from "../clinics-data";
import HearingAidTypes from "@/components/HearingaidType";
import type { Metadata } from "next";

// ✅ Dynamic SEO metadata
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const clinic = clinics.find((c) => c.id === params.id);
  if (!clinic) return {};

  return {
    title: `${clinic.name} | Insono Hearing Solutions`,
    description: `Visit ${clinic.name}. Address: ${clinic.address}. Open daily till 7 PM. Book your appointment today.`,
  };
}

export default function ClinicDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const clinic = clinics.find((c) => c.id === params.id);

  if (!clinic) return notFound();

  // ✅ Build FAQs dynamically
  const faqs = defaultFaqs.map((f) => {
    const q = f.question(clinic.name, clinic.address);
    const a =
      typeof f.answer === "function" ? f.answer(clinic.address) : f.answer;
    return { question: q, answer: a };
  });

  // ✅ FAQ Schema for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // ✅ Clinic Schema
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.locationLine.split("—")[0].trim(),
      addressRegion: clinic.locationLine.split("—")[1]?.trim(),
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 10:00-19:00",
    telephone: "+91-6204260510",
    url: `https://insonohearing.com/our-clinic/${clinic.id}`,
  };

  return (
    <main className="max-w-5xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-gray-900">
      {/* ✅ Structured data (Clinic + FAQ) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([clinicSchema, faqSchema]),
        }}
      />

      {/* Clinic Info */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#112f70]">
        {clinic.name}
      </h1>
      <p className="mt-2 text-gray-600">{clinic.locationLine}</p>
      <p className="mt-4 text-lg">{clinic.address}</p>

      <div className="mt-3">
        <span className="text-green-600 font-bold">
          {clinic.hours.includes("Open") ? "Open" : clinic.hours}
        </span>{" "}
        <span className="text-gray-500">{clinic.hours}</span>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <a
          href={`/appointment?cat=${encodeURIComponent(
            clinic.catSlug || clinic.id
          )}&slug=${encodeURIComponent(clinic.id)}`}
          className="px-6 py-3 bg-[#023784] text-white rounded-md font-semibold hover:bg-[#012a5a]"
        >
          Book Appointment at {clinic.name}
        </a>
      </div>

      {/* Hearing Aid Types */}
      <section className="mt-12">
        <HearingAidTypes />
      </section>

      {/* ✅ FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#112f70] mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-3">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p className="text-gray-700 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
