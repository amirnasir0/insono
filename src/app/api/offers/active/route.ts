import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const offer = await prisma.offer.findFirst({ where: { isActive: true } });
    return NextResponse.json(offer);
  } catch (error) {
    console.error("GET /api/offers/active error:", error);
    return NextResponse.json(null);
  }
}
