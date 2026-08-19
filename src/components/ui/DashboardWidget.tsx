import { motion } from "framer-motion";
import type { ElementType } from "react";
import { ANIM, STAGGER, DELAY } from "@/config/constants";

interface DashboardWidgetProps {
  Icon: ElementType;
  label: string;
  value: string;
  change: string;
  color: string;
  borderColor: string;
  iconColor: string;
  index?: number;
}

const DashboardWidget = ({
  Icon,
  label,
  value,
  change,
  color,
  borderColor,
  iconColor,
  index = 0,
}: DashboardWidgetProps) => {
  return (
    <motion.div
      className={`rounded-xl border border-gray-800 bg-dark-800 p-3 sm:p-5 transition-all duration-300 ${borderColor}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIM.ITEM, delay: DELAY.EARLY + index * STAGGER }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="mb-2 sm:mb-3 flex items-center justify-between">
        <motion.span
          className={`flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-lg bg-linear-to-br ${color} ${iconColor}`}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{
            duration: ANIM.ROTATION,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * ANIM.ITEM,
          }}
          aria-hidden="true"
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.span>
        <span className="text-[10px] sm:text-xs font-medium text-green-400">
          {change}
        </span>
      </div>
      <motion.div
        className="text-xl sm:text-2xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM.SLOW, delay: DELAY.MID + index * STAGGER }}
      >
        {value}
      </motion.div>
      <div className="text-[10px] sm:text-xs text-gray-400">{label}</div>
    </motion.div>
  );
};

export default DashboardWidget;
