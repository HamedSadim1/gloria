import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ZapIcon,
  HardDriveIcon,
  UsersIcon,
  ActivityIcon,
} from "./Icons";
import { useAuth } from "../hooks/useAuth";

const widgets = [
  {
    Icon: ChartBarIcon,
    label: "Analytics",
    value: "12.5k",
    change: "+24%",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    Icon: ZapIcon,
    label: "Performance",
    value: "99.9%",
    change: "+2.1%",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    Icon: HardDriveIcon,
    label: "Storage",
    value: "2.4 TB",
    change: "+180GB",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "hover:border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    Icon: UsersIcon,
    label: "Users",
    value: "8,421",
    change: "+12%",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/30",
    iconColor: "text-green-400",
  },
];

const activity = [
  { action: "Login", time: "2 min ago", status: "success" as const },
  { action: "Upload file", time: "15 min ago", status: "success" as const },
  { action: "Update profile", time: "1 hour ago", status: "success" as const },
  {
    action: "Export data",
    time: "3 hours ago",
    status: "pending" as const,
  },
];

const statusColors = {
  success: "bg-green-400",
  pending: "bg-yellow-400",
};

const statusLabels = {
  success: "Completed",
  pending: "Processing",
};

const Dashboard: FC = () => {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-grid relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="mb-1 text-2xl sm:text-3xl font-bold text-white">
              Welcome back{userName ? `, ${userName}` : ""}
            </h1>
            <p className="text-sm text-gray-400">
              Here's what's happening with your account
            </p>
          </div>
          <div className="flex items-center gap-3 self-start">
            <motion.div
              className="flex items-center gap-2 rounded-lg border border-gray-700 bg-[#12121a] px-3 sm:px-4 py-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm text-gray-300">Online</span>
            </motion.div>
            <button
              onClick={handleLogout}
              className="cursor-pointer rounded-lg border border-gray-700 bg-[#12121a] px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 focus-visible:ring-2 focus-visible:ring-[#00f5ff]"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <section
          className="mb-6 sm:mb-8 grid grid-cols-2 gap-3 sm:gap-4"
          aria-label="Stats overview"
        >
          {widgets.map(
            (
              { Icon, label, value, change, color, borderColor, iconColor },
              index,
            ) => (
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
                    className={`flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} ${iconColor}`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
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
                <div className="text-[10px] sm:text-xs text-gray-400">
                  {label}
                </div>
              </motion.div>
            ),
          )}
        </section>

        {/* Activity Feed */}
        <motion.section
          className="rounded-xl border border-gray-800 bg-[#12121a] p-4 sm:p-6 mb-16 sm:mb-20"
          aria-labelledby="activity-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <h2
              id="activity-heading"
              className="flex items-center gap-2 text-base sm:text-lg font-semibold text-white"
            >
              <ActivityIcon className="h-5 w-5 text-[#00f5ff]" />
              Recent Activity
            </h2>
          </div>

          {activity.length === 0 ? (
            <div className="py-12 text-center">
              <ActivityIcon className="mx-auto mb-3 h-10 w-10 text-gray-600" />
              <p className="text-sm text-gray-400">No recent activity</p>
            </div>
          ) : (
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
                      className={`h-2 w-2 rounded-full ${statusColors[status]}`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      aria-hidden="true"
                    />
                    <div>
                      <span className="text-xs sm:text-sm text-gray-300">
                        {action}
                      </span>
                      <span
                        className={`ml-2 text-[10px] sm:text-xs ${
                          status === "pending"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }`}
                      >
                        {statusLabels[status]}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    {time}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Dashboard;
