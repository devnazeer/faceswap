import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./i18n/settings";

acceptLanguage.languages(languages);

export function middleware(req) {
  let lng;
  if (req.cookies.has("NEXT_LOCALE"))
    lng = req.cookies.get("NEXT_LOCALE").value;
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if no locale in pathname
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith("")) &&
    !req.nextUrl.pathname.startsWith("")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
