"use client";
import Image from "next/image";
import { FaFacebook, FaBrain, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Left Column - Logo + Contact */}
          <div>
            <Image
              src="/logo.webp" // replace with Insono logo
              alt="Insono Hearing"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              To connect with a hearing expert today,{" "}
              <a href="mailto:info@insono.com" className="underline text-white">
                email us
              </a>{" "}
              or call{" "}
              <a href="tel:+916206372640" className="underline text-white">
                +91 62063 72640
              </a>
            </p>
            <a
              href="/contactUs"
              className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
            >
              Contact us
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/clinics" className="hover:text-white">Our Clinics</a></li>
              <li><a href="/contactUs" className="hover:text-white">Awards & Certifications</a></li>
              <li><a href="/testomonial" className="hover:text-white">Customer Reviews</a></li>
              <li><a href="/blog" className="hover:text-white">Official Blog</a></li>

            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Hearing Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/digital-hearing-aids" className="hover:text-white">Digital Hearing Aids</a></li>
              <li><a href="/invisible-hearing-aids" className="hover:text-white">Invisible Hearing Aids</a></li>
              <li><a href="/ric-hearing-aids" className="hover:text-white">Receiver In Canal</a></li>
              <li><a href="/bte-hearing-aids" className="hover:text-white">Behind The Ear</a></li>
              <li><a href="/bte-hearing-aids" className="hover:text-white">Rechargeable Hearing Aids</a></li>

            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contactUs" className="hover:text-white">Free Appointment</a></li>
              <li><a href="/guide" className="hover:text-white">Hearing Aid Guide</a></li>
              <li><a href="/contactUs" className="hover:text-white">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-white">Warranty & Repairs</a></li>
              <li><a href="/faq" className="hover:text-white">Financing Options</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://youtube.com/@insonohearing" target="_blank" className="hover:text-white">
              <FaYoutube size={18} />
            </a>
            <a href="https://www.instagram.com/insono_hearing_solutions" target="_blank" className="hover:text-white">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/insonohearingsolution" target="_blank" className="hover:text-white">
              <FaFacebook size={18} />
            </a>

            <a href="https://www.linkedin.com/company/insonohearing" target="_blank" className="hover:text-white">
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <a href="/policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/sitemap" className="hover:text-white">Sitemap</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          {/* Left Side */}
          <p className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} Insono Hearing. All rights reserved.
          </p>

          {/* Right Side */}
          <p className="text-center sm:text-right">
            Built with{" "}
            <FaBrain className="inline mx-1 text-[#E7F3FF]" /> Intelligence by{" "}
            <a
              href="https://webspecia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E7F3FF] hover:underline font-medium"
            >
              Webspecia
            </a>
          </p>
        </div>


      </div>
    </footer>
  );
}
