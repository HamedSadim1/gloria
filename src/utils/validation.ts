import { MIN_USERNAME_LENGTH } from "../config/constants";

/** Validate a username, returning an error message or undefined if valid */
export const validateUsername = (name: string): string | undefined => {
  if (!name.trim()) {
    return "Username is required";
  }
  if (name.trim().length < MIN_USERNAME_LENGTH) {
    return `Username must be at least ${MIN_USERNAME_LENGTH} characters`;
  }
  return undefined;
};
