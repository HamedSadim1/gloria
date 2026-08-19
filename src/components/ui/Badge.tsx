import type { ReactNode } from "react";
import StatusDot from "@/components/ui/StatusDot";

interface BadgeProps {
  children: ReactNode;
  showDot?: boolean;
  variant?: "cyan" | "red";
}

const variantClasses = {
  cyan: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
  red: "border-red-500/30 bg-red-500/10 text-red-400",
};

const Badge = ({ children, showDot, variant = "cyan" }: BadgeProps) => {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 sm:px-4 py-1.5 text-xs sm:text-sm ${variantClasses[variant]}`}
    >
      {showDot && (
        <StatusDot color={variant === "red" ? "bg-red-400" : "bg-neon-cyan"} />
      )}
      {children}
    </div>
  );
};

export default Badge;
