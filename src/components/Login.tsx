import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { DiamondIcon } from "./Icons";

const Login: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    localStorage.setItem("name", name);
    setName("");
    setEmail("");
    navigate("/dashboard");
  };

  return (
    <div className="bg-grid relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32 pb-8">
      {/* Background glow — contained in relative parent */}
      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-64 sm:h-96 w-64 sm:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bf00ff]/10 blur-[80px] sm:blur-[120px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="mb-4 inline-flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-[#00f5ff]/30 bg-[#00f5ff]/10 text-[#00f5ff]"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <DiamondIcon className="h-6 w-6 sm:h-8 sm:w-8" />
          </motion.div>
          <h1 className="mb-2 text-xl sm:text-2xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Sign in to access your dashboard
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-xl sm:rounded-2xl border border-gray-800 bg-[#12121a] p-5 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="mb-4 sm:mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-700 bg-[#0a0a0f] px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff]/50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
            />
          </motion.div>

          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-700 bg-[#0a0a0f] px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:border-[#00f5ff] focus:outline-none focus:ring-1 focus:ring-[#00f5ff]/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#00f5ff] py-3 sm:py-3.5 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:brightness-110 active:scale-[0.98]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-4 sm:mt-6 text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Don't have an account?{" "}
          <a href="#" className="text-[#00f5ff] no-underline hover:underline">
            Contact Admin
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
