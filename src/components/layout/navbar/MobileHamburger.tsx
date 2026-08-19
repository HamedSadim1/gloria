import { motion } from "framer-motion";

interface MobileHamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileHamburger = ({ isOpen, onToggle }: MobileHamburgerProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center gap-1.5 border-none bg-transparent p-2 rounded-lg transition-colors hover:bg-white/5"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <motion.span
        className="block h-0.5 w-6 bg-white"
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
      <motion.span
        className="block h-0.5 w-6 bg-white"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
      <motion.span
        className="block h-0.5 w-6 bg-white"
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </button>
  );
};

export default MobileHamburger;
