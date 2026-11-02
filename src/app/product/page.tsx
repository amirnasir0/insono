import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ProductsClient from "./ProductsClient";

export const revalidate = 60;

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

export default async function ProductsPage() {
  // Fetched on the server so the grid is in the initial HTML. Only the fields
  // the cards show are sent to the browser (no descriptions).
  const products = await prisma.product
    .findMany({
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        mrp: true,
        isFeatured: true,
        images: true,
        technology: true,
      },
    })
    .catch(() => []);

  return (
    <ProductsClient
      products={products.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        category: p.category,
        mrp: p.mrp,
        isFeatured: p.isFeatured,
        image: p.images[0] ?? null,
        technology: p.technology.slice(0, 2),
      }))}
    />
  );
}
