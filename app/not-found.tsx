import { Link } from "@/i18n/routing";

const NotFound = () => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold text-[var(--main-darker)]">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-[var(--main-dark)]">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-[var(--main-normal)]">
        The page you're looking for doesn't exist or has been moved to a
        different location.
      </p>
      <Link
        href="/"
        className="rounded-md bg-[var(--main-darker)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--main-dark)]"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
