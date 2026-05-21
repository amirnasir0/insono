import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/landing/signia-orion">
            <Image src="/logo.webp" alt="Insono Hearing" width={100} height={30} className="h-6 w-auto" />
          </Link>
          <Link href="/landing/signia-orion" className="text-sm font-bold text-blue-600 hover:underline">
            ← Back to Landing Page
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16 bg-white my-12 rounded-[2.5rem] shadow-sm border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-slate-900">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: September 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <p>
              At Insono Hearing, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal details such as your name, email address, phone number, and any information you share through forms or consultations. Additionally, we may collect non-personal data such as browser type, device information, and website usage statistics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To respond to inquiries and offer consultations</li>
              <li>To send important updates and promotional content (with your consent)</li>
              <li>To analyze site usage and enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">3. Sharing of Information</h2>
            <p>
              We do not sell or trade your personal information. Your data may be shared only with trusted partners who assist us in delivering our services, and always under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal data. To exercise these rights, please contact us at support@insonohearing.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at support@insonohearing.com.
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
