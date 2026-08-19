/** Format a zero-based index as a zero-padded number (e.g. 0 → "01") */
export const formatIndex = (index: number, digits = 2): string =>
  String(index + 1).padStart(digits, "0");

/** Truncate a string to a maximum length */
export const truncate = (value: string, maxLength: number): string =>
  value.slice(0, maxLength);
