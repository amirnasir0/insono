"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewCards = [
  {
    name: "Saurav Awasthi",
    brand: "SIGNIA",
    model: "STYLETTO 1 IX",
    personImage: "/testi/saurav.jpeg",
    deviceThumb: "/ric-signia.png",
    formattedQuote: (
      <>
        Had a hassle free and <span className="text-[#e6005c] font-bold">wonderful experience</span> at Insono hearing solutions. The audiologist gave clear recommendations and <span className="text-[#e6005c] font-bold">helped me</span> get the right hearing aids at the right price.
      </>
    ),
  },
  {
    name: "Kaveri Das",
    brand: "SIGNIA",
    model: "STYLETTO 3 IX",
    personImage: "/testi/kaveri.jpeg",
    deviceThumb: "/ric-signia.png",
    formattedQuote: (
      <>
        <span className="text-[#e6005c] font-bold">Great experience</span> with the team. They conducted the hearing test and delivered the machine to my home, making the entire process very <span className="text-[#e6005c] font-bold">convenient</span>. The staff was <span className="text-[#e6005c] font-bold">professional</span>, supportive, and provided <span className="text-[#e6005c] font-bold">excellent service</span> throughout especially <span className="text-[#e6005c] font-bold">Neelam</span> and <span className="text-[#e6005c] font-bold">Nandan Singh</span>. <span className="text-[#e6005c] font-bold">Highly recommended!</span>
      </>
    ),
  },
  {
    name: "Gopal Das",
    brand: "SIGNIA",
    model: "STYLETTO 2 IX",
    personImage: "/testi/gopal.jpg",
    deviceThumb: "/ric-signia.png",
    formattedQuote: (
      <>
        Ankush was <span className="text-[#e6005c] font-bold">very helpful</span> and provided very <span className="text-[#e6005c] font-bold">good service</span> and has <span className="text-[#e6005c] font-bold">good understanding</span> of the product, Great Service.
      </>
    ),
  },
  {
    name: "Mr. Nielesh",
    brand: "PHONAK",
    model: "AUDEO SPHERE I90",
    personImage: "/testi/nilesh.jpeg",
    deviceThumb: "/ric-phonak.png",
    formattedQuote: (
      <>
        I had a <span className="text-[#e6005c] font-bold">very good experience</span> with this hearing aid center. The service was <span className="text-[#e6005c] font-bold">excellent</span>, and the doctor was <span className="text-[#e6005c] font-bold">very understanding</span>. They explained everything <span className="text-[#e6005c] font-bold">clearly</span> and helped us choose the <span className="text-[#e6005c] font-bold">right hearing aid</span>. The prices were <span className="text-[#e6005c] font-bold">very reasonable</span>, I am very satisfied with their service and would <span className="text-[#e6005c] font-bold">definitely recommend</span> them to others.
      </>
    ),
  },
  {
    name: "Mr. Prasad Rai",
    brand: "PHONAK",
    model: "AUDEO I30R",
    personImage: "/testi/prasad.jpeg",
    deviceThumb: "/ric-phonak.png",
    formattedQuote: (
      <>
        I had a <span className="text-[#e6005c] font-bold">very good experience</span> with Insono Mumbai Hearing Solutions. Their after-sales service is <span className="text-[#e6005c] font-bold">excellent</span> and the staff is very <span className="text-[#e6005c] font-bold">supportive</span> and <span className="text-[#e6005c] font-bold">professional</span>. They <span className="text-[#e6005c] font-bold">truly care</span> about their customers and provide <span className="text-[#e6005c] font-bold">prompt assistance</span> whenever needed. <span className="text-[#e6005c] font-bold">Highly recommended</span> for hearing solutions and customer support.
      </>
    ),
  },
  {
    name: "Mr B. L. Karn",
    brand: "SIGNIA",
    model: "STYLETTO 1 IX",
    personImage: "/testi/b.l.kanu.jpeg",
    deviceThumb: "/ric-signia.png",
    formattedQuote: (
      <>
        We got a hearing machine for my father, and the experience was <span className="text-[#e6005c] font-bold">excellent</span>. The hearing aid works very well, and They <span className="text-[#e6005c] font-bold">explained everything clearly</span>, and provided <span className="text-[#e6005c] font-bold">great support</span> even after the installation. <span className="text-[#e6005c] font-bold">Highly recommended</span> for anyone looking for quality hearing solutions and <span className="text-[#e6005c] font-bold">outstanding customer service</span>.
      </>
    ),
  },
  {
    name: "Anu Devi",
    brand: "SIGNIA",
    model: "ORION CHARGE&GO SP 75",
    personImage: "/testi/ankit.jpeg",
    deviceThumb: "/ric-signia.png",
    formattedQuote: (
      <>
        We are <span className="text-[#e6005c] font-bold">extremely happy</span> with Insono Hearing Solution. Mr. Ankit ji is very <span className="text-[#e6005c] font-bold">kind</span> and <span className="text-[#e6005c] font-bold">supportive</span>. He explained everything <span className="text-[#e6005c] font-bold">clearly</span> and <span className="text-[#e6005c] font-bold">patiently</span>, making the entire experience <span className="text-[#e6005c] font-bold">comfortable</span>. We are <span className="text-[#e6005c] font-bold">highly satisfied</span> with the service and truly grateful for his <span className="text-[#e6005c] font-bold">excellent guidance</span>. To our knowledge, there is <span className="text-[#e6005c] font-bold">no other</span> hearing careservice in Dhanbad that provides such <span className="text-[#e6005c] font-bold">advanced facilities</span> and <span className="text-[#e6005c] font-bold">personalized care</span>. Thank you, Insono Hearing Solution!
      </>
    ),
  },
];

