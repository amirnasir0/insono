import type { Metadata } from "next";
import TestimonialClient from "./TestimonialClient";

export const metadata: Metadata = {
  title: "Customer Testimonials & Reviews | Insono Hearing Solutions",
  description:
    "Read and watch real stories from 2 lakh+ Insono Hearing customers across India. Verified reviews, video testimonials, and patient journeys to better hearing.",
  alternates: { canonical: "https://www.insonohearing.com/testimonial" },
  openGraph: {
    title: "Real Customer Stories | Insono Hearing",
    description: "Watch video testimonials from real patients who transformed their hearing with Insono Hearing aids.",
    url: "https://www.insonohearing.com/testimonial",
  },
};

export default function TestimonialPage() {
  return <TestimonialClient />;
}
