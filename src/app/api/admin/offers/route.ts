import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const offers = await prisma.offer.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(offers);
  } catch (error) {
    console.error("GET /api/admin/offers error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { name, badge, tagline, discount, endsAt } = body;

    if (!name || !badge || !tagline || !discount || !endsAt) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const offer = await prisma.offer.create({
      data: {
        name,
        badge,
        tagline,
        discount,
        endsAt: new Date(endsAt),
        isActive: false,
      },
    });

    return NextResponse.json(offer, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/offers error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
