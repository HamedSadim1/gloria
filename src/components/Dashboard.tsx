import type { FC } from "react";
import { motion } from "framer-motion";

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
    <div className="bg-grid min-h-screen px-4 sm:px-6 pt-28 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="mb-1 text-xl sm:text-2xl font-bold text-white">
              Welcome back, {userName}
            </h1>
            <p className="text-xs sm:text-sm text-gray-400">
              Here's what's happening with your account
            </p>
          </div>
          <motion.div
            className="flex items-center gap-2 rounded-lg border border-gray-700 bg-[#12121a] px-3 sm:px-4 py-2 self-start"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs sm:text-sm text-gray-300">Online</span>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-3 sm:gap-4">
          {widgets.map(
            ({ icon, label, value, change, color, borderColor }, index) => (
              <motion.div
                key={label}
                className={`rounded-xl border border-gray-800 bg-[#12121a] p-3 sm:p-5 transition-all duration-300 ${borderColor}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-2 sm:mb-3 flex items-center justify-between">
                  <motion.span
                    className={`flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-base sm:text-lg`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    {icon}
                  </motion.span>
                  <span className="text-[10px] sm:text-xs font-medium text-green-400">
                    {change}
                  </span>
                </div>
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  {value}
                </motion.div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  {label}
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Activity Feed */}
        <motion.div
          className="rounded-xl border border-gray-800 bg-[#12121a] p-4 sm:p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-white">
              Recent Activity
            </h2>
            <button className="cursor-pointer border-none bg-transparent text-xs sm:text-sm text-[#00f5ff] hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {activity.map(({ action, time, status }, index) => (
              <motion.div
                key={`${action}-${time}`}
                className="flex items-center justify-between border-b border-gray-800 pb-3 sm:pb-4 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.span
                    className={`h-2 w-2 rounded-full ${
                      status === "success" ? "bg-green-400" : "bg-yellow-400"
                    }`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {action}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500">
                  {time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
