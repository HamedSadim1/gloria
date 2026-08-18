import type { FC } from "react";

const Dashboard: FC = () => {
  const userName = localStorage.getItem("name") || "Guest";

  return (
    <div className="glass page-container-medium text-center">
      <h1 className="text-white dashboard-title">Dashboard</h1>
      <div className="glass-card content-card">
        <h2 className="text-white welcome-message">
          Welcome back, <span className="user-highlight">{userName}</span>!
        </h2>
        <p className="text-white-secondary line-height-1-6 dashboard-description">
          You have successfully logged in to your dashboard. Here you can manage
          your account, view your recent activity, and access premium features.
        </p>
        <div className="grid-dashboard">
          <div className="glass-card padding-1 text-center">
            <h3 className="text-white widget-icon">📊</h3>
            <p className="text-white-muted margin-0 widget-text">Analytics</p>
          </div>
          <div className="glass-card padding-1 text-center">
            <h3 className="text-white widget-icon">⚙️</h3>
            <p className="text-white-muted margin-0 widget-text">Settings</p>
          </div>
          <div className="glass-card padding-1 text-center">
            <h3 className="text-white widget-icon">📁</h3>
            <p className="text-white-muted margin-0 widget-text">Files</p>
          </div>
          <div className="glass-card padding-1 text-center">
            <h3 className="text-white widget-icon">👥</h3>
            <p className="text-white-muted margin-0 widget-text">Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
