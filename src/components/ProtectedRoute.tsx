import type { FC, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ProtectedRoute;
