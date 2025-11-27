import CategoryProductSection from "@/components/CategoryProductSection";
import Image from "next/image";
import { Headphones, Bluetooth, BatteryCharging, Waves } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Whychoose from "@/components/whychoose"
import FAQ from "@/components/FAQ";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "IIC Hearing Aids – Prices, Models & Features in India",
  description:
    "Explore IIC hearing aids — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list. 100% genuine with warranty.",
  alternates: {
    canonical: "https://www.insononhearing.com/hearing-aids/iic",
  },
  openGraph: {
    title: "IIC Hearing Aids – Prices, Models & Features in India",
    description:
      "Explore IIC hearing aids — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list.",
    url: "https://www.insonohearing.com/hearing-aids/iic",
    type: "website",
  },
};

const iicHearingAidFaqs = [
  {
    q: "What are IIC hearing aids and how do they work?",
    a: "IIC hearing aids, or Invisible-in-the-Canal hearing aids, are the smallest and most discreet type of hearing aids. They sit deep inside your ear canal and use advanced digital processing to deliver clear, natural sound without being visible to others.",
  },
  {
    q: "What is the price of IIC hearing aids in India?",
    a: "IIC hearing aids in India typically range from ₹29,999 to ₹2,50,000, depending on the brand, technology level, and customization. Leading brands like Signia, Widex, Phonak, and Oticon offer high-performance IIC models with natural sound and premium comfort.",
  },
  {
    q: "Are IIC hearing aids completely invisible?",
    a: "Yes, IIC hearing aids are designed to be completely invisible when worn. They fit deeply inside the ear canal, making them the most discreet option available — even smaller and less visible than CIC hearing aids.",
  },
  {
    q: "Are IIC hearing aids comfortable to wear all day?",
    a: "Yes. Since each IIC hearing aid is custom-moulded to fit your ear canal perfectly, it offers excellent comfort and stability for all-day wear. Most users forget they’re even wearing one after a few minutes.",
  },
  {
    q: "Do IIC hearing aids have Bluetooth or wireless connectivity?",
    a: "Due to their ultra-compact size, most IIC hearing aids do not have Bluetooth connectivity. However, some newer premium models include wireless features or remote adjustment options through smartphone apps.",
  },
  {
    q: "Who is the right candidate for IIC hearing aids?",
    a: "IIC hearing aids are best suited for people with mild to moderate hearing loss who want a completely invisible solution. An audiologist will examine your ear canal size and hearing profile to confirm if IIC is the right fit for you.",
  },
  {
    q: "Are IIC hearing aids rechargeable?",
    a: "Most IIC hearing aids still use small zinc-air disposable batteries due to their compact size. However, rechargeable IIC technology is being introduced gradually in select premium models by brands like Phonak and Starkey.",
  },
  {
    q: "Do IIC hearing aids provide natural sound quality?",
    a: "Yes, IIC hearing aids provide very natural and clear sound. Because they sit close to the eardrum, they use your ear’s natural shape to enhance sound direction and depth, resulting in realistic hearing experiences.",
  },
  {
    q: "How long do IIC hearing aids last?",
    a: "With regular maintenance and cleaning, IIC hearing aids last about 5 to 6 years. Routine servicing and professional ear cleaning help maintain sound quality and prevent moisture damage.",
  },
  {
    q: "Where can I buy IIC hearing aids in India?",
    a: "You can buy IIC hearing aids from authorized clinics and audiologists across India. Insono Hearing offers free consultations, home trials, and personalized fittings for all major IIC brands with service support across Delhi, Noida, and Gurgaon.",
  },
];


// ✅ Breadcrumb structured data (optional for SEO)
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.insonohearing.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hearing Aids",
      item: "https://www.insonohearing.com/hearing-aids",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Signia",
      item: "https://www.insonohearing.com/hearing-aids/signia",
    },
  ],
};

