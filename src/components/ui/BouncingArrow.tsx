import { motion } from "framer-motion";
import { ArrowRightIcon } from "../Icons";
import { ANIM } from "../../config/constants";

interface BouncingArrowProps {
  className?: string;
}

const BouncingArrow = ({ className }: BouncingArrowProps) => {
  return (
    <motion.span
      className={className}
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: ANIM.BOUNCE, repeat: Infinity }}
      aria-hidden="true"
    >
      <ArrowRightIcon className="h-5 w-5" />
    </motion.span>
  );
};

export default BouncingArrow;
