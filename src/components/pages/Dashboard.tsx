import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ZapIcon,
  HardDriveIcon,
  UsersIcon,
  ActivityIcon,
  PageLayout,
  FadeIn,
  StatusDot,
  Button,
  DashboardWidget,
  ActivityRow,
} from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/config/routes";
import { ANIM } from "@/config/constants";
import Seo from "@/components/seo/Seo";

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

const Dashboard: FC = () => {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return (
    <PageLayout>
      <Seo
        title="Dashboard"
        description="Your GLORIA account dashboard."
        path={ROUTES.DASHBOARD}
        noindex
      />
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <FadeIn
          y={20}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
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
              className="flex items-center gap-2 rounded-lg border border-gray-700 bg-dark-800 px-3 sm:px-4 py-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: ANIM.PULSE, repeat: Infinity }}
            >
              <StatusDot color="bg-green-400" />
              <span className="text-xs sm:text-sm text-gray-300">Online</span>
            </motion.div>
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <section
          className="mb-6 sm:mb-8 grid grid-cols-2 gap-3 sm:gap-4"
          aria-label="Stats overview"
        >
          {widgets.map((widget, index) => (
            <DashboardWidget key={widget.label} {...widget} index={index} />
          ))}
        </section>

        {/* Activity Feed */}
        <motion.section
          className="rounded-xl border border-gray-800 bg-dark-800 p-4 sm:p-6 mb-16 sm:mb-20"
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
              <ActivityIcon className="h-5 w-5 text-neon-cyan" />
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
              {activity.map((item, index) => (
                <ActivityRow key={item.action} {...item} index={index} />
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
