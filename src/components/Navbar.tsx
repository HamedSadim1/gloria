import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/10 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white no-underline transition-transform hover:scale-105"
        >
          ✦ Gloria
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium text-white no-underline transition-all duration-200
                ${isActive ? "bg-white/20 shadow-md" : "hover:bg-white/10 hover:-translate-y-0.5"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
