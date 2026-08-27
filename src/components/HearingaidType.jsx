import Link from "next/link";
import Image from "next/image";

const items = [
  { id: 1, name: "Receiver In Canal", image: "/ric-signia.png", href: "/hearing-aids/ric" },
  { id: 2, name: "Behind The Ear", image: "/bte.png", href: "/hearing-aids/bte" },
  { id: 3, name: "Inside The Canal", image: "/itc.png", href: "/hearing-aids/itc" },
  { id: 4, name: "Completely In Canal", image: "/cic.png", href: "/hearing-aids/cic" },
  { id: 5, name: "Invisible In Canal", image: "/iic-starkey.png", href: "/hearing-aids/iic" },
  { id: 6, name: "Inside The Ear", image: "/ite.png", href: "/hearing-aids/ite" },
];

export default function HearingAidTypes() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
            <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
              Discover the Different Types of Hearing Aids for Better Hearing
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about the latest <strong>digital hearing aids</strong>, from behind-the-ear (BTE) to completely-in-canal (CIC) devices.
            Find the right style, features, and comfort level that suit your lifestyle.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center group"
            >
              <div className="w-28 h-28 rounded-full border-4 border-blue-500 p-1 flex items-center justify-center overflow-hidden transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:border-[#f93972]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 text-center group-hover:text-[#f93972] transition-colors">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
