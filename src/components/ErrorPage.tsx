import { Link, Outlet } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-24">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-12 text-center shadow-2xl backdrop-blur-xl">
        <div className="mb-4 text-8xl font-bold text-white/20">404</div>
        <h2 className="mb-4 text-2xl font-bold text-white">Page Not Found</h2>
        <p className="mb-8 leading-relaxed text-white/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block rounded-xl bg-white/20 px-8 py-3 font-semibold text-white no-underline backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:shadow-lg"
        >
          Go Home →
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ErrorPage;
