import { prisma } from "@/lib/database";
import { API_Error, handleServerError } from "@/lib/utils";
import { postSchema } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { content, quote, slug, title, image } = postSchema
      .omit({ id: true, comments: true, date: true })
      .parse(await request.json());

    const post = await prisma.post.create({
      data: {
        quote,
        slug,
        title,
        image,
        content,
      },
    });
    if (!post) throw new API_Error("Cannot save post", 400);
    return NextResponse.json({ message: "Post Published" });
  } catch (error) {
    return handleServerError(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (id) {
      const post = await prisma.post.findUnique({
        where: { id },
      });
      if (!post) throw new API_Error("Post not found", 404);
      return NextResponse.json(post);
    }

    const slug = request.nextUrl.searchParams.get("slug");
    if (slug) {
      const post = await prisma.post.findUnique({
        where: { slug },
      });
      if (!post) throw new API_Error("Post not found", 404);
      return NextResponse.json(post);
    }

    const posts = await prisma.post.findMany({ include: { comments: true } });
    return NextResponse.json(posts);
  } catch (error) {
    return handleServerError(error);
  }
}
