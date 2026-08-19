import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { STAGGER } from "@/config/constants";
import { cn } from "@/utils";

interface NavLinkItem {
  to: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLinkItem[];
  isLoggedIn: boolean;
  onLogout: () => void;
  onClose: () => void;
}

const MobileMenu = ({
  isOpen,
  links,
  isLoggedIn,
  onLogout,
  onClose,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          className="border-t border-gray-800 bg-dark-900/95 backdrop-blur-xl md:hidden"
          role="menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map(({ to, label }, index) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * STAGGER) / 2 }}
              >
                <NavLink
                  to={to}
                  onClick={onClose}
                  role="menuitem"
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium no-underline transition-all duration-200",
                      isActive
                        ? "bg-neon-cyan/10 text-neon-cyan"
                        : "text-gray-400 hover:bg-white/5 hover:text-white",
                    )
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}

            {isLoggedIn && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: (links.length * STAGGER) / 2,
                }}
              >
                <button
                  onClick={onLogout}
                  role="menuitem"
                  className="w-full cursor-pointer rounded-lg border border-red-500/30 bg-transparent px-4 py-3 text-left text-sm font-medium text-red-400 transition-all duration-200 hover:bg-red-500/10"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
