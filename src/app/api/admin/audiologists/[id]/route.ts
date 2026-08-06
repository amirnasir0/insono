import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const dbExpert = await (prisma as any).audiologist.findUnique({ where: { id } });
    if (!dbExpert) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(dbExpert);
  } catch (error) {
    console.error("GET /api/admin/audiologists/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { name, designation, experience, photo, testimonial, youtubeUrl, isActive, orderIndex } = body;

    const dataPayload = {
      name,
      designation,
      experience: experience || "Hearing Care Specialist",
      photo,
      testimonial,
      youtubeUrl: youtubeUrl?.trim() || null,
      isActive: isActive ?? true,
      orderIndex: Math.max(0, Number(orderIndex) || 0),
    };

    const expert = await (prisma as any).audiologist.upsert({
      where: { id },
      create: {
        id,
        ...dataPayload,
      },
      update: dataPayload,
    });

    return NextResponse.json(expert);
  } catch (error) {
    console.error("PUT /api/admin/audiologists/[id] error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await (prisma as any).audiologist.delete({ where: { id } }).catch(() => null);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/audiologists/[id] error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
