import Link from "next/link";
import { Fragment } from "react";
import {
  CalendarCheck,
  Ear,
  Headphones,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
} from "lucide-react";
import ClinicSlider from "@/components/slider/ClinicSlider";
import HearingAidTypes from "@/components/HearingaidType";
import {
  brandLinks,
  type RichClinicContent,
  type StepIcon,
} from "../clinic-content";

const stepIcons: Record<StepIcon, typeof Ear> = {
  calendar: CalendarCheck,
  ear: Ear,
  headphones: Headphones,
  shield: ShieldCheck,
};

const h2 = "text-2xl sm:text-3xl font-bold text-[#112f70] mb-6";

function BrandList() {
  return (
    <>
      {brandLinks.map((b, i) => (
        <Fragment key={b.href}>
          {i > 0 && (i === brandLinks.length - 1 ? " and " : ", ")}
          <Link
            href={b.href}
            className="text-[#023784] font-semibold underline underline-offset-2 hover:text-[#012a5a]"
          >
            {b.name}
          </Link>
        </Fragment>
      ))}
    </>
  );
}

function renderWithBrands(text: string) {
  const [before, after] = text.split("{brands}");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <BrandList />
      {after}
    </>
  );
}

export default function RichClinicPage({
  id,
  name,
  content: c,
}: {
  id: string;
  name: string;
  content: RichClinicContent;
}) {
  const pageUrl = `https://www.insonohearing.com/our-clinic/${id}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HearingImpairedClinic",
    "@id": `${pageUrl}#clinic`,
    name: "Insono Hearing Solutions – Andheri West",
    url: pageUrl,
    telephone: c.cta.phone,
    image: c.images.map((img) => `https://www.insonohearing.com${img.src}`),
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address.streetAddress,
      addressLocality: c.address.addressLocality,
      addressRegion: c.address.addressRegion,
      postalCode: c.address.postalCode,
      addressCountry: "IN",
    },
    ...(c.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: c.geo.latitude,
        longitude: c.geo.longitude,
      },
    }),
    hasMap: c.mapsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    areaServed: ["Andheri West", "Versova", "7 Bungalows", "Oshiwara", "Mumbai"],
    // Top-level sibling of address/name/telephone — not nested.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
      bestRating: "5",
      worstRating: "1",
    },
    employee: {
      "@type": "Person",
      name: "Shobhit Pandey",
      jobTitle: "Audiologist",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Insono Hearing Solutions",
      url: "https://www.insonohearing.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 mt-14 sm:mt-10 md:mt-6 sm:px-8 lg:px-8 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#112f70] mb-4">
            {c.h1}
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">{c.intro}</p>

          <dl className="space-y-3 mb-8">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#023784] shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="font-semibold">Address</dt>
                <dd className="text-gray-700">{c.address.full}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-[#023784] shrink-0 mt-0.5" aria-hidden />
              <div>
                <dt className="font-semibold">Clinic Hours</dt>
                <dd className="text-gray-700">{c.hoursLabel}</dd>
              </div>
            </div>
          </dl>

          <div className="flex gap-4 flex-wrap">
            <a
              href={`/appointment?cat=${encodeURIComponent(id)}&slug=${encodeURIComponent(id)}`}
              className="px-6 py-3 bg-[#023784] text-white rounded-md font-semibold hover:bg-[#012a5a]"
            >
              Book Your Hearing Assessment
            </a>
            <a
              href={c.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-100 text-[#023784] border border-[#023784] rounded-md font-semibold hover:bg-gray-200"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
        <div>
          <ClinicSlider
            images={c.images.map((i) => i.src)}
            alts={c.images.map((i) => i.alt)}
            name={name}
          />
        </div>
      </div>

      {/* Services */}
      <section className="mt-16">
        <h2 className={h2}>Our Hearing Care Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.services.map((s) => (
            <li key={s} className="flex gap-3 items-start bg-[#f4f7fc] rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-[#023784] shrink-0 mt-0.5" aria-hidden />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why choose */}
      <section className="mt-16">
        <h2 className={h2}>Why Patients Choose Our Andheri West Clinic</h2>
        <ul className="space-y-3">
          {c.whyChoose.map((w) => (
            <li key={w} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
              <span className="text-gray-800">{renderWithBrands(w)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What happens during your visit */}
      <section className="mt-16 rounded-2xl bg-gradient-to-b from-[#f4f7fc] to-white px-4 py-12 sm:px-8">
        <h2 className={`${h2} text-center`}>What Happens During Your Visit</h2>
        <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Connecting line behind the circles (desktop only) */}
          <span
            aria-hidden
            className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-px bg-[#023784]/20"
          />
          {c.steps.map((step, i) => {
            const Icon = stepIcons[step.icon];
            return (
              <li key={step.title} className="relative flex flex-col items-center">
                {/* Big icon circle with dashed ring + number badge */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full border-2 border-dashed border-[#023784]/25 flex items-center justify-center bg-white">
                    <div className="w-28 h-28 rounded-full bg-[#e8eef9] flex items-center justify-center shadow-inner">
                      <Icon className="w-11 h-11 text-[#023784]" strokeWidth={1.6} aria-hidden />
                    </div>
                  </div>
                  <span className="absolute top-1 right-1 w-9 h-9 rounded-full bg-[#023784] text-white text-sm font-bold flex items-center justify-center shadow-md ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="w-full flex-1 flex flex-col items-center bg-white border border-gray-100 rounded-xl px-5 py-6 shadow-sm text-center">
                  <h3 className="mb-3">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#023784]/70">
                      Step {i + 1}
                    </span>
                    <span className="sr-only"> — </span>
                    <span className="mt-1 flex items-center justify-center sm:min-h-[3.5rem] font-semibold text-lg leading-snug text-[#112f70]">
                      {step.title}
                    </span>
                  </h3>
                  <span aria-hidden className="block w-10 h-0.5 rounded-full bg-[#023784]/20 mb-3" />
                  <p className="text-gray-600 text-sm leading-relaxed max-w-[16rem]">
                    {step.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Audiologist */}
      <section className="mt-16">
        <h2 className={h2}>Meet Your Audiologist</h2>
        <div className="flex flex-col sm:flex-row gap-5 items-start bg-[#f4f7fc] rounded-xl p-6">
          <div
            className="w-16 h-16 rounded-full bg-[#023784] text-white text-xl font-bold flex items-center justify-center shrink-0"
            aria-hidden
          >
            SP
          </div>
          <div>
            <p className="font-semibold text-lg text-[#112f70]">{c.audiologist.name}</p>
            <p className="text-sm text-gray-500 mb-2">Audiologist, Andheri West</p>
            <p className="text-gray-700 leading-relaxed">{c.audiologist.bio}</p>
          </div>
        </div>
      </section>

      {/* HearingAidTypes */}
      <section className="mt-12">
        <HearingAidTypes />
      </section>

      {/* Reviews */}
      <section className="mt-16">
        <h2 className={h2}>What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.reviews.map((r) => (
            <figure
              key={r.author}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col"
            >
              <blockquote className="text-gray-800 italic leading-relaxed flex-1">
                {r.text}
              </blockquote>
              <figcaption className="mt-4">
                <span className="font-semibold text-[#112f70]">— {r.author}</span>
                <span className="block text-xs text-gray-500 mt-1">
                  Excerpt from a Google review.
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Find us */}
      <section className="mt-16">
        <h2 className={h2}>How to Find Our Andheri West Clinic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <address className="not-italic text-gray-800 leading-relaxed mb-4">
              <strong>Insono Hearing Solutions</strong>
              {c.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="text-gray-700 mb-4">{c.findUs}</p>
            <a
              href={c.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#023784] font-semibold hover:underline"
            >
              View Location on Google Maps →
            </a>
          </div>
          {c.mapEmbedUrl && (
            <div className="w-full overflow-hidden rounded-lg shadow-md border">
              <iframe
                src={c.mapEmbedUrl}
                title="Map of Insono hearing aid clinic in Andheri West, Mumbai"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className={h2}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {c.faqs.map((faq) => (
            <div key={faq.question} className="border-b pb-3">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p className="text-gray-700 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 bg-[#023784] text-white rounded-2xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Start Your Hearing Care Journey
        </h2>
        <p className="text-blue-100 leading-relaxed mb-6 max-w-3xl">{c.cta.text}</p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={`/appointment?cat=${encodeURIComponent(id)}&slug=${encodeURIComponent(id)}`}
            className="px-6 py-3 bg-white text-[#023784] rounded-md font-semibold hover:bg-gray-100"
          >
            Book Your Hearing Assessment
          </a>
          <a
            href={`tel:${c.cta.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-md font-semibold hover:bg-white/10"
          >
            <Phone className="w-4 h-4" aria-hidden /> Call: {c.cta.phoneDisplay}
          </a>
        </div>
        <p className="mt-4 text-sm text-blue-100">
          Website:{" "}
          <Link href="/" className="underline">
            insonohearing.com
          </Link>
        </p>
      </section>
    </main>
  );
}
