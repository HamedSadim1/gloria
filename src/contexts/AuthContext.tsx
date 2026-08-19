import { useState, useMemo, type ReactNode } from "react";
import { AuthContext } from "@/contexts/authContextInstance";
import { safeGetItem, safeSetItem, safeRemoveItem } from "@/utils/storage";

const STORAGE_KEY = "name";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(() =>
    safeGetItem(STORAGE_KEY),
  );

  const login = (name: string) => {
    safeSetItem(STORAGE_KEY, name);
    setUserName(name);
  };

  const logout = () => {
    safeRemoveItem(STORAGE_KEY);
    setUserName(null);
  };

  const value = useMemo(
    () => ({ userName, login, logout, isLoggedIn: !!userName }),
    [userName],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
};
