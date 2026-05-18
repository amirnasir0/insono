import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { name, badge, tagline, discount, endsAt } = body;

    if (!name || !badge || !tagline || !discount || !endsAt) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const offer = await prisma.offer.update({
      where: { id },
      data: { name, badge, tagline, discount, endsAt: new Date(endsAt) },
    });

    return NextResponse.json(offer);
  } catch (error) {
    console.error("PUT /api/admin/offers/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PATCH — toggle active (activates this offer, deactivates all others)
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const { isActive } = await req.json();

    if (isActive) {
      // Deactivate all, then activate the target
      await prisma.offer.updateMany({ data: { isActive: false } });
    }

    const offer = await prisma.offer.update({
      where: { id },
      data: { isActive },
    });

    return NextResponse.json(offer);
  } catch (error) {
    console.error("PATCH /api/admin/offers/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await prisma.offer.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/offers/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
