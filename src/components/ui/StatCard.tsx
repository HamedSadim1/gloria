import { motion } from "framer-motion";
import { ANIM, STAGGER } from "@/config/constants";
import { cn } from "@/utils";

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
  /** Use scroll-triggered animation instead of mount animation */
  viewport?: boolean;
  /** Centered layout (default true) */
  centered?: boolean;
}

const StatCard = ({
  value,
  label,
  index = 0,
  viewport = false,
  centered = true,
}: StatCardProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-gray-800 bg-dark-800 p-4 sm:p-6",
        centered && "text-center",
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={viewport ? { opacity: 1, scale: 1 } : undefined}
      animate={viewport ? undefined : { opacity: 1, scale: 1 }}
      viewport={viewport ? { once: true } : undefined}
      transition={{ duration: ANIM.ITEM, delay: index * STAGGER }}
    >
      <motion.div
        className="mb-1 text-xl sm:text-2xl font-bold text-neon-cyan"
        initial={{ opacity: 0 }}
        whileInView={viewport ? { opacity: 1 } : undefined}
        animate={viewport ? undefined : { opacity: 1 }}
        viewport={viewport ? { once: true } : undefined}
        transition={{ duration: ANIM.SLOW, delay: 0.3 + index * STAGGER }}
      >
        {value}
      </motion.div>
      <div className="text-xs sm:text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

export default StatCard;
