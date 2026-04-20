import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import OrderForm from "./OrderForm";

export const revalidate = 60;
export const dynamicParams = true;

type Product = {
  id: string;
  title: string;
  slug: string;
  category: string;
  mrp: number | null;
  images: string[];
};

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      select: { id: true, title: true, slug: true, category: true, mrp: true, images: true },
    });
    return product as Product | null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Order Not Found | Insono Hearing" };

  return {
    title: `Order ${product.title} — Cash on Delivery | Insono Hearing`,
    description: `Buy ${product.title} online with Cash on Delivery. Fill in your delivery address and our team will confirm your order.`,
    robots: { index: false },
  };
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return notFound();

  return <OrderForm product={product} />;
}
