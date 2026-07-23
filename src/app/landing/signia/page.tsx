import BrandNearMePage, { generateMetadata as brandMetadata } from "../brand-near-me/[brand]/page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return brandMetadata({ params: Promise.resolve({ brand: "signia" }) });
}

export default async function SigniaPage() {
  return BrandNearMePage({ params: Promise.resolve({ brand: "signia" }) });
}
