import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DiamondIcon } from "./Icons";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, userName, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Products" },
    ...(isLoggedIn
      ? [{ to: "/dashboard", label: "Dashboard" }]
      : [{ to: "/login", label: "Login" }]),
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#0a0a0f]/80 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-wider text-white no-underline transition-all duration-300 hover:text-[#00f5ff]"
        >
          <motion.span
            className="text-[#00f5ff]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <DiamondIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.span>
          <span>
            GLORIA<span className="text-[#00f5ff]">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
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

          {isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="ml-2 flex items-center gap-2 border-l border-gray-700 pl-4">
                <span className="text-xs text-gray-500">{userName}</span>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer rounded-lg border border-gray-700 bg-transparent px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {isLoggedIn && (
            <span className="text-[10px] text-gray-500">{userName}</span>
          )}
          <button
            className="flex flex-col items-center justify-center gap-1.5 border-none bg-transparent p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-gray-800 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-medium no-underline transition-all duration-200 ${
                        isActive
                          ? "bg-[#00f5ff]/10 text-[#00f5ff]"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`
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
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                >
                  <button
                    onClick={handleLogout}
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
    </motion.nav>
  );
};

export default Navbar;
