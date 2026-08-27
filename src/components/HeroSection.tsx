"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShieldCheck, EyeOff, FileText, Calendar, Users, MapPin, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const logos = [
    "/brands/signia.svg",
    "/brands/widex.svg",
    "/brands/phonaklogo.svg",
    "/brands/resound.svg",
  ];

  const heroImages = [
    "/signia_bct2.png",
    "/hearwave/styletto.png",
    "/hearwave/oticon-intent.png",
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
  ];

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-1 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 rounded-full bg-black/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/25 hover:border-white/40"
    >
      <ChevronLeft className="w-3 h-3 text-white/75" strokeWidth={1.5} />
    </button>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 rounded-full bg-black/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/25 hover:border-white/40"
    >
      <ChevronRight className="w-3 h-3 text-white/75" strokeWidth={1.5} />
    </button>
  );

  const sliderSettings = {
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2250,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const TrustPill = () => (
    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#023784] text-xs font-semibold px-3 py-1.5 rounded-full">
      🏆 India's Fastest-Growing Hearing Care Brand · 4.9 ★ Google Rated
    </div>
  );

  const Stats = () => (
    <div className="grid grid-cols-3 gap-4 mt-6 text-center">
      <div className="flex flex-col items-center">
        <Users className="w-5 h-5 text-[#023784] mb-1" />
        <p className="text-xl font-bold text-gray-900">2 Lakh+</p>
        <p className="text-xs text-gray-500">Happy Customers</p>
      </div>
      <div className="flex flex-col items-center">
        <MapPin className="w-5 h-5 text-[#023784] mb-1" />
        <p className="text-xl font-bold text-gray-900">100+</p>
        <p className="text-xs text-gray-500">Pan-India Cities</p>
      </div>
      <div className="flex flex-col items-center">
        <Stethoscope className="w-5 h-5 text-[#023784] mb-1" />
        <p className="text-xl font-bold text-gray-900">100+</p>
        <p className="text-xs text-gray-500">Audiologists</p>
      </div>
    </div>
  );

  const AppointmentForm = ({ compact = false }: { compact?: boolean }) => (
    <div className={`w-full rounded-xl shadow-xl bg-gradient-to-br from-[#0D2240] via-[#023784] to-[#0a1f4e] ${compact ? "p-6" : "p-4 sm:p-6"}`}>
      <h2 className={`font-bold mb-1 text-white ${compact ? "text-xl" : "text-lg md:text-xl text-center md:text-left"}`}>
        Book Your Free Hearing Test
      </h2>
      <p className={`text-blue-200 text-sm mb-3 ${compact ? "" : "text-center md:text-left"}`}>
        Free · No obligation · Results in 30 min
      </p>
      <div className={`flex flex-wrap gap-x-4 gap-y-1 mb-4 ${compact ? "" : "justify-center md:justify-start"}`}>
        <p className="flex items-center gap-1 text-xs text-blue-200">
          <ShieldCheck className="w-3.5 h-3.5 text-[#f93972]" /> No hidden fees
        </p>
        <p className="flex items-center gap-1 text-xs text-blue-200">
          <EyeOff className="w-3.5 h-3.5 text-[#f93972]" /> Completely confidential
        </p>
      </div>
      <form
        action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        className="flex flex-col gap-3"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="https://www.insonohearing.com/thankyou" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="utm_source" value="Google Organic" />
        <input type="hidden" name="utm_medium" value="" />
        <input type="hidden" name="utm_campaign" value="" />
        <input type="hidden" name="utm_term" value="" />
        <input type="hidden" name="utm_content" value="" />

        <input
          type="text"
          name="SingleLine"
          placeholder="Your Name"
          required
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#f93972] focus:outline-none"
        />
        <input
          type="text"
          name="PhoneNumber_countrycode"
          placeholder="Your Phone Number"
          required
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#f93972] focus:outline-none"
        />
        <textarea
          name="MultiLine"
          placeholder="Tell us about your hearing concern"
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md p-3 text-sm min-h-[80px] focus:ring-2 focus:ring-[#f93972] focus:outline-none"
        />

        <p className={`text-xs text-amber-300 font-medium flex items-center gap-1 ${compact ? "" : "text-center md:text-left"}`}>
          📅 Limited slots available this week — book early to confirm yours
        </p>

        <div className={`flex items-center gap-1.5 ${compact ? "" : "justify-center md:justify-start"}`}>
          <span className="text-amber-400 text-sm tracking-tight">★★★★★</span>
          <span className="text-xs text-blue-200">Rated 4.9 by <span className="font-semibold text-white">1,200+ patients</span></span>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#f93972] text-white text-base font-semibold py-3 rounded-md shadow-lg hover:bg-[#d42d60] hover:scale-[1.02] transition"
        >
          <Calendar className="w-5 h-5" />
          Book My Free Hearing Test
        </button>
        <p className="text-xs text-white/40 text-center">
          🔒 Your number is only shared with our certified audiologist
        </p>
      </form>
    </div>
  );

  return (
    <section className="overflow-x-hidden w-full mt-12">
      {/* ------------------ MOBILE LAYOUT ------------------ */}
      <div className="lg:hidden px-4 sm:px-6 md:px-8 pt-4 pb-12 flex flex-col gap-6 text-center">
        <TrustPill />

        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          <span className="bg-gradient-to-r from-[#f93972] to-[#023784] bg-clip-text text-transparent">
            India's Trusted Name in Hearing Care
          </span>
        </h1>

        <div className="space-y-3 -mt-2">
          <p className="text-base md:text-lg text-gray-700">
            Trusted by{" "}
            <span className="text-[#f93972] font-extrabold text-xl md:text-2xl">2 Lakh+</span>{" "}
            families across India
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Expert Audiologists", "Premium Brands", "Transparent Pricing", "Pan-India Network"].map((item) => (
              <span key={item} className="flex items-center gap-1 text-xs text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <span className="text-[#f93972] font-bold">✓</span> {item}
              </span>
            ))}
          </div>
        </div>

        <Slider {...sliderSettings} className="group relative w-full h-48 sm:h-72">
          {heroImages.map((img, i) => (
            <div key={i} className="relative w-full h-48 sm:h-72">
              <Image src={img} alt={`Hearing aid ${i + 1}`} fill className="object-contain" />
            </div>
          ))}
        </Slider>

        <Stats />

        <a
          href="/price-download?utm_source=website&utm_medium=herocta&utm_campaign=pricedownload"
          className="inline-flex items-center justify-center gap-2 bg-[#0D2240] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#08182E] transition"
        >
          <FileText className="w-5 h-5" />
          Get Full Price List
        </a>

        <div>
          <p className="text-sm text-gray-500 mb-3">
            Trusted Provider of Hearing Aids from <span className="font-semibold text-gray-800">India's Leading Brands</span>
          </p>
          <div className="relative overflow-hidden w-full h-16 sm:h-20">
            <div
              className="absolute top-0 left-0 flex items-center gap-4 animate-marquee"
              style={{ minWidth: "200%" }}
            >
              {logos.concat(logos).map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center px-2">
                  <Image src={logo} alt={`Brand logo ${i}`} width={80} height={32} className="object-contain" draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <AppointmentForm />
      </div>

      {/* ------------------ DESKTOP LAYOUT ------------------ */}
      <div className="hidden lg:flex max-w-6xl mx-auto pt-6 pb-16 gap-12 items-start">
        {/* Left Text */}
        <div className="flex-1 space-y-5 text-left">
          <TrustPill />

          <h1 className="text-3xl xl:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#f93972] to-[#023784] bg-clip-text text-transparent">
              India's Trusted Name in Hearing Care
            </span>
          </h1>

          <div className="space-y-3 max-w-md">
            <p className="text-lg text-gray-700">
              Trusted by{" "}
              <span className="text-[#f93972] font-extrabold text-2xl">2 Lakh+</span>{" "}
              families across India
            </p>
            <div className="flex flex-wrap gap-2">
              {["Expert Audiologists", "Premium Brands", "Transparent Pricing", "Pan-India Network"].map((item) => (
                <span key={item} className="flex items-center gap-1 text-xs text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                  <span className="text-[#f93972] font-bold">✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          <Stats />

          <a
            href="/price-download?utm_source=website&utm_medium=herocta&utm_campaign=pricedownload"
            className="inline-flex items-center justify-center gap-2 bg-[#0D2240] text-white mt-2 px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#08182E] transition"
          >
            <FileText className="w-5 h-5" />
            Get Full Price List
          </a>

          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-3">
              Trusted Provider of Hearing Aids from <span className="font-semibold text-gray-800">India's Leading Brands</span>
            </p>
            <div className="relative overflow-hidden w-full h-20">
              <div
                className="absolute top-0 left-0 flex items-center gap-4 animate-marquee"
                style={{ minWidth: "200%" }}
              >
                {logos.concat(logos).map((logo, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center justify-center px-2">
                    <Image src={logo} alt={`Brand logo ${i}`} width={80} height={32} className="object-contain" draggable={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Slider */}
        <div className="group flex-1 relative max-w-3xs h-[420px]">
          <Slider {...sliderSettings}>
            {heroImages.map((img, i) => (
              <div key={i} className="relative w-full h-[420px]">
                <Image src={img} alt={`Hearing aid ${i + 1}`} fill className="object-contain" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Form */}
        <div className="flex-1 w-full max-w-sm">
          <AppointmentForm compact />
        </div>
      </div>
    </section>
  );
}
