import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const redirects = await prisma.blogRedirect.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(redirects);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { oldSlug, newSlug } = await req.json();
  if (!oldSlug || !newSlug) {
    return NextResponse.json({ error: "oldSlug and newSlug are required" }, { status: 400 });
  }
  if (oldSlug === newSlug) {
    return NextResponse.json({ error: "oldSlug and newSlug must differ" }, { status: 400 });
  }

  const redirect = await prisma.blogRedirect.upsert({
    where: { oldSlug },
    update: { newSlug },
    create: { oldSlug, newSlug },
  });

  // Remove any redirect where newSlug was itself an old slug (avoid chains)
  await prisma.blogRedirect.deleteMany({ where: { oldSlug: newSlug } });

  return NextResponse.json(redirect, { status: 201 });
}
