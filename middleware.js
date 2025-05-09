// middleware.js
import { NextResponse } from "next/server";
import { locales } from "./config";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // if (pathnameHasLocale) return;
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
