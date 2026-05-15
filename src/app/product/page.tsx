import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Hearing Aids — All Models & Brands | Insono Hearing",
  description:
    "Browse all hearing aid models from Signia, Phonak, Widex, Oticon & Starkey. Filter by brand, technology & style. Genuine products with warranty. Price list available.",
  alternates: { canonical: "https://www.insonohearing.com/product" },
  openGraph: {
    title: "All Hearing Aid Models | Insono Hearing",
    description: "Explore hearing aids from top brands — Signia, Phonak, Widex, Oticon. Genuine products, expert fitting, free trial.",
    url: "https://www.insonohearing.com/product",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
