import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReSound Hearing Aids in Chandigarh | Smart Connectivity | Insono Hearing",
  description: "Discover ReSound Nexia and OMNIA hearing aids in Chandigarh. Expert audiologists, free clinical trials & genuine warranty. EMI starts at ₹999.",
  keywords: ["hearing aids chandigarh", "hearing test chandigarh", "audiologist chandigarh", "invisible hearing aids india"],
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
