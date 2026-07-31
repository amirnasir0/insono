"use client";

const localVideos = [
  "/video/insono1.mp4",
  "/video/insono3.mp4",
  "/video/insono2.mp4",
  "/video/insono4.mp4",
];

export default function Testimonials() {
  return (
    <section className="relative text-center py-16 px-4 bg-[#f8f9fa] overflow-hidden">
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#184A99]/10 via-[#0f3a7e]/10 to-[#7C7C7C]/10 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Heading + Subtext */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
            <span className="bg-gradient-to-r from-[#184A99] via-[#0f3a7e] to-[#7C7C7C] bg-clip-text text-transparent">
              Trusted by Over 2 Lakh Indians — Real Hearing Aid Experiences
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We’ve proudly helped thousands of people across India choose the
            right <strong>digital hearing aids</strong> to improve their lives.{" "}
            Here are their <strong>reviews and testimonials</strong> about
            clarity, comfort, and better hearing with Insono.
          </p>
        </div>

        {/* Video Grid */}
        <div className="reviews-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {localVideos.map((videoSrc, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-[420px] xs:h-[480px] sm:h-auto sm:aspect-[9/16] w-full shadow-lg hover:scale-[1.02] transition-transform bg-black"
            >
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
