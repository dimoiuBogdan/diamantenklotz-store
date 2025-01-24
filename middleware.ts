import { NextResponse, type NextRequest } from "next/server";

// Simple in-memory store for rate limiting
// Note: In production, use Redis or similar for distributed systems
const rateLimit = new Map();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;

function getRateLimitInfo(ip: string): { count: number; timestamp: number } {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  // Clean up old entries
  for (const [key, value] of rateLimit.entries()) {
    if (value.timestamp < windowStart) {
      rateLimit.delete(key);
    }
  }

  const currentLimit = rateLimit.get(ip) || { count: 0, timestamp: now };
  if (currentLimit.timestamp < windowStart) {
    return { count: 0, timestamp: now };
  }
  return currentLimit;
}

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();
  const headers = response.headers;

  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";
  const rateLimitInfo = getRateLimitInfo(ip);

  // Update rate limit info
  if (rateLimitInfo.count >= MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": "60",
        "X-RateLimit-Limit": MAX_REQUESTS_PER_WINDOW.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": (Math.floor(Date.now() / 1000) + 60).toString(),
      },
    });
  }

  rateLimit.set(ip, {
    count: rateLimitInfo.count + 1,
    timestamp: Date.now(),
  });

  // Add rate limit headers
  headers.set("X-RateLimit-Limit", MAX_REQUESTS_PER_WINDOW.toString());
  headers.set(
    "X-RateLimit-Remaining",
    (MAX_REQUESTS_PER_WINDOW - rateLimitInfo.count - 1).toString()
  );

  // Enhanced Content Security Policy
  headers.set(
    "Content-Security-Policy",
    [
      // Default restrictive policy
      "default-src 'self'",

      // Scripts - Allow Umami analytics and other necessary scripts
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cloud.umami.is",

      // Styles - Allow inline styles for dynamic styling
      "style-src 'self' 'unsafe-inline'",

      // Images - Allow data URIs, blobs, and HTTPS sources
      "img-src 'self' data: blob: https:",

      // Fonts - Restrict to self-hosted
      "font-src 'self'",

      // Media - Restrict to self-hosted
      "media-src 'self'",

      // Object/Embed - Block all
      "object-src 'none'",

      // Base URI - Restrict to origin
      "base-uri 'self'",

      // Form actions - Restrict to origin
      "form-action 'self'",

      // Frame ancestors - Block embedding
      "frame-ancestors 'none'",

      // Connect sources - Allow API and analytics
      "connect-src 'self' https://cloud.umami.is",

      // Worker sources - Restrict to origin
      "worker-src 'self'",

      // Manifest sources - Restrict to origin
      "manifest-src 'self'",

      // Require HTTPS
      "block-all-mixed-content",
      "upgrade-insecure-requests",

      // Trusted Types (if supported)
      ...(process.env.NODE_ENV === "production"
        ? ["require-trusted-types-for 'script'"]
        : []),
    ].join("; ")
  );

  // Enhanced Permissions Policy
  headers.set(
    "Permissions-Policy",
    [
      "accelerometer=()",
      "ambient-light-sensor=()",
      "autoplay=()",
      "battery=()",
      "camera=()",
      "cross-origin-isolated=()",
      "display-capture=()",
      "document-domain=()",
      "encrypted-media=()",
      "execution-while-not-rendered=()",
      "execution-while-out-of-viewport=()",
      "fullscreen=(self)",
      "geolocation=()",
      "gyroscope=()",
      "keyboard-map=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "navigation-override=()",
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

  // Rest of the security headers
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
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");

  // Add security timestamp for cache busting
  headers.set("X-Security-Headers-Timestamp", Date.now().toString());

  return response;
}

// Enhanced matcher configuration
export const config = {
  matcher: [
    // Match all paths except static files, api routes, and _next
    "/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt).*)",

    // Include API routes for rate limiting
    "/api/:path*",
  ],
};
