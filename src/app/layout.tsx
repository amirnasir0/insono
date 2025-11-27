// app/layout.tsx
<<<<<<< HEAD
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
=======
import NavigationWrapper from "@/components/NavigationWrapper";
>>>>>>> 2ce7227 (new changes)
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

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
  metadataBase: new URL("https://insonohearing.com"),
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
    images: ["https://insonohearing.com/logo.webp"],
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
<<<<<<< HEAD
      <head>
        {/* Google site verification (kept from incoming branch) */}
        <meta
          name="google-site-verification"
          content="_w3rNIazk1WMe-urSCcrtpzyAcqTeopxMU1qqLd0p6k"
        />
      </head>
      <body className="font-museo bg-white text-gray-900 antialiased bg-gradient-to-b from-[#eaf5ff] to-white">
        <Navigation />

        <main>{children}</main>

        <Footer />

        {/* Optional: add analytics or other scripts here via next/script */}
        {/* Example:
        <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_ID');
          `}
        </Script>
        */}
=======
      <body className="font-museo bg-white text-gray-900 antialiased bg-gradient-to-b from-[#eaf5ff] to-white">
        <NavigationWrapper>{children}</NavigationWrapper>
>>>>>>> 2ce7227 (new changes)
      </body>
    </html>
  );
}
