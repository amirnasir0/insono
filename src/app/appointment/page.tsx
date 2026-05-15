import type { Metadata } from "next";
import AppointmentFormClient from "./AppointmentFormClient";

export const metadata: Metadata = {
  title: "Book a Free Hearing Test — 15+ Clinics Across India | Insono Hearing",
  description:
    "Book a free hearing test with a certified audiologist at any Insono clinic. No obligation, no cost. Available Mon–Sun, 10 AM–7 PM across 15+ cities including Delhi, Mumbai, Noida, Lucknow & more.",
  alternates: {
    canonical: "https://www.insonohearing.com/appointment",
  },
  openGraph: {
    title: "Book a Free Hearing Test | Insono Hearing",
    description:
      "Free hearing test with certified audiologists. 15+ clinics across India — Delhi, Mumbai, Noida & more. Open Mon–Sun, 10 AM–7 PM.",
    url: "https://www.insonohearing.com/appointment",
    siteName: "Insono Hearing Solutions",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.insonohearing.com/logo.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Hearing Test | Insono Hearing",
    description:
      "Free hearing test at 15+ Insono clinics across India. No cost, no obligation. Open daily.",
  },
};

export default function AppointmentPage() {
  return <AppointmentFormClient />;
}
