import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hearing Aids in Chandigarh | Top Brands | Insono Hearing",
  description: "Compare the best hearing aids from Signia, Phonak, and Widex in Chandigarh. Expert consultation, free hearing tests, and trial. EMI starts at ₹999.",
  keywords: ["hearing aids chandigarh", "hearing test chandigarh", "audiologist chandigarh", "invisible hearing aids india"],
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
