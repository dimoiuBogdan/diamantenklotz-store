import {
  COOKIE_CATEGORIES,
  getCookie,
} from "../common/components/CookieConsent/cookieUtils";

interface StorageOperations {
  get: <T>(key: string) => T | null;
  set: <T>(key: string, value: T) => void;
  remove: (key: string) => void;
}

/**
 * Check if a specific cookie category is allowed based on user preferences
 */
export function isCookieCategoryAllowed(
  category: keyof typeof COOKIE_CATEGORIES
): boolean {
  // Necessary cookies are always allowed
  if (category === "NECESSARY") return true;

  try {
    const preferences = getCookie("cookie-preferences");
    if (!preferences) return false;

    const parsedPreferences = JSON.parse(preferences);
    return parsedPreferences[COOKIE_CATEGORIES[category]] === true;
  } catch (error) {
    console.error("Error checking cookie preferences:", error);
    return false;
  }
}

/**
 * Safe storage operations that respect cookie preferences
 */
export const safeStorage: StorageOperations = {
  get: <T>(key: string): T | null => {
    if (!isCookieCategoryAllowed("PREFERENCES")) {
      console.warn(
        "Storage access denied: Preferences cookies are not accepted"
      );
      return null;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading from storage:", error);
      return null;
    }
  },

  set: <T>(key: string, value: T): void => {
    if (!isCookieCategoryAllowed("PREFERENCES")) {
      console.warn(
        "Storage access denied: Preferences cookies are not accepted"
      );
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to storage:", error);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from storage:", error);
    }
  },
};

/**
 * Hook to use safe storage operations in components
 */
export function useSafeStorage<T>(key: string, initialValue: T) {
  return {
    getValue: () => safeStorage.get<T>(key) ?? initialValue,
    setValue: (value: T) => safeStorage.set(key, value),
    removeValue: () => safeStorage.remove(key),
  };
}
