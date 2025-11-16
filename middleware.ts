import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Släpp igenom Next.js interna filer och statiska resurser
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets")
  ) {
    return NextResponse.next();
  }

  // Offentliga sidor (utan inlogg)
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/ai")
  ) {
    return NextResponse.next();
  }

  const authCookie = req.cookies.get("portal_auth")?.value;

  if (authCookie === "ok") {
    return NextResponse.next();
  }

  // Inte inloggad → skicka till /login
  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("redirectTo", pathname);
  return NextResponse.redirect(loginUrl);
}

// Kör på alla routes utom Nexts egna statiska
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
