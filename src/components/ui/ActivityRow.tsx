import { motion } from "framer-motion";
import StatusDot from "@/components/ui/StatusDot";
import { cn } from "@/utils";

interface ActivityRowProps {
  action: string;
  time: string;
  status: "success" | "pending";
  index?: number;
}

const statusColors = {
  success: "bg-green-400",
  pending: "bg-yellow-400",
};

const statusLabels = {
  success: "Completed",
  pending: "Processing",
};

const ActivityRow = ({ action, time, status, index = 0 }: ActivityRowProps) => {
  return (
    <motion.div
      className="flex items-center justify-between border-b border-gray-800 pb-3 sm:pb-4 last:border-0 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <StatusDot color={statusColors[status]} />
        <div>
          <span className="text-xs sm:text-sm text-gray-300">{action}</span>
          <span
            className={cn(
              "ml-2 text-[10px] sm:text-xs",
              status === "pending" ? "text-yellow-400" : "text-green-400",
            )}
          >
            {statusLabels[status]}
          </span>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs text-gray-400">{time}</span>
    </motion.div>
  );
};

export default ActivityRow;
