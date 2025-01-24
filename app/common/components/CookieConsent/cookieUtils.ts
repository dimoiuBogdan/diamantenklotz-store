export const COOKIE_CONSENT_KEY = "lab-grown-diamonds-cookie-consent";
export const COOKIE_PREFERENCES_KEY = "cookie-preferences";

export function setCookie(
  name: string,
  value: string,
  days: number,
  path = "/"
) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=" +
    path +
    "; SameSite=Lax; Secure";
}

export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

export function deleteCookie(name: string, path = "/") {
  setCookie(name, "", -1, path);
}

export function getAllCookies(): { [key: string]: string } {
  const cookies: { [key: string]: string } = {};
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    const [key, value] = c.split("=");
    if (key && value) {
      cookies[key] = decodeURIComponent(value);
    }
  }

  return cookies;
}

export const COOKIE_CATEGORIES = {
  NECESSARY: "necessary",
  ANALYTICS: "analytics",
  MARKETING: "marketing",
  PREFERENCES: "preferences",
} as const;

export type CookieCategory =
  (typeof COOKIE_CATEGORIES)[keyof typeof COOKIE_CATEGORIES];

export interface CookieConfig {
  name: string;
  category: CookieCategory;
  description: string;
  duration: string;
}

export const COOKIE_CONFIGS: CookieConfig[] = [
  {
    name: COOKIE_CONSENT_KEY,
    category: COOKIE_CATEGORIES.NECESSARY,
    description: "Stores your cookie preferences",
    duration: "1 year",
  },
  {
    name: "umami.is",
    category: COOKIE_CATEGORIES.ANALYTICS,
    description: "Anonymous analytics to improve user experience",
    duration: "1 year",
  },
  // Add more cookie configurations as needed
];

export interface CookiePreferences {
  [COOKIE_CATEGORIES.NECESSARY]: true; // Always true
  [COOKIE_CATEGORIES.ANALYTICS]: boolean;
  [COOKIE_CATEGORIES.MARKETING]: boolean;
  [COOKIE_CATEGORIES.PREFERENCES]: boolean;
}

export const DEFAULT_PREFERENCES: CookiePreferences = {
  [COOKIE_CATEGORIES.NECESSARY]: true,
  [COOKIE_CATEGORIES.ANALYTICS]: false,
  [COOKIE_CATEGORIES.MARKETING]: false,
  [COOKIE_CATEGORIES.PREFERENCES]: false,
};

export function hasUserMadeChoice(): boolean {
  return Boolean(
    getCookie(COOKIE_CONSENT_KEY) || getCookie(COOKIE_PREFERENCES_KEY)
  );
}

export function savePreferences(preferences: CookiePreferences) {
  // Save detailed preferences
  setCookie(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences), 365);
  // Mark that user has made a choice
  setCookie(COOKIE_CONSENT_KEY, "custom", 365);
}
