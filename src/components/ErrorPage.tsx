import { Link, Outlet } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="glass error-content">
        <div className="error-number">404</div>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="glass-button error-button">Go Home</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ErrorPage;
