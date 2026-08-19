import type { ReactNode } from "react";
import { cn } from "@/utils";

interface PageLayoutProps {
  children: ReactNode;
  /** Extra classes for the outer wrapper */
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div
      className={cn(
        "bg-grid relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
