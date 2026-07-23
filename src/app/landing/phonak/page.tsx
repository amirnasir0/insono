import BrandNearMePage, { generateMetadata as brandMetadata } from "../brand-near-me/[brand]/page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return brandMetadata({ params: Promise.resolve({ brand: "phonak" }) });
}

export default async function PhonakPage() {
  return BrandNearMePage({ params: Promise.resolve({ brand: "phonak" }) });
}
