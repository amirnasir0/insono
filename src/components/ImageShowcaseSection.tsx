"use client";

import Image from "next/image";

interface ImageShowcaseSectionProps {
  title: string;
  description: string;
  images: { src: string; alt?: string }[];
}

export default function ImageShowcaseSection({
  title,
  description,
  images,
}: ImageShowcaseSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* 🧠 Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* 🖼 Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {images.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <Image
              src={img.src}
              alt={img.alt || `Image ${idx + 1}`}
              width={500}
              height={350}
              className="object-cover w-full h-56 sm:h-64 md:h-72"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
