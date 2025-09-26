"use client";

import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";

// ✅ Dynamic import NextSeo (disable SSR to fix prerender error)
const NextSeo = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), {
  ssr: false,
});

export default function AboutPage() {
  const siteName = "Insono Hearing Solutions";
  const siteUrl =
    "https://mediumslateblue-seahorse-306408.hostingersite.com/about";

  const doctors = [
    {
      id: 1,
      title: "Mr. Manoj Kumar, Director",
      description: `The founder of Insono Hearing Solutions Pvt. Ltd., is a B.Tech graduate with a Diploma in Hearing,
Language, and Speech (DHLS). With over 10+ years of experience in the audiology sector, he has built a
reputation for delivering compassionate and personalized hearing care. His deep understanding of the
challenges faced by those with hearing loss inspired him to create Insono Hearing Solutions, a
company committed to providing tailored solutions that improve the lives of its patients. Under his
leadership, the company has grown across India, helping individuals reconnect with the world around
them.
Driven by a patient-first approach, Mr. Manoj Kumar ensures every individual receives the attention
and care they deserve, aiming to bring the joy of hearing back into their lives and impact their well-being.`,
      image: "/image/a2.jpeg",
    },
  ];

  const awards = [
    {
      id: 1,
      title:
        "Insono Hearing Solutions Honored at Jagran Health Excellence Awards 2025",
      description: `Insono Hearing Solutions Pvt. Ltd. was recognized at the Jagran Health Excellence Awards 2025 for excellence in hearing healthcare. Managing Director Mr. Manoj Kumar received the award from MP Dr. Nishikant Dubey.`,
      image: "/image/a3.png",
    },
    {
      id: 2,
      title: "Jagran Health Excellence Awards 2025",
      description: `Mr. Manoj Kumar, Managing Director of Insono Hearing Solutions Pvt. Ltd., honored at Jagran Health Excellence Awards 2025 for outstanding contributions in hearing healthcare. The event was graced by Hon'ble MP Dr. Nishikant Dubey and hosted by Dainik Jagran to celebrate excellence in the medical field.`,
      image: "/image/a4.png",
    },
  ];

  const contactNo = "+911234567890";

  return (
    <div className="pt-24">
      {/* ✅ SEO Meta Tags */}
      <NextSeo
        title={`About Us | ${siteName}`}
        description={`Learn about ${siteName} – trusted hearing care in India, led by Mr. Manoj Kumar with 10+ years of audiology experience.`}
        canonical={siteUrl}
        openGraph={{
          title: `About Us | ${siteName}`,
          description: `Learn about ${siteName} – trusted hearing care in India.`,
          url: siteUrl,
          site_name: siteName,
          images: [
            {
              url: "/image/a1.jpeg",
              width: 1200,
              height: 630,
              alt: "About Insono Hearing Solutions",
              type: "image/jpeg",
            },
          ],
        }}
      />

      {/* ✅ JSON-LD Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteName,
              url: siteUrl,
              logo: "/logo.png",
              image: ["/image/a1.jpeg", "/image/a2.jpeg", "/image/a3.png"],
              telephone: contactNo,
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              founder: {
                "@type": "Person",
                name: "Mr. Manoj Kumar",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-7xl mx-auto">
        {/* About Us + Mission */}
        <section
          id="about"
          className="py-12 px-6 lg:px-12 space-y-8"
          aria-labelledby="about-heading"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-6/12 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src="/image/a1.jpeg"
                alt="About Insono Hearing Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
            <article className="lg:w-6/12">
              <h1
                id="about-heading"
                className="text-3xl font-bold mb-6 text-gray-900"
              >
                About Us
              </h1>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                Hearing is an essential part of human life, allowing us to enjoy
                sounds and connect with others. Often, hearing loss is not
                noticed right away, making it a silent condition with very real
                impacts. Hearing loss can be full or partial and may affect one
                or both ears. It&apos;s one of the fastest-growing health issues
                worldwide. Causes range from aging and infections to genetics,
                long-term illnesses, and loud noise exposure. This can lead to
                challenges in our relationships and daily activities.
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line pt-6">
                <span className="text-xl font-semibold">Our Mission</span> at{" "}
                {siteName}, we&apos;re dedicated to providing top-quality
                hearing care with a personal touch and a focus on 100% customer
                satisfaction. We encourage patients to protect their hearing and
                understand hearing loss, including ways to prevent it. By
                building trust, our skilled audiologists and technical team work
                closely with each patient, offering customized care for speech
                and hearing needs. As an independent clinic, we&apos;re not
                owned by any hearing aid manufacturer, allowing us to give free,
                unbiased advice. We believe hearing is a vital part of life, and
                we aim to support our patients in achieving better hearing
                health and a more fulfilling life.
              </p>
            </article>
          </div>
        </section>

        {/* Promotion Section */}
        <section
          id="promotion"
          className="w-full bg-gradient-to-r from-[#4b72b5] to-[#023784] text-white rounded-2xl py-12 px-6 lg:px-12"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Turn Up the Volume on Your Savings!
              </h2>
              <p className="text-3xl font-bold">Rs. 20,000 on Hearing Aids.</p>
            </div>
            <div className="flex gap-4 justify-center lg:justify-end w-full lg:w-1/3">
              <a
                href={`tel:${contactNo}`}
                className="bg-white text-[#023784] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition w-full lg:w-auto text-center"
              >
                Call Us Now
              </a>
              <a
                href={`https://wa.me/${contactNo}?text=Hello%F0%9F%91%8B%20Can%20I%20Get%20More%20Information%20About%20Insono%20Hearing%20Solutions%20Pvt.%20Ltd%20%3F%3F`}
                className="bg-[#008212] font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition w-full lg:w-auto text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Director Section */}
        <section
          id="director"
          className="py-16 px-6 lg:px-12 space-y-12"
          aria-labelledby="director-heading"
        >
          {doctors.map((doc) => (
            <article
              key={doc.id}
              className="flex flex-col lg:flex-row items-center gap-8 rounded-lg p-6"
            >
              <div className="lg:w-4/12 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative rounded-lg overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-8/12">
                <h2
                  id="director-heading"
                  className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900"
                >
                  {doc.title}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {doc.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Awards Section */}
        <section
          id="awards"
          className="py-16 px-6 lg:px-12 space-y-12"
          aria-labelledby="awards-heading"
        >
          <div className="text-center mb-12">
            <h2
              id="awards-heading"
              className="text-3xl lg:text-5xl font-bold text-gray-900"
            >
              Awards & Recognition
            </h2>
          </div>
          {awards.map((award, index) => (
            <article
              key={award.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full relative h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="lg:w-7/12">
                <h3 className="font-semibold text-xl sm:text-2xl mb-3 text-gray-900">
                  {award.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {award.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
