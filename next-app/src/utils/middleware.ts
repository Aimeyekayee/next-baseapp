import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "th"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // redirect if locale not match
  if (pathnameIsMissingLocale) {
    // default locale
    let locale = "th";

    // locale cookie
    if (request.cookies.has("locale")) {
      let cookieLocale = request.cookies.get("locale")?.value;
      locale = cookieLocale || locale;
    }

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};