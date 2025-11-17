import { NextResponse } from "next/server";

export async function POST() {
  const res = new NextResponse("Logged out", { status: 200 });

  res.cookies.set("portal_auth", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return res;
}
