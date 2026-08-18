import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Products" },
  { to: "/login", label: "Login" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#0a0a0f]/80 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-wider text-white no-underline transition-all duration-300 hover:text-[#00f5ff]"
        >
          <motion.span
            className="text-[#00f5ff]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ◆
          </motion.span>
          <span>
            GLORIA<span className="text-[#00f5ff]">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map(({ to, label }, index) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium tracking-wide no-underline transition-all duration-300 ${
                    isActive
                      ? "text-[#00f5ff]"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 h-0.5 w-4/5 -translate-x-1/2 bg-[#00f5ff] shadow-[0_0_10px_#00f5ff]"
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
