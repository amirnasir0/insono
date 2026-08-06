import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { clinics as staticClinics } from "@/app/our-clinic/clinics-data";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const clinic = await prisma.clinic.findUnique({ where: { id } });
    if (clinic) {
      return NextResponse.json(clinic);
    }

    const staticItem = staticClinics.find((c) => c.id === id);
    if (staticItem) {
      return NextResponse.json({
        id: staticItem.id,
        name: staticItem.name,
        city: staticItem.city || "",
        state: staticItem.state || "",
        locationLine: staticItem.locationLine,
        address: staticItem.address,
        hours: staticItem.hours,
        tag: staticItem.tag || "Clinic",
        isNew: staticItem.isNew ?? false,
        placeId: staticItem.placeId || "",
        images: staticItem.images,
        faqs: staticItem.faqs || [],
        isActive: true,
      });
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  } catch (error) {
    console.error("GET /api/admin/clinics/[id] error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { name, city, state, locationLine, address, hours, tag, isNew, placeId, images, faqs, isActive } = body;

    const dataPayload = {
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
    };

    const clinic = await prisma.clinic.upsert({
      where: { id },
      create: {
        id,
        ...dataPayload,
      },
      update: dataPayload,
    });

    return NextResponse.json(clinic);
  } catch (error) {
    console.error("PUT /api/admin/clinics/[id] error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await prisma.clinic.delete({ where: { id } }).catch(() => null);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/clinics/[id] error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}
