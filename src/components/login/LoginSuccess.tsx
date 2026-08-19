import { motion } from "framer-motion";

interface LoginSuccessProps {
  name: string;
}

const LoginSuccess = ({ name }: LoginSuccessProps) => {
  return (
    <motion.div
      key="success"
      className="rounded-xl sm:rounded-2xl border border-green-500/30 bg-[#12121a] p-8 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>
      <h2 className="mb-2 text-lg font-semibold text-white">
        Welcome, {name}!
      </h2>
      <p className="text-sm text-gray-400">Redirecting to your dashboard...</p>
    </motion.div>
  );
};

export default LoginSuccess;
