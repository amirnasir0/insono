import BrandNearMePage, { generateMetadata as brandMetadata } from "../brand-near-me/[brand]/page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return brandMetadata({ params: Promise.resolve({ brand: "widex" }) });
}

export default async function WidexPage() {
  return BrandNearMePage({ params: Promise.resolve({ brand: "widex" }) });
}
