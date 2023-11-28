import { NextResponse } from "next/server.js";

export default function middleware(request) {
  //ambil token dari cookie
  const cookie = request.cookies.get("token")?.value;

  if (cookie) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard"],
};
