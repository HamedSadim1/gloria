import React, { FC } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ProtectedRoute;
