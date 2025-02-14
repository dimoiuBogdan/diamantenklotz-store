// app/PostHogPageView.jsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Suspense, useEffect } from "react";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    let url = window.origin + pathname;
    if (searchParams.toString()) {
      url = url + `?${searchParams.toString()}`;
    }

    // Capture page view with additional properties
    posthog.capture("$pageview", {
      $current_url: url,
      path: pathname,
      search: searchParams.toString(),
      referrer: document.referrer,
      title: document.title,
    });

    // Add leave event listener
    const handleLeave = () => {
      posthog.capture("$pageleave", {
        $current_url: url,
        path: pathname,
      });
    };

    window.addEventListener("beforeunload", handleLeave);

    return () => {
      window.removeEventListener("beforeunload", handleLeave);
    };
  }, [pathname, searchParams, posthog]);

  return null;
}

// Wrap this in Suspense to avoid the `useSearchParams` usage above
// from de-opting the whole app into client-side rendering
// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
export default function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}
