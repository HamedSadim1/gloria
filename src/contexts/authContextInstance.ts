import { createContext } from "react";

export interface AuthContextType {
  userName: string | null;
  login: (name: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
