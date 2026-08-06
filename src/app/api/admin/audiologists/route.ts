import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const dbExperts = await (prisma as any).audiologist.findMany({
      orderBy: [{ orderIndex: "asc" }, { createdAt: "desc" }],
    });

    return NextResponse.json(dbExperts);
  } catch (error) {
    console.error("GET /api/admin/audiologists error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { name, designation, experience, photo, testimonial, youtubeUrl, isActive, orderIndex } = body;

    if (!name || !designation || !photo || !testimonial) {
      return NextResponse.json(
        { error: "Name, designation, photo, and testimonial are required" },
        { status: 400 }
      );
    }

    const expert = await (prisma as any).audiologist.create({
      data: {
        name,
        designation,
        experience: experience || "Hearing Care Specialist",
        photo,
        testimonial,
        youtubeUrl: youtubeUrl?.trim() || null,
        isActive: isActive ?? true,
        orderIndex: Math.max(0, Number(orderIndex) || 0),
      },
    });

    return NextResponse.json(expert, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/audiologists error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
