import { prisma } from "@/lib/database";
import { getUserIdFromCookie } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const currentUserId = await getUserIdFromCookie(request);

    const user = await prisma.user.findUnique({ where: { id: currentUserId } });
    if (!user) throw new Error("Unauthorized");

    return NextResponse.json({
      message: "User found",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message, error, user: null },
      { status: 401 },
    );
  }
}
