import { notFound } from "next/navigation";
import { clinics as staticClinics, defaultFaqs, type Clinic } from "../clinics-data";
import HearingAidTypes from "@/components/HearingaidType";
import type { Metadata } from "next";
import ClinicSlider from "@/components/slider/ClinicSlider";
import { prisma } from "@/lib/prisma";

async function getClinic(id: string): Promise<Clinic | null> {
  try {
    const row = await prisma.clinic.findUnique({ where: { id } });
    if (row) {
      return {
        id: row.id,
        name: row.name,
        locationLine: row.locationLine,
        address: row.address,
        hours: row.hours,
        tag: row.tag,
        placeId: row.placeId ?? undefined,
        images: row.images,
        faqs: (row.faqs as { question: string; answer: string }[]) ?? [],
        city: row.city,
        state: row.state,
      };
    }
  } catch { /* fall through to static */ }
  return staticClinics.find((c) => c.id === id) ?? null;
}

type ClinicPageParams = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ClinicPageParams): Promise<Metadata> {
  const { id } = await params;
  const clinic = await getClinic(id);
  if (!clinic) return {};

  const title = `${clinic.name} | Insono Hearing Solutions`;
  const description = `Visit ${clinic.name} — certified audiologists, free hearing test, and top brands like Signia, Phonak & Widex. Address: ${clinic.address}. Open Mon–Sun, 10 AM–7 PM.`;
  const url = `https://www.insonohearing.com/our-clinic/${id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Insono Hearing Solutions",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ClinicDetailPage({ params }: ClinicPageParams) {
  const { id } = await params;
  const clinic = await getClinic(id);

  if (!clinic) return notFound();

  const generatedFaqs = defaultFaqs.map((f) => {
    const q = f.question(clinic.name, clinic.address);
    const a =
      typeof f.answer === "function" ? f.answer(clinic.address) : f.answer;
    return { question: q, answer: a };
  });

  const faqs = [...(clinic.faqs ?? []), ...generatedFaqs];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HearingImpairedClinic",
    name: clinic.name,
    url: `https://www.insonohearing.com/our-clinic/${id}`,
    telephone: "+916204260510",
    openingHours: "Mo-Su 10:00-19:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <main className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 mt-14 sm:mt-10 md:mt-6   sm:px-8 lg:px-8 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ✅ Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* ✅ Left = Slider */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#112f70] mb-4">
            {clinic.name}
          </h1>

          <p className="text-gray-600 mb-6">{clinic.locationLine}</p>
          <p className="text-lg mb-6">{clinic.address}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm mb-8">
            <span className="text-green-600 font-bold">
              {clinic.hours.includes("Open") ? "Open" : clinic.hours}
            </span>
            <span className="text-gray-500">{clinic.hours}</span>

            {clinic.placeId && (
              <>
                <span className="text-gray-400">|</span>
                <a
                  href={`https://search.google.com/local/writereview?placeid=${clinic.placeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  ⭐ Write Review
                </a>
              </>
            )}
          </div>

          {/* ✅ Buttons */}
          <div className="flex gap-4 flex-wrap mb-8">
            <a
              href={`/appointment?cat=${encodeURIComponent(
                clinic.catSlug || clinic.id,
              )}&slug=${encodeURIComponent(clinic.id)}`}
              className="px-6 py-3 bg-[#023784] text-white rounded-md font-semibold hover:bg-[#012a5a]"
            >
              Book Appointment
            </a>

            {clinic.placeId && (
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${clinic.placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 text-[#023784] border border-[#023784] rounded-md font-semibold hover:bg-gray-200"
              >
                📍 Get Directions
              </a>
            )}
          </div>
        </div>
        {/* ✅ Right = Clinic Details */}
        <div>
          {clinic.images && clinic.images.length > 0 && (
            <ClinicSlider images={clinic.images} name={clinic.name} />
          )}
        </div>
      </div>

      {/* ✅ Hearing Aid Types */}
      <section className="mt-8">
        <HearingAidTypes />
      </section>

      {/* ✅ FAQs */}
      <section className="mt-14">
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
