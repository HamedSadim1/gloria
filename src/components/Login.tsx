import { useState, useRef, useEffect, type FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DiamondIcon } from "./Icons";
import { useAuth } from "../hooks/useAuth";
import { PageLayout, AmbientGlow, FadeIn } from "./ui";
import { ROUTES } from "../config/routes";

const Login: FC = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ name?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const timeoutRef = useRef<number | null>(null);
  const isSubmitting = useRef(false);

  useEffect(() => {
    return () => {
      isSubmitting.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const validate = () => {
    const newErrors: { name?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Username is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Username must be at least 2 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (isSubmitting.current) return;
    isSubmitting.current = true;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    login(name.trim());
    setIsLoading(false);
    setShowSuccess(true);

    timeoutRef.current = window.setTimeout(() => {
      navigate(ROUTES.DASHBOARD);
    }, 1000);
  };

  return (
    <PageLayout>
      <AmbientGlow color="bg-[#bf00ff]/10" />

      <div className="mx-auto w-full max-w-md">
        <FadeIn delay={0.2} y={20} className="mb-6 sm:mb-8 text-center">
          <motion.div
            className="mb-4 inline-flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-[#00f5ff]/30 bg-[#00f5ff]/10 text-[#00f5ff]"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <DiamondIcon className="h-6 w-6 sm:h-8 sm:w-8" />
          </motion.div>
          <h1 className="mb-2 text-xl sm:text-2xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Sign in to access your dashboard
          </p>
        </FadeIn>

        <AnimatePresence mode="wait">
          {showSuccess ? (
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
              <p className="text-sm text-gray-400">
                Redirecting to your dashboard...
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="rounded-xl sm:rounded-2xl border border-gray-800 bg-[#12121a] p-5 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className={`w-full rounded-lg border bg-[#0a0a0f] px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-1 ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
                      : "border-gray-700 focus:border-[#00f5ff] focus:ring-[#00f5ff]/50"
                  }`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name)
                      setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Enter your username"
                  disabled={isLoading}
                />
                {errors.name && (
                  <motion.p
                    className="mt-1.5 text-xs text-red-400"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer rounded-lg bg-[#00f5ff] px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={isLoading ? {} : { scale: 1.02 }}
                whileTap={isLoading ? {} : { scale: 0.98 }}
              >
                {isLoading ? (
                  <span className="inline-flex items-center gap-2">
                    <motion.span
                      className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      aria-hidden="true"
                    />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <FadeIn delay={0.8} y={0} className="mt-4 sm:mt-6 text-center">
          <p className="text-xs text-gray-400">
            Don't have an account?{" "}
            <Link
              to={ROUTES.PRODUCTS}
              className="text-[#00f5ff] no-underline hover:underline"
            >
              View Products
            </Link>
          </p>
        </FadeIn>
      </div>
    </PageLayout>
  );
};

export default Login;
