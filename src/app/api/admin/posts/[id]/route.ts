import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(post);
  } catch (error) {
    console.error("GET /api/admin/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { title, category, excerpt, content, coverImage, images, location, isPublished } = body;

    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        category,
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        images,
        location: location || null,
        isPublished,
        publishedAt: isPublished && !existing.publishedAt ? new Date() : existing.publishedAt,
      },
    });

    revalidatePath("/stories");
    if (post.slug) revalidatePath(`/stories/${post.slug}`);

    return NextResponse.json(post);
  } catch (error) {
    console.error("PUT /api/admin/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const postToDelete = await prisma.post.findUnique({ where: { id }, select: { slug: true } });
    await prisma.post.delete({ where: { id } });

    revalidatePath("/stories");
    if (postToDelete?.slug) revalidatePath(`/stories/${postToDelete.slug}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/posts/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
