import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import { ANIM } from "@/config/constants";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="w-full cursor-pointer rounded-lg bg-neon-cyan px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileHover={pending ? {} : { scale: 1.02 }}
      whileTap={pending ? {} : { scale: 0.98 }}
    >
      {pending ? (
        <span className="inline-flex items-center gap-2">
          <motion.span
            className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
            animate={{ rotate: 360 }}
            transition={{
              duration: ANIM.SPINNER,
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
  );
};

export default SubmitButton;
