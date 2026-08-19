import { motion } from "framer-motion";
import type { ElementType } from "react";
import { ANIM, STAGGER } from "../../config/constants";

interface FeatureCardProps {
  Icon: ElementType;
  title: string;
  desc: string;
  index?: number;
  /** Gradient background for the icon container */
  iconColor?: string;
  /** Icon size variant */
  iconSize?: "sm" | "md" | "lg";
}

const iconSizes = {
  sm: "h-5 w-5 sm:h-6 sm:w-6",
  md: "h-8 w-8 sm:h-10 sm:w-10",
  lg: "h-10 w-10 sm:h-12 sm:w-12",
};

const containerSizes = {
  sm: "h-10 sm:h-12 w-10 sm:w-12",
  md: "h-12 sm:h-14 w-12 sm:w-14",
  lg: "h-10 sm:h-12 w-10 sm:w-12",
};

const FeatureCard = ({
  Icon,
  title,
  desc,
  index = 0,
  iconColor,
  iconSize = "md",
}: FeatureCardProps) => {
  return (
    <motion.div
      className="group rounded-xl border border-gray-800 bg-dark-800 p-6 sm:p-8 transition-all duration-300 hover:border-neon-cyan/30 hover:bg-dark-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIM.FADE, delay: index * STAGGER }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className={`mb-3 sm:mb-4 ${iconColor ?? "text-neon-cyan"}`}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          duration: ANIM.ROTATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        {iconColor ? (
          <span
            className={`inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br ${iconColor} text-white ${containerSizes[iconSize]}`}
          >
            <Icon className={iconSizes[iconSize]} />
          </span>
        ) : (
          <Icon className={iconSizes[iconSize]} />
        )}
      </motion.div>
      <h3 className="mb-2 text-base sm:text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
    </motion.div>
  );
};

export default FeatureCard;
