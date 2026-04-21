import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Return, Refund & Shipping Policy | Insono Hearing",
  description:
    "Read Insono Hearing's return and refund policy. We offer a 7-day return window on all hearing aid purchases with free standard shipping across India.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-[#023784] mb-3">{title}</h2>
    <div className="text-gray-700 space-y-3 leading-relaxed">{children}</div>
  </div>
);

export default function ReturnPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 mt-8 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#023784]">
        Return, Refund &amp; Shipping Policy
      </h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: April 2026</p>

      <Section title="1. Return Policy">
        <p>
          We want you to be completely satisfied with your purchase. If for any reason you are not happy
          with your hearing aid, you may return it within <strong>7 days of delivery</strong>.
        </p>
        <p>To be eligible for a return, the product must be:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Unused and in the same condition as received</li>
          <li>In its original packaging with all accessories included</li>
          <li>Accompanied by proof of purchase (order ID or receipt)</li>
        </ul>
        <p>
          Products that have been used, altered, or damaged after delivery are not eligible for return.
          Custom-fitted or in-the-ear (ITE/IIC/CIC) devices cannot be returned once fitted.
        </p>
      </Section>

      <Section title="2. How to Initiate a Return">
        <p>To start a return, contact our team within 7 days of receiving your order:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:insonohearing@gmail.com" className="text-[#023784] hover:underline">
              insonohearing@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919999999999" className="text-[#023784] hover:underline">
              Contact us
            </a>{" "}
            — see our{" "}
            <Link href="/contact-us" className="text-[#023784] hover:underline">
              Contact page
            </Link>
          </li>
        </ul>
        <p>
          Please include your order ID, the reason for return, and photos of the product if it arrived damaged.
          Our team will review your request and confirm within <strong>2 business days</strong>.
        </p>
      </Section>

      <Section title="3. Return Shipping">
        <p>
          The customer is responsible for the cost of return shipping. We recommend using a trackable courier
          service, as Insono Hearing is not responsible for items lost or damaged in transit during the return.
        </p>
        <p>
          Please ship the product to the address provided by our support team after your return is approved.
          Do not send products back without prior approval.
        </p>
      </Section>

      <Section title="4. Refund Policy">
        <p>
          Once we receive and inspect the returned product, we will notify you of the approval or rejection
          of your refund within <strong>3–5 business days</strong>.
        </p>
        <p>If approved, your refund will be processed as follows:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>COD orders:</strong> Refund via bank transfer (NEFT/IMPS) to your provided account
            details, within 5–7 business days of approval.
          </li>
          <li>
            <strong>Online payments:</strong> Refund to the original payment method within 5–7 business days.
          </li>
        </ul>
        <p>
          Shipping and handling charges (if any) are non-refundable unless the return is due to a
          defective or incorrect product sent by us.
        </p>
      </Section>

      <Section title="5. Damaged or Defective Products">
        <p>
          If you receive a product that is defective, damaged, or incorrect, please contact us within
          <strong> 48 hours of delivery</strong> with photos. In such cases, Insono Hearing will arrange
          a free replacement or full refund at no additional cost to you.
        </p>
      </Section>

      <Section title="6. Shipping Policy">
        <p>
          We offer <strong>free standard shipping</strong> across India on all orders.
        </p>
        <p>
          Orders are typically dispatched within <strong>1–2 business days</strong> of order confirmation.
          Estimated delivery time is <strong>5–7 business days</strong> from dispatch, depending on your location.
        </p>
        <p>
          All COD (Cash on Delivery) orders are confirmed by our team via phone before dispatch. Please ensure
          your phone number is reachable after placing the order.
        </p>
        <p>
          Currently, we deliver across most cities and towns in India. If you are unsure whether we deliver
          to your area, please{" "}
          <Link href="/contact-us" className="text-[#023784] hover:underline">
            contact us
          </Link>{" "}
          before placing an order.
        </p>
      </Section>

      <Section title="7. Non-Returnable Items">
        <ul className="list-disc pl-5 space-y-1">
          <li>Custom-fitted or in-the-ear hearing aids (ITE, IIC, CIC) once worn or fitted</li>
          <li>Accessories such as domes, wax filters, or batteries (for hygiene reasons)</li>
          <li>Products returned after the 7-day window</li>
          <li>Products without original packaging or proof of purchase</li>
        </ul>
      </Section>

      <Section title="8. Cancellations">
        <p>
          You may cancel your order <strong>before it is dispatched</strong> by contacting us as soon as possible.
          Once the product has been shipped, the standard return process applies.
        </p>
      </Section>

      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5 text-sm text-gray-700">
        <p className="font-semibold text-[#023784] mb-1">Have questions about your order?</p>
        <p>
          Reach out to us at{" "}
          <a href="mailto:insonohearing@gmail.com" className="text-[#023784] hover:underline font-medium">
            insonohearing@gmail.com
          </a>{" "}
          or visit our{" "}
          <Link href="/contact-us" className="text-[#023784] hover:underline font-medium">
            Contact page
          </Link>
          . We&apos;re happy to help.
        </p>
      </div>
    </main>
  );
}
