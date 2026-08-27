import Image from "next/image";
import {
  FaFacebook,
  FaBrain,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 🌐 Top Section */}
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
              <a
                href="mailto:insonohearing@gmail.com"
                className="underline text-white"
              >
                email us
              </a>{" "}
              or call{" "}
              <a href="tel:+916204260510" className="underline text-white">
                +91 6204260510
              </a>{" "}
              or at{" "}
              <a href="tel:+917742573686" className="underline text-white">
                +91 7742573686
              </a>
            </p>
            <a
              href="/contact-us"
              className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
            >
              Contact us
            </a>

            <a
              href="https://www.google.com/preferences/source?q=insonohearing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs px-3 py-2 rounded-md hover:bg-white/20 transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Follow us on Google Search
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about-us" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-clinic" className="hover:text-white">
                  Our Clinics
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white">
                  Jobs at Insono
                </a>
              </li>
              <li>
                <a href="/awards" className="hover:text-white">
                  Awards & Certifications
                </a>
              </li>
              <li>
                <a href="/testimonial" className="hover:text-white">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Official Blog
                </a>
              </li>
              <li>
                <a href="/stories" className="hover:text-white">
                  Insono Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Hearing Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/hearing-aids/invisible" className="hover:text-white">
                  Invisible Hearing Aids
                </a>
              </li>
              <li>
                <a href="/hearing-aids/phonak" className="hover:text-white">
                  Phonak Hearing Aids
                </a>
              </li>
              <li>
                <a href="/hearing-aids/widex" className="hover:text-white">
                  Widex Hearing Aids
                </a>
              </li>
              <li>
                <a href="/hearing-aids/oticon" className="hover:text-white">
                  Oticon Hearing Aids
                </a>
              </li>
              <li>
                <a href="/hearing-aids/starkey" className="hover:text-white">
                  Starkey Hearing Aids
                </a>
              </li>
              <li>
                <a href="/hearing-aids/signia" className="hover:text-white">
                  Signia Hearing Aids
                </a>
              </li>
              <li>
                <a href="/hearing-aids/resound" className="hover:text-white">
                  ReSound Hearing Aids
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact-us" className="hover:text-white">
                  Free Appointment
                </a>
              </li>
              <li>
                <a href="/guide" className="hover:text-white">
                  Hearing Aid Guide
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Warranty & Repairs
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Financing Options
                </a>
              </li>
              <li>
                <a href="/our-experts" className="hover:text-white">
                  Our Audiologists &amp; Experts
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🌟 Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://youtube.com/@insonohearing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="https://www.instagram.com/insono_hearing_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/insonohearingsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/insonohearing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* ✅ Google & Trustpilot Reviews Badges */}
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/RvRyJE8vQqNQnhNF8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Image
                src="/badge/google.webp" // place your PNG/SVG in /public/badges/
                alt="Google Reviews"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <a
              href="https://www.trustpilot.com/review/insonohearing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Image
                src="/badge/trustpilot.webp" // place your PNG/SVG in /public/badges/
                alt="Trustpilot Reviews"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <a href="/policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>

        {/* ⚖️ Copyright */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} Insono Hearing. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built with <FaBrain className="inline mx-1 text-[#E7F3FF]" /> by{" "}
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
