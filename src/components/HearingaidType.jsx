"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

const items = [
  { id: 1, name: "Receiver In Canal", image: "/ric-signia.png", video: "https://www.youtube.com/embed/VIDEO_ID1" },
  { id: 2, name: "Behind The Ear", image: "/bte.png", video: "https://www.youtube.com/embed/VIDEO_ID2" },
  { id: 3, name: "Inside The Canal", image: "/itc.png", video: "https://www.youtube.com/embed/VIDEO_ID3" },
  { id: 4, name: "Completely In Canal", image: "/cic.png", video: "https://www.youtube.com/embed/VIDEO_ID4" },
  { id: 5, name: "Invisible In Canal", image: "/iic-starkey.png", video: "https://www.youtube.com/embed/VIDEO_ID5" },
  { id: 6, name: "Inside The Ear", image: "/ite.png", video: "https://www.youtube.com/embed/VIDEO_ID6" },
];

export default function HearingAidTypes() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Types of Hearing Aids
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setActiveVideo(item.video);
                setIsOpen(true);
              }}
            >
              {/* Circle Image */}
              <div className="w-28 h-28 rounded-full border-4 border-blue-500 p-1 flex items-center justify-center overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg overflow-hidden">
            <div className="relative pb-[56.25%] h-0">
              {activeVideo && (
                <iframe
                  src={activeVideo}
                  title="Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              )}
            </div>
            <div className="p-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
