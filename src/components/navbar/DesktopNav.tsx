import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavUserMenu from "./NavUserMenu";
import { ANIM, STAGGER, DELAY } from "../../config/constants";

interface NavLink {
  to: string;
  label: string;
}

interface DesktopNavProps {
  links: NavLink[];
  isLoggedIn: boolean;
  userName: string | null;
  onLogout: () => void;
}

const DesktopNav = ({
  links,
  isLoggedIn,
  userName,
  onLogout,
}: DesktopNavProps) => {
  return (
    <div className="hidden items-center gap-1 md:flex">
      {links.map(({ to, label }, index) => (
        <motion.div
          key={to}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIM.FAST, delay: STAGGER + index * STAGGER }}
        >
          <NavLink
            to={to}
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium tracking-wide no-underline transition-all duration-300 ${
                isActive ? "text-neon-cyan" : "text-gray-400 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {label}
                {isActive && (
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 w-4/5 -translate-x-1/2 bg-neon-cyan shadow-[0_0_10px_#00f5ff]"
                    layoutId="navbar-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        </motion.div>
      ))}

      {isLoggedIn && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIM.FAST, delay: DELAY.MID }}
        >
          <div className="ml-2">
            <NavUserMenu userName={userName} onLogout={onLogout} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DesktopNav;
