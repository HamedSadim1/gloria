import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../config/routes";
import { ANIM } from "../config/constants";
import { BrandLogo } from "./ui";
import { DesktopNav, MobileHamburger, MobileMenu } from "./navbar/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, userName, logout } = useAuth();
  const navigate = useNavigate();

  // Close mobile menu on browser back/forward
  useEffect(() => {
    const handler = () => setIsOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navLinks = [
    { to: ROUTES.HOME, label: "Home" },
    { to: ROUTES.ABOUT, label: "About" },
    { to: ROUTES.PRODUCTS, label: "Products" },
    ...(isLoggedIn
      ? [{ to: ROUTES.DASHBOARD, label: "Dashboard" }]
      : [{ to: ROUTES.LOGIN, label: "Login" }]),
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate(ROUTES.HOME);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-dark-900/80 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: ANIM.FADE, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4">
        <BrandLogo linked />

        <DesktopNav
          links={navLinks}
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLogout={handleLogout}
        />

        <div className="flex items-center gap-3 md:hidden">
          {isLoggedIn && (
            <span className="text-[10px] text-gray-400">{userName}</span>
          )}
          <MobileHamburger
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        links={navLinks}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onClose={() => setIsOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;
