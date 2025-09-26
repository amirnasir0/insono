// app/thank-you/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const downloads = [
  {
    title: "Insono Hearing Aid Price List 2025",
    icon: "/iic.png", // ✅ fallback for missing icon
  },
  {
    title: "Signia Hearing Aid",
    icon: "/ric-signia.png",
  },
  {
    title: "Phonak Hearing Aid",
    icon: "/ric-phonak.png",
  },
  {
    title: "Widex Hearing Aid",
    icon: "/ite.png",
  },
  {
    title: "Resound Hearing Aid",
    icon: "/bte.png",
  },
  {
    title: "Starkey Hearing Aid",
    icon: "/iic-starkey.png",
  },
];

export default function ThankYouPage() {
  return (
    <section className="text-center mt-12">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
          🎉 Thank You!
        </h1>
        <p className="mt-3 mb-6 text-gray-600">
          We have received your request. Download resources below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={item.icon || "/pdf-icon.png"} // ✅ fallback applied
                alt={item.title}
                width={64}
                height={64}
                className="mb-3"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
