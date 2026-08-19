import { useState, useMemo, type ReactNode } from "react";
import { AuthContext } from "./authContextInstance";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(() => {
    try {
      return localStorage.getItem("name");
    } catch {
      return null;
    }
  });

  const login = (name: string) => {
    try {
      localStorage.setItem("name", name);
    } catch {
      // Private browsing or storage full — continue without persisting
    }
    setUserName(name);
  };

  const logout = () => {
    try {
      localStorage.removeItem("name");
    } catch {
      // Ignore storage errors
    }
    setUserName(null);
  };

  const value = useMemo(
    () => ({ userName, login, logout, isLoggedIn: !!userName }),
    [userName],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
