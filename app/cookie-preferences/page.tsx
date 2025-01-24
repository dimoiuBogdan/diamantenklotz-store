"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CATEGORIES,
  COOKIE_CONFIGS,
  COOKIE_PREFERENCES_KEY,
  DEFAULT_PREFERENCES,
  getCookie,
  savePreferences,
  type CookiePreferences,
} from "../common/components/CookieConsent/cookieUtils";

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = getCookie(COOKIE_PREFERENCES_KEY);
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences((prev) => ({
          ...prev,
          ...parsed,
          [COOKIE_CATEGORIES.NECESSARY]: true, // Always enabled
        }));
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
      }
    }
  }, []);

  const handleToggle = (category: keyof typeof COOKIE_CATEGORIES) => {
    if (category === "NECESSARY") return; // Cannot disable necessary cookies

    setPreferences((prev) => {
      const updated = {
        ...prev,
        [COOKIE_CATEGORIES[category]]: !prev[COOKIE_CATEGORIES[category]],
      };

      return updated;
    });
  };

  const handleSave = () => {
    // Save preferences
    savePreferences(preferences);
    // Update analytics state if changed
    window.localStorage.setItem(
      "analytics-enabled",
      preferences[COOKIE_CATEGORIES.ANALYTICS] ? "true" : "false"
    );
    // Reload to apply changes
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-[var(--main-darker)]">
          Cookie Preferences
        </h1>
        <p className="text-[var(--main-dark)]">
          Manage your cookie preferences below. Some cookies are necessary for
          the website to function and cannot be disabled. For more information,
          please read our{" "}
          <a
            href="/cookie-policy"
            className="text-[var(--main-darker)] underline"
          >
            Cookie Policy
          </a>
          .
        </p>
      </div>

      <div className="space-y-6">
        {(
          Object.keys(COOKIE_CATEGORIES) as Array<
            keyof typeof COOKIE_CATEGORIES
          >
        ).map((category) => {
          const categoryConfigs = COOKIE_CONFIGS.filter(
            (config) => config.category === COOKIE_CATEGORIES[category]
          );

          return (
            <div
              key={category}
              className="rounded-lg border border-gray-200 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold capitalize text-[var(--main-darker)]">
                    {COOKIE_CATEGORIES[category]} Cookies
                  </h2>
                  <p className="text-sm text-[var(--main-dark)]">
                    {category === "NECESSARY"
                      ? "Required for the website to function properly"
                      : category === "ANALYTICS"
                        ? "Help us understand how visitors interact with our website"
                        : category === "MARKETING"
                          ? "Used to deliver personalized advertisements"
                          : "Store your website preferences"}
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={preferences[COOKIE_CATEGORIES[category]]}
                    onChange={() => handleToggle(category)}
                    disabled={category === "NECESSARY"}
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[var(--main-darker)] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-lighter)] peer-disabled:cursor-not-allowed peer-disabled:opacity-50"></div>
                </label>
              </div>

              {categoryConfigs.length > 0 && (
                <div className="mt-4 space-y-4">
                  {categoryConfigs.map((config) => (
                    <div
                      key={config.name}
                      className="rounded-md bg-gray-50 p-4"
                    >
                      <h3 className="mb-1 font-medium text-[var(--main-darker)]">
                        {config.name}
                      </h3>
                      <p className="text-sm text-[var(--main-dark)]">
                        {config.description}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Duration: {config.duration}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="rounded-md cursor-pointer bg-[var(--main-darker)] px-6 py-2 text-white hover:bg-[var(--main-dark)]"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
