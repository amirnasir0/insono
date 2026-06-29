import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const clinic = await prisma.clinic.findUnique({ where: { id } });
    if (!clinic) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(clinic);
  } catch (error) {
    console.error("GET /api/admin/clinics/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { name, city, state, locationLine, address, hours, tag, placeId, images, faqs, isActive } = body;

    const clinic = await prisma.clinic.update({
      where: { id },
      data: {
        name,
        city,
        state,
        locationLine,
        address,
        hours,
        tag,
        placeId: placeId || null,
        images,
        faqs,
        isActive,
      },
    });

    return NextResponse.json(clinic);
  } catch (error) {
    console.error("PUT /api/admin/clinics/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await prisma.clinic.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/clinics/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
