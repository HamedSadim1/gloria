import { motion } from "framer-motion";

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
      className={`rounded-xl border border-gray-800 bg-[#12121a] p-4 sm:p-6 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={viewport ? { opacity: 1, scale: 1 } : undefined}
      animate={viewport ? undefined : { opacity: 1, scale: 1 }}
      viewport={viewport ? { once: true } : undefined}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="mb-1 text-xl sm:text-2xl font-bold text-[#00f5ff]"
        initial={{ opacity: 0 }}
        whileInView={viewport ? { opacity: 1 } : undefined}
        animate={viewport ? undefined : { opacity: 1 }}
        viewport={viewport ? { once: true } : undefined}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      >
        {value}
      </motion.div>
      <div className="text-xs sm:text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

export default StatCard;
