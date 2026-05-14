import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phonak Hearing Aids in Chandigarh | Free Test & Trial | Insono Hearing",
  description: "Experience the latest Phonak Audeo Sphere AI and Lumity hearing aids in Chandigarh. Authorized Phonak partner. Free clinical trial & expert consultation. EMI starts at ₹999.",
  keywords: ["hearing aids chandigarh", "hearing test chandigarh", "audiologist chandigarh", "invisible hearing aids india"],
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
