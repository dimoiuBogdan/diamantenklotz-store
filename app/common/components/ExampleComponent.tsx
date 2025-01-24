"use client";

import { useSafeStorage } from "@/app/lib/storageUtils";
import { useEffect, useState } from "react";

interface UserPreferences {
  theme: "light" | "dark";
  fontSize: "small" | "medium" | "large";
}

export default function ExampleComponent() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: "light",
    fontSize: "medium",
  });

  // Initialize safe storage with a key and default value
  const storage = useSafeStorage<UserPreferences>("user-preferences", {
    theme: "light",
    fontSize: "medium",
  });

  // Load preferences on component mount
  useEffect(() => {
    const savedPreferences = storage.getValue();
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, []);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    const newPreferences = { ...preferences, ...updates };
    setPreferences(newPreferences);
    // This will only save if the user has accepted preferences cookies
    storage.setValue(newPreferences);
  };

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="mb-2 text-lg font-semibold">Theme Preference</h2>
        <select
          value={preferences.theme}
          onChange={(e) =>
            updatePreferences({ theme: e.target.value as "light" | "dark" })
          }
          className="rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Font Size</h2>
        <select
          value={preferences.fontSize}
          onChange={(e) =>
            updatePreferences({
              fontSize: e.target.value as "small" | "medium" | "large",
            })
          }
          className="rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Note: Your preferences will only be saved if you've accepted preferences
        cookies in our{" "}
        <a href="/cookie-preferences" className="text-blue-600 underline">
          cookie settings
        </a>
        .
      </div>
    </div>
  );
}
