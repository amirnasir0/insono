"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const logos = [
    "/brands/signia.svg",
    "/brands/widex.svg",
    "/brands/phonaklogo.svg",
    "/brands/oticon.svg",
    "/brands/resound.svg",
  ];

  const heroImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="overflow-x-hidden w-full mt-12">
      {/* ------------------ MOBILE LAYOUT ------------------ */}
      <div className="lg:hidden px-4 sm:px-6 md:px-8 py-12 flex flex-col gap-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-center">
          Restore Clear Hearing
        </h1>

        {/* Hero Slider */}
        <Slider {...sliderSettings} className="w-full h-48 sm:h-72">
          {heroImages.map((img, i) => (
            <div key={i} className="relative w-full h-48 sm:h-72">
              <Image
                src={img}
                alt={`Doctor ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </Slider>

        <p className="text-gray-600 font-light text-sm sm:text-base">
          Affordable Digital Hearing Aids with{" "}
          <span
            className="px-2 py-1 rounded-md font-medium"
            style={{ backgroundColor: "#E6EEF8", color: "#023784" }}
          >
            Free Consultation for everyone
          </span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mt-4 justify-center">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[#023784]">
              5000+
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Experts</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[#023784]">22</p>
            <p className="text-xs sm:text-sm text-gray-500">Clinics</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[#023784]">30+</p>
            <p className="text-xs sm:text-sm text-gray-500">Specialties</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="tel:+916206372640"
          className="mt-6 inline-block bg-[#023784] text-white text-base sm:text-sm font-medium px-6 py-3 rounded-md hover:bg-[#012d66] transition text-center w-full"
        >
          📞 Consult an Audiologist
        </a>

        {/* Logos */}
        <div className="mt-8">
          <p className="text-gray-600 font-bold mb-4 text-sm sm:text-base">
            We are an{" "}
            <span className="text-[#023784] font-semibold">
              Officially Authorized Partner
            </span>{" "}
            of world-leading hearing aid brands
          </p>
          <div className="relative overflow-hidden w-full h-16 sm:h-20">
            <div
              className="absolute top-0 left-0 flex items-center gap-4 animate-marquee"
              style={{ minWidth: "200%" }}
            >
              {logos.concat(logos).map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center px-2"
                >
                  <Image
                    src={logo}
                    alt={`Brand logo ${i}`}
                    width={80}
                    height={32}
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-base sm:text-lg font-bold mb-3 text-gray-700">
            Request a Call Back
          </h2>
          <form
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            className="flex flex-col gap-3"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="#" />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />

            {/* Inputs */}
            <input
              type="text"
              name="SingleLine"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email ID"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <textarea
              name="MultiLine"
              placeholder="Tell us about your hearing problem"
              className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px] focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            ></textarea>

            <p className="text-xs text-gray-500">
              Your information is secure. Our team will contact you to confirm
              your preferred time & method.
            </p>

            <button
              type="submit"
              className="w-full bg-[#184a99] text-white text-base font-medium py-3 rounded-md hover:bg-[#cc0000] transition"
            >
              📅 Book My Appointment
            </button>
          </form>
        </div>
      </div>

      {/* ------------------ DESKTOP LAYOUT ------------------ */}
      <div className="hidden lg:flex max-w-6xl mx-auto py-12 gap-12 items-start">
        {/* Left Text */}
        <div className="flex-1 space-y-6 text-left">
          <h1 className="text-4xl font-bold leading-snug ">
            Restore Clear Hearing
          </h1>
          <p className="text-gray-600 font-light text-base">
            Affordable Digital Hearing Aids with{" "}
            <span
              className="px-2 py-1 rounded-md font-medium"
              style={{ backgroundColor: "#E6EEF8", color: "#023784" }}
            >
              Free Consultation for everyone
            </span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-4">
            <div>
              <p className="text-2xl font-bold text-[#023784]">5000+</p>
              <p className="text-sm text-gray-500">Experts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#023784]">22</p>
              <p className="text-sm text-gray-500">Clinics</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#023784]">30+</p>
              <p className="text-sm text-gray-500">Specialties</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="tel:+916206372640"
            className="mt-6 inline-block bg-[#023784] text-white font-medium px-6 py-3 rounded-md hover:bg-[#012d66] transition"
          >
            📞 Consult an Audiologist
          </a>

          {/* Logos */}
          <div className="mt-8">
            <p className="text-gray-600 font-bold mb-4">
              We are an{" "}
              <span className="text-[#023784] font-semibold">
                Officially Authorized Partner
              </span>{" "}
              of world-leading hearing aid brands
            </p>
            <div className="relative overflow-hidden w-full h-20">
              <div
                className="absolute top-0 left-0 flex items-center gap-4 animate-marquee"
                style={{ minWidth: "200%" }}
              >
                {logos.concat(logos).map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center px-2"
                  >
                    <Image
                      src={logo}
                      alt={`Brand logo ${i}`}
                      width={80}
                      height={32}
                      className="object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative max-w-3xs h-[400px]">
          <Slider {...sliderSettings}>
            {heroImages.map((img, i) => (
              <div key={i} className="relative w-full h-[400px]">
                <Image
                  src={img}
                  alt={`Doctor ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Form */}
        <div className="flex-1 w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-3 text-gray-700">
            Book a Free Hearing Test Appointment
          </h2>
          <form
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            className="flex flex-col gap-3"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input
              type="hidden"
              name="zf_redirect_url"
              value="https://prices.insonohearing.com/landing/apt-thank-you"
            />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />

            {/* Inputs */}
            <input
              type="text"
              name="SingleLine"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email ID"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <textarea
              name="MultiLine"
              placeholder="Tell us about your hearing problem"
              className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px] focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            ></textarea>

            <p className="text-xs text-gray-500">
              Your information is secure. Our team will contact you to confirm
              your preferred time & method.
            </p>

            <button
              type="submit"
              className="w-full bg-[#184a99] text-white text-base font-medium py-3 rounded-md hover:bg-[#13366e] transition"
            >
              📅 Book My Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
