import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  /** Small uppercase label (e.g. "Features", "Tech Stack") */
  label: string;
  /** Larger title text */
  title?: ReactNode;
  /** HTML id for aria-labelledby */
  id?: string;
  /** Use viewport-triggered animation */
  viewport?: boolean;
}

const SectionHeading = ({
  label,
  title,
  id,
  viewport,
}: SectionHeadingProps) => {
  return (
    <motion.div
      className="mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={viewport ? { opacity: 1, y: 0 } : undefined}
      animate={viewport ? undefined : { opacity: 1, y: 0 }}
      viewport={viewport ? { once: true } : undefined}
      transition={{ duration: 0.6 }}
    >
      <h2
        id={id}
        className="mb-2 text-xs sm:text-sm font-semibold tracking-widest text-[#00f5ff] uppercase"
      >
        {label}
      </h2>
      {title && (
        <p className="text-2xl sm:text-3xl font-bold text-white">{title}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
