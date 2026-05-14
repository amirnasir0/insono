import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widex Hearing Aids in Chandigarh | Natural Sound Tech | Insono Hearing",
  description: "Experience the world's most natural-sounding Widex hearing aids in Chandigarh. Authorized Widex partner. Free trial, expert fitting & EMI starts at ₹999.",
  keywords: ["hearing aids chandigarh", "hearing test chandigarh", "audiologist chandigarh", "invisible hearing aids india"],
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
