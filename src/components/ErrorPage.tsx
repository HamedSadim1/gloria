import { Link, Outlet } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="w-full max-w-md text-center">
        <div className="mb-6 text-8xl font-bold tracking-tighter text-gray-800">
          404
        </div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-400">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          Error
        </div>
        <h1 className="mb-4 text-2xl font-bold text-white">Page Not Found</h1>
        <p className="mb-8 text-gray-400">
          The page you're looking for doesn't exist or has been moved to a
          different location.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[#00f5ff] px-8 py-3.5 font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
        >
          Return Home →
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ErrorPage;
