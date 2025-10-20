import { prisma } from "@/lib/database";
import { handleServerError } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const postCount = await prisma.post.count();
    const commentCounts = await prisma.comment.count();
    const messageCounts = await prisma.contact.count();

    const recentPosts = await prisma.post.findMany({
      orderBy: { date: "desc" },
      take: 3,
    });

    const recentMessages = await prisma.contact.findMany({
      orderBy: { date: "desc" },
      take: 3,
    });
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const postCountThisWeek = await prisma.post.count({
      where: {
        date: {
          gte: sevenDaysAgo,
        },
      },
    });

    const commentCountThisWeek = await prisma.comment.count({
      where: {
        date: {
          gte: sevenDaysAgo,
        },
      },
    });

    const messageCountThisWeek = await prisma.contact.count({
      where: {
        date: {
          gte: sevenDaysAgo,
        },
      },
    });

    const recentActivity =
      postCountThisWeek + commentCountThisWeek + messageCountThisWeek;

    return NextResponse.json({
      postCount,
      commentCounts,
      messageCounts,
      recentPosts,
      recentMessages,
      recentActivity,
    });
  } catch (error) {
    return handleServerError(error);
  }
}
