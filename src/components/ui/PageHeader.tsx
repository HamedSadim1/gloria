import type { ReactNode } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

interface PageHeaderProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  /** Show a pulsing dot inside the badge */
  showDot?: boolean;
}

const PageHeader = ({
  badge,
  title,
  description,
  showDot,
}: PageHeaderProps) => {
  return (
    <FadeIn className="mb-8 sm:mb-12">
      {badge && <Badge showDot={showDot}>{badge}</Badge>}
      <FadeIn
        delay={0.3}
        y={20}
        className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
      >
        <h1>{title}</h1>
      </FadeIn>
      {description && (
        <FadeIn
          delay={0.4}
          y={20}
          className="max-w-xl text-base sm:text-lg text-gray-400"
        >
          <p>{description}</p>
        </FadeIn>
      )}
    </FadeIn>
  );
};

export default PageHeader;
