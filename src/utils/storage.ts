/** Read from localStorage without throwing (e.g. private browsing) */
export const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

/** Write to localStorage without throwing (e.g. private browsing, quota) */
export const safeSetItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage unavailable — continue without persisting
  }
};

/** Remove from localStorage without throwing */
export const safeRemoveItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore storage errors
  }
};
