import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { userSchema } from "./lib/zod";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const excludedPaths = ["/api/login"];

  if (excludedPaths.some((path) => pathname.startsWith(path)))
    return NextResponse.next();

  const token = req.cookies.get("beingyouwithb-admin.token")?.value;
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

  if (!token) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const { payload } = await jwtVerify(token, secret);
  if (!payload || userSchema.parse(payload)) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
