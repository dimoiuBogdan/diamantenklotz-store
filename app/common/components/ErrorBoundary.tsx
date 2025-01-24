"use client";

import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export default function ErrorBoundary({ children }: Props) {
  useEffect(() => {
    const handleError = (error: Error) => {
      // Log the error to your analytics/logging service
      console.error("Global error caught:", error);

      // You can send this to your error tracking service (e.g., Sentry)
      // if (process.env.NODE_ENV === "production") {
      //   Sentry.captureException(error);
      // }
    };

    window.addEventListener("error", (event) => handleError(event.error));
    window.addEventListener("unhandledrejection", (event) =>
      handleError(event.reason)
    );

    return () => {
      window.removeEventListener("error", (event) => handleError(event.error));
      window.removeEventListener("unhandledrejection", (event) =>
        handleError(event.reason)
      );
    };
  }, []);

  return children;
}

// Error component for the root error boundary
export function RootErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error when it occurs
    console.error("Root error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-[var(--main-darker)] sm:text-5xl">
            500
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-[var(--main-darker)] sm:text-5xl">
                An unexpected error occurred
              </h1>
              <p className="mt-1 text-base text-[var(--main-dark)]">
                {process.env.NODE_ENV === "development"
                  ? error.message
                  : "Please try again later."}
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button
                onClick={reset}
                className="inline-flex items-center rounded-md border border-transparent bg-[var(--main-darker)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[var(--main-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--main-darker)] focus:ring-offset-2"
              >
                Try again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center rounded-md border border-transparent bg-[var(--main-lighter)] px-4 py-2 text-sm font-medium text-[var(--main-darker)] hover:bg-[var(--main-light)] focus:outline-none focus:ring-2 focus:ring-[var(--main-darker)] focus:ring-offset-2"
              >
                Go back home
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
