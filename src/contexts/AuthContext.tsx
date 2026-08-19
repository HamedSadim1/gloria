import { useState, type ReactNode } from "react";
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
    localStorage.setItem("name", name);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem("name");
    setUserName(null);
  };

  return (
    <AuthContext.Provider
      value={{ userName, login, logout, isLoggedIn: !!userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
