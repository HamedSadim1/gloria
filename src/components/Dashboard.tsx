import type { FC } from "react";

const widgets = [
  {
    icon: "📊",
    label: "Analytics",
    value: "12.5k",
    change: "+24%",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "hover:border-cyan-500/30",
  },
  {
    icon: "⚡",
    label: "Performance",
    value: "99.9%",
    change: "+2.1%",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/30",
  },
  {
    icon: "📁",
    label: "Storage",
    value: "2.4 TB",
    change: "+180GB",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "hover:border-orange-500/30",
  },
  {
    icon: "👥",
    label: "Users",
    value: "8,421",
    change: "+12%",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/30",
  },
];

const activity = [
  { action: "Login", time: "2 min ago", status: "success" },
  { action: "Upload file", time: "15 min ago", status: "success" },
  { action: "Update profile", time: "1 hour ago", status: "success" },
  { action: "Export data", time: "3 hours ago", status: "pending" },
];

const Dashboard: FC = () => {
  const userName = localStorage.getItem("name") || "Guest";

  return (
    <div className="bg-grid min-h-screen px-6 pt-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-1 text-2xl font-bold text-white">
              Welcome back, {userName}
            </h1>
            <p className="text-sm text-gray-400">
              Here's what's happening with your account
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gray-700 bg-[#12121a] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm text-gray-300">Online</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {widgets.map(({ icon, label, value, change, color, borderColor }) => (
            <div
              key={label}
              className={`rounded-xl border border-gray-800 bg-[#12121a] p-5 transition-all duration-300 ${borderColor}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-lg`}
                >
                  {icon}
                </span>
                <span className="text-xs font-medium text-green-400">
                  {change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="rounded-xl border border-gray-800 bg-[#12121a] p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Recent Activity
            </h2>
            <button className="cursor-pointer border-none bg-transparent text-sm text-[#00f5ff] hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {activity.map(({ action, time, status }) => (
              <div
                key={`${action}-${time}`}
                className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      status === "success" ? "bg-green-400" : "bg-yellow-400"
                    }`}
                  />
                  <span className="text-sm text-gray-300">{action}</span>
                </div>
                <span className="text-xs text-gray-500">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
