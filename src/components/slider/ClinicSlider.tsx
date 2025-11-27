"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./clinic-slider.css";

export default function ClinicSlider({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  return (
    <div className="relative w-full  mt-2">
      {/* ✅ Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".clinic-next",
          prevEl: ".clinic-prev",
        }}
        className="rounded-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`${name} image ${index + 1}`}
              width={1200}
              height={600}
              className="rounded-xl w-full object-fit max-h-[350px]"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Arrows OUTSIDE left & right center */}
      <button className="clinic-prev slider-arrow">&#8249;</button>
      <button className="clinic-next slider-arrow">&#8250;</button>
    </div>
  );
}
