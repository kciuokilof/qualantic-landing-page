import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "ab-variant";
const VARIANTS = ["a", "b"] as const;

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const existing = request.cookies.get(COOKIE_NAME)?.value;

  if (!existing || !VARIANTS.includes(existing as "a" | "b")) {
    const variant = Math.random() < 0.5 ? "a" : "b";
    response.cookies.set(COOKIE_NAME, variant, {
      httpOnly: false,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 90, // 90 days
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/"],
};
