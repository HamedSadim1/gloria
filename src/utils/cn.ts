import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names, with later classes overriding earlier conflicts.
 * Accepts strings, arrays, and conditional objects, e.g.
 * cn("base", { "text-center": centered, hidden: !visible }).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
