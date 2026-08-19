import { motion } from "framer-motion";
import { DiamondIcon, FadeIn } from "../../ui";
import { ANIM } from "../../../config/constants";

const LoginHeader = () => {
  return (
    <FadeIn delay={0.2} y={20} className="mb-6 sm:mb-8 text-center">
      <motion.div
        className="mb-4 inline-flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: ANIM.ROTATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
  );
};

export default LoginHeader;
