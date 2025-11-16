import { NextRequest, NextResponse } from "next/server";

const PASSCODE = process.env.PORTAL_PASSCODE ?? "TRYGG1";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const code = body?.code as string | undefined;

  if (!code || code !== PASSCODE) {
    return NextResponse.json(
      { ok: false, error: "Fel kod. Försök igen." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("portal_auth", "ok", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 vecka
  });

  return res;
}
