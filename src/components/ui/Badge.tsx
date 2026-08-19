import type { ReactNode } from "react";
import StatusDot from "./StatusDot";

interface BadgeProps {
  children: ReactNode;
  showDot?: boolean;
  variant?: "cyan" | "red";
}

const variantClasses = {
  cyan: "border-[#00f5ff]/30 bg-[#00f5ff]/10 text-[#00f5ff]",
  red: "border-red-500/30 bg-red-500/10 text-red-400",
};

const Badge = ({ children, showDot, variant = "cyan" }: BadgeProps) => {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 sm:px-4 py-1.5 text-xs sm:text-sm ${variantClasses[variant]}`}
    >
      {showDot && (
        <StatusDot color={variant === "red" ? "bg-red-400" : "bg-[#00f5ff]"} />
      )}
      {children}
    </div>
  );
};

export default Badge;
