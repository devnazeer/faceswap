import { NextResponse } from "next/server";

const VALID_LOCALES = ["en", "de", "es", "ru", "pt", "id"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Root path (/) should show English content directly
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Check if the path starts with a valid locale
  const pathnameHasValidLocale = VALID_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If it's /en, redirect to /
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.redirect(
      new URL(pathname.replace(/^\/en\/?/, "/"), request.url)
    );
  }

  // For non-English locales, keep the locale prefix
  if (!pathnameHasValidLocale && pathname !== "/") {
    // For blog routes without locale, show English version
    if (pathname.startsWith("/blog")) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// import { NextResponse } from "next/server";
// import { locales } from "@/lib/i18n";

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // If path starts with a locale (e.g., /en, /de), allow it
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}`)
//   );

//   if (pathnameIsMissingLocale) {
//     const defaultLocale = "en";
//     const url = request.nextUrl.clone();
//     url.pathname = `/${defaultLocale}${pathname}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     // Match all paths except for ones that already include a locale
//     "/((?!_next|favicon.ico|robots.txt|sitemap.xml|api).*)",
//   ],
// };
