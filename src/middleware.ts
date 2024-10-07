import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token");

  const isAuthPage =
    path.startsWith("/login");

  // Redirect unauthenticated users to /login
  if (path !== "/login" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect authenticated users away from auth pages (like login)
  if (path === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/booking",
    "/reviews",
    "/setting",
    "/login",
    "/register",
    "/auth/login",
    "/users/:path*",
    "/tour/:path*",
    "/hotel/:path*",
    "/restaurant/:path*",
    "/cab/:path*",
  ],
};