export default function SigniaPage() {
  return (
    <>
      {/* ✅ Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 🟦 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-30 md:px-20 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-3">
           IIC - The Smallest Invisible Hearing Aids.
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Experience the next level of discretion with India’s latest IIC (Invisible-in-the-Canal) hearing aids. Custom-made to fit deep inside your ear, they stay completely hidden while delivering crystal-clear, natural sound.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=signia-page&utm_medium=hero"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0f3a7e] transition text-center"
            >
              Download Price List
            </Link>
            <Link
              href="/-appointment"
              className="border border-[#184A99] text-[#184A99] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#184A99] hover:text-white transition text-center"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <video
    className="rounded-lg w-full max-w-[500px] h-auto object-cover"
    src="/video/signia-bct.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

        </div>
      </section>

       <CategoryProductSection
  category="iic"
  title="Best IIC Digital Hearing Aids"
  description="Explore our top-selling IIC hearing aids. Discreet, powerful, and designed for all-day comfort."
  limit={4}
/>

 
       

<section className="relative overflow-hidden py-14 px-4">
  {/* 🌈 Background blobs (behind content) */}
  <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
  <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
  <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

  <div className="relative max-w-7xl mx-auto text-center">
    {/* 🧠 Heading */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
      Why Choose <span className="text-[#184A99]">IIC Hearing Aids?</span>
    </h2>
    <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
      IIC hearing aids, or Invisible-in-the-Canal hearing aids, are the smallest and most discreet type of hearing aids. They sit deep inside your ear canal and use advanced 
      digital processing to deliver clear, natural sound without being visible to others.
    </p>

    {/* 🌟 Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Card 1 */}
      <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
        <div className="mb-4 bg-[#184A99]/10 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#184A99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A1 1 0 0120 13.17V18a1 1 0 01-1 1H5a1 1 0 01-1-1v-4.83a1 1 0 01.447-.894L9 10m6 0V6a3 3 0 00-6 0v4m6 0H9" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
          Bluetooth Streaming
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Connect to smartphones & TVs with crystal-clear sound.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
        <div className="mb-4 bg-[#FF9800]/10 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF9800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
          Rechargeable Power
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Enjoy all-day battery life with quick charging.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
        <div className="mb-4 bg-[#4CAF50]/10 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
          Invisible CIC Design
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Practically invisible fit with maximum comfort.
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
        <div className="mb-4 bg-[#673AB7]/10 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#673AB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
          German Engineering
        </h3>
        <p className="text-sm text-gray-600 text-center">
          World-class precision tailored for India.
        </p>
      </div>
    </div>
  </div>
</section>



     
     

     

      

     

     

     <Whychoose/>
      <ImageShowcaseSection
        title="Official Certifications from Signia, Phonak & Widex"
        description="Insono Hearing Solutions is an authorized partner for leading global hearing aid brands including Signia, Phonak, Widex, and Oticon. These official certifications reflect our trusted expertise and commitment to world-class hearing care in India"
        images={[
          { src: "/images/certifications/signia.jpg", alt: "Signia Authorised partner" },
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
          { src: "/images/certifications/widex.png", alt: "Widex Authorised Partner" },
        ]}
      />



<FAQ faqs={iicHearingAidFaqs} heading="IIC Hearing Aids : FAQs" />


      {/* 🟤 RELATED LINKS */}
     <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🧠 Section Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Explore More Hearing Solutions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Discover advanced hearing aid technologies and top global brands
          trusted across India.
        </p>

        {/* 🌟 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <Link
            href="/hearing-aids/phonak"
            className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
              <Headphones className="w-7 h-7 text-[#184A99]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
              Phonak Hearing Aids
            </h3>
            <p className="text-xs text-gray-600 text-center">
              Swiss precision for exceptional hearing clarity.
            </p>
          </Link>

          {/* Card 2 */}
          <Link
            href="/hearing-aids/widex"
            className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
              <Waves className="w-7 h-7 text-[#184A99]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
              Widex Hearing Aids
            </h3>
            <p className="text-xs text-gray-600 text-center">
              Natural sound quality with Danish innovation.
            </p>
          </Link>

          {/* Card 3 */}
          <Link
            href="/hearing-aids/bluetooth"
            className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
              <Bluetooth className="w-7 h-7 text-[#184A99]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
              Bluetooth Hearing Aids
            </h3>
            <p className="text-xs text-gray-600 text-center">
              Seamlessly connect to phones, TVs, and more.
            </p>
          </Link>

          {/* Card 4 */}
          <Link
            href="/hearing-aids/rechargeable"
            className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
              <BatteryCharging className="w-7 h-7 text-[#184A99]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
              Rechargeable Hearing Aids
            </h3>
            <p className="text-xs text-gray-600 text-center">
              All-day power with fast and easy charging.
            </p>
          </Link>
        </div>
      </div>
    </section>


    </>
  );
}
