import { motion } from "framer-motion";
import { cn } from "@/utils";

interface AmbientGlowProps {
  color?: string;
  className?: string;
  duration?: number;
}

const AmbientGlow = ({
  color = "bg-neon-cyan/10",
  className = "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2",
  duration = 8,
}: AmbientGlowProps) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute -z-10 h-64 sm:h-96 w-64 sm:w-96 rounded-full blur-[80px] sm:blur-[120px]",
        color,
        className,
      )}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
};

export default AmbientGlow;
