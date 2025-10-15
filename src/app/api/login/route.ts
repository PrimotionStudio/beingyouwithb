import { prisma } from "@/lib/database";
import { API_Error, handleServerError } from "@/lib/utils";
import { userSchema } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = userSchema
      .omit({ id: true })
      .parse(await request.json());

    // Add New User
    // const hash = await bcrypt.hash(password, await bcrypt.genSalt());
    // const user = await prisma.user.create({
    //   data: {
    //     password: hash,
    //     username,
    //   },
    // });

    // Login
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) throw new API_Error("Invalid username or password", 400);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new API_Error("Invalid username or password", 400);

    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const token = await new SignJWT(user)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("5h")
      .sign(secret);

    const response = NextResponse.json({ message: "Login successful" });
    response.cookies.set("beingyouwithb-admin.token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 5,
    });
    return response;
  } catch (error) {
    return handleServerError(error);
  }
}
