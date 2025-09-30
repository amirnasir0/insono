"use client";

import Link from "next/link";

export default function ContactUsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Left: Map -> Text -> Button */}
        <div className="lg:flex-1 flex flex-col gap-4 w-full">
          {/* Google Maps iframe */}
          <div className="rounded-lg overflow-hidden h-56 sm:h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112114.55685638389!2d77.18166749726561!3d28.5823751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50004e4f401%3A0x544410b53779ef00!2sInsono%20Hearing%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1758191010592!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Text */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2 text-center lg:text-left">
            <h2 className="text-2xl font-semibold">Our Location</h2>
            <p className="text-gray-700">
              📍 D-251, Ground Floor, D Block, West Vinod Nagar, New Delhi -
              110092
            </p>
            <p className="text-gray-700">📞 +91 6204260510</p>
            <p className="text-gray-700">✉️ info@insono.com</p>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/clinics">
              <button className="bg-[#184A99] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#0f3a7e] transition">
                Other Locations
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:flex-1 bg-white p-6 sm:p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#184A99] text-white text-sm font-medium py-3 rounded-md hover:bg-[#0f3a7e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
