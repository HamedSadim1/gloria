import { motion } from "framer-motion";
import { ANIM } from "../../config/constants";

interface StatusDotProps {
  color?: string;
  /** Pulsing scale animation */
  pulse?: boolean;
}

const StatusDot = ({
  color = "bg-green-400",
  pulse = true,
}: StatusDotProps) => {
  return (
    <motion.span
      className={`h-2 w-2 rounded-full ${color}`}
      animate={pulse ? { scale: [1, 1.3, 1] } : undefined}
      transition={
        pulse ? { duration: ANIM.PULSE, repeat: Infinity } : undefined
      }
      aria-hidden="true"
    />
  );
};

export default StatusDot;
