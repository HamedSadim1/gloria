import type { FC } from "react";

const widgets = [
  {
    icon: "📊",
    label: "Analytics",
    color: "from-blue-500/20 to-purple-500/20",
  },
  { icon: "⚙️", label: "Settings", color: "from-green-500/20 to-teal-500/20" },
  { icon: "📁", label: "Files", color: "from-orange-500/20 to-red-500/20" },
  { icon: "👥", label: "Team", color: "from-pink-500/20 to-rose-500/20" },
];

const Dashboard: FC = () => {
  const userName = localStorage.getItem("name") || "Guest";

  return (
    <div className="mx-auto mt-32 max-w-2xl px-6">
      <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-white/60">
            Manage your account and access premium features
          </p>
        </div>

        <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-white">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold text-transparent">
              {userName}
            </span>
            ! 👋
          </h2>
          <p className="text-sm leading-relaxed text-white/60">
            You have successfully logged in to your dashboard. Here you can
            manage your account, view recent activity, and access premium
            features.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {widgets.map(({ icon, label, color }) => (
            <div
              key={label}
              className={`group cursor-pointer rounded-xl border border-white/10 bg-gradient-to-br ${color} p-5 text-center transition-all duration-200 hover:border-white/20 hover:shadow-lg`}
            >
              <div className="mb-2 text-3xl transition-transform duration-200 group-hover:scale-110">
                {icon}
              </div>
              <p className="text-sm font-medium text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
