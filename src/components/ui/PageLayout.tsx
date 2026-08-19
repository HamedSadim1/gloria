import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  /** Extra classes for the outer wrapper */
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div
      className={`bg-grid relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
