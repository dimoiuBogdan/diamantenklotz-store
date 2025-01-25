import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-8 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved to a
          different location.
        </p>
        <Link
          href="/"
          className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
