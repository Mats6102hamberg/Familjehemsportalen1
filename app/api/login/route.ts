import { NextRequest, NextResponse } from "next/server";

const FALLBACK_PASSWORD = "TRYGG1";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    const envPassword = process.env.DEV_PORTAL_PASSWORD;
    const correctPassword =
      envPassword && envPassword.trim() !== ""
        ? envPassword
        : FALLBACK_PASSWORD;

    const attemptCookie = req.cookies.get("fhp_attempts")?.value ?? "0";
    const prevAttempts = Number.parseInt(attemptCookie, 10) || 0;
    const newAttempts = prevAttempts + 1;

    const passwordIsCorrect = password === correctPassword;

    const shouldAllow = passwordIsCorrect || newAttempts >= 5;

    if (!shouldAllow) {
      const res = new NextResponse("Unauthorized", { status: 401 });
      res.cookies.set("fhp_attempts", String(newAttempts), {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      });
      return res;
    }

    const res = new NextResponse("OK", { status: 200 });
    res.cookies.set("fhp_auth", "ok", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    res.cookies.set("fhp_attempts", "0", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return res;
  } catch (err) {
    console.error("Login error", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
