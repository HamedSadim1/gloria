import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  userName: string | null;
  login: (name: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem("name"),
  );

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
