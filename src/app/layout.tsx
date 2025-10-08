// app/layout.tsx
import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Script from "next/script";
import StickyVideoWrapper from "@/components/StickyVideoWrapper";

export const metadata: Metadata = {
  title: {
    default: "Insono Hearing",
    template: "%s | Insono Hearing",
  },
  description: "Affordable, reliable hearing aids with local support.",
  keywords: [
    "Hearing Aids",
    "Affordable Hearing Solutions",
    "Insono Hearing",
    "Digital Hearing Aids",
    "Hearing Care",
  ],
  authors: [{ name: "Insono Hearing" }],
  creator: "Insono Hearing",
  metadataBase: new URL(
    "https://insonohearing.com"
  ),
  openGraph: {
    title: "Insono Hearing",
    description: "Affordable, reliable hearing aids with local support.",
    url: "https://insonohearing.com",
    siteName: "Insono Hearing",
    images: [
      {
        url: "https://insonohearing.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Insono Hearing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insono Hearing",
    description: "Affordable, reliable hearing aids with local support.",
    images: [
      "https://insonohearing.com/logo.webp",
    ],
    creator: "@insonohearing",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* External chatbot widget */}
      <Script
        src="https://chat-xbot.webspecia.in/js/widget/omf5pwsilxzzkba1/float.js"
        strategy="afterInteractive"
        async
        defer
      />
      <body className="font-museo bg-white text-gray-900 antialiased bg-gradient-to-b from-[#eaf5ff] to-white">
        <Navigation />
        {children}
        <Footer />

        {/* ✅ Sticky video visible on all pages except excluded ones */}
        <StickyVideoWrapper />
      </body>
    </html>
  );
}
