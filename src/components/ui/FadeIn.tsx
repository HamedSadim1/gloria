import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ANIM } from "../../config/constants";

interface FadeInProps {
  children: ReactNode;
  /** Vertical offset in px (default 30) */
  y?: number;
  /** Horizontal offset in px */
  x?: number;
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds (default 0.6) */
  duration?: number;
  /** Animate on scroll into view instead of on mount */
  viewport?: boolean;
  /** Extra class names */
  className?: string;
}

const FadeIn = ({
  children,
  y = 30,
  x,
  delay = 0,
  duration = ANIM.FADE,
  viewport = false,
  className,
}: FadeInProps) => {
  const initial: Record<string, number> = { opacity: 0 };
  if (y) initial.y = y;
  if (x) initial.x = x;

  const animate: Record<string, number> = { opacity: 1 };
  if (y) animate.y = 0;
  if (x) animate.x = 0;

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={viewport ? undefined : animate}
      whileInView={viewport ? animate : undefined}
      viewport={viewport ? { once: true } : undefined}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
