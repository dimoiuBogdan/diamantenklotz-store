import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// Simple in-memory store for rate limiting
// Note: In production, use Redis or similar for distributed systems
const rateLimit = new Map();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;

// SEO-related paths that should not have locale prefixes
const SEO_PATHS = [
  "/sitemap.xml",
  "/robots.txt",
  "/sitemap-0.xml",
  "/products-sitemap.xml",
];

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle static files and API routes first
  if (
    pathname.match(/\.(ico|jpg|jpeg|png|gif|svg|js|css|txt)$/) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/")
  ) {
    return handleSecurityHeaders(request);
  }

  // Check if the current path is a SEO path
  const isSeoPath = SEO_PATHS.some((path) => pathname === path);

  // If it's a SEO path, bypass the locale handling completely
  if (isSeoPath) {
    return NextResponse.next();
  }

  // For unknown pages, redirect to the 404 page with the default locale
  if (!isSeoPath && !pathname.startsWith(`/${routing.defaultLocale}`)) {
    const segments = pathname.split("/").filter(Boolean);
    const isLocalePresent = routing.locales.includes(segments[0] as any);

    if (!isLocalePresent) {
      return NextResponse.redirect(
        new URL(`/${routing.defaultLocale}${pathname}`, request.url)
      );
    }
  }

  // Handle internationalization
  const response = await intlMiddleware(request);

  // Apply security headers to the response from next-intl middleware
  return applySecurityHeaders(request, response);
}

function applySecurityHeaders(request: NextRequest, response: NextResponse) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    connect-src 'self';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
  `;

  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const headers = response.headers;
  headers.set(
    "Permissions-Policy",
    [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "cross-origin-isolated=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=(self)",
      "geolocation=()",
      "gyroscope=()",
      "keyboard-map=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=()",
      "picture-in-picture=()",
      "publickey-credentials-get=()",
      "screen-wake-lock=()",
      "sync-xhr=()",
      "usb=()",
      "web-share=()",
      "xr-spatial-tracking=()",
      "clipboard-read=()",
      "clipboard-write=(self)",
      "interest-cohort=()",
    ].join(", ")
  );

  headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set("X-Security-Headers-Timestamp", Date.now().toString());

  return response;
}

function handleSecurityHeaders(request: NextRequest) {
  return applySecurityHeaders(
    request,
    NextResponse.next({
      request: {
        headers: new Headers(request.headers),
      },
    })
  );
}

// Enhanced matcher configuration
export const config = {
  matcher: [
    // Match all paths except static files, api routes, and _next
    "/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt).*)",

    // Include API routes for rate limiting
    "/api/:path*",

    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(de|en|ro)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
