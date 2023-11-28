import { NextResponse } from "next/server.js";
import * as jose from "jose";

export default async function middleware(request) {
  //ambil token dari cookie
  const token = request.cookies.get("token")?.value;

  if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/login") {
    if(token){
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.rewrite(new URL("/login", request.nextUrl));
  }

  if (token) {
    try {
      const secretKey = new TextEncoder().encode(
        process.env.NEXT_PUBLIC_SECRET_KEY
      );
      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
