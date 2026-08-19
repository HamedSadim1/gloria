import { motion } from "framer-motion";

interface SpecRowProps {
  label: string;
  value: string;
  index?: number;
}

const SpecRow = ({ label, value, index = 0 }: SpecRowProps) => {
  return (
    <motion.div
      className="flex items-center justify-between border-b border-gray-800 py-2 sm:py-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
    >
      <span className="text-xs sm:text-sm text-gray-400">{label}</span>
      <span className="text-xs sm:text-sm font-medium text-white">{value}</span>
    </motion.div>
  );
};

export default SpecRow;
