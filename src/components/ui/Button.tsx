import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const variantClasses = {
  primary:
    "bg-neon-cyan px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "border border-gray-700 bg-transparent px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-neon-cyan/50 hover:bg-neon-cyan/5",
};

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg",
        variantClasses[variant],
        "focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
