"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CATEGORIES,
  DEFAULT_PREFERENCES,
  hasUserMadeChoice,
  savePreferences,
  type CookiePreferences,
} from "./cookieUtils";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    if (!hasUserMadeChoice()) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const acceptedPreferences: CookiePreferences = {
      ...DEFAULT_PREFERENCES,
      [COOKIE_CATEGORIES.ANALYTICS]: true,
      [COOKIE_CATEGORIES.MARKETING]: true,
      [COOKIE_CATEGORIES.PREFERENCES]: true,
    };

    savePreferences(acceptedPreferences);
    setShowBanner(false);
    // Enable analytics
    window.localStorage.setItem("analytics-enabled", "true");
    // Reload to apply changes
    window.location.reload();
  };

  const handleReject = () => {
    savePreferences(DEFAULT_PREFERENCES);
    setShowBanner(false);
    // Disable analytics
    window.localStorage.setItem("analytics-enabled", "false");
    // Reload to apply changes
    window.location.reload();
  };

  const handleCustomize = () => {
    // Open cookie preferences page
    window.location.href = "/cookie-preferences";
  };

  // Don't render anything until client-side hydration is complete
  if (!mounted) return null;
  if (!showBanner) return null;

  return (
    <div
      suppressHydrationWarning
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-[var(--main-dark)] bg-[var(--main-lightest)] p-4 shadow-lg md:p-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h2
              suppressHydrationWarning
              className="mb-2 text-lg font-semibold text-[var(--main-darker)]"
            >
              We value your privacy
            </h2>
            <p
              suppressHydrationWarning
              className="text-sm text-[var(--main-dark)]"
            >
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              "Accept", you consent to our use of cookies. Read our{" "}
              <a
                href="/privacy-policy"
                className="text-[var(--main-darker)] underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/cookie-policy"
                className="text-[var(--main-darker)] underline"
              >
                Cookie Policy
              </a>{" "}
              for more information.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <button
              onClick={handleCustomize}
              className="cursor-pointer rounded-md border border-[var(--main-darker)] px-4 py-2 text-sm font-medium text-[var(--main-darker)] hover:bg-[var(--main-lighter)]"
            >
              Customize
            </button>
            <button
              onClick={handleReject}
              className="cursor-pointer rounded-md border border-[var(--main-darker)] px-4 py-2 text-sm font-medium text-[var(--main-darker)] hover:bg-[var(--main-lighter)]"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="cursor-pointer rounded-md bg-[var(--main-darker)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--main-dark)]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
