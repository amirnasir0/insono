import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signia Hearing Aids in Chandigarh | Latest Models & Best Prices",
  description: "Experience the latest Signia IX Platform and Silk hearing aids in Chandigarh. Get free trials, expert fitting, and best prices on all Signia models at Insono.",
  keywords: ["signia hearing aids chandigarh", "hearing test chandigarh", "audiologist chandigarh", "invisible hearing aids india"],
};

export default function ChandigarhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
