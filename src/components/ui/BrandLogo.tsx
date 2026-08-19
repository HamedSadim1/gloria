import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DiamondIcon } from "@/components/ui/Icons";
import { ROUTES } from "@/config/routes";
import { BRAND, ANIM } from "@/config/constants";

interface BrandLogoProps {
  /** Render as a link (Navbar) or plain text (Footer) */
  linked?: boolean;
  /** Icon size variant */
  size?: "sm" | "md";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5 sm:h-6 sm:w-6",
};

const BrandLogo = ({ linked = false, size = "md" }: BrandLogoProps) => {
  const content = (
    <span className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
      <motion.span
        className="text-neon-cyan"
        animate={linked ? { rotate: [0, 360] } : undefined}
        transition={
          linked
            ? {
                duration: ANIM.BRAND_ROTATION,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        aria-hidden="true"
      >
        <DiamondIcon className={sizeClasses[size]} />
      </motion.span>
      <span>
        {BRAND}
        <span className="text-neon-cyan">.</span>
      </span>
    </span>
  );

  if (linked) {
    return (
      <Link
        to={ROUTES.HOME}
        className="no-underline text-lg sm:text-xl font-bold tracking-wider"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandLogo;
