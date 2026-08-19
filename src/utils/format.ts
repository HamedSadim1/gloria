/** Format a zero-based index as a zero-padded number (e.g. 0 → "01") */
export const formatIndex = (index: number, digits = 2): string =>
  String(index + 1).padStart(digits, "0");

/** Truncate a string to a maximum length */
export const truncate = (value: string, maxLength: number): string =>
  value.slice(0, maxLength);

/** Capitalize the first letter of a string (e.g. "accent chair" → "Accent chair") */
export const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);
