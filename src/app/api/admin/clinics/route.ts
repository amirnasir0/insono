import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

function generateSlug(city: string, state: string): string {
  return `${city}-${state}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export async function GET() {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const clinics = await prisma.clinic.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(clinics);
  } catch (error) {
    console.error("GET /api/admin/clinics error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { name, city, state, locationLine, address, hours, tag, isNew, placeId, images, faqs, isActive, customId } = body;

    if (!name || !city || !state || !address) {
      return NextResponse.json({ error: "Name, city, state, and address are required" }, { status: 400 });
    }

    let id = customId?.trim() || generateSlug(city, state);
    const existing = await prisma.clinic.findUnique({ where: { id } });
    if (existing) id = `${id}-${Date.now()}`;

    const clinic = await prisma.clinic.create({
      data: {
        id,
        name,
        city,
        state,
        locationLine: locationLine || `${city} — ${state}`,
        address,
        hours: hours || "Open, Closes by 7 pm",
        tag: tag || "Clinic",
        isNew: isNew ?? false,
        placeId: placeId || null,
        images: images ?? [],
        faqs: faqs ?? [],
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(clinic, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/clinics error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}
