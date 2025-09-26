// "use client";

// import { useState } from "react";

// const videoIds = ["yNfh_NyIkdE", "oc3g0RElFko", "lVKCKh3DRMk", "qO83ovMXinM"];

// export default function Testimonials() {
//   const [activeVideos, setActiveVideos] = useState<{ [key: number]: boolean }>(
//     {}
//   );

//   const handleCardClick = (index: number) => {
//     setActiveVideos((prev) => ({ ...prev, [index]: true }));
//   };

//   return (
//     <section className="reviews-section text-center py-10 px-4 bg-[#f8f9fa]">
//       <h2 className="text-2xl md:text-3xl font-bold mb-2">
//         Trusted by 2 Lakh+ Indians — Here's What They Say
//       </h2>
//       <p className="text-base mb-8">
//         We’ve helped thousands of people hear clearly again. Here’s what they’re
//         saying.
//       </p>

//       <div className="reviews-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
//         {videoIds.map((id, index) => (
//           <div
//             key={id}
//             className="relative cursor-pointer rounded-lg overflow-hidden h-64 md:h-80"
//             style={{
//               backgroundColor: "#000",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundImage: activeVideos[index]
//                 ? "none"
//                 : `url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`,
//             }}
//             onClick={() => handleCardClick(index)}
//           >
//             {!activeVideos[index] && (
//               <span
//                 className="absolute top-1/2 left-1/2 w-14 h-14"
//                 style={{
//                   background:
//                     "url('https://img.icons8.com/ios-filled/100/ffffff/play-button-circled.png') no-repeat center",
//                   backgroundSize: "60px",
//                   transform: "translate(-50%, -50%)",
//                   opacity: 0.8,
//                   pointerEvents: "none",
//                   position: "absolute",
//                 }}
//               />
//             )}
//             {activeVideos[index] && (
//               <iframe
//                 className="w-full h-full"
//                 src={`https://www.youtube.com/embed/${id}?autoplay=1`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//                 title={`YouTube video ${index}`}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

const videoIds = ["yNfh_NyIkdE", "oc3g0RElFko", "lVKCKh3DRMk", "qO83ovMXinM"];

export default function Testimonials() {
  const [activeVideos, setActiveVideos] = useState<Record<number, boolean>>({});

  const handleCardClick = (index: number) => {
    setActiveVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="reviews-section text-center py-10 px-4 bg-[#f8f9fa]">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Trusted by 2 Lakh+ Indians — Here&apos;s What They Say
      </h2>
      <p className="text-base mb-8">
        We&rsquo;ve helped thousands of people hear clearly again. Here&apos;s
        what they&apos;re saying.
      </p>

      <div className="reviews-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {videoIds.map((id, index) => (
          <div
            key={id}
            className="relative cursor-pointer rounded-lg overflow-hidden h-64 md:h-80"
            style={{
              backgroundColor: "#000",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: activeVideos[index]
                ? "none"
                : `url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`,
            }}
            onClick={() => handleCardClick(index)}
          >
            {!activeVideos[index] && (
              <span
                className="absolute top-1/2 left-1/2 w-14 h-14"
                style={{
                  background:
                    "url('https://img.icons8.com/ios-filled/100/ffffff/play-button-circled.png') no-repeat center",
                  backgroundSize: "60px",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.8,
                  pointerEvents: "none",
                }}
              />
            )}
            {activeVideos[index] && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={`YouTube video ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
