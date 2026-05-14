import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hearing Aids in Chandigarh | Free Test & Trial | Insono Hearing",
  description: "Experience 100% invisible hearing aids in Chandigarh. Authorized partner for Signia, Phonak & Widex. Get a free clinical hearing test & trial today. EMI starts at ₹999.",
  keywords: ["hearing aids chandigarh", "hearing test chandigarh", "audiologist chandigarh", "invisible hearing aids india"],
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
