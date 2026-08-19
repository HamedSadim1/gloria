import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ANIM } from "../../config/constants";

interface GradientHeaderProps {
  label: string;
  title: ReactNode;
  titleId?: string;
}

const GradientHeader = ({ label, title, titleId }: GradientHeaderProps) => {
  return (
    <div className="relative border-b border-gray-800 bg-linear-to-r from-neon-cyan/10 to-neon-purple/10 p-5 sm:p-8">
      <motion.div
        className="mb-2 text-[10px] sm:text-xs font-medium tracking-widest text-neon-cyan uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIM.ITEM, delay: 0.3 }}
      >
        {label}
      </motion.div>
      <motion.h1
        id={titleId}
        className="text-2xl sm:text-3xl font-bold capitalize text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIM.ITEM, delay: 0.4 }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default GradientHeader;
