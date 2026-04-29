import Link from "next/link";
import Image from "next/image";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/landing/competitor">
            <Image src="/logo.webp" alt="Insono Hearing" width={100} height={30} className="h-6 w-auto" />
          </Link>
          <Link href="/landing/competitor" className="text-sm font-bold text-blue-600 hover:underline">
            ← Back to Landing Page
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16 bg-white my-12 rounded-[2.5rem] shadow-sm border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-slate-900">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8">Effective Date: April 29, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <p>
              Welcome to Insono Hearing. By accessing or using our website, products, and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions, along with our Privacy Policy. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">2. Use of Website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to use this website.</li>
              <li>You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of others.</li>
              <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-xl font-black text-blue-900 mb-4">3. Medical Disclaimer</h2>
            <p className="text-blue-800">
              The content on this website is provided for informational purposes only and should not be considered medical advice. Always consult a qualified audiologist, ENT specialist, or healthcare provider before making decisions regarding your hearing health. Insono Hearing is not liable for any outcomes resulting from self-diagnosis or misuse of information provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">4. Products and Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We provide hearing aids, accessories, and related services. Product specifications, pricing, and availability are subject to change without prior notice.</li>
              <li>All purchases are subject to our Refund & Return Policy.</li>
              <li>We reserve the right to refuse service or cancel orders if fraudulent or unauthorized activity is suspected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">5. Pricing and Payment</h2>
            <p>
              All prices listed on our website are in INR and include/exclude applicable taxes (as stated). Payments must be made through approved payment gateways. We are not responsible for delays, errors, or charges imposed by third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">6. Intellectual Property</h2>
            <p>
              All website content including text, graphics, images, videos, and logos are the property of Insono Hearing or its licensors and are protected by copyright laws. You may not copy, reproduce, distribute, or exploit any content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              Insono Hearing shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our website, products, or services. We make no guarantees that the website will be error-free, uninterrupted, or virus-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms and Conditions, you can contact us at:
              <br /><br />
              <strong>Insono Hearing</strong><br />
              Email: care@insonohearing.com<br />
              Phone: 6204260510<br />
              Address: D-251, Ground Floor, D Block, West Vinod Nagar, New Delhi - 110092
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          © 2026 Insono Hearing. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
