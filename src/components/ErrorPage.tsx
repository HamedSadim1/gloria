import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="bg-grid relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32">
      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-64 sm:h-96 w-64 sm:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[80px] sm:blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-md text-center">
        <motion.div
          className="mb-4 sm:mb-6 text-6xl sm:text-8xl font-bold tracking-tighter text-gray-600"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          404
        </motion.div>
        <motion.div
          className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-red-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-red-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-hidden="true"
          />
          Error
        </motion.div>
        <motion.h1
          className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved to a
          different location.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#00f5ff] px-6 sm:px-8 py-3 font-semibold text-sm text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
          >
            Return Home →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
