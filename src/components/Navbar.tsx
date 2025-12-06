import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="ui raised very padded segment">
      <Link to="/" className="ui teal inverted segment">
        Gloria
      </Link>
      <div className="ui right floated header">
        <button className="ui button">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            to="/"
          >
            Home
          </NavLink>
        </button>
        <button className="ui button">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            to="/about"
          >
            About
          </NavLink>
        </button>
        <button className="ui button">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </button>
        <button className="ui button">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            to="/login"
          >
            Login
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
