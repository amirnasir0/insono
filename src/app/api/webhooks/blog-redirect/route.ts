import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { oldSlug, newSlug, secret } = body;

    if (secret !== process.env.BLOG_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!oldSlug || !newSlug || typeof oldSlug !== "string" || typeof newSlug !== "string") {
      return NextResponse.json({ error: "oldSlug and newSlug are required" }, { status: 400 });
    }

    if (oldSlug === newSlug) {
      return NextResponse.json({ message: "No change" }, { status: 200 });
    }

    await prisma.blogRedirect.upsert({
      where: { oldSlug },
      update: { newSlug },
      create: { oldSlug, newSlug },
    });

    // If newSlug was itself previously an old redirect, remove it to avoid chains
    await prisma.blogRedirect.deleteMany({ where: { oldSlug: newSlug } });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("blog-redirect webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
