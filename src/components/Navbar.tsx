import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="glass-nav navbar-fixed">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Gloria
        </Link>
        <div className="navbar-links">
          <NavLink
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
