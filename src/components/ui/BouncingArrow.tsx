import { motion } from "framer-motion";
import { ArrowRightIcon } from "../Icons";

interface BouncingArrowProps {
  className?: string;
}

const BouncingArrow = ({ className }: BouncingArrowProps) => {
  return (
    <motion.span
      className={className}
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      aria-hidden="true"
    >
      <ArrowRightIcon className="h-5 w-5" />
    </motion.span>
  );
};

export default BouncingArrow;