const testimonials = [
  { name: "Mrs Manju Singh", url: "https://www.youtube.com/embed/Gn3dkFJtCg8" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/bkz3983stM4" },
  { name: "Happy Customer - Phonak Kit Audeo", url: "https://www.youtube.com/embed/YO5Ef3OAY3c" },
  { name: "Happy Customer - Signia Kit Styletto", url: "https://www.youtube.com/embed/1nG59lEla14" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/ECymrx-xsdk" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/Fi2SfQERhNI" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/qO83ovMXinM" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/yNfh_NyIkdE" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/fvwfrNv5aSA" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/wmLXMMS_Nrg" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/rEr9EYpPpBo" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/Kosw_sT-j_8" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/NJWbGkL-5uU" },
  { name: "Happy Client", url: "https://www.youtube.com/embed/ECymrx-xsdk" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/oc3g0RElFko" },
  { name: "Happy Customer", url: "https://www.youtube.com/embed/6fGuYZxOhkg" },
];

const banners = { url: "https://www.youtube.com/embed/Gn3dkFJtCg8" };

import { useState, useEffect } from "react";

function getSlidesToShow(width: number) {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  if (width < 1280) return 3;
  return 4;
}

export default function TestimonialClient() {
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    setMounted(true);
    const updateSlides = () => setSlidesToShow(getSlidesToShow(window.innerWidth));
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <main className="bg-white text-gray-900 pt-24 overflow-x-hidden">
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Hear from Our Satisfied Clients</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">Real Experiences from People Who Trust Us, Sharing Their Journeys to Better Hearing with Our Expert Care and Support.</p>
          </div>
          {mounted && (
            <Slider
              key={slidesToShow}
              dots
              infinite
              speed={800}
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={4000}
              arrows={false}
              responsive={[
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {reviewCards.map((item, idx) => (
                <div key={idx} className="px-2 py-3">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex flex-col justify-between h-[360px] text-left transition-all hover:shadow-xl">
                    
                    {/* Top Bar: Small Photo + Name + Rating */}
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#184A99] shadow-sm bg-gray-100 flex items-center justify-center">
                        <Image
                          src={item.personImage}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-gray-900 truncate">{item.name}</h5>
                        <p className="text-[11px] font-bold text-[#e6005c] uppercase truncate">{item.brand} - {item.model}</p>
                        <div className="flex gap-0.5 text-amber-400 text-xs mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Quote Text */}
                    <div className="my-3 flex-1 flex flex-col justify-center relative">
                      <span className="text-[#e6005c] text-2xl font-serif leading-none select-none -mb-1 block">“</span>
                      <p className="text-gray-700 text-xs leading-relaxed font-medium line-clamp-4 px-1">
                        {item.formattedQuote}
                      </p>
                      <span className="text-[#e6005c] text-2xl font-serif leading-none select-none text-right block -mt-1">”</span>
                    </div>

                    {/* Bottom Footer Badge */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                      <span className="bg-blue-50 text-[#184A99] font-semibold px-2.5 py-0.5 rounded-full">
                        Verified Client
                      </span>
                      <span className="text-gray-500 font-medium text-[10px]">Insono Hearing</span>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Real Stories from Real People</h2>
          <div className="relative w-full md:w-3/4 mx-auto aspect-video">
            <video
              src="/insono-video.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-md h-full">
              <div className="w-full aspect-video">
                <iframe className="w-full h-full rounded-lg" src={t.url} title={t.name} loading="lazy" allowFullScreen />
              </div>
              <h4 className="mt-4 font-semibold text-center">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#4b72b5] to-[#023784] text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Begin Your Hearing Test Now!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="tel:+91-6204260510">
              <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition h-full">
                <Image src="/logos/call.webp" width={60} height={60} alt="call" />
                <h3 className="font-semibold mt-4 text-center">Connect With Insono Hearing</h3>
                <p className="mt-2">Chat now or call us at</p>
                <p className="font-bold text-lg">+91-6204260510</p>
              </div>
            </Link>
            <Link href="/appointment">
              <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition h-full">
                <Image src="/logos/schedul.jpg" width={60} height={60} alt="appointment" />
                <h3 className="font-semibold mt-4 text-center">Schedule An Appointment</h3>
                <p className="mt-2 text-center">The Customer Care Executive will schedule your appointment.</p>
              </div>
            </Link>
            <Link href="/our-clinic">
              <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition h-full">
                <Image src="/logos/Experts.png" width={60} height={60} alt="meet an expert" />
                <h3 className="font-semibold mt-4 text-center">Meet An Expert</h3>
                <p className="mt-2 text-center">Visit our clinic and meet an expert audiologist.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
